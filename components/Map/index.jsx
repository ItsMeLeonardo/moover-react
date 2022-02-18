import { useRef, useCallback } from "react";
import { Col } from "@nextui-org/react";

import InputSearchWithResults from "../InputSearchWithResults";
import { useFindPlace } from "../../hooks/useFindPlace";
import { useMap } from "../../hooks/useMap";
import { debounce } from "../../utils/debounce";

const [lng, lat] = [-76.8333, -12];

export default function Map({ height, searcher } = {}) {
  const { data, isLoading, findLocation } = useFindPlace();

  const mapContainer = useRef(null);
  const { flyToPlace } = useMap({
    mapContainerRef: isLoading ? null : mapContainer,
    lng,
    lat,
  });

  const onChange = useCallback(
    debounce((value) => {
      findLocation({ keyword: value });
    }, 500),
    []
  );

  return (
    <>
      <Col css={{ position: "relative" }}>
        {searcher && (
          <div className="sidebar">
            <InputSearchWithResults
              onChange={onChange}
              results={data}
              loading={isLoading}
              onClick={flyToPlace}
            />
          </div>
        )}
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
