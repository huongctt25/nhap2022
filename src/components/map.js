import * as React from "react";
import { Map as MapItem, Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { BsArrowDownCircleFill } from "react-icons/bs";
import { useState, useEffect, useCallback } from "react";
const MapCustom = (props) => {
  const defaultGeo = new Map([
    ["hanoi", [105.804817, 21.028511]],
    ["danang", [108.20623, 16.047079]],
    ["hcm", [106.660172, 10.762622]],
  ]);
  const [longitude, setLongitude] = useState(defaultGeo.get(props.city)[0]);
  const [latitude, setLatitude] = useState(defaultGeo.get(props.city)[1]);

  const initialViewState = {
    longitude: longitude,
    latitude: latitude,
    zoom: 15,
  };
  const [viewport, setViewPort] = useState(initialViewState);
  useEffect(() => {
    setLongitude(defaultGeo.get(props.city)[0]);
    setLatitude(defaultGeo.get(props.city)[1]);
    setViewPort({
      ...initialViewState,
      longitude: defaultGeo.get(props.city)[0],
      latitude: defaultGeo.get(props.city)[1],
    });
  }, [props.city]);

  const getPosition = (e) => {
    setLongitude(e.lngLat.lng);
    setLatitude(e.lngLat.lat);
  };
  return (
    <MapItem
      {...viewport}
      initialViewState={initialViewState}
      style={{ width: 600, height: 600 }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken={process.env.REACT_APP_MAP_TOKEN}
      onClick={getPosition}
      onViewportChange={(nextViewport) => setViewPort(nextViewport)}
      onMove={(evt) => setViewPort(evt.viewState)}
    >
      <Marker
        longitude={longitude}
        latitude={latitude}
        anchor="bottom"
        style={{ width: "20px" }}
      >
        <BsArrowDownCircleFill
          style={{ color: "rgb(245, 151, 140)" }}
          size={25}
        />
      </Marker>
    </MapItem>
  );
};
export default MapCustom;
