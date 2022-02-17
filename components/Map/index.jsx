import { useRef, useState, useEffect } from "react";
import { Col } from "@nextui-org/react";

import InputSearchWithResults from "../InputSearchWithResults";
import { useMap } from "../../hooks/useMap";

import mapboxgl from "!mapbox-gl";
mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

export default function Map({ height }) {
  const { data, isLoading, findLocation } = useMap();
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-76.8);
  const [lat, setLat] = useState(-11.9);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });
  }, []);

  const onChange = (value) => {
    findLocation({ keyword: value });
  };

  return (
    <>
      <Col css={{ position: "relative" }}>
        <div className="sidebar">
          <InputSearchWithResults
            onChange={onChange}
            results={data}
            loading={isLoading}
          />
        </div>
        <div ref={mapContainer} className="map-container" />
      </Col>
      <style jsx>{`
        .map-container {
          position: relative;
          height: ${height};
          width: 100%;
        }

        .sidebar {
          z-index: 1;
          position: absolute;
          top: 0.75rem;
          left: 0.75rem;
          height: min-content;
        }
      `}</style>
    </>
  );
}
