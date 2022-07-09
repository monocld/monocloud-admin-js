/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosError } from 'axios';
import { MonoCloudException } from './exceptions/monocloud-exception';

function throwException(
  message: string,
  status: number,
  response: any,
  headers: { [key: string]: any },
  result?: any
): any {
  MonoCloudException.throwErr(message, status, response, headers, result);
}

function isAxiosError(obj: any | undefined): obj is AxiosError {
  return obj && obj.isAxiosError === true;
}

export { throwException, isAxiosError };
