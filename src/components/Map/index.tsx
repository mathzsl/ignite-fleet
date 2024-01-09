import { useRef } from "react";

import MapView, {
  LatLng,
  MapViewProps,
  PROVIDER_GOOGLE,
  Marker,
  Polyline,
} from "react-native-maps";

import { IconBox } from "../IconBox";

import { Car, FlagCheckered } from "phosphor-react-native";
import { useTheme } from "styled-components/native";

type MapProps = MapViewProps & {
  coordinates: LatLng[];
};

export function Map({ coordinates, ...rest }: MapProps) {
  const { COLORS } = useTheme();

  const mapRef = useRef<MapView>(null);
  const lastCordinate = coordinates[coordinates.length - 1];

  async function onMapLoaded() {
    if (coordinates.length > 1) {
      mapRef.current?.fitToSuppliedMarkers(["departure", "arrival"], {
        edgePadding: { top: 50, left: 50, bottom: 50, right: 50 },
      });
    }
  }

  return (
    <MapView
      ref={mapRef}
      provider={PROVIDER_GOOGLE}
      style={{ width: "100%", height: 230 }}
      region={{
        latitude: lastCordinate.latitude,
        longitude: lastCordinate.longitude,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      }}
      onMapLoaded={onMapLoaded}
      {...rest}
    >
      <Marker identifier="departure" coordinate={coordinates[0]}>
        <IconBox variant="SM" icon={Car} />
      </Marker>

      {coordinates.length > 1 && (
        <>
          <Marker identifier="arrival" coordinate={lastCordinate}>
            <IconBox variant="SM" icon={FlagCheckered} />
          </Marker>

          <Polyline
            coordinates={[...coordinates]}
            strokeColor={COLORS.GRAY_700}
            strokeWidth={6}
          />
        </>
      )}
    </MapView>
  );
}
