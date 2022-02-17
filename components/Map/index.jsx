import { useRef, useState, useEffect } from "react";
import { Col } from "@nextui-org/react";
import mapboxgl from "!mapbox-gl";
mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

export default function Map({ height }) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
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

  useEffect(() => {
    if (!map.current) return;
    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  }, [map]);

  return (
    <>
      <Col css={{ position: "relative" }}>
        <div className="sidebar">
          Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
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
          background-color: rgba(35, 55, 75, 0.9);
          color: #fff;
          padding: 6px 12px;
          font-family: monospace;
          z-index: 1;
          position: absolute;
          top: 0;
          left: 0;
          margin: 12px;
          border-radius: 4px;
        }
      `}</style>
    </>
  );
}
