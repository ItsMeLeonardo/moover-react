import { useRef, useEffect, useCallback } from "react";

import mapboxgl from "!mapbox-gl";
mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

const polylineId = "route";

export const useMap = ({ mapContainerRef, lat, lng, zoom = 15 } = {}) => {
  const map = useRef(null);

  useEffect(() => {
    // initialize map only once
    if (!mapContainerRef) return;
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom,
    });

    () => map.current.remove();
  }, [mapContainerRef]);

  // to translate map to new coordinates
  const flyToPlace = useCallback((center, zoom = 15) => {
    map.current.flyTo({
      center,
      essential: true,
      zoom,
    });
  }, []);

  const removePolyline = useCallback(() => {
    if (!map.current.getLayer(polylineId)) return;
    map.current.removeLayer(polylineId);
    map.current.removeSource(polylineId);
  }, []);

  const setPolyline = useCallback((coords) => {
    map.current.on("load", () => {
      // remove any polyline that might already be on the map
      removePolyline();

      const start = coords[0];

      // set start coords
      const bounds = new mapboxgl.LngLatBounds(
        [start[0], start[1]],
        [start[0], start[1]]
      );

      // add each coords to bounds
      coords.forEach((coord) => bounds.extend(coord));

      map.current.fitBounds(bounds, {
        padding: 50,
      });

      //Define the data for the polyline
      const sourceData = {
        type: "geojson",

        data: {
          type: "Feature",
          properties: {},
          geometry: {
            type: "LineString",
            coordinates: coords,
          },
        },
      };

      map.current.addSource(polylineId, sourceData);

      //Define the style for the polyline
      map.current.addLayer({
        id: polylineId,
        type: "line",
        source: polylineId,
        layout: {
          "line-cap": "round",
          "line-join": "round",
        },
        paint: {
          "line-color": "#333333",
          "line-width": 4,
        },
      });
    });
  }, []);

  return { map, flyToPlace, setPolyline, removePolyline };
};
