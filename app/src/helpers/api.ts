import axios, {AxiosResponse, InternalAxiosRequestConfig} from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import handleError, {ErrorResponse} from './handleError'; // Adjust the import path as necessary
import {ENV} from '../constants/Env.constant';

const getInstance = async (timeout: boolean) => {
  const instance = axios.create({
    baseURL: ENV.API_URL,
    timeout: timeout ? 10000 : 0,
  });

  instance.interceptors.request.use(
    async (config: InternalAxiosRequestConfig): Promise<InternalAxiosRequestConfig> => {
      if (config.method === 'delete' || config.data === undefined) {
        config.data = true;
      }
      if (config.method === 'get') {
        config.data = undefined;
      }
      const token = await AsyncStorage.getItem('@token');
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
      return config;
    },
    error => Promise.reject(error),
  );

  return instance;
};

const httpRequest = async (
  method: 'get' | 'post' | 'put' | 'delete',
  path: string,
  data?: unknown,
  headers: Record<string, string> = {},
  timeout = true,
): Promise<AxiosResponse> => {
  try {
    const instance = await getInstance(timeout);
    const response = await instance.request({
      method,
      url: path,
      data,
      headers,
    });
    console.log('🚀 ~ file: api.ts ~ httpRequest ~ response', method, path, data, response);
    return response;
  } catch (error) {
    console.log('🚀 ~ file: api.ts ~ httpRequest ~ error', method, path, data, error);
    throw handleError(error as ErrorResponse);
  }
};

const httpRequestNoError = async (
  method: 'get' | 'post' | 'put' | 'delete',
  path: string,
  data?: unknown,
  headers: Record<string, string> = {},
  timeout = true,
): Promise<AxiosResponse | null> => {
  try {
    return await httpRequest(method, path, data, headers, timeout);
  } catch (error) {
    console.log('🚀 ~ file: api.ts ~ httpRequestNoError ~ error', method, path, data, error);
    return null;
  }
};

export {httpRequest, httpRequestNoError};
