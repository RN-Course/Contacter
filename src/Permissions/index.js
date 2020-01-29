import {PermissionsAndroid} from 'react-native';
export async function readContactPermission() {
  let request = await PermissionsAndroid.request(
    'android.permission.READ_CONTACTS',
  );
  return request;
}

export async function writeContactPermission() {
  let request = await PermissionsAndroid.request(
    'android.permission.WRITE_CONTACTS',
  );
  return request;
}

export async function readStoragePermission() {
  let request = await PermissionsAndroid.request(
    'android.permission.READ_EXTERNAL_STORAGE',
  );
  return request;
}

export async function writeStoragePermission() {
  let request = await PermissionsAndroid.request(
    'android.permission.WRITE_EXTERNAL_STORAGE',
  );
  return request;
}
