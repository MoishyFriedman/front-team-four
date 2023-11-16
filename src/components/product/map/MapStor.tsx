import { useContext, useEffect, useRef } from "react";
import "./map.css";
import "ol/ol.css";
import { Map } from "ol";
import map from "./mapConf";
import { addIcon } from "./mapConf";
import { ProductContext } from "../../../context/ProductContext";

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
  const productContext = useContext(ProductContext);
  if (!productContext?.product) {
    return null;
  }

  useEffect(() => {
    if (mapRef.current) {
      map.setTarget(mapRef.current);
      map.updateSize();
    }
  }, [map]);
  return (
    <>
      {productContext?.product.coordinates.map((coordinate) => {
        addIcon([Number(coordinate)]);
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
