import { reverseGeocodeAsync, LocationObjectCoords } from "expo-location";

export async function getAddressLocation({
  latitude,
  longitude,
}: LocationObjectCoords) {
  try {
    const addressLocation = await reverseGeocodeAsync({ latitude, longitude });

    return addressLocation[0]?.street;
  } catch (error) {
    console.log(error);
  }
}
