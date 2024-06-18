// import AsyncStorage from '@react-native-async-storage/async-storage';
// import {KEY_USER_TOKEN} from '../constants/AppDefines';

export const fetchGET = async url => {
  console.log('URL ===>' + url);
  // any async code you want!
  // let bearer = await AsyncStorage.getItem(KEY_USER_TOKEN);
  let bearer = '';
  let token = 'Bearer ' + bearer;
  console.log('Bearer ', bearer);
  let response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: token,
    },
  });
  if (!response.ok) {
    if (response.status === 500) {
      throw new Error('Internal Server Error');
    }

    if (response.status === 401) {
      throw new Error('Unauthorized Access');
    }
  }

  const resData = await response.json();

  console.log('RESPONSE DATA ===> ' + JSON.stringify(resData));
  if (resData.data.error_code != undefined) {
    throw new Error(resData.data.error_message);
  }

  return resData;
};

export const fetchPOST = async (url, postData) => {
  console.log('URL ===>' + url);
  console.log('POST DATA ===> ' + JSON.stringify(postData));

  // any async code you want!
  // let bearer = await AsyncStorage.getItem(KEY_USER_TOKEN);
  let bearer = '';
  let token = 'Bearer ' + bearer;
  let response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: token,
    },
    body: JSON.stringify(postData),
  });
  console.log('token', token);
  if (!response.ok) {
    if (response.status === 500) {
      throw new Error('Internal Server Error');
    }

    if (response.status === 401) {
      throw new Error('Unauthorized Access');
    }
  }

  const resData = await response.json();
  console.log('RESPONSE DATA ===> ' + JSON.stringify(resData));

  if (resData.data.error_code != undefined) {
    throw new Error(resData.data.error_message);
  }
  return resData;
};

