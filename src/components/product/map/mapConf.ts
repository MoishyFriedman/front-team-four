import { Feature, Map } from "ol";
import MousePosition from "ol/control/MousePosition.js";
import OSM from "ol/source/OSM";
import View from "ol/View";
import { defaults } from "ol/control/defaults";
import { defaults as interactionDefaults } from "ol/interaction/defaults";
import { createStringXY } from "ol/coordinate";
import { Icon, Style } from "ol/style.js";
import { Vector as VectorSource } from "ol/source.js";
import { Tile as TileLayer, Vector as VectorLayer } from "ol/layer.js";
import { Point } from "ol/geom";
import { ScaleLine } from "ol/control.js";
const osmBaseLayer = new TileLayer({
  visible: true,
  source: new OSM(),
});

const vectorSource = new VectorSource({
  features: [],
});

export function addIcon(coordinate: number[]) {
  const iconFeature = new Feature({
    geometry: new Point(coordinate),
    name: "location",
  });
  const iconStyle = new Style({
    image: new Icon({
      width: 50,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTGzu0jMlps6EumN_Ae0Q70_QQQHNQKagThg&usqp=CAU",
    }),
  });

  iconFeature.setStyle(iconStyle);
  vectorSource.addFeature(iconFeature);
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
