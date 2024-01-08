import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_ASYNC_KEY = "@ignitefleet:last_sync";

export async function saveLastSyncTimeStamp() {
  const timeStamp = new Date().getTime();

  await AsyncStorage.setItem(STORAGE_ASYNC_KEY, timeStamp.toString());

  return timeStamp;
}

export async function getLastSyncTimeStamp() {
  const stored = await AsyncStorage.getItem(STORAGE_ASYNC_KEY);

  return Number(stored);
}
