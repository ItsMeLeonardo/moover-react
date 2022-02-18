import { useRef, useEffect, useCallback } from "react";

import mapboxgl from "!mapbox-gl";
mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

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

  const flyToPlace = useCallback((center, zoom = 15) => {
    map.current.flyTo({
      center,
      essential: true,
      zoom,
    });
  }, []);

  return { map, flyToPlace };
};
