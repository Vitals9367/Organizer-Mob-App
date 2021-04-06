import * as SecureStore from 'expo-secure-store';

export async function saveToStore(key, value) {
  await SecureStore.setItemAsync(key,value);
}

export async function deleteFromStore(key) {
  await SecureStore.deleteItemAsync(key);

}

export async function getValueFromStore(key) {
  return await SecureStore.getItemAsync(key);
}

export default {saveToStore, deleteFromStore, getValueFromStore}