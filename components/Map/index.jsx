import { useRef, useCallback, useEffect } from "react";
import { Col } from "@nextui-org/react";

import InputSearchWithResults from "../InputSearchWithResults";
import { useFindPlace } from "../../hooks/useFindPlace";
import { useMap } from "../../hooks/useMap";
import { debounce } from "../../utils/debounce";

const [lng, lat] = [-76.8333, -12];

export default function Map({
  height,
  searcher,
  onResultClick = null,
  coordsToPolyline,
} = {}) {
  const { data, isLoading, findLocation } = useFindPlace();

  const mapContainer = useRef(null);
  const { flyToPlace, setPolyline, removePolyline } = useMap({
    mapContainerRef: isLoading ? null : mapContainer,
    lng,
    lat,
  });

  useEffect(() => {
    if (!coordsToPolyline) return;
    setPolyline(coordsToPolyline);

    return () => removePolyline;
  }, [coordsToPolyline]);

  const onChange = useCallback(
    debounce((value) => {
      findLocation({ keyword: value });
    }, 500),
    []
  );

  const onClick = useCallback(
    (result) => {
      flyToPlace(result.center);

      if (!onResultClick) return;
      onResultClick(result);
    },
    [onResultClick]
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
              onClick={onClick}
              propToDisplayResult="place_name"
              clearResultsAfterClick
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
          border-radius: 1rem;
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
