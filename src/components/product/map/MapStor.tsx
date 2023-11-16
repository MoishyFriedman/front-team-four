import { useEffect, useRef } from "react";
import "./map.css";
import "ol/ol.css";
import { Map } from "ol";
import map from "./mapConf";
import { addIcon } from "./mapConf";
import { add } from "ol/coordinate";

export function useMap() {
  const mapRef = useRef<Map>();
  if (!mapRef.current) {
    mapRef.current = map;
  }
  return mapRef.current;
}

export default function MapComponent() {
  const mapRef = useRef<HTMLDivElement>(null);
  const map = useMap();

  useEffect(() => {
    if (mapRef.current) {
      map.setTarget(mapRef.current);
      map.updateSize();
    }
  }, [map]);
  return (
    <>
      {array.map((coordinate) => {
        addIcon(coordinate);
      })}
      <div className="map">
        <h1>Map</h1>
        <div className="map-container">
          <div id="map" ref={mapRef}></div>
        </div>
      </div>
    </>
  );
}
