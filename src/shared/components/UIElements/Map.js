import React, { useEffect, useRef } from "react";

/* OpenLayers imports */
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import { fromLonLat } from "ol/proj";

/* Marker imports */
import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import VectorSource from "ol/source/Vector";
import VectorLayer from "ol/layer/Vector";
import { Style, Icon } from "ol/style";

/* OpenLayers CSS */
import "ol/ol.css";

const MapComponent = ({ center, zoom, className, style }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current) return;

    /* 🔹 Marker feature */
    const marker = new Feature({
      geometry: new Point(fromLonLat([center.lng, center.lat]))
    });

    marker.setStyle(
      new Style({
        image: new Icon({
          anchor: [0.5, 1],
          src: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
          scale: 0.05
        })
      })
    );

    /* 🔹 Marker layer */
    const markerLayer = new VectorLayer({
      source: new VectorSource({
        features: [marker]
      })
    });

    const map = new Map({
      target: mapRef.current,
      layers: [
        new TileLayer({
          source: new OSM()
        }),
        markerLayer // ✅ Marker added
      ],
      view: new View({
        center: fromLonLat([center.lng, center.lat]),
        zoom: 19.5
      })
    });

    return () => {
      map.setTarget(null);
    };
  }, []);

  return (
    <div
      ref={mapRef}
      className={`map ${className}`}
      style={{ width: "100%", height: "100%", ...style }}
    />
  );
};

export default MapComponent;
