import AsyncStorage from "@react-native-async-storage/async-storage";
import { ERROR } from "../constants/CommonConstants";
import NativeUtils from "../utils/NativeUtils";

// keys
export const ACCESS_TOKEN = "ACCESS_TOKEN"

export const AsyncKeys = {

}


export async function storeJSONData(key, value) {
  NativeUtils.print('storeJSONData' , value)
    try {
        await AsyncStorage.setItem(key, JSON.stringify(value))
      } catch (e) {
        await AsyncStorage.setItem(key, ERROR)
      }
}

export async function storeStringData(key, value) {
  NativeUtils.print('storeStringData' , value)
  try {
      await AsyncStorage.setItem(key, value)
    } catch (e) {
      await AsyncStorage.setItem(key, ERROR)
    }
}


export async function getData(key) {
    var value
    try {
        value = await AsyncStorage.getItem(key)
        NativeUtils.print('getData' , value)
        if(value == null) {
            value = ERROR
        }
      } catch(e) {
        value = ERROR
      }

      return value
}