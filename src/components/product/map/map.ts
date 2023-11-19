import { Feature, Map } from "ol";
import MousePosition from "ol/control/MousePosition.js";
import OSM from "ol/source/OSM";
import View from "ol/View";
import { defaults } from "ol/control/defaults";
import { defaults as interactionDefaults } from "ol/interaction/defaults";
import { createStringXY } from "ol/coordinate";
import { Fill, Icon, Stroke, Style } from "ol/style.js";
import { Vector as VectorSource } from "ol/source.js";
import { Tile as TileLayer, Vector as VectorLayer } from "ol/layer.js";
import { Point, Polygon } from "ol/geom";
import { ScaleLine } from "ol/control.js";
const osmBaseLayer = new TileLayer({
  visible: true,
  source: new OSM(),
});

const vectorSource = new VectorSource({
  features: [],
});

export function addIcon(name: string, coordinate: number[], src: string, height: number, width: number, direction: number) {
  const iconFeature = new Feature({
    geometry: new Point(coordinate),
    name,
  });
  const iconStyle = new Style({
    image: new Icon({
      width: 50,
      src,
    }),
  });

  const points = [
    [coordinate[0], coordinate[1]],
    [coordinate[0] + width, coordinate[1]],
    [coordinate[0] + width / 2, coordinate[1] + height],
    [coordinate[0], coordinate[1]],
  ];
  const polygonFeature = new Feature({
    geometry: new Polygon([points]),
  });
  const geometry = polygonFeature.getGeometry();
  if (geometry) {
    geometry.rotate((Math.PI / 180) * direction, [coordinate[0], coordinate[1]]);
  }
  const polygonStyle = new Style({
    stroke: new Stroke({
      color: "blue",
      width: 3,
    }),
    fill: new Fill({
      color: "rgba(0, 0, 255, 0.1)",
    }),
  });

  iconFeature.setStyle(iconStyle);
  polygonFeature.setStyle(polygonStyle);
  vectorSource.addFeature(iconFeature);
  vectorSource.addFeature(polygonFeature);
}

const vectorLayer = new VectorLayer({
  source: vectorSource,
});

const mousePositionControl = new MousePosition({
  coordinateFormat: createStringXY(4),
  projection: "EPSG:4326",
  className: "custom-mouse-position",
});
const scale = new ScaleLine({
  minWidth: 50,
});

const map = new Map({
  target: "map",
  layers: [osmBaseLayer, vectorLayer],
  view: new View({
    center: [3921278.779851529, 3734736.2666614093],
    zoom: 8,
  }),
  controls: defaults().extend([mousePositionControl, scale]),
  interactions: interactionDefaults({}),
});

export default map;
