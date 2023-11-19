import { IUserResponseDTO } from '@dtos/user.dto';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { USER_STORAGE } from './config';

export async function setStorageUser(user: IUserResponseDTO) {
  await AsyncStorage.setItem(USER_STORAGE, JSON.stringify(user));
}

export async function getStorageUser(): Promise<IUserResponseDTO> {
  const storage = await AsyncStorage.getItem(USER_STORAGE);
  const user: IUserResponseDTO = storage ? JSON.parse(storage) : {};

  return user;
}

export async function removeStorageUser(): Promise<void> {
  await AsyncStorage.removeItem(USER_STORAGE);
}
