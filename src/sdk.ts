/* eslint-disable @typescript-eslint/no-redeclare */
/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable no-prototype-builtins */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-restricted-syntax */
/* eslint-disable class-methods-use-this */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable max-classes-per-file */
import axios from 'axios';
import type {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  CancelToken,
} from 'axios';
import axiosRetry from 'axios-retry';
import { isAxiosError, throwException } from './utils';
import { MonoCloudClientBase } from './models/monocloud-client-base';
import { MonoCloudConfig } from './models/monocloud-config';
import { MonoCloudResponse } from './models/monocloud-response';

export class ClientsClient extends MonoCloudClientBase {
  private instance: AxiosInstance;

  private baseUrl: string;

  protected jsonParseReviver: ((key: string, value: any) => any) | undefined =
    undefined;

  constructor(
    configuration: MonoCloudConfig,
    baseUrl?: string,
    instance?: AxiosInstance
  ) {
    super(configuration);

    const headers: Record<string, string> = {
      'X-TENANT-ID': configuration.tenantId,
      'Content-Type': 'application/json',
    };

    if (configuration.apiKey) {
      headers['X-API-KEY'] = configuration.apiKey;
    }

    if (configuration.token) {
      headers.Authorization = `Bearer ${configuration.token}`;
    }

    const config: AxiosRequestConfig = {
      headers,
      timeout: configuration.config?.timeout ?? 10000,
    };

    this.instance = instance || axios.create(config);

    if (configuration.config?.retry === true) {
      axiosRetry(this.instance, { retries: 3 });
    }

    this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : '';
  }

  /**
   * Find a Client by Id
   * @param {string} id Client Id
   * @return {Promise<MonoCloudResponse<Client>>} Success
   */
  findClientById(
    id: string,
    cancelToken?: CancelToken | undefined
  ): Promise<MonoCloudResponse<Client>> {
    let url_ = `${this.baseUrl}/v1/clients/{id}`;
    if (id === undefined || id === null || id.toString().trim() === '')
      throw new Error("The parameter 'id' must be defined.");
    url_ = url_.replace('{id}', encodeURIComponent(`${id}`));
    url_ = url_.replace(/[?&]$/, '');

    const options_: AxiosRequestConfig = {
      method: 'GET',
      url: url_,
      headers: {
        Accept: 'text/plain',
      },
      cancelToken,
    };

    return this.instance
      .request(options_)
      .catch((_error: any) => {
        if (isAxiosError(_error) && _error.response) {
          return _error.response;
        }
        throw _error;
      })
      .then((_response: AxiosResponse) => {
        return this.processFindClientById(_response);
      });
  }

  protected processFindClientById(
    response: AxiosResponse
  ): Promise<MonoCloudResponse<Client>> {
    const { status } = response;
    const _headers: any = {};
    if (response.headers && typeof response.headers === 'object') {
      for (const k in response.headers) {
        if (response.headers.hasOwnProperty(k)) {
          _headers[k] = response.headers[k];
        }
      }
    }
    if (status === 200) {
      const _responseText = response.data;
      let result200: any = null;
      const resultData200 = _responseText;
      result200 = resultData200;
      return Promise.resolve<MonoCloudResponse<Client>>(
        new MonoCloudResponse<Client>(status, _headers, result200)
      );
    }
    if (status === 404) {
      const _responseText = response.data;
      let result404: any = null;
      const resultData404 = _responseText;
      result404 = resultData404;
      return throwException(
        'Not Found',
        status,
        _responseText,
        _headers,
        result404
      );
    }
    if (status !== 200 && status !== 204) {
      const _responseText = response.data;
      return throwException(
        'An unexpected server error occurred.',
        status,
        _responseText,
        _headers
      );
    }
    return Promise.resolve<MonoCloudResponse<Client>>(
      new MonoCloudResponse(status, _headers, null as any)
    );
  }

  /**
   * Update a Client
   * @param {string} id Client Id
   * @param {PatchClientRequest} body Request Body
   * @return {Promise<MonoCloudResponse<Client>>} Success
   */
  patchClient(
    id: string,
    body: PatchClientRequest,
    cancelToken?: CancelToken | undefined
  ): Promise<MonoCloudResponse<Client>> {
    let url_ = `${this.baseUrl}/v1/clients/{id}`;
    if (id === undefined || id === null || id.toString().trim() === '')
      throw new Error("The parameter 'id' must be defined.");
    url_ = url_.replace('{id}', encodeURIComponent(`${id}`));
    url_ = url_.replace(/[?&]$/, '');

    const content_ = JSON.stringify(body);

    const options_: AxiosRequestConfig = {
      data: content_,
      method: 'PATCH',
      url: url_,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'text/plain',
      },
      cancelToken,
    };

    return this.instance
      .request(options_)
      .catch((_error: any) => {
        if (isAxiosError(_error) && _error.response) {
          return _error.response;
        }
        throw _error;
      })
      .then((_response: AxiosResponse) => {
        return this.processPatchClient(_response);
      });
  }

  protected processPatchClient(
    response: AxiosResponse
  ): Promise<MonoCloudResponse<Client>> {
    const { status } = response;
    const _headers: any = {};
    if (response.headers && typeof response.headers === 'object') {
      for (const k in response.headers) {
        if (response.headers.hasOwnProperty(k)) {
          _headers[k] = response.headers[k];
        }
      }
    }
    if (status === 200) {
      const _responseText = response.data;
      let result200: any = null;
      const resultData200 = _responseText;
      result200 = resultData200;
      return Promise.resolve<MonoCloudResponse<Client>>(
        new MonoCloudResponse<Client>(status, _headers, result200)
      );
    }
    if (status === 400) {
      const _responseText = response.data;
      let result400: any = null;
      const resultData400 = _responseText;
      result400 = resultData400;
      return throwException(
        'Bad Request',
        status,
        _responseText,
        _headers,
        result400
      );
    }
    if (status === 422) {
      const _responseText = response.data;
      let result422: any = null;
      const resultData422 = _responseText;
      result422 = resultData422;
      return throwException(
        'Client Error',
        status,
        _responseText,
        _headers,
        result422
      );
    }
    if (status !== 200 && status !== 204) {
      const _responseText = response.data;
      return throwException(
        'An unexpected server error occurred.',
        status,
        _responseText,
        _headers
      );
    }
    return Promise.resolve<MonoCloudResponse<Client>>(
      new MonoCloudResponse(status, _headers, null as any)
    );
  }

  /**
   * Delete a Client
   * @param {string} id Client Id
   * @return {Promise<MonoCloudResponse<void>>} No Content
   */
  deleteClient(
    id: string,
    cancelToken?: CancelToken | undefined
  ): Promise<MonoCloudResponse<void>> {
    let url_ = `${this.baseUrl}/v1/clients/{id}`;
    if (id === undefined || id === null || id.toString().trim() === '')
      throw new Error("The parameter 'id' must be defined.");
    url_ = url_.replace('{id}', encodeURIComponent(`${id}`));
    url_ = url_.replace(/[?&]$/, '');

    const options_: AxiosRequestConfig = {
      method: 'DELETE',
      url: url_,
      headers: {},
      cancelToken,
    };

    return this.instance
      .request(options_)
      .catch((_error: any) => {
        if (isAxiosError(_error) && _error.response) {
          return _error.response;
        }
        throw _error;
      })
      .then((_response: AxiosResponse) => {
        return this.processDeleteClient(_response);
      });
  }

  protected processDeleteClient(
    response: AxiosResponse
  ): Promise<MonoCloudResponse<void>> {
    const { status } = response;
    const _headers: any = {};
    if (response.headers && typeof response.headers === 'object') {
      for (const k in response.headers) {
        if (response.headers.hasOwnProperty(k)) {
          _headers[k] = response.headers[k];
        }
      }
    }
    if (status === 204) {
      return Promise.resolve<MonoCloudResponse<void>>(
        new MonoCloudResponse<void>(status, _headers, null as any)
      );
    }
    if (status !== 200 && status !== 204) {
      const _responseText = response.data;
      return throwException(
        'An unexpected server error occurred.',
        status,
        _responseText,
        _headers
      );
    }
    return Promise.resolve<MonoCloudResponse<void>>(
      new MonoCloudResponse(status, _headers, null as any)
    );
  }

  /**
   * Find a Client Secret by Id
   * @param {string} clientId Client Id
   * @param {string} secretId Secret Id
   * @return {Promise<MonoCloudResponse<SecretValue>>} Success
   */
  findClientSecretById(
    clientId: string,
    secretId: string,
    cancelToken?: CancelToken | undefined
  ): Promise<MonoCloudResponse<SecretValue>> {
    let url_ = `${this.baseUrl}/v1/clients/{clientId}/secrets/{secretId}`;
    if (
      clientId === undefined ||
      clientId === null ||
      clientId.toString().trim() === ''
    )
      throw new Error("The parameter 'clientId' must be defined.");
    url_ = url_.replace('{clientId}', encodeURIComponent(`${clientId}`));
    if (
      secretId === undefined ||
      secretId === null ||
      secretId.toString().trim() === ''
    )
      throw new Error("The parameter 'secretId' must be defined.");
    url_ = url_.replace('{secretId}', encodeURIComponent(`${secretId}`));
    url_ = url_.replace(/[?&]$/, '');

    const options_: AxiosRequestConfig = {
      method: 'GET',
      url: url_,
      headers: {
        Accept: 'text/plain',
      },
      cancelToken,
    };

    return this.instance
      .request(options_)
      .catch((_error: any) => {
        if (isAxiosError(_error) && _error.response) {
          return _error.response;
        }
        throw _error;
      })
      .then((_response: AxiosResponse) => {
        return this.processFindClientSecretById(_response);
      });
  }

  protected processFindClientSecretById(
    response: AxiosResponse
  ): Promise<MonoCloudResponse<SecretValue>> {
    const { status } = response;
    const _headers: any = {};
    if (response.headers && typeof response.headers === 'object') {
      for (const k in response.headers) {
        if (response.headers.hasOwnProperty(k)) {
          _headers[k] = response.headers[k];
        }
      }
    }
    if (status === 200) {
      const _responseText = response.data;
      let result200: any = null;
      const resultData200 = _responseText;
      result200 = resultData200;
      return Promise.resolve<MonoCloudResponse<SecretValue>>(
        new MonoCloudResponse<SecretValue>(status, _headers, result200)
      );
    }
    if (status === 404) {
      const _responseText = response.data;
      let result404: any = null;
      const resultData404 = _responseText;
      result404 = resultData404;
      return throwException(
        'Not Found',
        status,
        _responseText,
        _headers,
        result404
      );
    }
    if (status !== 200 && status !== 204) {
      const _responseText = response.data;
      return throwException(
        'An unexpected server error occurred.',
        status,
        _responseText,
        _headers
      );
    }
    return Promise.resolve<MonoCloudResponse<SecretValue>>(
      new MonoCloudResponse(status, _headers, null as any)
    );
  }

  /**
   * Delete a Client Secret
   * @param {string} clientId Client Id
   * @param {string} secretId Secret Id
   * @return {Promise<MonoCloudResponse<void>>} No Content
   */
  deleteClientSecret(
    clientId: string,
    secretId: string,
    cancelToken?: CancelToken | undefined
  ): Promise<MonoCloudResponse<void>> {
    let url_ = `${this.baseUrl}/v1/clients/{clientId}/secrets/{secretId}`;
    if (
      clientId === undefined ||
      clientId === null ||
      clientId.toString().trim() === ''
    )
      throw new Error("The parameter 'clientId' must be defined.");
    url_ = url_.replace('{clientId}', encodeURIComponent(`${clientId}`));
    if (
      secretId === undefined ||
      secretId === null ||
      secretId.toString().trim() === ''
    )
      throw new Error("The parameter 'secretId' must be defined.");
    url_ = url_.replace('{secretId}', encodeURIComponent(`${secretId}`));
    url_ = url_.replace(/[?&]$/, '');

    const options_: AxiosRequestConfig = {
      method: 'DELETE',
      url: url_,
      headers: {},
      cancelToken,
    };

    return this.instance
      .request(options_)
      .catch((_error: any) => {
        if (isAxiosError(_error) && _error.response) {
          return _error.response;
        }
        throw _error;
      })
      .then((_response: AxiosResponse) => {
        return this.processDeleteClientSecret(_response);
      });
  }

  protected processDeleteClientSecret(
    response: AxiosResponse
  ): Promise<MonoCloudResponse<void>> {
    const { status } = response;
    const _headers: any = {};
    if (response.headers && typeof response.headers === 'object') {
      for (const k in response.headers) {
        if (response.headers.hasOwnProperty(k)) {
          _headers[k] = response.headers[k];
        }
      }
    }
    if (status === 204) {
      return Promise.resolve<MonoCloudResponse<void>>(
        new MonoCloudResponse<void>(status, _headers, null as any)
      );
    }
    if (status !== 200 && status !== 204) {
      const _responseText = response.data;
      return throwException(
        'An unexpected server error occurred.',
        status,
        _responseText,
        _headers
      );
    }
    return Promise.resolve<MonoCloudResponse<void>>(
      new MonoCloudResponse(status, _headers, null as any)
    );
  }

  /**
   * Get all the Clients
   * @param {number} page (optional)
   * @param {number} size (optional)
   * @return {Promise<MonoCloudResponse<Client[]>>} Success
   */
  getAllClients(
    page?: number | undefined,
    size?: number | undefined,
    cancelToken?: CancelToken | undefined
  ): Promise<MonoCloudResponse<Client[]>> {
    let url_ = `${this.baseUrl}/v1/clients?`;
    if (page === null) throw new Error("The parameter 'page' cannot be null.");
    else if (page !== undefined)
      url_ += `page=${encodeURIComponent(`${page}`)}&`;
    if (size === null) throw new Error("The parameter 'size' cannot be null.");
    else if (size !== undefined)
      url_ += `size=${encodeURIComponent(`${size}`)}&`;
    url_ = url_.replace(/[?&]$/, '');

    const options_: AxiosRequestConfig = {
      method: 'GET',
      url: url_,
      headers: {
        Accept: 'text/plain',
      },
      cancelToken,
    };

    return this.instance
      .request(options_)
      .catch((_error: any) => {
        if (isAxiosError(_error) && _error.response) {
          return _error.response;
        }
        throw _error;
      })
      .then((_response: AxiosResponse) => {
        return this.processGetAllClients(_response);
      });
  }

  protected processGetAllClients(
    response: AxiosResponse
  ): Promise<MonoCloudResponse<Client[]>> {
    const { status } = response;
    const _headers: any = {};
    if (response.headers && typeof response.headers === 'object') {
      for (const k in response.headers) {
        if (response.headers.hasOwnProperty(k)) {
          _headers[k] = response.headers[k];
        }
      }
    }
    if (status === 200) {
      const _responseText = response.data;
      let result200: any = null;
      const resultData200 = _responseText;
      result200 = resultData200;
      return Promise.resolve<MonoCloudResponse<Client[]>>(
        new MonoCloudResponse<Client[]>(status, _headers, result200)
      );
    }
    if (status !== 200 && status !== 204) {
      const _responseText = response.data;
      return throwException(
        'An unexpected server error occurred.',
        status,
        _responseText,
        _headers
      );
    }
    return Promise.resolve<MonoCloudResponse<Client[]>>(
      new MonoCloudResponse(status, _headers, null as any)
    );
  }

  /**
   * Create a Client
   * @param {CreateClientRequest} body Request Body
   * @return {Promise<MonoCloudResponse<Client>>} Created
   */
  createClient(
    body: CreateClientRequest,
    cancelToken?: CancelToken | undefined
  ): Promise<MonoCloudResponse<Client>> {
    let url_ = `${this.baseUrl}/v1/clients`;
    url_ = url_.replace(/[?&]$/, '');

    const content_ = JSON.stringify(body);

    const options_: AxiosRequestConfig = {
      data: content_,
      method: 'POST',
      url: url_,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'text/plain',
      },
      cancelToken,
    };

    return this.instance
      .request(options_)
      .catch((_error: any) => {
        if (isAxiosError(_error) && _error.response) {
          return _error.response;
        }
        throw _error;
      })
      .then((_response: AxiosResponse) => {
        return this.processCreateClient(_response);
      });
  }

  protected processCreateClient(
    response: AxiosResponse
  ): Promise<MonoCloudResponse<Client>> {
    const { status } = response;
    const _headers: any = {};
    if (response.headers && typeof response.headers === 'object') {
      for (const k in response.headers) {
        if (response.headers.hasOwnProperty(k)) {
          _headers[k] = response.headers[k];
        }
      }
    }
    if (status === 201) {
      const _responseText = response.data;
      let result201: any = null;
      const resultData201 = _responseText;
      result201 = resultData201;
      return Promise.resolve<MonoCloudResponse<Client>>(
        new MonoCloudResponse<Client>(status, _headers, result201)
      );
    }
    if (status === 400) {
      const _responseText = response.data;
      let result400: any = null;
      const resultData400 = _responseText;
      result400 = resultData400;
      return throwException(
        'Bad Request',
        status,
        _responseText,
        _headers,
        result400
      );
    }
    if (status === 422) {
      const _responseText = response.data;
      let result422: any = null;
      const resultData422 = _responseText;
      result422 = resultData422;
      return throwException(
        'Client Error',
        status,
        _responseText,
        _headers,
        result422
      );
    }
    if (status !== 200 && status !== 204) {
      const _responseText = response.data;
      return throwException(
        'An unexpected server error occurred.',
        status,
        _responseText,
        _headers
      );
    }
    return Promise.resolve<MonoCloudResponse<Client>>(
      new MonoCloudResponse(status, _headers, null as any)
    );
  }

  /**
   * Create a Client Secret
   * @param {string} clientId Client Id
   * @param {CreateSecretRequest} body Request Body
   * @return {Promise<MonoCloudResponse<Secret>>} Created
   */
  createClientSecret(
    clientId: string,
    body: CreateSecretRequest,
    cancelToken?: CancelToken | undefined
  ): Promise<MonoCloudResponse<Secret>> {
    let url_ = `${this.baseUrl}/v1/clients/{clientId}/secrets`;
    if (
      clientId === undefined ||
      clientId === null ||
      clientId.toString().trim() === ''
    )
      throw new Error("The parameter 'clientId' must be defined.");
    url_ = url_.replace('{clientId}', encodeURIComponent(`${clientId}`));
    url_ = url_.replace(/[?&]$/, '');

    const content_ = JSON.stringify(body);

    const options_: AxiosRequestConfig = {
      data: content_,
      method: 'POST',
      url: url_,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'text/plain',
      },
      cancelToken,
    };

    return this.instance
      .request(options_)
      .catch((_error: any) => {
        if (isAxiosError(_error) && _error.response) {
          return _error.response;
        }
        throw _error;
      })
      .then((_response: AxiosResponse) => {
        return this.processCreateClientSecret(_response);
      });
  }

  protected processCreateClientSecret(
    response: AxiosResponse
  ): Promise<MonoCloudResponse<Secret>> {
    const { status } = response;
    const _headers: any = {};
    if (response.headers && typeof response.headers === 'object') {
      for (const k in response.headers) {
        if (response.headers.hasOwnProperty(k)) {
          _headers[k] = response.headers[k];
        }
      }
    }
    if (status === 201) {
      const _responseText = response.data;
      let result201: any = null;
      const resultData201 = _responseText;
      result201 = resultData201;
      return Promise.resolve<MonoCloudResponse<Secret>>(
        new MonoCloudResponse<Secret>(status, _headers, result201)
      );
    }
    if (status === 400) {
      const _responseText = response.data;
      let result400: any = null;
      const resultData400 = _responseText;
      result400 = resultData400;
      return throwException(
        'Bad Request',
        status,
        _responseText,
        _headers,
        result400
      );
    }
    if (status === 422) {
      const _responseText = response.data;
      let result422: any = null;
      const resultData422 = _responseText;
      result422 = resultData422;
      return throwException(
        'Client Error',
        status,
        _responseText,
        _headers,
        result422
      );
    }
    if (status !== 200 && status !== 204) {
      const _responseText = response.data;
      return throwException(
        'An unexpected server error occurred.',
        status,
        _responseText,
        _headers
      );
    }
    return Promise.resolve<MonoCloudResponse<Secret>>(
      new MonoCloudResponse(status, _headers, null as any)
    );
  }
}

export class KeysClient extends MonoCloudClientBase {
  private instance: AxiosInstance;

  private baseUrl: string;

  protected jsonParseReviver: ((key: string, value: any) => any) | undefined =
    undefined;

  constructor(
    configuration: MonoCloudConfig,
    baseUrl?: string,
    instance?: AxiosInstance
  ) {
    super(configuration);

    const headers: Record<string, string> = {
      'X-TENANT-ID': configuration.tenantId,
      'Content-Type': 'application/json',
    };

    if (configuration.apiKey) {
      headers['X-API-KEY'] = configuration.apiKey;
    }

    if (configuration.token) {
      headers.Authorization = `Bearer ${configuration.token}`;
    }

    const config: AxiosRequestConfig = {
      headers,
      timeout: configuration.config?.timeout ?? 10000,
    };

    this.instance = instance || axios.create(config);

    if (configuration.config?.retry === true) {
      axiosRetry(this.instance, { retries: 3 });
    }

    this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : '';
  }

  /**
   * Get All Valid Keys
   * @param {number} page (optional)
   * @param {number} size (optional)
   * @return {Promise<MonoCloudResponse<KeyMaterial[]>>} Success
   */
  getAllKeyMaterials(
    page?: number | undefined,
    size?: number | undefined,
    cancelToken?: CancelToken | undefined
  ): Promise<MonoCloudResponse<KeyMaterial[]>> {
    let url_ = `${this.baseUrl}/v1/keys?`;
    if (page === null) throw new Error("The parameter 'page' cannot be null.");
    else if (page !== undefined)
      url_ += `page=${encodeURIComponent(`${page}`)}&`;
    if (size === null) throw new Error("The parameter 'size' cannot be null.");
    else if (size !== undefined)
      url_ += `size=${encodeURIComponent(`${size}`)}&`;
    url_ = url_.replace(/[?&]$/, '');

    const options_: AxiosRequestConfig = {
      method: 'GET',
      url: url_,
      headers: {
        Accept: 'text/plain',
      },
      cancelToken,
    };

    return this.instance
      .request(options_)
      .catch((_error: any) => {
        if (isAxiosError(_error) && _error.response) {
          return _error.response;
        }
        throw _error;
      })
      .then((_response: AxiosResponse) => {
        return this.processGetAllKeyMaterials(_response);
      });
  }

  protected processGetAllKeyMaterials(
    response: AxiosResponse
  ): Promise<MonoCloudResponse<KeyMaterial[]>> {
    const { status } = response;
    const _headers: any = {};
    if (response.headers && typeof response.headers === 'object') {
      for (const k in response.headers) {
        if (response.headers.hasOwnProperty(k)) {
          _headers[k] = response.headers[k];
        }
      }
    }
    if (status === 200) {
      const _responseText = response.data;
      let result200: any = null;
      const resultData200 = _responseText;
      result200 = resultData200;
      return Promise.resolve<MonoCloudResponse<KeyMaterial[]>>(
        new MonoCloudResponse<KeyMaterial[]>(status, _headers, result200)
      );
    }
    if (status !== 200 && status !== 204) {
      const _responseText = response.data;
      return throwException(
        'An unexpected server error occurred.',
        status,
        _responseText,
        _headers
      );
    }
    return Promise.resolve<MonoCloudResponse<KeyMaterial[]>>(
      new MonoCloudResponse(status, _headers, null as any)
    );
  }

  /**
   * Rotate Current Key
   * @param {string} keyId Key Id
   * @return {Promise<MonoCloudResponse<void>>} Success
   */
  rotateKey(
    keyId: string,
    cancelToken?: CancelToken | undefined
  ): Promise<MonoCloudResponse<void>> {
    let url_ = `${this.baseUrl}/v1/keys/{keyId}/rotate`;
    if (keyId === undefined || keyId === null || keyId.toString().trim() === '')
      throw new Error("The parameter 'keyId' must be defined.");
    url_ = url_.replace('{keyId}', encodeURIComponent(`${keyId}`));
    url_ = url_.replace(/[?&]$/, '');

    const options_: AxiosRequestConfig = {
      method: 'PUT',
      url: url_,
      headers: {},
      cancelToken,
    };

    return this.instance
      .request(options_)
      .catch((_error: any) => {
        if (isAxiosError(_error) && _error.response) {
          return _error.response;
        }
        throw _error;
      })
      .then((_response: AxiosResponse) => {
        return this.processRotateKey(_response);
      });
  }

  protected processRotateKey(
    response: AxiosResponse
  ): Promise<MonoCloudResponse<void>> {
    const { status } = response;
    const _headers: any = {};
    if (response.headers && typeof response.headers === 'object') {
      for (const k in response.headers) {
        if (response.headers.hasOwnProperty(k)) {
          _headers[k] = response.headers[k];
        }
      }
    }
    if (status === 200) {
      return Promise.resolve<MonoCloudResponse<void>>(
        new MonoCloudResponse<void>(status, _headers, null as any)
      );
    }
    if (status === 404) {
      const _responseText = response.data;
      let result404: any = null;
      const resultData404 = _responseText;
      result404 = resultData404;
      return throwException(
        'Not Found',
        status,
        _responseText,
        _headers,
        result404
      );
    }
    if (status !== 200 && status !== 204) {
      const _responseText = response.data;
      return throwException(
        'An unexpected server error occurred.',
        status,
        _responseText,
        _headers
      );
    }
    return Promise.resolve<MonoCloudResponse<void>>(
      new MonoCloudResponse(status, _headers, null as any)
    );
  }

  /**
   * Revoke Current Key
   * @param {string} keyId Key Id
   * @return {Promise<MonoCloudResponse<void>>} Success
   */
  revokeKey(
    keyId: string,
    cancelToken?: CancelToken | undefined
  ): Promise<MonoCloudResponse<void>> {
    let url_ = `${this.baseUrl}/v1/keys/{keyId}/revoke`;
    if (keyId === undefined || keyId === null || keyId.toString().trim() === '')
      throw new Error("The parameter 'keyId' must be defined.");
    url_ = url_.replace('{keyId}', encodeURIComponent(`${keyId}`));
    url_ = url_.replace(/[?&]$/, '');

    const options_: AxiosRequestConfig = {
      method: 'PUT',
      url: url_,
      headers: {},
      cancelToken,
    };

    return this.instance
      .request(options_)
      .catch((_error: any) => {
        if (isAxiosError(_error) && _error.response) {
          return _error.response;
        }
        throw _error;
      })
      .then((_response: AxiosResponse) => {
        return this.processRevokeKey(_response);
      });
  }

  protected processRevokeKey(
    response: AxiosResponse
  ): Promise<MonoCloudResponse<void>> {
    const { status } = response;
    const _headers: any = {};
    if (response.headers && typeof response.headers === 'object') {
      for (const k in response.headers) {
        if (response.headers.hasOwnProperty(k)) {
          _headers[k] = response.headers[k];
        }
      }
    }
    if (status === 200) {
      return Promise.resolve<MonoCloudResponse<void>>(
        new MonoCloudResponse<void>(status, _headers, null as any)
      );
    }
    if (status === 404) {
      const _responseText = response.data;
      let result404: any = null;
      const resultData404 = _responseText;
      result404 = resultData404;
      return throwException(
        'Not Found',
        status,
        _responseText,
        _headers,
        result404
      );
    }
    if (status !== 200 && status !== 204) {
      const _responseText = response.data;
      return throwException(
        'An unexpected server error occurred.',
        status,
        _responseText,
        _headers
      );
    }
    return Promise.resolve<MonoCloudResponse<void>>(
      new MonoCloudResponse(status, _headers, null as any)
    );
  }
}

export class LogsClient extends MonoCloudClientBase {
  private instance: AxiosInstance;

  private baseUrl: string;

  protected jsonParseReviver: ((key: string, value: any) => any) | undefined =
    undefined;

  constructor(
    configuration: MonoCloudConfig,
    baseUrl?: string,
    instance?: AxiosInstance
  ) {
    super(configuration);

    const headers: Record<string, string> = {
      'X-TENANT-ID': configuration.tenantId,
      'Content-Type': 'application/json',
    };

    if (configuration.apiKey) {
      headers['X-API-KEY'] = configuration.apiKey;
    }

    if (configuration.token) {
      headers.Authorization = `Bearer ${configuration.token}`;
    }

    const config: AxiosRequestConfig = {
      headers,
      timeout: configuration.config?.timeout ?? 10000,
    };

    this.instance = instance || axios.create(config);

    if (configuration.config?.retry === true) {
      axiosRetry(this.instance, { retries: 3 });
    }

    this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : '';
  }

  /**
   * Get all Log Summary
   * @param {number} page (optional)
   * @param {number} size (optional)
   * @return {Promise<MonoCloudResponse<LogSummary[]>>} Success
   */
  getAllLogs(
    page?: number | undefined,
    size?: number | undefined,
    cancelToken?: CancelToken | undefined
  ): Promise<MonoCloudResponse<LogSummary[]>> {
    let url_ = `${this.baseUrl}/v1/logs?`;
    if (page === null) throw new Error("The parameter 'page' cannot be null.");
    else if (page !== undefined)
      url_ += `page=${encodeURIComponent(`${page}`)}&`;
    if (size === null) throw new Error("The parameter 'size' cannot be null.");
    else if (size !== undefined)
      url_ += `size=${encodeURIComponent(`${size}`)}&`;
    url_ = url_.replace(/[?&]$/, '');

    const options_: AxiosRequestConfig = {
      method: 'GET',
      url: url_,
      headers: {
        Accept: 'text/plain',
      },
      cancelToken,
    };

    return this.instance
      .request(options_)
      .catch((_error: any) => {
        if (isAxiosError(_error) && _error.response) {
          return _error.response;
        }
        throw _error;
      })
      .then((_response: AxiosResponse) => {
        return this.processGetAllLogs(_response);
      });
  }

  protected processGetAllLogs(
    response: AxiosResponse
  ): Promise<MonoCloudResponse<LogSummary[]>> {
    const { status } = response;
    const _headers: any = {};
    if (response.headers && typeof response.headers === 'object') {
      for (const k in response.headers) {
        if (response.headers.hasOwnProperty(k)) {
          _headers[k] = response.headers[k];
        }
      }
    }
    if (status === 200) {
      const _responseText = response.data;
      let result200: any = null;
      const resultData200 = _responseText;
      result200 = resultData200;
      return Promise.resolve<MonoCloudResponse<LogSummary[]>>(
        new MonoCloudResponse<LogSummary[]>(status, _headers, result200)
      );
    }
    if (status !== 200 && status !== 204) {
      const _responseText = response.data;
      return throwException(
        'An unexpected server error occurred.',
        status,
        _responseText,
        _headers
      );
    }
    return Promise.resolve<MonoCloudResponse<LogSummary[]>>(
      new MonoCloudResponse(status, _headers, null as any)
    );
  }

  /**
   * Find a Log by Id
   * @param {string} id Log Id
   * @return {Promise<MonoCloudResponse<Log>>} Success
   */
  findLogById(
    id: string,
    cancelToken?: CancelToken | undefined
  ): Promise<MonoCloudResponse<Log>> {
    let url_ = `${this.baseUrl}/v1/logs/{id}`;
    if (id === undefined || id === null || id.toString().trim() === '')
      throw new Error("The parameter 'id' must be defined.");
    url_ = url_.replace('{id}', encodeURIComponent(`${id}`));
    url_ = url_.replace(/[?&]$/, '');

    const options_: AxiosRequestConfig = {
      method: 'GET',
      url: url_,
      headers: {
        Accept: 'text/plain',
      },
      cancelToken,
    };

    return this.instance
      .request(options_)
      .catch((_error: any) => {
        if (isAxiosError(_error) && _error.response) {
          return _error.response;
        }
        throw _error;
      })
      .then((_response: AxiosResponse) => {
        return this.processFindLogById(_response);
      });
  }

  protected processFindLogById(
    response: AxiosResponse
  ): Promise<MonoCloudResponse<Log>> {
    const { status } = response;
    const _headers: any = {};
    if (response.headers && typeof response.headers === 'object') {
      for (const k in response.headers) {
        if (response.headers.hasOwnProperty(k)) {
          _headers[k] = response.headers[k];
        }
      }
    }
    if (status === 200) {
      const _responseText = response.data;
      let result200: any = null;
      const resultData200 = _responseText;
      result200 = resultData200;
      return Promise.resolve<MonoCloudResponse<Log>>(
        new MonoCloudResponse<Log>(status, _headers, result200)
      );
    }
    if (status === 404) {
      const _responseText = response.data;
      let result404: any = null;
      const resultData404 = _responseText;
      result404 = resultData404;
      return throwException(
        'Not Found',
        status,
        _responseText,
        _headers,
        result404
      );
    }
    if (status !== 200 && status !== 204) {
      const _responseText = response.data;
      return throwException(
        'An unexpected server error occurred.',
        status,
        _responseText,
        _headers
      );
    }
    return Promise.resolve<MonoCloudResponse<Log>>(
      new MonoCloudResponse(status, _headers, null as any)
    );
  }
}

export class OptionsClient extends MonoCloudClientBase {
  private instance: AxiosInstance;

  private baseUrl: string;

  protected jsonParseReviver: ((key: string, value: any) => any) | undefined =
    undefined;

  constructor(
    configuration: MonoCloudConfig,
    baseUrl?: string,
    instance?: AxiosInstance
  ) {
    super(configuration);

    const headers: Record<string, string> = {
      'X-TENANT-ID': configuration.tenantId,
      'Content-Type': 'application/json',
    };

    if (configuration.apiKey) {
      headers['X-API-KEY'] = configuration.apiKey;
    }

    if (configuration.token) {
      headers.Authorization = `Bearer ${configuration.token}`;
    }

    const config: AxiosRequestConfig = {
      headers,
      timeout: configuration.config?.timeout ?? 10000,
    };

    this.instance = instance || axios.create(config);

    if (configuration.config?.retry === true) {
      axiosRetry(this.instance, { retries: 3 });
    }

    this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : '';
  }

  /**
   * Update Authentication Options
   * @param {PatchAuthenticationOptionsRequest} body Request Body
   * @return {Promise<MonoCloudResponse<AuthenticationOptions>>} Success
   */
  patchAuthenticationOptions(
    body: PatchAuthenticationOptionsRequest,
    cancelToken?: CancelToken | undefined
  ): Promise<MonoCloudResponse<AuthenticationOptions>> {
    let url_ = `${this.baseUrl}/v1/options/authentication`;
    url_ = url_.replace(/[?&]$/, '');

    const content_ = JSON.stringify(body);

    const options_: AxiosRequestConfig = {
      data: content_,
      method: 'PATCH',
      url: url_,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'text/plain',
      },
      cancelToken,
    };

    return this.instance
      .request(options_)
      .catch((_error: any) => {
        if (isAxiosError(_error) && _error.response) {
          return _error.response;
        }
        throw _error;
      })
      .then((_response: AxiosResponse) => {
        return this.processPatchAuthenticationOptions(_response);
      });
  }

  protected processPatchAuthenticationOptions(
    response: AxiosResponse
  ): Promise<MonoCloudResponse<AuthenticationOptions>> {
    const { status } = response;
    const _headers: any = {};
    if (response.headers && typeof response.headers === 'object') {
      for (const k in response.headers) {
        if (response.headers.hasOwnProperty(k)) {
          _headers[k] = response.headers[k];
        }
      }
    }
    if (status === 200) {
      const _responseText = response.data;
      let result200: any = null;
      const resultData200 = _responseText;
      result200 = resultData200;
      return Promise.resolve<MonoCloudResponse<AuthenticationOptions>>(
        new MonoCloudResponse<AuthenticationOptions>(
          status,
          _headers,
          result200
        )
      );
    }
    if (status === 400) {
      const _responseText = response.data;
      let result400: any = null;
      const resultData400 = _responseText;
      result400 = resultData400;
      return throwException(
        'Bad Request',
        status,
        _responseText,
        _headers,
        result400
      );
    }
    if (status === 422) {
      const _responseText = response.data;
      let result422: any = null;
      const resultData422 = _responseText;
      result422 = resultData422;
      return throwException(
        'Client Error',
        status,
        _responseText,
        _headers,
        result422
      );
    }
    if (status !== 200 && status !== 204) {
      const _responseText = response.data;
      return throwException(
        'An unexpected server error occurred.',
        status,
        _responseText,
        _headers
      );
    }
    return Promise.resolve<MonoCloudResponse<AuthenticationOptions>>(
      new MonoCloudResponse(status, _headers, null as any)
    );
  }

  /**
   * Get Authentication Options
   * @return {Promise<MonoCloudResponse<AuthenticationOptions>>} Success
   */
  findAuthenticationOptions(
    cancelToken?: CancelToken | undefined
  ): Promise<MonoCloudResponse<AuthenticationOptions>> {
    let url_ = `${this.baseUrl}/v1/options/authentication`;
    url_ = url_.replace(/[?&]$/, '');

    const options_: AxiosRequestConfig = {
      method: 'GET',
      url: url_,
      headers: {
        Accept: 'text/plain',
      },
      cancelToken,
    };

    return this.instance
      .request(options_)
      .catch((_error: any) => {
        if (isAxiosError(_error) && _error.response) {
          return _error.response;
        }
        throw _error;
      })
      .then((_response: AxiosResponse) => {
        return this.processFindAuthenticationOptions(_response);
      });
  }

  protected processFindAuthenticationOptions(
    response: AxiosResponse
  ): Promise<MonoCloudResponse<AuthenticationOptions>> {
    const { status } = response;
    const _headers: any = {};
    if (response.headers && typeof response.headers === 'object') {
      for (const k in response.headers) {
        if (response.headers.hasOwnProperty(k)) {
          _headers[k] = response.headers[k];
        }
      }
    }
    if (status === 200) {
      const _responseText = response.data;
      let result200: any = null;
      const resultData200 = _responseText;
      result200 = resultData200;
      return Promise.resolve<MonoCloudResponse<AuthenticationOptions>>(
        new MonoCloudResponse<AuthenticationOptions>(
          status,
          _headers,
          result200
        )
      );
    }
    if (status !== 200 && status !== 204) {
      const _responseText = response.data;
      return throwException(
        'An unexpected server error occurred.',
        status,
        _responseText,
        _headers
      );
    }
    return Promise.resolve<MonoCloudResponse<AuthenticationOptions>>(
      new MonoCloudResponse(status, _headers, null as any)
    );
  }

  /**
   * Update Branding Options
   * @param {PatchBrandingOptionsRequest} body Request Body
   * @return {Promise<MonoCloudResponse<BrandingOptions>>} Success
   */
  patchBrandingOptions(
    body: PatchBrandingOptionsRequest,
    cancelToken?: CancelToken | undefined
  ): Promise<MonoCloudResponse<BrandingOptions>> {
    let url_ = `${this.baseUrl}/v1/options/branding`;
    url_ = url_.replace(/[?&]$/, '');

    const content_ = JSON.stringify(body);

    const options_: AxiosRequestConfig = {
      data: content_,
      method: 'PATCH',
      url: url_,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'text/plain',
      },
      cancelToken,
    };

    return this.instance
      .request(options_)
      .catch((_error: any) => {
        if (isAxiosError(_error) && _error.response) {
          return _error.response;
        }
        throw _error;
      })
      .then((_response: AxiosResponse) => {
        return this.processPatchBrandingOptions(_response);
      });
  }

  protected processPatchBrandingOptions(
    response: AxiosResponse
  ): Promise<MonoCloudResponse<BrandingOptions>> {
    const { status } = response;
    const _headers: any = {};
    if (response.headers && typeof response.headers === 'object') {
      for (const k in response.headers) {
        if (response.headers.hasOwnProperty(k)) {
          _headers[k] = response.headers[k];
        }
      }
    }
    if (status === 200) {
      const _responseText = response.data;
      let result200: any = null;
      const resultData200 = _responseText;
      result200 = resultData200;
      return Promise.resolve<MonoCloudResponse<BrandingOptions>>(
        new MonoCloudResponse<BrandingOptions>(status, _headers, result200)
      );
    }
    if (status === 400) {
      const _responseText = response.data;
      let result400: any = null;
      const resultData400 = _responseText;
      result400 = resultData400;
      return throwException(
        'Bad Request',
        status,
        _responseText,
        _headers,
        result400
      );
    }
    if (status === 422) {
      const _responseText = response.data;
      let result422: any = null;
      const resultData422 = _responseText;
      result422 = resultData422;
      return throwException(
        'Client Error',
        status,
        _responseText,
        _headers,
        result422
      );
    }
    if (status !== 200 && status !== 204) {
      const _responseText = response.data;
      return throwException(
        'An unexpected server error occurred.',
        status,
        _responseText,
        _headers
      );
    }
    return Promise.resolve<MonoCloudResponse<BrandingOptions>>(
      new MonoCloudResponse(status, _headers, null as any)
    );
  }

  /**
   * Get Branding Options
   * @return {Promise<MonoCloudResponse<BrandingOptions>>} Success
   */
  findBrandingOptions(
    cancelToken?: CancelToken | undefined
  ): Promise<MonoCloudResponse<BrandingOptions>> {
    let url_ = `${this.baseUrl}/v1/options/branding`;
    url_ = url_.replace(/[?&]$/, '');

    const options_: AxiosRequestConfig = {
      method: 'GET',
      url: url_,
      headers: {
        Accept: 'text/plain',
      },
      cancelToken,
    };

    return this.instance
      .request(options_)
      .catch((_error: any) => {
        if (isAxiosError(_error) && _error.response) {
          return _error.response;
        }
        throw _error;
      })
      .then((_response: AxiosResponse) => {
        return this.processFindBrandingOptions(_response);
      });
  }

  protected processFindBrandingOptions(
    response: AxiosResponse
  ): Promise<MonoCloudResponse<BrandingOptions>> {
    const { status } = response;
    const _headers: any = {};
    if (response.headers && typeof response.headers === 'object') {
      for (const k in response.headers) {
        if (response.headers.hasOwnProperty(k)) {
          _headers[k] = response.headers[k];
        }
      }
    }
    if (status === 200) {
      const _responseText = response.data;
      let result200: any = null;
      const resultData200 = _responseText;
      result200 = resultData200;
      return Promise.resolve<MonoCloudResponse<BrandingOptions>>(
        new MonoCloudResponse<BrandingOptions>(status, _headers, result200)
      );
    }
    if (status !== 200 && status !== 204) {
      const _responseText = response.data;
      return throwException(
        'An unexpected server error occurred.',
        status,
        _responseText,
        _headers
      );
    }
    return Promise.resolve<MonoCloudResponse<BrandingOptions>>(
      new MonoCloudResponse(status, _headers, null as any)
    );
  }

  /**
   * Update Communication Options
   * @param {PatchCommunicationOptionsRequest} body Request Body
   * @return {Promise<MonoCloudResponse<CommunicationOptions>>} Success
   */
  patchCommunicationOptions(
    body: PatchCommunicationOptionsRequest,
    cancelToken?: CancelToken | undefined
  ): Promise<MonoCloudResponse<CommunicationOptions>> {
    let url_ = `${this.baseUrl}/v1/options/communication`;
    url_ = url_.replace(/[?&]$/, '');

    const content_ = JSON.stringify(body);

    const options_: AxiosRequestConfig = {
      data: content_,
      method: 'PATCH',
      url: url_,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'text/plain',
      },
      cancelToken,
    };

    return this.instance
      .request(options_)
      .catch((_error: any) => {
        if (isAxiosError(_error) && _error.response) {
          return _error.response;
        }
        throw _error;
      })
      .then((_response: AxiosResponse) => {
        return this.processPatchCommunicationOptions(_response);
      });
  }

  protected processPatchCommunicationOptions(
    response: AxiosResponse
  ): Promise<MonoCloudResponse<CommunicationOptions>> {
    const { status } = response;
    const _headers: any = {};
    if (response.headers && typeof response.headers === 'object') {
      for (const k in response.headers) {
        if (response.headers.hasOwnProperty(k)) {
          _headers[k] = response.headers[k];
        }
      }
    }
    if (status === 200) {
      const _responseText = response.data;
      let result200: any = null;
      const resultData200 = _responseText;
      result200 = resultData200;
      return Promise.resolve<MonoCloudResponse<CommunicationOptions>>(
        new MonoCloudResponse<CommunicationOptions>(status, _headers, result200)
      );
    }
    if (status === 400) {
      const _responseText = response.data;
      let result400: any = null;
      const resultData400 = _responseText;
      result400 = resultData400;
      return throwException(
        'Bad Request',
        status,
        _responseText,
        _headers,
        result400
      );
    }
    if (status === 422) {
      const _responseText = response.data;
      let result422: any = null;
      const resultData422 = _responseText;
      result422 = resultData422;
      return throwException(
        'Client Error',
        status,
        _responseText,
        _headers,
        result422
      );
    }
    if (status !== 200 && status !== 204) {
      const _responseText = response.data;
      return throwException(
        'An unexpected server error occurred.',
        status,
        _responseText,
        _headers
      );
    }
    return Promise.resolve<MonoCloudResponse<CommunicationOptions>>(
      new MonoCloudResponse(status, _headers, null as any)
    );
  }

  /**
   * Get Communication Options
   * @return {Promise<MonoCloudResponse<CommunicationOptions>>} Success
   */
  findCommunicationOptions(
    cancelToken?: CancelToken | undefined
  ): Promise<MonoCloudResponse<CommunicationOptions>> {
    let url_ = `${this.baseUrl}/v1/options/communication`;
    url_ = url_.replace(/[?&]$/, '');

    const options_: AxiosRequestConfig = {
      method: 'GET',
      url: url_,
      headers: {
        Accept: 'text/plain',
      },
      cancelToken,
    };

    return this.instance
      .request(options_)
      .catch((_error: any) => {
        if (isAxiosError(_error) && _error.response) {
          return _error.response;
        }
        throw _error;
      })
      .then((_response: AxiosResponse) => {
        return this.processFindCommunicationOptions(_response);
      });
  }

  protected processFindCommunicationOptions(
    response: AxiosResponse
  ): Promise<MonoCloudResponse<CommunicationOptions>> {
    const { status } = response;
    const _headers: any = {};
    if (response.headers && typeof response.headers === 'object') {
      for (const k in response.headers) {
        if (response.headers.hasOwnProperty(k)) {
          _headers[k] = response.headers[k];
        }
      }
    }
    if (status === 200) {
      const _responseText = response.data;
      let result200: any = null;
      const resultData200 = _responseText;
      result200 = resultData200;
      return Promise.resolve<MonoCloudResponse<CommunicationOptions>>(
        new MonoCloudResponse<CommunicationOptions>(status, _headers, result200)
      );
    }
    if (status !== 200 && status !== 204) {
      const _responseText = response.data;
      return throwException(
        'An unexpected server error occurred.',
        status,
        _responseText,
        _headers
      );
    }
    return Promise.resolve<MonoCloudResponse<CommunicationOptions>>(
      new MonoCloudResponse(status, _headers, null as any)
    );
  }

  /**
   * Update DeviceFlow Options
   * @param {PatchDeviceFlowOptionsRequest} body Request Body
   * @return {Promise<MonoCloudResponse<DeviceFlowOptions>>} Success
   */
  patchDeviceFlowOptions(
    body: PatchDeviceFlowOptionsRequest,
    cancelToken?: CancelToken | undefined
  ): Promise<MonoCloudResponse<DeviceFlowOptions>> {
    let url_ = `${this.baseUrl}/v1/options/device_flow`;
    url_ = url_.replace(/[?&]$/, '');

    const content_ = JSON.stringify(body);

    const options_: AxiosRequestConfig = {
      data: content_,
      method: 'PATCH',
      url: url_,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'text/plain',
      },
      cancelToken,
    };

    return this.instance
      .request(options_)
      .catch((_error: any) => {
        if (isAxiosError(_error) && _error.response) {
          return _error.response;
        }
        throw _error;
      })
      .then((_response: AxiosResponse) => {
        return this.processPatchDeviceFlowOptions(_response);
      });
  }

  protected processPatchDeviceFlowOptions(
    response: AxiosResponse
  ): Promise<MonoCloudResponse<DeviceFlowOptions>> {
    const { status } = response;
    const _headers: any = {};
    if (response.headers && typeof response.headers === 'object') {
      for (const k in response.headers) {
        if (response.headers.hasOwnProperty(k)) {
          _headers[k] = response.headers[k];
        }
      }
    }
    if (status === 200) {
      const _responseText = response.data;
      let result200: any = null;
      const resultData200 = _responseText;
      result200 = resultData200;
      return Promise.resolve<MonoCloudResponse<DeviceFlowOptions>>(
        new MonoCloudResponse<DeviceFlowOptions>(status, _headers, result200)
      );
    }
    if (status === 400) {
      const _responseText = response.data;
      let result400: any = null;
      const resultData400 = _responseText;
      result400 = resultData400;
      return throwException(
        'Bad Request',
        status,
        _responseText,
        _headers,
        result400
      );
    }
    if (status === 422) {
      const _responseText = response.data;
      let result422: any = null;
      const resultData422 = _responseText;
      result422 = resultData422;
      return throwException(
        'Client Error',
        status,
        _responseText,
        _headers,
        result422
      );
    }
    if (status !== 200 && status !== 204) {
      const _responseText = response.data;
      return throwException(
        'An unexpected server error occurred.',
        status,
        _responseText,
        _headers
      );
    }
    return Promise.resolve<MonoCloudResponse<DeviceFlowOptions>>(
      new MonoCloudResponse(status, _headers, null as any)
    );
  }

  /**
   * Get DeviceFlow Options
   * @return {Promise<MonoCloudResponse<DeviceFlowOptions>>} Success
   */
  findDeviceFlowOptions(
    cancelToken?: CancelToken | undefined
  ): Promise<MonoCloudResponse<DeviceFlowOptions>> {
    let url_ = `${this.baseUrl}/v1/options/device_flow`;
    url_ = url_.replace(/[?&]$/, '');

    const options_: AxiosRequestConfig = {
      method: 'GET',
      url: url_,
      headers: {
        Accept: 'text/plain',
      },
      cancelToken,
    };

    return this.instance
      .request(options_)
      .catch((_error: any) => {
        if (isAxiosError(_error) && _error.response) {
          return _error.response;
        }
        throw _error;
      })
      .then((_response: AxiosResponse) => {
        return this.processFindDeviceFlowOptions(_response);
      });
  }

  protected processFindDeviceFlowOptions(
    response: AxiosResponse
  ): Promise<MonoCloudResponse<DeviceFlowOptions>> {
    const { status } = response;
    const _headers: any = {};
    if (response.headers && typeof response.headers === 'object') {
      for (const k in response.headers) {
        if (response.headers.hasOwnProperty(k)) {
          _headers[k] = response.headers[k];
        }
      }
    }
    if (status === 200) {
      const _responseText = response.data;
      let result200: any = null;
      const resultData200 = _responseText;
      result200 = resultData200;
      return Promise.resolve<MonoCloudResponse<DeviceFlowOptions>>(
        new MonoCloudResponse<DeviceFlowOptions>(status, _headers, result200)
      );
    }
    if (status !== 200 && status !== 204) {
      const _responseText = response.data;
      return throwException(
        'An unexpected server error occurred.',
        status,
        _responseText,
        _headers
      );
    }
    return Promise.resolve<MonoCloudResponse<DeviceFlowOptions>>(
      new MonoCloudResponse(status, _headers, null as any)
    );
  }

  /**
   * Update Mtls Options
   * @param {PatchMtlsOptionsRequest} body Request Body
   * @return {Promise<MonoCloudResponse<MtlsOptions>>} Success
   */
  patchMtlsOptions(
    body: PatchMtlsOptionsRequest,
    cancelToken?: CancelToken | undefined
  ): Promise<MonoCloudResponse<MtlsOptions>> {
    let url_ = `${this.baseUrl}/v1/options/mtls`;
    url_ = url_.replace(/[?&]$/, '');

    const content_ = JSON.stringify(body);

    const options_: AxiosRequestConfig = {
      data: content_,
      method: 'PATCH',
      url: url_,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'text/plain',
      },
      cancelToken,
    };

    return this.instance
      .request(options_)
      .catch((_error: any) => {
        if (isAxiosError(_error) && _error.response) {
          return _error.response;
        }
        throw _error;
      })
      .then((_response: AxiosResponse) => {
        return this.processPatchMtlsOptions(_response);
      });
  }

  protected processPatchMtlsOptions(
    response: AxiosResponse
  ): Promise<MonoCloudResponse<MtlsOptions>> {
    const { status } = response;
    const _headers: any = {};
    if (response.headers && typeof response.headers === 'object') {
      for (const k in response.headers) {
        if (response.headers.hasOwnProperty(k)) {
          _headers[k] = response.headers[k];
        }
      }
    }
    if (status === 200) {
      const _responseText = response.data;
      let result200: any = null;
      const resultData200 = _responseText;
      result200 = resultData200;
      return Promise.resolve<MonoCloudResponse<MtlsOptions>>(
        new MonoCloudResponse<MtlsOptions>(status, _headers, result200)
      );
    }
    if (status === 400) {
      const _responseText = response.data;
      let result400: any = null;
      const resultData400 = _responseText;
      result400 = resultData400;
      return throwException(
        'Bad Request',
        status,
        _responseText,
        _headers,
        result400
      );
    }
    if (status === 422) {
      const _responseText = response.data;
      let result422: any = null;
      const resultData422 = _responseText;
      result422 = resultData422;
      return throwException(
        'Client Error',
        status,
        _responseText,
        _headers,
        result422
      );
    }
    if (status !== 200 && status !== 204) {
      const _responseText = response.data;
      return throwException(
        'An unexpected server error occurred.',
        status,
        _responseText,
        _headers
      );
    }
    return Promise.resolve<MonoCloudResponse<MtlsOptions>>(
      new MonoCloudResponse(status, _headers, null as any)
    );
  }

  /**
   * Get Mtls Options
   * @return {Promise<MonoCloudResponse<MtlsOptions>>} Success
   */
  findMtlsOptions(
    cancelToken?: CancelToken | undefined
  ): Promise<MonoCloudResponse<MtlsOptions>> {
    let url_ = `${this.baseUrl}/v1/options/mtls`;
    url_ = url_.replace(/[?&]$/, '');

    const options_: AxiosRequestConfig = {
      method: 'GET',
      url: url_,
      headers: {
        Accept: 'text/plain',
      },
      cancelToken,
    };

    return this.instance
      .request(options_)
      .catch((_error: any) => {
        if (isAxiosError(_error) && _error.response) {
          return _error.response;
        }
        throw _error;
      })
      .then((_response: AxiosResponse) => {
        return this.processFindMtlsOptions(_response);
      });
  }

  protected processFindMtlsOptions(
    response: AxiosResponse
  ): Promise<MonoCloudResponse<MtlsOptions>> {
    const { status } = response;
    const _headers: any = {};
    if (response.headers && typeof response.headers === 'object') {
      for (const k in response.headers) {
        if (response.headers.hasOwnProperty(k)) {
          _headers[k] = response.headers[k];
        }
      }
    }
    if (status === 200) {
      const _responseText = response.data;
      let result200: any = null;
      const resultData200 = _responseText;
      result200 = resultData200;
      return Promise.resolve<MonoCloudResponse<MtlsOptions>>(
        new MonoCloudResponse<MtlsOptions>(status, _headers, result200)
      );
    }
    if (status !== 200 && status !== 204) {
      const _responseText = response.data;
      return throwException(
        'An unexpected server error occurred.',
        status,
        _responseText,
        _headers
      );
    }
    return Promise.resolve<MonoCloudResponse<MtlsOptions>>(
      new MonoCloudResponse(status, _headers, null as any)
    );
  }

  /**
   * Create Custom Field Options
   * @param {CreateSignUpCustomFieldOptionsRequest} body Request Body
   * @return {Promise<MonoCloudResponse<SignUpCustomFieldOptions>>} Success
   */
  createSignUpCustomField(
    body: CreateSignUpCustomFieldOptionsRequest,
    cancelToken?: CancelToken | undefined
  ): Promise<MonoCloudResponse<SignUpCustomFieldOptions>> {
    let url_ = `${this.baseUrl}/v1/options/custom_fields`;
    url_ = url_.replace(/[?&]$/, '');

    const content_ = JSON.stringify(body);

    const options_: AxiosRequestConfig = {
      data: content_,
      method: 'POST',
      url: url_,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'text/plain',
      },
      cancelToken,
    };

    return this.instance
      .request(options_)
      .catch((_error: any) => {
        if (isAxiosError(_error) && _error.response) {
          return _error.response;
        }
        throw _error;
      })
      .then((_response: AxiosResponse) => {
        return this.processCreateSignUpCustomField(_response);
      });
  }

  protected processCreateSignUpCustomField(
    response: AxiosResponse
  ): Promise<MonoCloudResponse<SignUpCustomFieldOptions>> {
    const { status } = response;
    const _headers: any = {};
    if (response.headers && typeof response.headers === 'object') {
      for (const k in response.headers) {
        if (response.headers.hasOwnProperty(k)) {
          _headers[k] = response.headers[k];
        }
      }
    }
    if (status === 200) {
      const _responseText = response.data;
      let result200: any = null;
      const resultData200 = _responseText;
      result200 = resultData200;
      return Promise.resolve<MonoCloudResponse<SignUpCustomFieldOptions>>(
        new MonoCloudResponse<SignUpCustomFieldOptions>(
          status,
          _headers,
          result200
        )
      );
    }
    if (status === 400) {
      const _responseText = response.data;
      let result400: any = null;
      const resultData400 = _responseText;
      result400 = resultData400;
      return throwException(
        'Bad Request',
        status,
        _responseText,
        _headers,
        result400
      );
    }
    if (status === 422) {
      const _responseText = response.data;
      let result422: any = null;
      const resultData422 = _responseText;
      result422 = resultData422;
      return throwException(
        'Client Error',
        status,
        _responseText,
        _headers,
        result422
      );
    }
    if (status !== 200 && status !== 204) {
      const _responseText = response.data;
      return throwException(
        'An unexpected server error occurred.',
        status,
        _responseText,
        _headers
      );
    }
    return Promise.resolve<MonoCloudResponse<SignUpCustomFieldOptions>>(
      new MonoCloudResponse(status, _headers, null as any)
    );
  }

  /**
   * Update Custom Field Options
   * @param {PatchSignUpCustomFieldOptionsRequest} body Request Body
   * @return {Promise<MonoCloudResponse<SignUpCustomFieldOptions>>} Success
   */
  patchSignUpCustomField(
    claimName: string,
    body: PatchSignUpCustomFieldOptionsRequest,
    cancelToken?: CancelToken | undefined
  ): Promise<MonoCloudResponse<SignUpCustomFieldOptions>> {
    let url_ = `${this.baseUrl}/v1/options/custom_fields/{claimName}`;
    if (
      claimName === undefined ||
      claimName === null ||
      claimName.toString().trim() === ''
    )
      throw new Error("The parameter 'claimName' must be defined.");
    url_ = url_.replace('{claimName}', encodeURIComponent(`${claimName}`));
    url_ = url_.replace(/[?&]$/, '');

    const content_ = JSON.stringify(body);

    const options_: AxiosRequestConfig = {
      data: content_,
      method: 'PATCH',
      url: url_,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'text/plain',
      },
      cancelToken,
    };

    return this.instance
      .request(options_)
      .catch((_error: any) => {
        if (isAxiosError(_error) && _error.response) {
          return _error.response;
        }
        throw _error;
      })
      .then((_response: AxiosResponse) => {
        return this.processPatchSignUpCustomField(_response);
      });
  }

  protected processPatchSignUpCustomField(
    response: AxiosResponse
  ): Promise<MonoCloudResponse<SignUpCustomFieldOptions>> {
    const { status } = response;
    const _headers: any = {};
    if (response.headers && typeof response.headers === 'object') {
      for (const k in response.headers) {
        if (response.headers.hasOwnProperty(k)) {
          _headers[k] = response.headers[k];
        }
      }
    }
    if (status === 200) {
      const _responseText = response.data;
      let result200: any = null;
      const resultData200 = _responseText;
      result200 = resultData200;
      return Promise.resolve<MonoCloudResponse<SignUpCustomFieldOptions>>(
        new MonoCloudResponse<SignUpCustomFieldOptions>(
          status,
          _headers,
          result200
        )
      );
    }
    if (status === 400) {
      const _responseText = response.data;
      let result400: any = null;
      const resultData400 = _responseText;
      result400 = resultData400;
      return throwException(
        'Bad Request',
        status,
        _responseText,
        _headers,
        result400
      );
    }
    if (status === 422) {
      const _responseText = response.data;
      let result422: any = null;
      const resultData422 = _responseText;
      result422 = resultData422;
      return throwException(
        'Client Error',
        status,
        _responseText,
        _headers,
        result422
      );
    }
    if (status !== 200 && status !== 204) {
      const _responseText = response.data;
      return throwException(
        'An unexpected server error occurred.',
        status,
        _responseText,
        _headers
      );
    }
    return Promise.resolve<MonoCloudResponse<SignUpCustomFieldOptions>>(
      new MonoCloudResponse(status, _headers, null as any)
    );
  }

  /**
   * Delete Custom Field Options
   * @return {Promise<MonoCloudResponse<void>>} No Content
   */
  deleteSignUpCustomField(
    claimName: string,
    cancelToken?: CancelToken | undefined
  ): Promise<MonoCloudResponse<void>> {
    let url_ = `${this.baseUrl}/v1/options/custom_fields/{claimName}`;
    if (
      claimName === undefined ||
      claimName === null ||
      claimName.toString().trim() === ''
    )
      throw new Error("The parameter 'claimName' must be defined.");
    url_ = url_.replace('{claimName}', encodeURIComponent(`${claimName}`));
    url_ = url_.replace(/[?&]$/, '');

    const options_: AxiosRequestConfig = {
      method: 'DELETE',
      url: url_,
      headers: {},
      cancelToken,
    };

    return this.instance
      .request(options_)
      .catch((_error: any) => {
        if (isAxiosError(_error) && _error.response) {
          return _error.response;
        }
        throw _error;
      })
      .then((_response: AxiosResponse) => {
        return this.processDeleteSignUpCustomField(_response);
      });
  }

  protected processDeleteSignUpCustomField(
    response: AxiosResponse
  ): Promise<MonoCloudResponse<void>> {
    const { status } = response;
    const _headers: any = {};
    if (response.headers && typeof response.headers === 'object') {
      for (const k in response.headers) {
        if (response.headers.hasOwnProperty(k)) {
          _headers[k] = response.headers[k];
        }
      }
    }
    if (status === 204) {
      return Promise.resolve<MonoCloudResponse<void>>(
        new MonoCloudResponse<void>(status, _headers, null as any)
      );
    }
    if (status !== 200 && status !== 204) {
      const _responseText = response.data;
      return throwException(
        'An unexpected server error occurred.',
        status,
        _responseText,
        _headers
      );
    }
    return Promise.resolve<MonoCloudResponse<void>>(
      new MonoCloudResponse(status, _headers, null as any)
    );
  }
}

export class ResourcesClient extends MonoCloudClientBase {
  private instance: AxiosInstance;

  private baseUrl: string;

  protected jsonParseReviver: ((key: string, value: any) => any) | undefined =
    undefined;

  constructor(
    configuration: MonoCloudConfig,
    baseUrl?: string,
    instance?: AxiosInstance
  ) {
    super(configuration);

    const headers: Record<string, string> = {
      'X-TENANT-ID': configuration.tenantId,
      'Content-Type': 'application/json',
    };

    if (configuration.apiKey) {
      headers['X-API-KEY'] = configuration.apiKey;
    }

    if (configuration.token) {
      headers.Authorization = `Bearer ${configuration.token}`;
    }

    const config: AxiosRequestConfig = {
      headers,
      timeout: configuration.config?.timeout ?? 10000,
    };

    this.instance = instance || axios.create(config);

    if (configuration.config?.retry === true) {
      axiosRetry(this.instance, { retries: 3 });
    }

    this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : '';
  }

  /**
   * Find an Api Resource by Id
   * @param {string} id Api Resource Id
   * @return {Promise<MonoCloudResponse<ApiResource>>} Success
   */
  findApiResourceById(
    id: string,
    cancelToken?: CancelToken | undefined
  ): Promise<MonoCloudResponse<ApiResource>> {
    let url_ = `${this.baseUrl}/v1/resources/apiresources/{id}`;
    if (id === undefined || id === null || id.toString().trim() === '')
      throw new Error("The parameter 'id' must be defined.");
    url_ = url_.replace('{id}', encodeURIComponent(`${id}`));
    url_ = url_.replace(/[?&]$/, '');

    const options_: AxiosRequestConfig = {
      method: 'GET',
      url: url_,
      headers: {
        Accept: 'text/plain',
      },
      cancelToken,
    };

    return this.instance
      .request(options_)
      .catch((_error: any) => {
        if (isAxiosError(_error) && _error.response) {
          return _error.response;
        }
        throw _error;
      })
      .then((_response: AxiosResponse) => {
        return this.processFindApiResourceById(_response);
      });
  }

  protected processFindApiResourceById(
    response: AxiosResponse
  ): Promise<MonoCloudResponse<ApiResource>> {
    const { status } = response;
    const _headers: any = {};
    if (response.headers && typeof response.headers === 'object') {
      for (const k in response.headers) {
        if (response.headers.hasOwnProperty(k)) {
          _headers[k] = response.headers[k];
        }
      }
    }
    if (status === 200) {
      const _responseText = response.data;
      let result200: any = null;
      const resultData200 = _responseText;
      result200 = resultData200;
      return Promise.resolve<MonoCloudResponse<ApiResource>>(
        new MonoCloudResponse<ApiResource>(status, _headers, result200)
      );
    }
    if (status === 404) {
      const _responseText = response.data;
      let result404: any = null;
      const resultData404 = _responseText;
      result404 = resultData404;
      return throwException(
        'Not Found',
        status,
        _responseText,
        _headers,
        result404
      );
    }
    if (status !== 200 && status !== 204) {
      const _responseText = response.data;
      return throwException(
        'An unexpected server error occurred.',
        status,
        _responseText,
        _headers
      );
    }
    return Promise.resolve<MonoCloudResponse<ApiResource>>(
      new MonoCloudResponse(status, _headers, null as any)
    );
  }

  /**
   * Update an Api Resource
   * @param {string} id Api Resource Id
   * @param {PatchApiResourceRequest} body Request Body
   * @return {Promise<MonoCloudResponse<ApiResource>>} Success
   */
  patchApiResource(
    id: string,
    body: PatchApiResourceRequest,
    cancelToken?: CancelToken | undefined
  ): Promise<MonoCloudResponse<ApiResource>> {
    let url_ = `${this.baseUrl}/v1/resources/apiresources/{id}`;
    if (id === undefined || id === null || id.toString().trim() === '')
      throw new Error("The parameter 'id' must be defined.");
    url_ = url_.replace('{id}', encodeURIComponent(`${id}`));
    url_ = url_.replace(/[?&]$/, '');

    const content_ = JSON.stringify(body);

    const options_: AxiosRequestConfig = {
      data: content_,
      method: 'PATCH',
      url: url_,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'text/plain',
      },
      cancelToken,
    };

    return this.instance
      .request(options_)
      .catch((_error: any) => {
        if (isAxiosError(_error) && _error.response) {
          return _error.response;
        }
        throw _error;
      })
      .then((_response: AxiosResponse) => {
        return this.processPatchApiResource(_response);
      });
  }

  protected processPatchApiResource(
    response: AxiosResponse
  ): Promise<MonoCloudResponse<ApiResource>> {
    const { status } = response;
    const _headers: any = {};
    if (response.headers && typeof response.headers === 'object') {
      for (const k in response.headers) {
        if (response.headers.hasOwnProperty(k)) {
          _headers[k] = response.headers[k];
        }
      }
    }
    if (status === 200) {
      const _responseText = response.data;
      let result200: any = null;
      const resultData200 = _responseText;
      result200 = resultData200;
      return Promise.resolve<MonoCloudResponse<ApiResource>>(
        new MonoCloudResponse<ApiResource>(status, _headers, result200)
      );
    }
    if (status === 400) {
      const _responseText = response.data;
      let result400: any = null;
      const resultData400 = _responseText;
      result400 = resultData400;
      return throwException(
        'Bad Request',
        status,
        _responseText,
        _headers,
        result400
      );
    }
    if (status === 422) {
      const _responseText = response.data;
      let result422: any = null;
      const resultData422 = _responseText;
      result422 = resultData422;
      return throwException(
        'Client Error',
        status,
        _responseText,
        _headers,
        result422
      );
    }
    if (status !== 200 && status !== 204) {
      const _responseText = response.data;
      return throwException(
        'An unexpected server error occurred.',
        status,
        _responseText,
        _headers
      );
    }
    return Promise.resolve<MonoCloudResponse<ApiResource>>(
      new MonoCloudResponse(status, _headers, null as any)
    );
  }

  /**
   * Delete an Api Resource
   * @param {string} id Api Resource Id
   * @return {Promise<MonoCloudResponse<void>>} No Content
   */
  deleteApiResource(
    id: string,
    cancelToken?: CancelToken | undefined
  ): Promise<MonoCloudResponse<void>> {
    let url_ = `${this.baseUrl}/v1/resources/apiresources/{id}`;
    if (id === undefined || id === null || id.toString().trim() === '')
      throw new Error("The parameter 'id' must be defined.");
    url_ = url_.replace('{id}', encodeURIComponent(`${id}`));
    url_ = url_.replace(/[?&]$/, '');

    const options_: AxiosRequestConfig = {
      method: 'DELETE',
      url: url_,
      headers: {},
      cancelToken,
    };

    return this.instance
      .request(options_)
      .catch((_error: any) => {
        if (isAxiosError(_error) && _error.response) {
          return _error.response;
        }
        throw _error;
      })
      .then((_response: AxiosResponse) => {
        return this.processDeleteApiResource(_response);
      });
  }

  protected processDeleteApiResource(
    response: AxiosResponse
  ): Promise<MonoCloudResponse<void>> {
    const { status } = response;
    const _headers: any = {};
    if (response.headers && typeof response.headers === 'object') {
      for (const k in response.headers) {
        if (response.headers.hasOwnProperty(k)) {
          _headers[k] = response.headers[k];
        }
      }
    }
    if (status === 204) {
      return Promise.resolve<MonoCloudResponse<void>>(
        new MonoCloudResponse<void>(status, _headers, null as any)
      );
    }
    if (status !== 200 && status !== 204) {
      const _responseText = response.data;
      return throwException(
        'An unexpected server error occurred.',
        status,
        _responseText,
        _headers
      );
    }
    return Promise.resolve<MonoCloudResponse<void>>(
      new MonoCloudResponse(status, _headers, null as any)
    );
  }

  /**
   * Find an Api Resource Secret by Id
   * @param {string} resourceId Resource Id
   * @param {string} secretId Secret Id
   * @return {Promise<MonoCloudResponse<SecretValue>>} Success
   */
  findApiResourceSecretById(
    resourceId: string,
    secretId: string,
    cancelToken?: CancelToken | undefined
  ): Promise<MonoCloudResponse<SecretValue>> {
    let url_ = `${this.baseUrl}/v1/resources/apiresources/{resourceId}/secrets/{secretId}`;
    if (
      resourceId === undefined ||
      resourceId === null ||
      resourceId.toString().trim() === ''
    )
      throw new Error("The parameter 'resourceId' must be defined.");
    url_ = url_.replace('{resourceId}', encodeURIComponent(`${resourceId}`));
    if (
      secretId === undefined ||
      secretId === null ||
      secretId.toString().trim() === ''
    )
      throw new Error("The parameter 'secretId' must be defined.");
    url_ = url_.replace('{secretId}', encodeURIComponent(`${secretId}`));
    url_ = url_.replace(/[?&]$/, '');

    const options_: AxiosRequestConfig = {
      method: 'GET',
      url: url_,
      headers: {
        Accept: 'text/plain',
      },
      cancelToken,
    };

    return this.instance
      .request(options_)
      .catch((_error: any) => {
        if (isAxiosError(_error) && _error.response) {
          return _error.response;
        }
        throw _error;
      })
      .then((_response: AxiosResponse) => {
        return this.processFindApiResourceSecretById(_response);
      });
  }

  protected processFindApiResourceSecretById(
    response: AxiosResponse
  ): Promise<MonoCloudResponse<SecretValue>> {
    const { status } = response;
    const _headers: any = {};
    if (response.headers && typeof response.headers === 'object') {
      for (const k in response.headers) {
        if (response.headers.hasOwnProperty(k)) {
          _headers[k] = response.headers[k];
        }
      }
    }
    if (status === 200) {
      const _responseText = response.data;
      let result200: any = null;
      const resultData200 = _responseText;
      result200 = resultData200;
      return Promise.resolve<MonoCloudResponse<SecretValue>>(
        new MonoCloudResponse<SecretValue>(status, _headers, result200)
      );
    }
    if (status === 404) {
      const _responseText = response.data;
      let result404: any = null;
      const resultData404 = _responseText;
      result404 = resultData404;
      return throwException(
        'Not Found',
        status,
        _responseText,
        _headers,
        result404
      );
    }
    if (status !== 200 && status !== 204) {
      const _responseText = response.data;
      return throwException(
        'An unexpected server error occurred.',
        status,
        _responseText,
        _headers
      );
    }
    return Promise.resolve<MonoCloudResponse<SecretValue>>(
      new MonoCloudResponse(status, _headers, null as any)
    );
  }

  /**
   * Delete an Api Resource Secret
   * @param {string} resourceId ResourceId Id
   * @param {string} secretId Secret Id
   * @return {Promise<MonoCloudResponse<void>>} No Content
   */
  deleteApiResourceSecret(
    resourceId: string,
    secretId: string,
    cancelToken?: CancelToken | undefined
  ): Promise<MonoCloudResponse<void>> {
    let url_ = `${this.baseUrl}/v1/resources/apiresources/{resourceId}/secrets/{secretId}`;
    if (
      resourceId === undefined ||
      resourceId === null ||
      resourceId.toString().trim() === ''
    )
      throw new Error("The parameter 'resourceId' must be defined.");
    url_ = url_.replace('{resourceId}', encodeURIComponent(`${resourceId}`));
    if (
      secretId === undefined ||
      secretId === null ||
      secretId.toString().trim() === ''
    )
      throw new Error("The parameter 'secretId' must be defined.");
    url_ = url_.replace('{secretId}', encodeURIComponent(`${secretId}`));
    url_ = url_.replace(/[?&]$/, '');

    const options_: AxiosRequestConfig = {
      method: 'DELETE',
      url: url_,
      headers: {},
      cancelToken,
    };

    return this.instance
      .request(options_)
      .catch((_error: any) => {
        if (isAxiosError(_error) && _error.response) {
          return _error.response;
        }
        throw _error;
      })
      .then((_response: AxiosResponse) => {
        return this.processDeleteApiResourceSecret(_response);
      });
  }

  protected processDeleteApiResourceSecret(
    response: AxiosResponse
  ): Promise<MonoCloudResponse<void>> {
    const { status } = response;
    const _headers: any = {};
    if (response.headers && typeof response.headers === 'object') {
      for (const k in response.headers) {
        if (response.headers.hasOwnProperty(k)) {
          _headers[k] = response.headers[k];
        }
      }
    }
    if (status === 204) {
      return Promise.resolve<MonoCloudResponse<void>>(
        new MonoCloudResponse<void>(status, _headers, null as any)
      );
    }
    if (status !== 200 && status !== 204) {
      const _responseText = response.data;
      return throwException(
        'An unexpected server error occurred.',
        status,
        _responseText,
        _headers
      );
    }
    return Promise.resolve<MonoCloudResponse<void>>(
      new MonoCloudResponse(status, _headers, null as any)
    );
  }

  /**
   * Find an Api Scope by Id
   * @param {string} id Api Scope Id
   * @return {Promise<MonoCloudResponse<ApiScope>>} Success
   */
  findApiScopeById(
    id: string,
    cancelToken?: CancelToken | undefined
  ): Promise<MonoCloudResponse<ApiScope>> {
    let url_ = `${this.baseUrl}/v1/resources/apiscopes/{id}`;
    if (id === undefined || id === null || id.toString().trim() === '')
      throw new Error("The parameter 'id' must be defined.");
    url_ = url_.replace('{id}', encodeURIComponent(`${id}`));
    url_ = url_.replace(/[?&]$/, '');

    const options_: AxiosRequestConfig = {
      method: 'GET',
      url: url_,
      headers: {
        Accept: 'text/plain',
      },
      cancelToken,
    };

    return this.instance
      .request(options_)
      .catch((_error: any) => {
        if (isAxiosError(_error) && _error.response) {
          return _error.response;
        }
        throw _error;
      })
      .then((_response: AxiosResponse) => {
        return this.processFindApiScopeById(_response);
      });
  }

  protected processFindApiScopeById(
    response: AxiosResponse
  ): Promise<MonoCloudResponse<ApiScope>> {
    const { status } = response;
    const _headers: any = {};
    if (response.headers && typeof response.headers === 'object') {
      for (const k in response.headers) {
        if (response.headers.hasOwnProperty(k)) {
          _headers[k] = response.headers[k];
        }
      }
    }
    if (status === 200) {
      const _responseText = response.data;
      let result200: any = null;
      const resultData200 = _responseText;
      result200 = resultData200;
      return Promise.resolve<MonoCloudResponse<ApiScope>>(
        new MonoCloudResponse<ApiScope>(status, _headers, result200)
      );
    }
    if (status === 404) {
      const _responseText = response.data;
      let result404: any = null;
      const resultData404 = _responseText;
      result404 = resultData404;
      return throwException(
        'Not Found',
        status,
        _responseText,
        _headers,
        result404
      );
    }
    if (status !== 200 && status !== 204) {
      const _responseText = response.data;
      return throwException(
        'An unexpected server error occurred.',
        status,
        _responseText,
        _headers
      );
    }
    return Promise.resolve<MonoCloudResponse<ApiScope>>(
      new MonoCloudResponse(status, _headers, null as any)
    );
  }

  /**
   * Update an Api Scope
   * @param {string} id Api Scope Id
   * @param {PatchApiScopeRequest} body Request Body
   * @return {Promise<MonoCloudResponse<ApiScope>>} Success
   */
  patchApiScope(
    id: string,
    body: PatchApiScopeRequest,
    cancelToken?: CancelToken | undefined
  ): Promise<MonoCloudResponse<ApiScope>> {
    let url_ = `${this.baseUrl}/v1/resources/apiscopes/{id}`;
    if (id === undefined || id === null || id.toString().trim() === '')
      throw new Error("The parameter 'id' must be defined.");
    url_ = url_.replace('{id}', encodeURIComponent(`${id}`));
    url_ = url_.replace(/[?&]$/, '');

    const content_ = JSON.stringify(body);

    const options_: AxiosRequestConfig = {
      data: content_,
      method: 'PATCH',
      url: url_,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'text/plain',
      },
      cancelToken,
    };

    return this.instance
      .request(options_)
      .catch((_error: any) => {
        if (isAxiosError(_error) && _error.response) {
          return _error.response;
        }
        throw _error;
      })
      .then((_response: AxiosResponse) => {
        return this.processPatchApiScope(_response);
      });
  }

  protected processPatchApiScope(
    response: AxiosResponse
  ): Promise<MonoCloudResponse<ApiScope>> {
    const { status } = response;
    const _headers: any = {};
    if (response.headers && typeof response.headers === 'object') {
      for (const k in response.headers) {
        if (response.headers.hasOwnProperty(k)) {
          _headers[k] = response.headers[k];
        }
      }
    }
    if (status === 200) {
      const _responseText = response.data;
      let result200: any = null;
      const resultData200 = _responseText;
      result200 = resultData200;
      return Promise.resolve<MonoCloudResponse<ApiScope>>(
        new MonoCloudResponse<ApiScope>(status, _headers, result200)
      );
    }
    if (status === 400) {
      const _responseText = response.data;
      let result400: any = null;
      const resultData400 = _responseText;
      result400 = resultData400;
      return throwException(
        'Bad Request',
        status,
        _responseText,
        _headers,
        result400
      );
    }
    if (status === 422) {
      const _responseText = response.data;
      let result422: any = null;
      const resultData422 = _responseText;
      result422 = resultData422;
      return throwException(
        'Client Error',
        status,
        _responseText,
        _headers,
        result422
      );
    }
    if (status !== 200 && status !== 204) {
      const _responseText = response.data;
      return throwException(
        'An unexpected server error occurred.',
        status,
        _responseText,
        _headers
      );
    }
    return Promise.resolve<MonoCloudResponse<ApiScope>>(
      new MonoCloudResponse(status, _headers, null as any)
    );
  }

  /**
   * Delete an Api Scope
   * @param {string} id Api Scope Id
   * @return {Promise<MonoCloudResponse<void>>} No Content
   */
  deleteApiScope(
    id: string,
    cancelToken?: CancelToken | undefined
  ): Promise<MonoCloudResponse<void>> {
    let url_ = `${this.baseUrl}/v1/resources/apiscopes/{id}`;
    if (id === undefined || id === null || id.toString().trim() === '')
      throw new Error("The parameter 'id' must be defined.");
    url_ = url_.replace('{id}', encodeURIComponent(`${id}`));
    url_ = url_.replace(/[?&]$/, '');

    const options_: AxiosRequestConfig = {
      method: 'DELETE',
      url: url_,
      headers: {},
      cancelToken,
    };

    return this.instance
      .request(options_)
      .catch((_error: any) => {
        if (isAxiosError(_error) && _error.response) {
          return _error.response;
        }
        throw _error;
      })
      .then((_response: AxiosResponse) => {
        return this.processDeleteApiScope(_response);
      });
  }

  protected processDeleteApiScope(
    response: AxiosResponse
  ): Promise<MonoCloudResponse<void>> {
    const { status } = response;
    const _headers: any = {};
    if (response.headers && typeof response.headers === 'object') {
      for (const k in response.headers) {
        if (response.headers.hasOwnProperty(k)) {
          _headers[k] = response.headers[k];
        }
      }
    }
    if (status === 204) {
      return Promise.resolve<MonoCloudResponse<void>>(
        new MonoCloudResponse<void>(status, _headers, null as any)
      );
    }
    if (status !== 200 && status !== 204) {
      const _responseText = response.data;
      return throwException(
        'An unexpected server error occurred.',
        status,
        _responseText,
        _headers
      );
    }
    return Promise.resolve<MonoCloudResponse<void>>(
      new MonoCloudResponse(status, _headers, null as any)
    );
  }

  /**
   * Find an Identity Resource by Id
   * @param {string} id Identity Resource Id
   * @return {Promise<MonoCloudResponse<IdentityResource>>} Success
   */
  findIdentityResourceById(
    id: string,
    cancelToken?: CancelToken | undefined
  ): Promise<MonoCloudResponse<IdentityResource>> {
    let url_ = `${this.baseUrl}/v1/resources/identityresources/{id}`;
    if (id === undefined || id === null || id.toString().trim() === '')
      throw new Error("The parameter 'id' must be defined.");
    url_ = url_.replace('{id}', encodeURIComponent(`${id}`));
    url_ = url_.replace(/[?&]$/, '');

    const options_: AxiosRequestConfig = {
      method: 'GET',
      url: url_,
      headers: {
        Accept: 'text/plain',
      },
      cancelToken,
    };

    return this.instance
      .request(options_)
      .catch((_error: any) => {
        if (isAxiosError(_error) && _error.response) {
          return _error.response;
        }
        throw _error;
      })
      .then((_response: AxiosResponse) => {
        return this.processFindIdentityResourceById(_response);
      });
  }

  protected processFindIdentityResourceById(
    response: AxiosResponse
  ): Promise<MonoCloudResponse<IdentityResource>> {
    const { status } = response;
    const _headers: any = {};
    if (response.headers && typeof response.headers === 'object') {
      for (const k in response.headers) {
        if (response.headers.hasOwnProperty(k)) {
          _headers[k] = response.headers[k];
        }
      }
    }
    if (status === 200) {
      const _responseText = response.data;
      let result200: any = null;
      const resultData200 = _responseText;
      result200 = resultData200;
      return Promise.resolve<MonoCloudResponse<IdentityResource>>(
        new MonoCloudResponse<IdentityResource>(status, _headers, result200)
      );
    }
    if (status === 404) {
      const _responseText = response.data;
      let result404: any = null;
      const resultData404 = _responseText;
      result404 = resultData404;
      return throwException(
        'Not Found',
        status,
        _responseText,
        _headers,
        result404
      );
    }
    if (status !== 200 && status !== 204) {
      const _responseText = response.data;
      return throwException(
        'An unexpected server error occurred.',
        status,
        _responseText,
        _headers
      );
    }
    return Promise.resolve<MonoCloudResponse<IdentityResource>>(
      new MonoCloudResponse(status, _headers, null as any)
    );
  }

  /**
   * Update an Identity Resource
   * @param {string} id Identity Resource Id
   * @param {PatchIdentityResourceRequest} body Request Body
   * @return {Promise<MonoCloudResponse<IdentityResource>>} Success
   */
  patchIdentityResource(
    id: string,
    body: PatchIdentityResourceRequest,
    cancelToken?: CancelToken | undefined
  ): Promise<MonoCloudResponse<IdentityResource>> {
    let url_ = `${this.baseUrl}/v1/resources/identityresources/{id}`;
    if (id === undefined || id === null || id.toString().trim() === '')
      throw new Error("The parameter 'id' must be defined.");
    url_ = url_.replace('{id}', encodeURIComponent(`${id}`));
    url_ = url_.replace(/[?&]$/, '');

    const content_ = JSON.stringify(body);

    const options_: AxiosRequestConfig = {
      data: content_,
      method: 'PATCH',
      url: url_,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'text/plain',
      },
      cancelToken,
    };

    return this.instance
      .request(options_)
      .catch((_error: any) => {
        if (isAxiosError(_error) && _error.response) {
          return _error.response;
        }
        throw _error;
      })
      .then((_response: AxiosResponse) => {
        return this.processPatchIdentityResource(_response);
      });
  }

  protected processPatchIdentityResource(
    response: AxiosResponse
  ): Promise<MonoCloudResponse<IdentityResource>> {
    const { status } = response;
    const _headers: any = {};
    if (response.headers && typeof response.headers === 'object') {
      for (const k in response.headers) {
        if (response.headers.hasOwnProperty(k)) {
          _headers[k] = response.headers[k];
        }
      }
    }
    if (status === 200) {
      const _responseText = response.data;
      let result200: any = null;
      const resultData200 = _responseText;
      result200 = resultData200;
      return Promise.resolve<MonoCloudResponse<IdentityResource>>(
        new MonoCloudResponse<IdentityResource>(status, _headers, result200)
      );
    }
    if (status === 400) {
      const _responseText = response.data;
      let result400: any = null;
      const resultData400 = _responseText;
      result400 = resultData400;
      return throwException(
        'Bad Request',
        status,
        _responseText,
        _headers,
        result400
      );
    }
    if (status === 422) {
      const _responseText = response.data;
      let result422: any = null;
      const resultData422 = _responseText;
      result422 = resultData422;
      return throwException(
        'Client Error',
        status,
        _responseText,
        _headers,
        result422
      );
    }
    if (status !== 200 && status !== 204) {
      const _responseText = response.data;
      return throwException(
        'An unexpected server error occurred.',
        status,
        _responseText,
        _headers
      );
    }
    return Promise.resolve<MonoCloudResponse<IdentityResource>>(
      new MonoCloudResponse(status, _headers, null as any)
    );
  }

  /**
   * Delete an Identity Resource
   * @param {string} id Identity Resource Id
   * @return {Promise<MonoCloudResponse<void>>} No Content
   */
  deleteIdentityResource(
    id: string,
    cancelToken?: CancelToken | undefined
  ): Promise<MonoCloudResponse<void>> {
    let url_ = `${this.baseUrl}/v1/resources/identityresources/{id}`;
    if (id === undefined || id === null || id.toString().trim() === '')
      throw new Error("The parameter 'id' must be defined.");
    url_ = url_.replace('{id}', encodeURIComponent(`${id}`));
    url_ = url_.replace(/[?&]$/, '');

    const options_: AxiosRequestConfig = {
      method: 'DELETE',
      url: url_,
      headers: {},
      cancelToken,
    };

    return this.instance
      .request(options_)
      .catch((_error: any) => {
        if (isAxiosError(_error) && _error.response) {
          return _error.response;
        }
        throw _error;
      })
      .then((_response: AxiosResponse) => {
        return this.processDeleteIdentityResource(_response);
      });
  }

  protected processDeleteIdentityResource(
    response: AxiosResponse
  ): Promise<MonoCloudResponse<void>> {
    const { status } = response;
    const _headers: any = {};
    if (response.headers && typeof response.headers === 'object') {
      for (const k in response.headers) {
        if (response.headers.hasOwnProperty(k)) {
          _headers[k] = response.headers[k];
        }
      }
    }
    if (status === 204) {
      return Promise.resolve<MonoCloudResponse<void>>(
        new MonoCloudResponse<void>(status, _headers, null as any)
      );
    }
    if (status !== 200 && status !== 204) {
      const _responseText = response.data;
      return throwException(
        'An unexpected server error occurred.',
        status,
        _responseText,
        _headers
      );
    }
    return Promise.resolve<MonoCloudResponse<void>>(
      new MonoCloudResponse(status, _headers, null as any)
    );
  }

  /**
   * Get all the Api Resources
   * @param {number} page (optional)
   * @param {number} size (optional)
   * @return {Promise<MonoCloudResponse<ApiResource[]>>} Success
   */
  getAllApiResources(
    page?: number | undefined,
    size?: number | undefined,
    cancelToken?: CancelToken | undefined
  ): Promise<MonoCloudResponse<ApiResource[]>> {
    let url_ = `${this.baseUrl}/v1/resources/apiresources?`;
    if (page === null) throw new Error("The parameter 'page' cannot be null.");
    else if (page !== undefined)
      url_ += `page=${encodeURIComponent(`${page}`)}&`;
    if (size === null) throw new Error("The parameter 'size' cannot be null.");
    else if (size !== undefined)
      url_ += `size=${encodeURIComponent(`${size}`)}&`;
    url_ = url_.replace(/[?&]$/, '');

    const options_: AxiosRequestConfig = {
      method: 'GET',
      url: url_,
      headers: {
        Accept: 'text/plain',
      },
      cancelToken,
    };

    return this.instance
      .request(options_)
      .catch((_error: any) => {
        if (isAxiosError(_error) && _error.response) {
          return _error.response;
        }
        throw _error;
      })
      .then((_response: AxiosResponse) => {
        return this.processGetAllApiResources(_response);
      });
  }

  protected processGetAllApiResources(
    response: AxiosResponse
  ): Promise<MonoCloudResponse<ApiResource[]>> {
    const { status } = response;
    const _headers: any = {};
    if (response.headers && typeof response.headers === 'object') {
      for (const k in response.headers) {
        if (response.headers.hasOwnProperty(k)) {
          _headers[k] = response.headers[k];
        }
      }
    }
    if (status === 200) {
      const _responseText = response.data;
      let result200: any = null;
      const resultData200 = _responseText;
      result200 = resultData200;
      return Promise.resolve<MonoCloudResponse<ApiResource[]>>(
        new MonoCloudResponse<ApiResource[]>(status, _headers, result200)
      );
    }
    if (status !== 200 && status !== 204) {
      const _responseText = response.data;
      return throwException(
        'An unexpected server error occurred.',
        status,
        _responseText,
        _headers
      );
    }
    return Promise.resolve<MonoCloudResponse<ApiResource[]>>(
      new MonoCloudResponse(status, _headers, null as any)
    );
  }

  /**
   * Create an Api Resource
   * @param {CreateApiResourceRequest} body Request Body
   * @return {Promise<MonoCloudResponse<ApiResource>>} Created
   */
  createApiResource(
    body: CreateApiResourceRequest,
    cancelToken?: CancelToken | undefined
  ): Promise<MonoCloudResponse<ApiResource>> {
    let url_ = `${this.baseUrl}/v1/resources/apiresources`;
    url_ = url_.replace(/[?&]$/, '');

    const content_ = JSON.stringify(body);

    const options_: AxiosRequestConfig = {
      data: content_,
      method: 'POST',
      url: url_,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'text/plain',
      },
      cancelToken,
    };

    return this.instance
      .request(options_)
      .catch((_error: any) => {
        if (isAxiosError(_error) && _error.response) {
          return _error.response;
        }
        throw _error;
      })
      .then((_response: AxiosResponse) => {
        return this.processCreateApiResource(_response);
      });
  }

  protected processCreateApiResource(
    response: AxiosResponse
  ): Promise<MonoCloudResponse<ApiResource>> {
    const { status } = response;
    const _headers: any = {};
    if (response.headers && typeof response.headers === 'object') {
      for (const k in response.headers) {
        if (response.headers.hasOwnProperty(k)) {
          _headers[k] = response.headers[k];
        }
      }
    }
    if (status === 201) {
      const _responseText = response.data;
      let result201: any = null;
      const resultData201 = _responseText;
      result201 = resultData201;
      return Promise.resolve<MonoCloudResponse<ApiResource>>(
        new MonoCloudResponse<ApiResource>(status, _headers, result201)
      );
    }
    if (status === 400) {
      const _responseText = response.data;
      let result400: any = null;
      const resultData400 = _responseText;
      result400 = resultData400;
      return throwException(
        'Bad Request',
        status,
        _responseText,
        _headers,
        result400
      );
    }
    if (status === 422) {
      const _responseText = response.data;
      let result422: any = null;
      const resultData422 = _responseText;
      result422 = resultData422;
      return throwException(
        'Client Error',
        status,
        _responseText,
        _headers,
        result422
      );
    }
    if (status !== 200 && status !== 204) {
      const _responseText = response.data;
      return throwException(
        'An unexpected server error occurred.',
        status,
        _responseText,
        _headers
      );
    }
    return Promise.resolve<MonoCloudResponse<ApiResource>>(
      new MonoCloudResponse(status, _headers, null as any)
    );
  }

  /**
   * Get all the Api Scopes
   * @param {number} page (optional)
   * @param {number} size (optional)
   * @return {Promise<MonoCloudResponse<ApiScope[]>>} Success
   */
  getAllApiScopes(
    page?: number | undefined,
    size?: number | undefined,
    cancelToken?: CancelToken | undefined
  ): Promise<MonoCloudResponse<ApiScope[]>> {
    let url_ = `${this.baseUrl}/v1/resources/apiscopes?`;
    if (page === null) throw new Error("The parameter 'page' cannot be null.");
    else if (page !== undefined)
      url_ += `page=${encodeURIComponent(`${page}`)}&`;
    if (size === null) throw new Error("The parameter 'size' cannot be null.");
    else if (size !== undefined)
      url_ += `size=${encodeURIComponent(`${size}`)}&`;
    url_ = url_.replace(/[?&]$/, '');

    const options_: AxiosRequestConfig = {
      method: 'GET',
      url: url_,
      headers: {
        Accept: 'text/plain',
      },
      cancelToken,
    };

    return this.instance
      .request(options_)
      .catch((_error: any) => {
        if (isAxiosError(_error) && _error.response) {
          return _error.response;
        }
        throw _error;
      })
      .then((_response: AxiosResponse) => {
        return this.processGetAllApiScopes(_response);
      });
  }

  protected processGetAllApiScopes(
    response: AxiosResponse
  ): Promise<MonoCloudResponse<ApiScope[]>> {
    const { status } = response;
    const _headers: any = {};
    if (response.headers && typeof response.headers === 'object') {
      for (const k in response.headers) {
        if (response.headers.hasOwnProperty(k)) {
          _headers[k] = response.headers[k];
        }
      }
    }
    if (status === 200) {
      const _responseText = response.data;
      let result200: any = null;
      const resultData200 = _responseText;
      result200 = resultData200;
      return Promise.resolve<MonoCloudResponse<ApiScope[]>>(
        new MonoCloudResponse<ApiScope[]>(status, _headers, result200)
      );
    }
    if (status !== 200 && status !== 204) {
      const _responseText = response.data;
      return throwException(
        'An unexpected server error occurred.',
        status,
        _responseText,
        _headers
      );
    }
    return Promise.resolve<MonoCloudResponse<ApiScope[]>>(
      new MonoCloudResponse(status, _headers, null as any)
    );
  }

  /**
   * Create an Api Scope
   * @param {CreateApiScopeRequest} body Request Body
   * @return {Promise<MonoCloudResponse<ApiScope>>} Created
   */
  createApiScope(
    body: CreateApiScopeRequest,
    cancelToken?: CancelToken | undefined
  ): Promise<MonoCloudResponse<ApiScope>> {
    let url_ = `${this.baseUrl}/v1/resources/apiscopes`;
    url_ = url_.replace(/[?&]$/, '');

    const content_ = JSON.stringify(body);

    const options_: AxiosRequestConfig = {
      data: content_,
      method: 'POST',
      url: url_,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'text/plain',
      },
      cancelToken,
    };

    return this.instance
      .request(options_)
      .catch((_error: any) => {
        if (isAxiosError(_error) && _error.response) {
          return _error.response;
        }
        throw _error;
      })
      .then((_response: AxiosResponse) => {
        return this.processCreateApiScope(_response);
      });
  }

  protected processCreateApiScope(
    response: AxiosResponse
  ): Promise<MonoCloudResponse<ApiScope>> {
    const { status } = response;
    const _headers: any = {};
    if (response.headers && typeof response.headers === 'object') {
      for (const k in response.headers) {
        if (response.headers.hasOwnProperty(k)) {
          _headers[k] = response.headers[k];
        }
      }
    }
    if (status === 201) {
      const _responseText = response.data;
      let result201: any = null;
      const resultData201 = _responseText;
      result201 = resultData201;
      return Promise.resolve<MonoCloudResponse<ApiScope>>(
        new MonoCloudResponse<ApiScope>(status, _headers, result201)
      );
    }
    if (status === 400) {
      const _responseText = response.data;
      let result400: any = null;
      const resultData400 = _responseText;
      result400 = resultData400;
      return throwException(
        'Bad Request',
        status,
        _responseText,
        _headers,
        result400
      );
    }
    if (status === 422) {
      const _responseText = response.data;
      let result422: any = null;
      const resultData422 = _responseText;
      result422 = resultData422;
      return throwException(
        'Client Error',
        status,
        _responseText,
        _headers,
        result422
      );
    }
    if (status !== 200 && status !== 204) {
      const _responseText = response.data;
      return throwException(
        'An unexpected server error occurred.',
        status,
        _responseText,
        _headers
      );
    }
    return Promise.resolve<MonoCloudResponse<ApiScope>>(
      new MonoCloudResponse(status, _headers, null as any)
    );
  }

  /**
   * Get all the Identity Resources
   * @param {number} page (optional)
   * @param {number} size (optional)
   * @return {Promise<MonoCloudResponse<IdentityResource[]>>} Success
   */
  getAllIdentityResources(
    page?: number | undefined,
    size?: number | undefined,
    cancelToken?: CancelToken | undefined
  ): Promise<MonoCloudResponse<IdentityResource[]>> {
    let url_ = `${this.baseUrl}/v1/resources/identityresources?`;
    if (page === null) throw new Error("The parameter 'page' cannot be null.");
    else if (page !== undefined)
      url_ += `page=${encodeURIComponent(`${page}`)}&`;
    if (size === null) throw new Error("The parameter 'size' cannot be null.");
    else if (size !== undefined)
      url_ += `size=${encodeURIComponent(`${size}`)}&`;
    url_ = url_.replace(/[?&]$/, '');

    const options_: AxiosRequestConfig = {
      method: 'GET',
      url: url_,
      headers: {
        Accept: 'text/plain',
      },
      cancelToken,
    };

    return this.instance
      .request(options_)
      .catch((_error: any) => {
        if (isAxiosError(_error) && _error.response) {
          return _error.response;
        }
        throw _error;
      })
      .then((_response: AxiosResponse) => {
        return this.processGetAllIdentityResources(_response);
      });
  }

  protected processGetAllIdentityResources(
    response: AxiosResponse
  ): Promise<MonoCloudResponse<IdentityResource[]>> {
    const { status } = response;
    const _headers: any = {};
    if (response.headers && typeof response.headers === 'object') {
      for (const k in response.headers) {
        if (response.headers.hasOwnProperty(k)) {
          _headers[k] = response.headers[k];
        }
      }
    }
    if (status === 200) {
      const _responseText = response.data;
      let result200: any = null;
      const resultData200 = _responseText;
      result200 = resultData200;
      return Promise.resolve<MonoCloudResponse<IdentityResource[]>>(
        new MonoCloudResponse<IdentityResource[]>(status, _headers, result200)
      );
    }
    if (status !== 200 && status !== 204) {
      const _responseText = response.data;
      return throwException(
        'An unexpected server error occurred.',
        status,
        _responseText,
        _headers
      );
    }
    return Promise.resolve<MonoCloudResponse<IdentityResource[]>>(
      new MonoCloudResponse(status, _headers, null as any)
    );
  }

  /**
   * Create an Identity Resource
   * @param {CreateIdentityResourceRequest} body Request Body
   * @return {Promise<MonoCloudResponse<IdentityResource>>} Created
   */
  createIdentityResource(
    body: CreateIdentityResourceRequest,
    cancelToken?: CancelToken | undefined
  ): Promise<MonoCloudResponse<IdentityResource>> {
    let url_ = `${this.baseUrl}/v1/resources/identityresources`;
    url_ = url_.replace(/[?&]$/, '');

    const content_ = JSON.stringify(body);

    const options_: AxiosRequestConfig = {
      data: content_,
      method: 'POST',
      url: url_,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'text/plain',
      },
      cancelToken,
    };

    return this.instance
      .request(options_)
      .catch((_error: any) => {
        if (isAxiosError(_error) && _error.response) {
          return _error.response;
        }
        throw _error;
      })
      .then((_response: AxiosResponse) => {
        return this.processCreateIdentityResource(_response);
      });
  }

  protected processCreateIdentityResource(
    response: AxiosResponse
  ): Promise<MonoCloudResponse<IdentityResource>> {
    const { status } = response;
    const _headers: any = {};
    if (response.headers && typeof response.headers === 'object') {
      for (const k in response.headers) {
        if (response.headers.hasOwnProperty(k)) {
          _headers[k] = response.headers[k];
        }
      }
    }
    if (status === 201) {
      const _responseText = response.data;
      let result201: any = null;
      const resultData201 = _responseText;
      result201 = resultData201;
      return Promise.resolve<MonoCloudResponse<IdentityResource>>(
        new MonoCloudResponse<IdentityResource>(status, _headers, result201)
      );
    }
    if (status === 400) {
      const _responseText = response.data;
      let result400: any = null;
      const resultData400 = _responseText;
      result400 = resultData400;
      return throwException(
        'Bad Request',
        status,
        _responseText,
        _headers,
        result400
      );
    }
    if (status === 422) {
      const _responseText = response.data;
      let result422: any = null;
      const resultData422 = _responseText;
      result422 = resultData422;
      return throwException(
        'Client Error',
        status,
        _responseText,
        _headers,
        result422
      );
    }
    if (status !== 200 && status !== 204) {
      const _responseText = response.data;
      return throwException(
        'An unexpected server error occurred.',
        status,
        _responseText,
        _headers
      );
    }
    return Promise.resolve<MonoCloudResponse<IdentityResource>>(
      new MonoCloudResponse(status, _headers, null as any)
    );
  }

  /**
   * Create an Api Resource Secret
   * @param {string} resourceId Resource Id
   * @param {CreateSecretRequest} body Request Body
   * @return {Promise<MonoCloudResponse<Secret>>} Created
   */
  createApiResourceSecret(
    resourceId: string,
    body: CreateSecretRequest,
    cancelToken?: CancelToken | undefined
  ): Promise<MonoCloudResponse<Secret>> {
    let url_ = `${this.baseUrl}/v1/resources/apiresources/{resourceId}/secrets`;
    if (
      resourceId === undefined ||
      resourceId === null ||
      resourceId.toString().trim() === ''
    )
      throw new Error("The parameter 'resourceId' must be defined.");
    url_ = url_.replace('{resourceId}', encodeURIComponent(`${resourceId}`));
    url_ = url_.replace(/[?&]$/, '');

    const content_ = JSON.stringify(body);

    const options_: AxiosRequestConfig = {
      data: content_,
      method: 'POST',
      url: url_,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'text/plain',
      },
      cancelToken,
    };

    return this.instance
      .request(options_)
      .catch((_error: any) => {
        if (isAxiosError(_error) && _error.response) {
          return _error.response;
        }
        throw _error;
      })
      .then((_response: AxiosResponse) => {
        return this.processCreateApiResourceSecret(_response);
      });
  }

  protected processCreateApiResourceSecret(
    response: AxiosResponse
  ): Promise<MonoCloudResponse<Secret>> {
    const { status } = response;
    const _headers: any = {};
    if (response.headers && typeof response.headers === 'object') {
      for (const k in response.headers) {
        if (response.headers.hasOwnProperty(k)) {
          _headers[k] = response.headers[k];
        }
      }
    }
    if (status === 201) {
      const _responseText = response.data;
      let result201: any = null;
      const resultData201 = _responseText;
      result201 = resultData201;
      return Promise.resolve<MonoCloudResponse<Secret>>(
        new MonoCloudResponse<Secret>(status, _headers, result201)
      );
    }
    if (status === 400) {
      const _responseText = response.data;
      let result400: any = null;
      const resultData400 = _responseText;
      result400 = resultData400;
      return throwException(
        'Bad Request',
        status,
        _responseText,
        _headers,
        result400
      );
    }
    if (status === 422) {
      const _responseText = response.data;
      let result422: any = null;
      const resultData422 = _responseText;
      result422 = resultData422;
      return throwException(
        'Client Error',
        status,
        _responseText,
        _headers,
        result422
      );
    }
    if (status !== 200 && status !== 204) {
      const _responseText = response.data;
      return throwException(
        'An unexpected server error occurred.',
        status,
        _responseText,
        _headers
      );
    }
    return Promise.resolve<MonoCloudResponse<Secret>>(
      new MonoCloudResponse(status, _headers, null as any)
    );
  }
}

export class TenantsClient extends MonoCloudClientBase {
  private instance: AxiosInstance;

  private baseUrl: string;

  protected jsonParseReviver: ((key: string, value: any) => any) | undefined =
    undefined;

  constructor(
    configuration: MonoCloudConfig,
    baseUrl?: string,
    instance?: AxiosInstance
  ) {
    super(configuration);

    const headers: Record<string, string> = {
      'X-TENANT-ID': configuration.tenantId,
      'Content-Type': 'application/json',
    };

    if (configuration.apiKey) {
      headers['X-API-KEY'] = configuration.apiKey;
    }

    if (configuration.token) {
      headers.Authorization = `Bearer ${configuration.token}`;
    }

    const config: AxiosRequestConfig = {
      headers,
      timeout: configuration.config?.timeout ?? 10000,
    };

    this.instance = instance || axios.create(config);

    if (configuration.config?.retry === true) {
      axiosRetry(this.instance, { retries: 3 });
    }

    this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : '';
  }

  /**
   * Patch a Tenant
   * @param {PatchTenantRequest} body Request Body
   * @return {Promise<MonoCloudResponse<Tenant>>} Success
   */
  patchTenant(
    body: PatchTenantRequest,
    cancelToken?: CancelToken | undefined
  ): Promise<MonoCloudResponse<Tenant>> {
    let url_ = `${this.baseUrl}/v1/tenants`;
    url_ = url_.replace(/[?&]$/, '');

    const content_ = JSON.stringify(body);

    const options_: AxiosRequestConfig = {
      data: content_,
      method: 'PATCH',
      url: url_,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'text/plain',
      },
      cancelToken,
    };

    return this.instance
      .request(options_)
      .catch((_error: any) => {
        if (isAxiosError(_error) && _error.response) {
          return _error.response;
        }
        throw _error;
      })
      .then((_response: AxiosResponse) => {
        return this.processPatchTenant(_response);
      });
  }

  protected processPatchTenant(
    response: AxiosResponse
  ): Promise<MonoCloudResponse<Tenant>> {
    const { status } = response;
    const _headers: any = {};
    if (response.headers && typeof response.headers === 'object') {
      for (const k in response.headers) {
        if (response.headers.hasOwnProperty(k)) {
          _headers[k] = response.headers[k];
        }
      }
    }
    if (status === 200) {
      const _responseText = response.data;
      let result200: any = null;
      const resultData200 = _responseText;
      result200 = resultData200;
      return Promise.resolve<MonoCloudResponse<Tenant>>(
        new MonoCloudResponse<Tenant>(status, _headers, result200)
      );
    }
    if (status === 400) {
      const _responseText = response.data;
      let result400: any = null;
      const resultData400 = _responseText;
      result400 = resultData400;
      return throwException(
        'Bad Request',
        status,
        _responseText,
        _headers,
        result400
      );
    }
    if (status === 422) {
      const _responseText = response.data;
      let result422: any = null;
      const resultData422 = _responseText;
      result422 = resultData422;
      return throwException(
        'Client Error',
        status,
        _responseText,
        _headers,
        result422
      );
    }
    if (status !== 200 && status !== 204) {
      const _responseText = response.data;
      return throwException(
        'An unexpected server error occurred.',
        status,
        _responseText,
        _headers
      );
    }
    return Promise.resolve<MonoCloudResponse<Tenant>>(
      new MonoCloudResponse(status, _headers, null as any)
    );
  }

  /**
   * Find a Tenant
   * @return {Promise<MonoCloudResponse<Tenant>>} Success
   */
  findCurrentTenant(
    cancelToken?: CancelToken | undefined
  ): Promise<MonoCloudResponse<Tenant>> {
    let url_ = `${this.baseUrl}/v1/tenants/current`;
    url_ = url_.replace(/[?&]$/, '');

    const options_: AxiosRequestConfig = {
      method: 'GET',
      url: url_,
      headers: {
        Accept: 'text/plain',
      },
      cancelToken,
    };

    return this.instance
      .request(options_)
      .catch((_error: any) => {
        if (isAxiosError(_error) && _error.response) {
          return _error.response;
        }
        throw _error;
      })
      .then((_response: AxiosResponse) => {
        return this.processFindCurrentTenant(_response);
      });
  }

  protected processFindCurrentTenant(
    response: AxiosResponse
  ): Promise<MonoCloudResponse<Tenant>> {
    const { status } = response;
    const _headers: any = {};
    if (response.headers && typeof response.headers === 'object') {
      for (const k in response.headers) {
        if (response.headers.hasOwnProperty(k)) {
          _headers[k] = response.headers[k];
        }
      }
    }
    if (status === 200) {
      const _responseText = response.data;
      let result200: any = null;
      const resultData200 = _responseText;
      result200 = resultData200;
      return Promise.resolve<MonoCloudResponse<Tenant>>(
        new MonoCloudResponse<Tenant>(status, _headers, result200)
      );
    }
    if (status === 404) {
      const _responseText = response.data;
      let result404: any = null;
      const resultData404 = _responseText;
      result404 = resultData404;
      return throwException(
        'Not Found',
        status,
        _responseText,
        _headers,
        result404
      );
    }
    if (status !== 200 && status !== 204) {
      const _responseText = response.data;
      return throwException(
        'An unexpected server error occurred.',
        status,
        _responseText,
        _headers
      );
    }
    return Promise.resolve<MonoCloudResponse<Tenant>>(
      new MonoCloudResponse(status, _headers, null as any)
    );
  }
}

export class TrustStoreClient extends MonoCloudClientBase {
  private instance: AxiosInstance;

  private baseUrl: string;

  protected jsonParseReviver: ((key: string, value: any) => any) | undefined =
    undefined;

  constructor(
    configuration: MonoCloudConfig,
    baseUrl?: string,
    instance?: AxiosInstance
  ) {
    super(configuration);

    const headers: Record<string, string> = {
      'X-TENANT-ID': configuration.tenantId,
      'Content-Type': 'application/json',
    };

    if (configuration.apiKey) {
      headers['X-API-KEY'] = configuration.apiKey;
    }

    if (configuration.token) {
      headers.Authorization = `Bearer ${configuration.token}`;
    }

    const config: AxiosRequestConfig = {
      headers,
      timeout: configuration.config?.timeout ?? 10000,
    };

    this.instance = instance || axios.create(config);

    if (configuration.config?.retry === true) {
      axiosRetry(this.instance, { retries: 3 });
    }

    this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : '';
  }

  /**
   * Get Truststore
   * @return {Promise<MonoCloudResponse<TrustStore>>} Success
   */
  getTrustStore(
    cancelToken?: CancelToken | undefined
  ): Promise<MonoCloudResponse<TrustStore>> {
    let url_ = `${this.baseUrl}/v1/truststore`;
    url_ = url_.replace(/[?&]$/, '');

    const options_: AxiosRequestConfig = {
      method: 'GET',
      url: url_,
      headers: {
        Accept: 'text/plain',
      },
      cancelToken,
    };

    return this.instance
      .request(options_)
      .catch((_error: any) => {
        if (isAxiosError(_error) && _error.response) {
          return _error.response;
        }
        throw _error;
      })
      .then((_response: AxiosResponse) => {
        return this.processGetTrustStore(_response);
      });
  }

  protected processGetTrustStore(
    response: AxiosResponse
  ): Promise<MonoCloudResponse<TrustStore>> {
    const { status } = response;
    const _headers: any = {};
    if (response.headers && typeof response.headers === 'object') {
      for (const k in response.headers) {
        if (response.headers.hasOwnProperty(k)) {
          _headers[k] = response.headers[k];
        }
      }
    }
    if (status === 200) {
      const _responseText = response.data;
      let result200: any = null;
      const resultData200 = _responseText;
      result200 = resultData200;
      return Promise.resolve<MonoCloudResponse<TrustStore>>(
        new MonoCloudResponse<TrustStore>(status, _headers, result200)
      );
    }
    if (status === 404) {
      const _responseText = response.data;
      let result404: any = null;
      const resultData404 = _responseText;
      result404 = resultData404;
      return throwException(
        'Not Found',
        status,
        _responseText,
        _headers,
        result404
      );
    }
    if (status !== 200 && status !== 204) {
      const _responseText = response.data;
      return throwException(
        'An unexpected server error occurred.',
        status,
        _responseText,
        _headers
      );
    }
    return Promise.resolve<MonoCloudResponse<TrustStore>>(
      new MonoCloudResponse(status, _headers, null as any)
    );
  }

  /**
   * Add Certificates to truststore
   * @param {AddTrustStoreCertificatesRequest} body Request Body
   * @return {Promise<MonoCloudResponse<TrustStore>>} Success
   */
  addCertificates(
    body: AddTrustStoreCertificatesRequest,
    cancelToken?: CancelToken | undefined
  ): Promise<MonoCloudResponse<TrustStore>> {
    let url_ = `${this.baseUrl}/v1/truststore/certificates`;
    url_ = url_.replace(/[?&]$/, '');

    const content_ = JSON.stringify(body);

    const options_: AxiosRequestConfig = {
      data: content_,
      method: 'POST',
      url: url_,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'text/plain',
      },
      cancelToken,
    };

    return this.instance
      .request(options_)
      .catch((_error: any) => {
        if (isAxiosError(_error) && _error.response) {
          return _error.response;
        }
        throw _error;
      })
      .then((_response: AxiosResponse) => {
        return this.processAddCertificates(_response);
      });
  }

  protected processAddCertificates(
    response: AxiosResponse
  ): Promise<MonoCloudResponse<TrustStore>> {
    const { status } = response;
    const _headers: any = {};
    if (response.headers && typeof response.headers === 'object') {
      for (const k in response.headers) {
        if (response.headers.hasOwnProperty(k)) {
          _headers[k] = response.headers[k];
        }
      }
    }
    if (status === 200) {
      const _responseText = response.data;
      let result200: any = null;
      const resultData200 = _responseText;
      result200 = resultData200;
      return Promise.resolve<MonoCloudResponse<TrustStore>>(
        new MonoCloudResponse<TrustStore>(status, _headers, result200)
      );
    }
    if (status === 404) {
      const _responseText = response.data;
      let result404: any = null;
      const resultData404 = _responseText;
      result404 = resultData404;
      return throwException(
        'Not Found',
        status,
        _responseText,
        _headers,
        result404
      );
    }
    if (status === 400) {
      const _responseText = response.data;
      let result400: any = null;
      const resultData400 = _responseText;
      result400 = resultData400;
      return throwException(
        'Bad Request',
        status,
        _responseText,
        _headers,
        result400
      );
    }
    if (status === 422) {
      const _responseText = response.data;
      let result422: any = null;
      const resultData422 = _responseText;
      result422 = resultData422;
      return throwException(
        'Client Error',
        status,
        _responseText,
        _headers,
        result422
      );
    }
    if (status !== 200 && status !== 204) {
      const _responseText = response.data;
      return throwException(
        'An unexpected server error occurred.',
        status,
        _responseText,
        _headers
      );
    }
    return Promise.resolve<MonoCloudResponse<TrustStore>>(
      new MonoCloudResponse(status, _headers, null as any)
    );
  }

  /**
   * Update a Certificate
   * @param {string} id Certificate Id
   * @param {PatchTrustStoreCertificateRequest} body Request Body
   * @return {Promise<MonoCloudResponse<TrustStoreCertificate>>} Success
   */
  patchCertificate(
    id: string,
    body: PatchTrustStoreCertificateRequest,
    cancelToken?: CancelToken | undefined
  ): Promise<MonoCloudResponse<TrustStoreCertificate>> {
    let url_ = `${this.baseUrl}/v1/truststore/certificates/{id}`;
    if (id === undefined || id === null || id.toString().trim() === '')
      throw new Error("The parameter 'id' must be defined.");
    url_ = url_.replace('{id}', encodeURIComponent(`${id}`));
    url_ = url_.replace(/[?&]$/, '');

    const content_ = JSON.stringify(body);

    const options_: AxiosRequestConfig = {
      data: content_,
      method: 'PATCH',
      url: url_,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'text/plain',
      },
      cancelToken,
    };

    return this.instance
      .request(options_)
      .catch((_error: any) => {
        if (isAxiosError(_error) && _error.response) {
          return _error.response;
        }
        throw _error;
      })
      .then((_response: AxiosResponse) => {
        return this.processPatchCertificate(_response);
      });
  }

  protected processPatchCertificate(
    response: AxiosResponse
  ): Promise<MonoCloudResponse<TrustStoreCertificate>> {
    const { status } = response;
    const _headers: any = {};
    if (response.headers && typeof response.headers === 'object') {
      for (const k in response.headers) {
        if (response.headers.hasOwnProperty(k)) {
          _headers[k] = response.headers[k];
        }
      }
    }
    if (status === 200) {
      const _responseText = response.data;
      let result200: any = null;
      const resultData200 = _responseText;
      result200 = resultData200;
      return Promise.resolve<MonoCloudResponse<TrustStoreCertificate>>(
        new MonoCloudResponse<TrustStoreCertificate>(
          status,
          _headers,
          result200
        )
      );
    }
    if (status === 400) {
      const _responseText = response.data;
      let result400: any = null;
      const resultData400 = _responseText;
      result400 = resultData400;
      return throwException(
        'Bad Request',
        status,
        _responseText,
        _headers,
        result400
      );
    }
    if (status === 422) {
      const _responseText = response.data;
      let result422: any = null;
      const resultData422 = _responseText;
      result422 = resultData422;
      return throwException(
        'Client Error',
        status,
        _responseText,
        _headers,
        result422
      );
    }
    if (status !== 200 && status !== 204) {
      const _responseText = response.data;
      return throwException(
        'An unexpected server error occurred.',
        status,
        _responseText,
        _headers
      );
    }
    return Promise.resolve<MonoCloudResponse<TrustStoreCertificate>>(
      new MonoCloudResponse(status, _headers, null as any)
    );
  }

  /**
   * Delete a Certificate
   * @param {string} id Certificate Id
   * @return {Promise<MonoCloudResponse<void>>} No Content
   */
  deleteCertificate(
    id: string,
    cancelToken?: CancelToken | undefined
  ): Promise<MonoCloudResponse<void>> {
    let url_ = `${this.baseUrl}/v1/truststore/certificates/{id}`;
    if (id === undefined || id === null || id.toString().trim() === '')
      throw new Error("The parameter 'id' must be defined.");
    url_ = url_.replace('{id}', encodeURIComponent(`${id}`));
    url_ = url_.replace(/[?&]$/, '');

    const options_: AxiosRequestConfig = {
      method: 'DELETE',
      url: url_,
      headers: {},
      cancelToken,
    };

    return this.instance
      .request(options_)
      .catch((_error: any) => {
        if (isAxiosError(_error) && _error.response) {
          return _error.response;
        }
        throw _error;
      })
      .then((_response: AxiosResponse) => {
        return this.processDeleteCertificate(_response);
      });
  }

  protected processDeleteCertificate(
    response: AxiosResponse
  ): Promise<MonoCloudResponse<void>> {
    const { status } = response;
    const _headers: any = {};
    if (response.headers && typeof response.headers === 'object') {
      for (const k in response.headers) {
        if (response.headers.hasOwnProperty(k)) {
          _headers[k] = response.headers[k];
        }
      }
    }
    if (status === 204) {
      return Promise.resolve<MonoCloudResponse<void>>(
        new MonoCloudResponse<void>(status, _headers, null as any)
      );
    }
    if (status !== 200 && status !== 204) {
      const _responseText = response.data;
      return throwException(
        'An unexpected server error occurred.',
        status,
        _responseText,
        _headers
      );
    }
    return Promise.resolve<MonoCloudResponse<void>>(
      new MonoCloudResponse(status, _headers, null as any)
    );
  }

  /**
   * Add Certificate Revocations to truststore
   * @param {AddTrustStoreRevocationsRequest} body Request Body
   * @return {Promise<MonoCloudResponse<TrustStore>>} Success
   */
  addCertificateRevocations(
    body: AddTrustStoreRevocationsRequest,
    cancelToken?: CancelToken | undefined
  ): Promise<MonoCloudResponse<TrustStore>> {
    let url_ = `${this.baseUrl}/v1/truststore/revocations`;
    url_ = url_.replace(/[?&]$/, '');

    const content_ = JSON.stringify(body);

    const options_: AxiosRequestConfig = {
      data: content_,
      method: 'POST',
      url: url_,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'text/plain',
      },
      cancelToken,
    };

    return this.instance
      .request(options_)
      .catch((_error: any) => {
        if (isAxiosError(_error) && _error.response) {
          return _error.response;
        }
        throw _error;
      })
      .then((_response: AxiosResponse) => {
        return this.processAddCertificateRevocations(_response);
      });
  }

  protected processAddCertificateRevocations(
    response: AxiosResponse
  ): Promise<MonoCloudResponse<TrustStore>> {
    const { status } = response;
    const _headers: any = {};
    if (response.headers && typeof response.headers === 'object') {
      for (const k in response.headers) {
        if (response.headers.hasOwnProperty(k)) {
          _headers[k] = response.headers[k];
        }
      }
    }
    if (status === 200) {
      const _responseText = response.data;
      let result200: any = null;
      const resultData200 = _responseText;
      result200 = resultData200;
      return Promise.resolve<MonoCloudResponse<TrustStore>>(
        new MonoCloudResponse<TrustStore>(status, _headers, result200)
      );
    }
    if (status === 404) {
      const _responseText = response.data;
      let result404: any = null;
      const resultData404 = _responseText;
      result404 = resultData404;
      return throwException(
        'Not Found',
        status,
        _responseText,
        _headers,
        result404
      );
    }
    if (status === 400) {
      const _responseText = response.data;
      let result400: any = null;
      const resultData400 = _responseText;
      result400 = resultData400;
      return throwException(
        'Bad Request',
        status,
        _responseText,
        _headers,
        result400
      );
    }
    if (status === 422) {
      const _responseText = response.data;
      let result422: any = null;
      const resultData422 = _responseText;
      result422 = resultData422;
      return throwException(
        'Client Error',
        status,
        _responseText,
        _headers,
        result422
      );
    }
    if (status !== 200 && status !== 204) {
      const _responseText = response.data;
      return throwException(
        'An unexpected server error occurred.',
        status,
        _responseText,
        _headers
      );
    }
    return Promise.resolve<MonoCloudResponse<TrustStore>>(
      new MonoCloudResponse(status, _headers, null as any)
    );
  }

  /**
   * Update a Certificate Revocation
   * @param {string} id Certificate Revocation Id
   * @param {PatchTrustStoreRevocationRequest} body Request Body
   * @return {Promise<MonoCloudResponse<TrustStoreRevocation>>} Success
   */
  patchCertificateRevocations(
    id: string,
    body: PatchTrustStoreRevocationRequest,
    cancelToken?: CancelToken | undefined
  ): Promise<MonoCloudResponse<TrustStoreRevocation>> {
    let url_ = `${this.baseUrl}/v1/truststore/revocations/{id}`;
    if (id === undefined || id === null || id.toString().trim() === '')
      throw new Error("The parameter 'id' must be defined.");
    url_ = url_.replace('{id}', encodeURIComponent(`${id}`));
    url_ = url_.replace(/[?&]$/, '');

    const content_ = JSON.stringify(body);

    const options_: AxiosRequestConfig = {
      data: content_,
      method: 'PATCH',
      url: url_,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'text/plain',
      },
      cancelToken,
    };

    return this.instance
      .request(options_)
      .catch((_error: any) => {
        if (isAxiosError(_error) && _error.response) {
          return _error.response;
        }
        throw _error;
      })
      .then((_response: AxiosResponse) => {
        return this.processPatchCertificateRevocations(_response);
      });
  }

  protected processPatchCertificateRevocations(
    response: AxiosResponse
  ): Promise<MonoCloudResponse<TrustStoreRevocation>> {
    const { status } = response;
    const _headers: any = {};
    if (response.headers && typeof response.headers === 'object') {
      for (const k in response.headers) {
        if (response.headers.hasOwnProperty(k)) {
          _headers[k] = response.headers[k];
        }
      }
    }
    if (status === 200) {
      const _responseText = response.data;
      let result200: any = null;
      const resultData200 = _responseText;
      result200 = resultData200;
      return Promise.resolve<MonoCloudResponse<TrustStoreRevocation>>(
        new MonoCloudResponse<TrustStoreRevocation>(status, _headers, result200)
      );
    }
    if (status === 400) {
      const _responseText = response.data;
      let result400: any = null;
      const resultData400 = _responseText;
      result400 = resultData400;
      return throwException(
        'Bad Request',
        status,
        _responseText,
        _headers,
        result400
      );
    }
    if (status === 422) {
      const _responseText = response.data;
      let result422: any = null;
      const resultData422 = _responseText;
      result422 = resultData422;
      return throwException(
        'Client Error',
        status,
        _responseText,
        _headers,
        result422
      );
    }
    if (status !== 200 && status !== 204) {
      const _responseText = response.data;
      return throwException(
        'An unexpected server error occurred.',
        status,
        _responseText,
        _headers
      );
    }
    return Promise.resolve<MonoCloudResponse<TrustStoreRevocation>>(
      new MonoCloudResponse(status, _headers, null as any)
    );
  }

  /**
   * Delete a Certificate Revocation
   * @param {string} id Certificate Revocation Id
   * @return {Promise<MonoCloudResponse<void>>} No Content
   */
  deleteCertificateRevocation(
    id: string,
    cancelToken?: CancelToken | undefined
  ): Promise<MonoCloudResponse<void>> {
    let url_ = `${this.baseUrl}/v1/truststore/revocations/{id}`;
    if (id === undefined || id === null || id.toString().trim() === '')
      throw new Error("The parameter 'id' must be defined.");
    url_ = url_.replace('{id}', encodeURIComponent(`${id}`));
    url_ = url_.replace(/[?&]$/, '');

    const options_: AxiosRequestConfig = {
      method: 'DELETE',
      url: url_,
      headers: {},
      cancelToken,
    };

    return this.instance
      .request(options_)
      .catch((_error: any) => {
        if (isAxiosError(_error) && _error.response) {
          return _error.response;
        }
        throw _error;
      })
      .then((_response: AxiosResponse) => {
        return this.processDeleteCertificateRevocation(_response);
      });
  }

  protected processDeleteCertificateRevocation(
    response: AxiosResponse
  ): Promise<MonoCloudResponse<void>> {
    const { status } = response;
    const _headers: any = {};
    if (response.headers && typeof response.headers === 'object') {
      for (const k in response.headers) {
        if (response.headers.hasOwnProperty(k)) {
          _headers[k] = response.headers[k];
        }
      }
    }
    if (status === 204) {
      return Promise.resolve<MonoCloudResponse<void>>(
        new MonoCloudResponse<void>(status, _headers, null as any)
      );
    }
    if (status !== 200 && status !== 204) {
      const _responseText = response.data;
      return throwException(
        'An unexpected server error occurred.',
        status,
        _responseText,
        _headers
      );
    }
    return Promise.resolve<MonoCloudResponse<void>>(
      new MonoCloudResponse(status, _headers, null as any)
    );
  }
}

export class UsersClient extends MonoCloudClientBase {
  private instance: AxiosInstance;

  private baseUrl: string;

  protected jsonParseReviver: ((key: string, value: any) => any) | undefined =
    undefined;

  constructor(
    configuration: MonoCloudConfig,
    baseUrl?: string,
    instance?: AxiosInstance
  ) {
    super(configuration);

    const headers: Record<string, string> = {
      'X-TENANT-ID': configuration.tenantId,
      'Content-Type': 'application/json',
    };

    if (configuration.apiKey) {
      headers['X-API-KEY'] = configuration.apiKey;
    }

    if (configuration.token) {
      headers.Authorization = `Bearer ${configuration.token}`;
    }

    const config: AxiosRequestConfig = {
      headers,
      timeout: configuration.config?.timeout ?? 10000,
    };

    this.instance = instance || axios.create(config);

    if (configuration.config?.retry === true) {
      axiosRetry(this.instance, { retries: 3 });
    }

    this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : '';
  }

  /**
   * Get all the Users
   * @param {number} page (optional)
   * @param {number} size (optional)
   * @return {Promise<MonoCloudResponse<UserSummary[]>>} Success
   */
  getAllUsers(
    page?: number | undefined,
    size?: number | undefined,
    cancelToken?: CancelToken | undefined
  ): Promise<MonoCloudResponse<UserSummary[]>> {
    let url_ = `${this.baseUrl}/v1/users?`;
    if (page === null) throw new Error("The parameter 'page' cannot be null.");
    else if (page !== undefined)
      url_ += `page=${encodeURIComponent(`${page}`)}&`;
    if (size === null) throw new Error("The parameter 'size' cannot be null.");
    else if (size !== undefined)
      url_ += `size=${encodeURIComponent(`${size}`)}&`;
    url_ = url_.replace(/[?&]$/, '');

    const options_: AxiosRequestConfig = {
      method: 'GET',
      url: url_,
      headers: {
        Accept: 'text/plain',
      },
      cancelToken,
    };

    return this.instance
      .request(options_)
      .catch((_error: any) => {
        if (isAxiosError(_error) && _error.response) {
          return _error.response;
        }
        throw _error;
      })
      .then((_response: AxiosResponse) => {
        return this.processGetAllUsers(_response);
      });
  }

  protected processGetAllUsers(
    response: AxiosResponse
  ): Promise<MonoCloudResponse<UserSummary[]>> {
    const { status } = response;
    const _headers: any = {};
    if (response.headers && typeof response.headers === 'object') {
      for (const k in response.headers) {
        if (response.headers.hasOwnProperty(k)) {
          _headers[k] = response.headers[k];
        }
      }
    }
    if (status === 200) {
      const _responseText = response.data;
      let result200: any = null;
      const resultData200 = _responseText;
      result200 = resultData200;
      return Promise.resolve<MonoCloudResponse<UserSummary[]>>(
        new MonoCloudResponse<UserSummary[]>(status, _headers, result200)
      );
    }
    if (status !== 200 && status !== 204) {
      const _responseText = response.data;
      return throwException(
        'An unexpected server error occurred.',
        status,
        _responseText,
        _headers
      );
    }
    return Promise.resolve<MonoCloudResponse<UserSummary[]>>(
      new MonoCloudResponse(status, _headers, null as any)
    );
  }

  /**
   * Delete a User
   * @param {string} user_id User Id
   * @return {Promise<MonoCloudResponse<void>>} No Content
   */
  deleteUser(
    user_id: string,
    cancelToken?: CancelToken | undefined
  ): Promise<MonoCloudResponse<void>> {
    let url_ = `${this.baseUrl}/v1/users/{user_id}`;
    if (
      user_id === undefined ||
      user_id === null ||
      user_id.toString().trim() === ''
    )
      throw new Error("The parameter 'user_id' must be defined.");
    url_ = url_.replace('{user_id}', encodeURIComponent(`${user_id}`));
    url_ = url_.replace(/[?&]$/, '');

    const options_: AxiosRequestConfig = {
      method: 'DELETE',
      url: url_,
      headers: {},
      cancelToken,
    };

    return this.instance
      .request(options_)
      .catch((_error: any) => {
        if (isAxiosError(_error) && _error.response) {
          return _error.response;
        }
        throw _error;
      })
      .then((_response: AxiosResponse) => {
        return this.processDeleteUser(_response);
      });
  }

  protected processDeleteUser(
    response: AxiosResponse
  ): Promise<MonoCloudResponse<void>> {
    const { status } = response;
    const _headers: any = {};
    if (response.headers && typeof response.headers === 'object') {
      for (const k in response.headers) {
        if (response.headers.hasOwnProperty(k)) {
          _headers[k] = response.headers[k];
        }
      }
    }
    if (status === 204) {
      return Promise.resolve<MonoCloudResponse<void>>(
        new MonoCloudResponse<void>(status, _headers, null as any)
      );
    }
    if (status !== 200 && status !== 204) {
      const _responseText = response.data;
      return throwException(
        'An unexpected server error occurred.',
        status,
        _responseText,
        _headers
      );
    }
    return Promise.resolve<MonoCloudResponse<void>>(
      new MonoCloudResponse(status, _headers, null as any)
    );
  }

  /**
   * Update User's Private Data.
   * @param {string} user_id User Id
   * @param {{ [key: string]: any; }} body Request Body
   * @return {Promise<MonoCloudResponse<{ [key: string]: any; }>>} Success
   */
  patchPrivateDataKey(
    user_id: string,
    body: { [key: string]: any },
    cancelToken?: CancelToken | undefined
  ): Promise<MonoCloudResponse<{ [key: string]: any }>> {
    let url_ = `${this.baseUrl}/v1/users/{user_id}/private_data`;
    if (
      user_id === undefined ||
      user_id === null ||
      user_id.toString().trim() === ''
    )
      throw new Error("The parameter 'user_id' must be defined.");
    url_ = url_.replace('{user_id}', encodeURIComponent(`${user_id}`));
    url_ = url_.replace(/[?&]$/, '');

    const content_ = JSON.stringify(body);

    const options_: AxiosRequestConfig = {
      data: content_,
      method: 'PATCH',
      url: url_,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'text/plain',
      },
      cancelToken,
    };

    return this.instance
      .request(options_)
      .catch((_error: any) => {
        if (isAxiosError(_error) && _error.response) {
          return _error.response;
        }
        throw _error;
      })
      .then((_response: AxiosResponse) => {
        return this.processPatchPrivateDataKey(_response);
      });
  }

  protected processPatchPrivateDataKey(
    response: AxiosResponse
  ): Promise<MonoCloudResponse<{ [key: string]: any }>> {
    const { status } = response;
    const _headers: any = {};
    if (response.headers && typeof response.headers === 'object') {
      for (const k in response.headers) {
        if (response.headers.hasOwnProperty(k)) {
          _headers[k] = response.headers[k];
        }
      }
    }
    if (status === 200) {
      const _responseText = response.data;
      let result200: any = null;
      const resultData200 = _responseText;
      result200 = resultData200;
      return Promise.resolve<MonoCloudResponse<{ [key: string]: any }>>(
        new MonoCloudResponse<{ [key: string]: any }>(
          status,
          _headers,
          result200
        )
      );
    }
    if (status === 404) {
      const _responseText = response.data;
      let result404: any = null;
      const resultData404 = _responseText;
      result404 = resultData404;
      return throwException(
        'Not Found',
        status,
        _responseText,
        _headers,
        result404
      );
    }
    if (status === 422) {
      const _responseText = response.data;
      let result422: any = null;
      const resultData422 = _responseText;
      result422 = resultData422;
      return throwException(
        'Client Error',
        status,
        _responseText,
        _headers,
        result422
      );
    }
    if (status !== 200 && status !== 204) {
      const _responseText = response.data;
      return throwException(
        'An unexpected server error occurred.',
        status,
        _responseText,
        _headers
      );
    }
    return Promise.resolve<MonoCloudResponse<{ [key: string]: any }>>(
      new MonoCloudResponse(status, _headers, null as any)
    );
  }

  /**
   * Update User's Public Data.
   * @param {string} user_id User Id
   * @param {{ [key: string]: any; }} body Request Body
   * @return {Promise<MonoCloudResponse<{ [key: string]: any; }>>} Success
   */
  patchPublicDataKey(
    user_id: string,
    body: { [key: string]: any },
    cancelToken?: CancelToken | undefined
  ): Promise<MonoCloudResponse<{ [key: string]: any }>> {
    let url_ = `${this.baseUrl}/v1/users/{user_id}/public_data`;
    if (
      user_id === undefined ||
      user_id === null ||
      user_id.toString().trim() === ''
    )
      throw new Error("The parameter 'user_id' must be defined.");
    url_ = url_.replace('{user_id}', encodeURIComponent(`${user_id}`));
    url_ = url_.replace(/[?&]$/, '');

    const content_ = JSON.stringify(body);

    const options_: AxiosRequestConfig = {
      data: content_,
      method: 'PATCH',
      url: url_,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'text/plain',
      },
      cancelToken,
    };

    return this.instance
      .request(options_)
      .catch((_error: any) => {
        if (isAxiosError(_error) && _error.response) {
          return _error.response;
        }
        throw _error;
      })
      .then((_response: AxiosResponse) => {
        return this.processPatchPublicDataKey(_response);
      });
  }

  protected processPatchPublicDataKey(
    response: AxiosResponse
  ): Promise<MonoCloudResponse<{ [key: string]: any }>> {
    const { status } = response;
    const _headers: any = {};
    if (response.headers && typeof response.headers === 'object') {
      for (const k in response.headers) {
        if (response.headers.hasOwnProperty(k)) {
          _headers[k] = response.headers[k];
        }
      }
    }
    if (status === 200) {
      const _responseText = response.data;
      let result200: any = null;
      const resultData200 = _responseText;
      result200 = resultData200;
      return Promise.resolve<MonoCloudResponse<{ [key: string]: any }>>(
        new MonoCloudResponse<{ [key: string]: any }>(
          status,
          _headers,
          result200
        )
      );
    }
    if (status === 404) {
      const _responseText = response.data;
      let result404: any = null;
      const resultData404 = _responseText;
      result404 = resultData404;
      return throwException(
        'Not Found',
        status,
        _responseText,
        _headers,
        result404
      );
    }
    if (status === 422) {
      const _responseText = response.data;
      let result422: any = null;
      const resultData422 = _responseText;
      result422 = resultData422;
      return throwException(
        'Client Error',
        status,
        _responseText,
        _headers,
        result422
      );
    }
    if (status !== 200 && status !== 204) {
      const _responseText = response.data;
      return throwException(
        'An unexpected server error occurred.',
        status,
        _responseText,
        _headers
      );
    }
    return Promise.resolve<MonoCloudResponse<{ [key: string]: any }>>(
      new MonoCloudResponse(status, _headers, null as any)
    );
  }
}

/** * **jwt** - Jwt token
 * * **reference** - Reference token */
export const AccessTokenTypes = {
  Jwt: 'jwt',
  Reference: 'reference',
} as const;

export type AccessTokenTypes =
  typeof AccessTokenTypes[keyof typeof AccessTokenTypes];

/** The Account Merging Options response class */
export interface AccountMergingOptions {
  /** Specifies account merge mode when the incoming email from an external provider is verified and the existing account's email is also verified. */
  external_verified_existing_verified: MergeModes;
  /** Specifies account merge mode when the incoming email from an external provider is verified and the existing account's email is unverified. */
  external_verified_existing_unverified: MergeModes;
  /** Specifies account merge mode when the incoming email from an external provider is unverified and the existing account's email is verified. */
  external_unverified_existing_verified: MergeModes;
  /** Specifies account merge mode when the incoming email from an external provider is unverified and the existing account's email is also unverified. */
  external_unverified_existing_unverified: MergeModes;
  /** Specifies account merge mode when the login is a passwordless one and the existing (external) account's email/phone is the same but unverified. */
  passwordless_verified_existing_external_unverified: MergeModes;
  /** Specifies account merge mode when the login is a passwordless one and the existing (local) account's email/phone is the same but unverified. */
  passwordless_verified_existing_local_unverified: MergeModes;
}

/** The Account Protection response class */
export interface AccountProtectionOptions {
  /** Account Protection's User Lockout Options */
  user_lockout: AccountProtectionUserLockoutOptions;
}

/** The Account Protection UserLockout response class */
export interface AccountProtectionUserLockoutOptions {
  /** Enable User Lockout */
  enabled: boolean;
  /** Maximum Number of failed attempts a user account can have before the user is locked out. The specified value is inclusive of the count. */
  max_failed_access_attempts: number;
  /** Lockout duration in minutes once a user account has been locked out. */
  user_lockout_time_span: number;
  /** Lockout duration in minutes once an Ip address has been locked out. */
  ip_lockout_time_span: number;
  /** Whitelisted IP Addresses where the Account Protection does not trigger. */
  allowed_ips?: string[] | null;
  /** Types of Lockouts to enable per User Account */
  lockout_type: UserLockoutTypes;
}

/** Add Certificates Request. */
export interface AddTrustStoreCertificatesRequest {
  /** List of certificates. */
  certificates: CreateTrustStoreCertificateRequest[];
}

/** Add Revocations Request. */
export interface AddTrustStoreRevocationsRequest {
  /** List of certificate revocations. */
  revocations: CreateTrustStoreRevocationRequest[];
}

/** The Api Resource response class */
export interface ApiResource {
  /** Unique ID of the Resource */
  id: string;
  /** Specifies if the resource is enabled. */
  enabled: boolean;
  /** The unique name of the resource. This is the value a client will use for the scope parameter in the authorize request. */
  name: string;
  /** Display Name for the Resource */
  display_name?: string | null;
  /** A brief description about the Resource */
  description?: string | null;
  /** Specifies whether this resource is shown in the discovery document. */
  show_in_discovery_document: boolean;
  /** List of associated user claim types that should be included in the Access token. */
  user_claims: string[];
  /** Specifies the creation time of the resource (in Epoch). */
  creation_time: number;
  /** Specifies the last update time of the resource (in Epoch). */
  last_updated: number;
  /** The Api secret is used for the introspection endpoint. The API can authenticate with introspection using the API name and secret. */
  api_secrets: Secret[];
  /** List of API scope names. */
  scopes: string[];
}

/** The Api Scope response class */
export interface ApiScope {
  /** Unique ID of the Resource */
  id: string;
  /** Specifies if the resource is enabled. */
  enabled: boolean;
  /** The unique name of the resource. This is the value a client will use for the scope parameter in the authorize request. */
  name: string;
  /** Display Name for the Resource */
  display_name?: string | null;
  /** A brief description about the Resource */
  description?: string | null;
  /** Specifies whether this resource is shown in the discovery document. */
  show_in_discovery_document: boolean;
  /** List of associated user claim types that should be included in the Access token. */
  user_claims: string[];
  /** Specifies the creation time of the resource (in Epoch). */
  creation_time: number;
  /** Specifies the last update time of the resource (in Epoch). */
  last_updated: number;
  /** Specifies whether the user can de-select the scope on the consent screen (if such a feature is implemented in the consent screen). */
  required: boolean;
  /** Specifies whether the consent screen will emphasize this scope (if such a feature is implemented in the consent screen). Use this setting for sensitive or important scopes. */
  emphasize: boolean;
}

/** The Authentication General Email response class */
export interface AuthenticationGeneralEmailOptions {
  /** Specifies if the users are allowed to sign-in using an email */
  enable_sign_in: boolean;
  /** Specifies if the users are allowed to enter an email at the time of registration. */
  show_at_sign_up: boolean;
  /** Specifies if the email is required at the time of registration. */
  required_at_sign_up: boolean;
  /** Email verification related to Sign Up */
  verification: AuthenticationGeneralEmailVerificationOptions;
}

/** The Authentication General Email Verification Options Response class */
export interface AuthenticationGeneralEmailVerificationOptions {
  /** Specifies whether the email should be verified at registration. */
  verify_at_sign_up: boolean;
  /** Email expiration time in seconds. */
  expiration: number;
  /** If Email Code is Selected, Code length is chosen from this option */
  code_length: number;
}

/** The Authentication General Options response class */
export interface AuthenticationGeneralOptions {
  /** Specifies whether secure mode is enabled */
  enable_secure_mode: boolean;
  /** Since access tokens have finite lifetimes, refresh tokens allow requesting new access tokens without user interaction. The clients need to be explicitly authorized by the User to request for refresh tokens. This option specifies if all the clients need Consent from the User for Offline Access. */
  consent_required_for_offline_access: boolean;
  /** Show RememberMe Checkbox on the SignIn Screen */
  allow_remember_me: boolean;
  /** RememberMe Duration in minutes */
  remember_me_duration: number;
  /** General Email Requirement Options for Users */
  email: AuthenticationGeneralEmailOptions;
  /** General Phone Requirement Options for Users */
  phone: AuthenticationGeneralPhoneOptions;
  /** General Username Requirement Options for Users */
  username: AuthenticationGeneralUsernameOptions;
}

/** The Authentication General Phone response class */
export interface AuthenticationGeneralPhoneOptions {
  /** Specifies if the users are allowed to sign-in using a phone number */
  enable_sign_in: boolean;
  /** Specifies if the users are allowed to enter a phone number at the time of registration. */
  show_at_sign_up: boolean;
  /** Specifies if the phone number is required at the time of registration. */
  required_at_sign_up: boolean;
  /** Sms verification related to Sign Up */
  verification: AuthenticationGeneralPhoneVerificationOptions;
}

/** The Authentication General Phone Verification Options Response class */
export interface AuthenticationGeneralPhoneVerificationOptions {
  /** Specifies whether the phone should be verified at registration. */
  verify_at_sign_up: boolean;
  /** Sms verification expiration time in seconds. */
  expiration: number;
  /** Sms Code length is chosen from this option */
  code_length: number;
}

/** The Authentication General Username response class */
export interface AuthenticationGeneralUsernameOptions {
  /** Specifies if the users are allowed to sign-in using a username */
  enable_sign_in: boolean;
  /** Specifies if the users are allowed to enter a username at the time of registration. */
  show_at_sign_up: boolean;
  /** Specifies if the username is required at the time of registration. */
  required_at_sign_up: boolean;
  /** Specifies the minimum length required for the username. */
  minimum_length: number;
}

/** The Authentication Method Email Code response class */
export interface AuthenticationMethodEmailCodeOptions {
  /** Enable Email Code Sign-in */
  enable_sign_in: boolean;
  /** Enable Email Code Sign-up */
  enable_sign_up: boolean;
  /** Specifies the expiration time in seconds for the OTP to be generated */
  otp_expiry: number;
  /** Specifies the OTP character length */
  otp_length: number;
}

/** The Authentication Method Magic Link response class */
export interface AuthenticationMethodMagicLinkOptions {
  /** Enable Magic Link Sign-in */
  enable_sign_in: boolean;
  /** Enable Magic Link Sign-up */
  enable_sign_up: boolean;
  /** Specifies the expiration time in seconds for the OTP to be generated */
  link_expiry: number;
}

/** The Authentication Method response class */
export interface AuthenticationMethodOptions {
  /** Password Authentication Method Settings */
  password: AuthenticationMethodPasswordOptions;
  /** Sms Code Authentication Method Settings */
  sms_code: AuthenticationMethodSmsCodeOptions;
  /** Magic Link Authentication Method Settings */
  magic_link: AuthenticationMethodMagicLinkOptions;
  /** Email Code Authentication Method Settings */
  email_code: AuthenticationMethodEmailCodeOptions;
}

/** The Authentication Method Password Expiration response class */
export interface AuthenticationMethodPasswordExpirationOptions {
  /** Specifies the expiration mode. */
  enabled: boolean;
  /** Specifies the password expiration period in minutes. */
  expiration_period: number;
}

/** The Authentication Method Password Options response class */
export interface AuthenticationMethodPasswordOptions {
  /** Enable Password Sign-in */
  enable_sign_in: boolean;
  /** Enable Password Sign-up */
  enable_sign_up: boolean;
  /** Password Strength Options */
  strength: AuthenticationMethodPasswordStrengthOptions;
  /** Password Re-use Options */
  reuse: AuthenticationMethodPasswordReuseOptions;
  /** Password Expiration Options */
  expiration: AuthenticationMethodPasswordExpirationOptions;
}

/** The Authentication Method Password Reuse response class */
export interface AuthenticationMethodPasswordReuseOptions {
  /** Specifies if there should be any restriction for password reuse. */
  restriction_mode: PasswordRestrictionModes;
  /** Specifies the time in minutes in which the password cannot be reused. */
  restriction_period: number;
  /** Specifies the number of previous passwords which cannot be reused. */
  restriction_count: number;
}

/** The Authentication Method Password Strength response class */
export interface AuthenticationMethodPasswordStrengthOptions {
  /** Specifies the minimum character length of password */
  minimum_length: number;
  /** Specifies the whether a non alphanumeric character is required in the password. */
  require_non_alphanumeric_character: boolean;
  /** Specifies the whether a digit is required in the password. */
  require_digit: boolean;
  /** Specifies the whether a lowercase character is required in the password. */
  require_lowercase_character: boolean;
  /** Specifies the whether a uppercase character is required in the password. */
  require_uppercase_character: boolean;
  /** Specifies the number of unique characters required in the password. */
  required_unique_characters_count: number;
}

/** The Authentication Method Sms Code response class */
export interface AuthenticationMethodSmsCodeOptions {
  /** Enable Sms Code Sign-in */
  enable_sign_in: boolean;
  /** Enable Sms Code Sign-up */
  enable_sign_up: boolean;
  /** Specifies the expiration time in seconds for the OTP to be generated */
  otp_expiry: number;
  /** Specifies the OTP character length */
  otp_length: number;
}

/** * **password**
 * * **sms_code**
 * * **magic_link**
 * * **sms_code** */
export const AuthenticationMethods = {
  Password: 'password',
  SmsCode: 'sms_code',
  MagicLink: 'magic_link',
  EmailCode: 'email_code',
} as const;

export type AuthenticationMethods =
  typeof AuthenticationMethods[keyof typeof AuthenticationMethods];

/** The Authentication Options response class */
export interface AuthenticationOptions {
  /** Account Protection Options */
  account_protection: AccountProtectionOptions;
  /** Authentication Method Options */
  authentication_methods: AuthenticationMethodOptions;
  /** External Provider Options */
  external_providers: ExternalProviderOptions;
  /** Authentication General Options */
  general: AuthenticationGeneralOptions;
  /** Logout Options */
  logout: LogoutOptions;
  /** Sign-up Options */
  sign_up: SignUpOptions;
}

/** The Branding Email Options response class */
export interface BrandingEmailOptions {
  /** Magic Link SignIn Branding Options */
  magic_link_sign_in?: BrandingGenericEmailTemplateOptions | null;
  /** Email Code SignIn Branding Options */
  email_code_sign_in?: BrandingGenericEmailTemplateOptions | null;
  /** Magic Link Verification Branding Options */
  magic_link_verification?: BrandingGenericEmailTemplateOptions | null;
  /** Email Code Verification Branding Options */
  email_code_verification?: BrandingGenericEmailTemplateOptions | null;
  /** Welcome Email Branding Options */
  welcome?: BrandingGenericEmailTemplateOptions | null;
  /** User Lockout Branding Options */
  user_lockout?: BrandingGenericEmailTemplateOptions | null;
  /** Reset Password Branding Options */
  reset_password?: BrandingGenericEmailTemplateOptions | null;
  /** Password Updated Branding Options */
  password_updated?: BrandingGenericEmailTemplateOptions | null;
}

/** The Branding Email Generic Template Options response class */
export interface BrandingGenericEmailTemplateOptions {
  /** From Email Address */
  from_email?: string | null;
  /** From Name */
  from_name?: string | null;
  /** Specifies the text to be used as the email subject */
  subject?: string | null;
  /** Specifies the URI for the custom template to be used */
  template_uri?: string | null;
}

/** The Branding Generic Sms Template Options response class */
export interface BrandingGenericSmsTemplateOptions {
  /** Custom LiquidJS template for the SMS */
  template: string;
}

/** The Branding Options response class */
export interface BrandingOptions {
  /** Email Branding Options */
  email: BrandingEmailOptions;
  /** Sms Branding Options */
  sms: BrandingSmsOptions;
  /** Page Branding Options */
  page: BrandingPageOptions;
  /** Project Branding Options */
  project: BrandingProjectOptions;
}

/** The Branding Page Options response class */
export interface BrandingPageOptions {
  /** Specifies the background css string to be used for pages */
  background: string;
  /** Specifies the error colour to be used for pages */
  error_color: string;
  /** Specifies Uri used for the favicon */
  favicon_uri?: string | null;
  /** Specifies Uri used for the logo */
  logo_uri?: string | null;
  /** Specifies the primary colour to be used for pages */
  primary_color: string;
  /** Sign In Page Branding Options */
  sign_in: BrandingSignInPageOptions;
}

/** The Branding Project Options response class */
export interface BrandingProjectOptions {
  /** Project Url */
  default_url?: string | null;
  /** Privacy Url */
  privacy_url?: string | null;
  /** Support Url */
  support_url?: string | null;
  /** Support Email */
  support_email?: string | null;
  /** Terms Url */
  terms_url?: string | null;
}

/** The Branding SignIn Page Options response class */
export interface BrandingSignInPageOptions {
  /** If enabled password will be prompted on the same screen as the username. */
  prompt_password_on_initial_screen: boolean;
  /** If enabled, External SigIn Methods are shown on top and the Primary SigIn method is shown on bottom. */
  external_sign_in_methods_first: boolean;
  /** Order of the External SigIn methods buttons */
  external_sign_in_methods_order: ExternalIDPs[];
}

/** The Branding Sms Options response class */
export interface BrandingSmsOptions {
  /** Sms Code SignIn Branding Options */
  sms_code_sign_in?: BrandingGenericSmsTemplateOptions | null;
  /** Sms Code Verification Branding Options */
  sms_code_verification?: BrandingGenericSmsTemplateOptions | null;
}

/** * **chained** - Verifies the certificate with root CA and intermediary CAs
 * * **self_signed** - Verifies the self-signed certificate in the store against the certificate presented by the user
 * * **all** - Verifies both self-signed and chained certificates */
export const CertificateTypes = {
  Chained: 'chained',
  SelfSigned: 'self_signed',
  All: 'all',
} as const;

export type CertificateTypes =
  typeof CertificateTypes[keyof typeof CertificateTypes];

/** The Claim response class */
export interface Claim {
  /** Specifies the type of the claim */
  type: string;
  /** Specifies the value of the claim */
  value: string;
  /** Specifies the type of the claim value */
  value_type: string;
}

/** The Client response class */
export interface Client {
  /** Unique ID of the client */
  id: string;
  /** Specifies if client is enabled. */
  enabled: boolean;
  /** List of Client secrets (only relevant for flows that require a secret) */
  secrets: Secret[];
  /** If set to false, no client secret is needed to request tokens at the token endpoint */
  require_client_secret: boolean;
  /** The name of the client */
  client_name: string;
  /** A brief description of the client. */
  description?: string | null;
  /** URI for providing further information about client */
  client_uri?: string | null;
  /** URI to client logo */
  logo_uri?: string | null;
  /** Specifies whether a consent screen is required to be shown */
  require_consent: boolean;
  /** Specifies whether user can choose to store consent decisions */
  remember_consent: RememberConsentTypes;
  /** Specifies whether or not the user is allowed to select the scopes on the consent screen */
  show_consent_scope_selection: boolean;
  /** When requesting both an id token and access token, should the user claims always be added to the id token instead of requiring the client to use the userinfo endpoint. */
  always_include_user_claims_in_id_token: boolean;
  /** Specifies the allowed grant types (legal combinations is required). */
  allowed_grant_types: GrantTypes[];
  /** Specifies whether a proof key is required for authorization code based token requests */
  require_pkce: boolean;
  /** Specifies whether a proof key can be sent using plain method (not recommended to be set to `true`) */
  allow_plain_text_pkce: boolean;
  /** Specifies whether this client needs to wrap the authorize request parameters in a JWT */
  require_request_object: boolean;
  /** Controls whether access tokens are transmitted via the browser for this client. This can prevent accidental leakage of access tokens when multiple response types are allowed. */
  allow_access_tokens_via_browser: boolean;
  /** Specifies allowed URIs to return tokens or authorization codes to */
  redirect_uris: string[];
  /** Specifies allowed URIs to redirect to after logout */
  post_logout_redirect_uris: string[];
  /** Specifies logout URI at client for HTTP front-channel based logout. */
  front_channel_logout_uri?: string | null;
  /** Specifies if the user's session id should be sent to the FrontChannelLogoutUri */
  front_channel_logout_session_required: boolean;
  /** Specifies logout URI at client for HTTP back-channel based logout. */
  back_channel_logout_uri?: string | null;
  /** Specifies if the user's session id should be sent to the BackChannelLogoutUri */
  back_channel_logout_session_required: boolean;
  /** Specifies whether the client can request refresh tokens (by requesting the offline_access scope) */
  allow_offline_access: boolean;
  /** Specifies the scopes the client is allowed to access (by default a client has no access to any resources) */
  allowed_scopes: string[];
  /** Lifetime of identity token in seconds */
  identity_token_lifetime: number;
  /** Lifetime of access token in seconds */
  access_token_lifetime: number;
  /** Lifetime of authorization code in seconds */
  authorization_code_lifetime: number;
  /** Lifetime of a user consent in seconds */
  consent_lifetime?: number | null;
  /** Maximum lifetime of a refresh token in seconds */
  absolute_refresh_token_lifetime: number;
  /** Sliding lifetime of a refresh token in seconds */
  sliding_refresh_token_lifetime: number;
  /** Specified the validity of a refresh token */
  refresh_token_usage: RefreshTokenUsageTypes;
  /** Specifies a value indicating whether the access token (and its claims) should be updated on a refresh token request */
  update_access_token_claims_on_refresh: boolean;
  /** Specifies how the refresh token expires */
  refresh_token_expiration: RefreshTokenExpirationTypes;
  /** Specifies whether the access token is a reference token or a self contained JWT token. */
  access_token_type: AccessTokenTypes;
  /** Specifies whether the local login (Username / Password) is allowed for this client. */
  enable_local_login: boolean;
  /** Specifies which authentication providers can be used with this client (if list is empty all providers are allowed) */
  identity_provider_restrictions: IDPs[];
  /** Specifies which authentication methods can be used with this client (if list is empty all methods are allowed) */
  authentication_method_restrictions: AuthenticationMethods[];
  /** Specifies whether JWT access tokens should include an identifier */
  include_jwt_id: boolean;
  /** Allows settings claims for the client (will be included in the access token). */
  claims: Claim[];
  /** Specifies whether client claims should be always included in the access tokens - or only for client credentials flow. */
  always_send_client_claims: boolean;
  /** If set, the client claim will be prefixed with this value */
  client_claims_prefix?: string | null;
  /** The allowed CORS origins for JavaScript clients. */
  allowed_cors_origins: string[];
  /** The maximum duration (in seconds) since the last time the user authenticated. You can adjust the lifetime of a session token to control when and how often a user is required to reenter credentials instead of being silently authenticated, when using a web application. */
  user_sso_lifetime?: number | null;
  /** Specifies the type of code that will be generated for the device code flow */
  user_code_type: DeviceFlowCodeTypes;
  /** Specifies the device code lifetime. */
  device_code_lifetime: number;
  /** Specifies the creation time of the client (in Epoch). */
  creation_time: number;
  /** Specifies the last update time of the client (in Epoch). */
  last_updated: number;
}

/** The Communication Email Options response class */
export interface CommunicationEmailOptions {
  /** SendGrid Email Options */
  send_grid?: CommunicationEmailSendGridOptions | null;
  /** Use the the internal keys to send Emails */
  use_internal_keys: boolean;
}

/** The Communicaiton Email SendGrid Options response class */
export interface CommunicationEmailSendGridOptions {
  /** SendGrid Api Key */
  api_key?: string | null;
}

/** The Communication Options response class */
export interface CommunicationOptions {
  /** Email - Communication Options */
  email: CommunicationEmailOptions;
  /** Sms - Communication Options */
  sms: CommunicationSmsOptions;
}

/** The Communication Sms Options response class */
export interface CommunicationSmsOptions {
  /** Twilio Options */
  twilio?: CommunicationSmsTwilioOptions | null;
  /** Use the the internal keys to send Sms */
  use_internal_keys: boolean;
}

/** The Communication Sms Twilio Options response class */
export interface CommunicationSmsTwilioOptions {
  /** Twilio SID */
  sid: string;
  /** Twilio Auth Token */
  auth_token: string;
  /** Twilio Messaging SID */
  messaging_sid?: string | null;
  /** Twilio From */
  from?: string | null;
}

/** The Create Api Resource class models an OpenID Connect or OAuth 2.0 api resource */
export interface CreateApiResourceRequest {
  /** Specifies if the resource is enabled. */
  enabled: boolean;
  /** The unique name of the resource. This is the value a client will use for the scope parameter in the authorize request. */
  name: string;
  /** Display Name for the Resource */
  display_name?: string | null;
  /** A brief description about the Resource */
  description?: string | null;
  /** Specifies whether this resource is shown in the discovery document. */
  show_in_discovery_document: boolean;
  /** List of associated user claim types that should be included in the Access token. */
  user_claims: string[];
  /** The Api secret is used for the introspection endpoint. The API can authenticate with introspection using the API name and secret. */
  api_secrets: CreateSecretRequest[];
  /** List of API scope names. */
  scopes: string[];
}

/** The Create Api Scope class models an OpenID Connect or OAuth 2.0 api scope */
export interface CreateApiScopeRequest {
  /** Specifies if the resource is enabled. */
  enabled: boolean;
  /** The unique name of the resource. This is the value a client will use for the scope parameter in the authorize request. */
  name: string;
  /** Display Name for the Resource */
  display_name?: string | null;
  /** A brief description about the Resource */
  description?: string | null;
  /** Specifies whether this resource is shown in the discovery document. */
  show_in_discovery_document: boolean;
  /** List of associated user claim types that should be included in the Access token. */
  user_claims: string[];
  /** Specifies whether the user can de-select the scope on the consent screen (if such a feature is implemented in the consent screen). */
  required: boolean;
  /** Specifies whether the consent screen will emphasize this scope (if such a feature is implemented in the consent screen). Use this setting for sensitive or important scopes. */
  emphasize: boolean;
}

/** The Create Claim class */
export interface CreateClaimRequest {
  /** Specifies the type of the claim */
  type: string;
  /** Specifies the value of the claim */
  value: string;
  /** Specifies the type of the claim value */
  value_type: string;
}

/** The Create Client class models an OpenID Connect or OAuth 2.0 client - e.g. a native application, a web application or a JS-based application. */
export interface CreateClientRequest {
  /** Specifies if client is enabled. */
  enabled: boolean;
  /** List of Client secrets (only relevant for flows that require a secret) */
  secrets: CreateSecretRequest[];
  /** If set to false, no client secret is needed to request tokens at the token endpoint */
  require_client_secret: boolean;
  /** The name of the client */
  client_name: string;
  /** A brief description of the client. */
  description?: string | null;
  /** URI for providing further information about client */
  client_uri?: string | null;
  /** URI to client logo */
  logo_uri?: string | null;
  /** Specifies whether a consent screen is required to be shown */
  require_consent: boolean;
  /** Specifies whether user can choose to store consent decisions */
  remember_consent: RememberConsentTypes;
  /** Specifies whether or not the user is allowed to select the scopes on the consent screen */
  show_consent_scope_selection: boolean;
  /** When requesting both an id token and access token, should the user claims always be added to the id token instead of requiring the client to use the userinfo endpoint. */
  always_include_user_claims_in_id_token: boolean;
  /** Specifies the allowed grant types (legal combinations is required). */
  allowed_grant_types: GrantTypes[];
  /** Specifies whether a proof key is required for authorization code based token requests */
  require_pkce: boolean;
  /** Specifies whether a proof key can be sent using plain method (not recommended to be set to `true`) */
  allow_plain_text_pkce: boolean;
  /** Specifies whether this client needs to wrap the authorize request parameters in a JWT */
  require_request_object: boolean;
  /** Controls whether access tokens are transmitted via the browser for this client. This can prevent accidental leakage of access tokens when multiple response types are allowed. */
  allow_access_tokens_via_browser: boolean;
  /** Specifies allowed URIs to return tokens or authorization codes to */
  redirect_uris: string[];
  /** Specifies allowed URIs to redirect to after logout */
  post_logout_redirect_uris: string[];
  /** Specifies logout URI at client for HTTP front-channel based logout. */
  front_channel_logout_uri?: string | null;
  /** Specifies if the user's session id should be sent to the FrontChannelLogoutUri */
  front_channel_logout_session_required: boolean;
  /** Specifies logout URI at client for HTTP back-channel based logout. */
  back_channel_logout_uri?: string | null;
  /** Specifies if the user's session id should be sent to the BackChannelLogoutUri */
  back_channel_logout_session_required: boolean;
  /** Specifies whether the client can request refresh tokens (by requesting the offline_access scope) */
  allow_offline_access: boolean;
  /** Specifies the scopes the client is allowed to access (by default a client has no access to any resources) */
  allowed_scopes: string[];
  /** Lifetime of identity token in seconds */
  identity_token_lifetime: number;
  /** Lifetime of access token in seconds */
  access_token_lifetime: number;
  /** Lifetime of authorization code in seconds */
  authorization_code_lifetime: number;
  /** Lifetime of a user consent in seconds */
  consent_lifetime?: number | null;
  /** Maximum lifetime of a refresh token in seconds */
  absolute_refresh_token_lifetime: number;
  /** Sliding lifetime of a refresh token in seconds */
  sliding_refresh_token_lifetime: number;
  /** Specified the validity of a refresh token */
  refresh_token_usage: RefreshTokenUsageTypes;
  /** Specifies a value indicating whether the access token (and its claims) should be updated on a refresh token request */
  update_access_token_claims_on_refresh: boolean;
  /** Specifies how the refresh token expires */
  refresh_token_expiration: RefreshTokenExpirationTypes;
  /** Specifies whether the access token is a reference token or a self contained JWT token. */
  access_token_type: AccessTokenTypes;
  /** Specifies whether the local login (Username / Password) is allowed for this client. */
  enable_local_login: boolean;
  /** Specifies which authentication providers can be used with this client (if list is empty all providers are allowed) */
  identity_provider_restrictions: IDPs[];
  /** Specifies which authentication methods can be used with this client (if list is empty all methods are allowed) */
  authentication_method_restrictions: AuthenticationMethods[];
  /** Specifies whether JWT access tokens should include an identifier */
  include_jwt_id: boolean;
  /** Allows settings claims for the client (will be included in the access token). */
  claims: CreateClaimRequest[];
  /** Specifies whether client claims should be always included in the access tokens - or only for client credentials flow. */
  always_send_client_claims: boolean;
  /** If set, the client claim will be prefixed with this value */
  client_claims_prefix?: string | null;
  /** The allowed CORS origins for JavaScript clients. */
  allowed_cors_origins: string[];
  /** The maximum duration (in seconds) since the last time the user authenticated. You can adjust the lifetime of a session token to control when and how often a user is required to reenter credentials instead of being silently authenticated, when using a web application. */
  user_sso_lifetime?: number | null;
  /** Specifies the type of code that will be generated for the device code flow */
  user_code_type: DeviceFlowCodeTypes;
  /** Specifies the device code lifetime. */
  device_code_lifetime: number;
}

/** The Create Identity Resource class models an OpenID Connect or OAuth 2.0 identity resource */
export interface CreateIdentityResourceRequest {
  /** Specifies if the resource is enabled. */
  enabled: boolean;
  /** The unique name of the resource. This is the value a client will use for the scope parameter in the authorize request. */
  name: string;
  /** Display Name for the Resource */
  display_name?: string | null;
  /** A brief description about the Resource */
  description?: string | null;
  /** Specifies whether this resource is shown in the discovery document. */
  show_in_discovery_document: boolean;
  /** List of associated user claim types that should be included in the Access token. */
  user_claims: string[];
  /** Specifies whether the user can de-select the scope on the consent screen (if such a feature is implemented in the consent screen). */
  required: boolean;
  /** Specifies whether the consent screen will emphasize this scope (if such a feature is implemented in the consent screen). Use this setting for sensitive or important scopes. */
  emphasize: boolean;
}

/** The Create Client Secret class */
export interface CreateSecretRequest {
  /** Brief description of the secret */
  description?: string | null;
  /** The secret */
  value: string;
  /** The expiration date of the secret (in Epoch) */
  expiration?: number | null;
  /** Specifies type of secret */
  type: SecretTypes;
}

/** The Create Sign Up Custom Field Options Request class */
export interface CreateSignUpCustomFieldOptionsRequest {
  /** Specifies if the users are allowed to enter the claim at the time of signup. */
  enabled: boolean;
  /** Specifies if the claim is required at the time of signup. */
  required: boolean;
  /** Specifies the name for the claim. */
  claim_name: string;
  /** Specifies the claim value type. */
  value_type: ValueTypes;
  /** Specifies the label to be used for the claim at the time of signup. */
  label: string;
}

/** Create Certificate Request. */
export interface CreateTrustStoreCertificateRequest {
  /** Specifies if the certificate is enabled. */
  enabled: boolean;
  /** Certificate Value. */
  value: string;
}

/** Create Revocation Request. */
export interface CreateTrustStoreRevocationRequest {
  /** Specifies if the certificate is enabled. */
  enabled: boolean;
  /** Certificate Crl Value. */
  value: string;
}

/** * **numeric** */
export const DeviceFlowCodeTypes = {
  Numeric: 'numeric',
} as const;

export type DeviceFlowCodeTypes =
  typeof DeviceFlowCodeTypes[keyof typeof DeviceFlowCodeTypes];

/** The Device Flow Options response class */
export interface DeviceFlowOptions {
  /** Device Flow Code Length */
  code_length: number;
}

/** * **google**
 * * **apple**
 * * **facebook** */
export const ExternalIDPs = {
  Google: 'google',
  Apple: 'apple',
  Facebook: 'facebook',
} as const;

export type ExternalIDPs = typeof ExternalIDPs[keyof typeof ExternalIDPs];

/** The Apple Provider Options response class */
export interface ExternalProviderAppleOptions {
  /** Enable External Provider Sign-in */
  enable_sign_in: boolean;
  /** Enable External Provider Sign-up */
  enable_sign_up: boolean;
  /** If set to true, will sync the profile with each login */
  sync_user_profile_always: boolean;
  /** Specifies whether the tokens issued by the the provider be saved */
  save_tokens: boolean;
  /** Client Id issued for the customer by provider */
  client_id: string;
  /** Client Secret issued for the customer by provider */
  client_secret: string;
  /** List of provider scopes to be obtained */
  scopes?: string[] | null;
  /** Specifies if we should trust the email verified scope received from the external provider. */
  trust_email_verified_scope: boolean;
  /** Apple generated teamId */
  team_id: string;
  /** Apple generated keyId */
  key_id: string;
}

/** The Facebook Provider Options response class */
export interface ExternalProviderFacebookOptions {
  /** Enable External Provider Sign-in */
  enable_sign_in: boolean;
  /** Enable External Provider Sign-up */
  enable_sign_up: boolean;
  /** If set to true, will sync the profile with each login */
  sync_user_profile_always: boolean;
  /** Specifies whether the tokens issued by the the provider be saved */
  save_tokens: boolean;
  /** Client Id issued for the customer by provider */
  client_id: string;
  /** Client Secret issued for the customer by provider */
  client_secret: string;
  /** List of provider scopes to be obtained */
  scopes?: string[] | null;
  /** Specifies if we should trust the email verified scope received from the external provider. */
  trust_email_verified_scope: boolean;
  /** Required claims from facebook */
  fields?: string[] | null;
}

/** The Google Provider Options response class */
export interface ExternalProviderGoogleOptions {
  /** Enable External Provider Sign-in */
  enable_sign_in: boolean;
  /** Enable External Provider Sign-up */
  enable_sign_up: boolean;
  /** If set to true, will sync the profile with each login */
  sync_user_profile_always: boolean;
  /** Specifies whether the tokens issued by the the provider be saved */
  save_tokens: boolean;
  /** Client Id issued for the customer by provider */
  client_id: string;
  /** Client Secret issued for the customer by provider */
  client_secret: string;
  /** List of provider scopes to be obtained */
  scopes?: string[] | null;
  /** Specifies if we should trust the email verified scope received from the external provider. */
  trust_email_verified_scope: boolean;
}

/** The External Provider Options response class */
export interface ExternalProviderOptions {
  /** Google's ID Provider settings */
  google?: ExternalProviderGoogleOptions | null;
  /** Apple's ID Provider Settings */
  apple?: ExternalProviderAppleOptions | null;
  /** Facebook's Provider Settings */
  facebook?: ExternalProviderFacebookOptions | null;
}

/** * **implicit**
 * * **hybrid**
 * * **authorization_code**
 * * **client_credentials**
 * * **password**
 * * **device_code** */
export const GrantTypes = {
  Implicit: 'implicit',
  Hybrid: 'hybrid',
  AuthorizationCode: 'authorization_code',
  ClientCredentials: 'client_credentials',
  Password: 'password',
  DeviceCode: 'device_code',
} as const;

export type GrantTypes = typeof GrantTypes[keyof typeof GrantTypes];

/** * **mono_cloud**
 * * **google**
 * * **apple**
 * * **facebook** */
export const IDPs = {
  MonoCloud: 'mono_cloud',
  Google: 'google',
  Apple: 'apple',
  Facebook: 'facebook',
} as const;

export type IDPs = typeof IDPs[keyof typeof IDPs];

/** The Identity Resource response class */
export interface IdentityResource {
  /** Unique ID of the Resource */
  id: string;
  /** Specifies if the resource is enabled. */
  enabled: boolean;
  /** The unique name of the resource. This is the value a client will use for the scope parameter in the authorize request. */
  name: string;
  /** Display Name for the Resource */
  display_name?: string | null;
  /** A brief description about the Resource */
  description?: string | null;
  /** Specifies whether this resource is shown in the discovery document. */
  show_in_discovery_document: boolean;
  /** List of associated user claim types that should be included in the Access token. */
  user_claims: string[];
  /** Specifies the creation time of the resource (in Epoch). */
  creation_time: number;
  /** Specifies the last update time of the resource (in Epoch). */
  last_updated: number;
  /** Specifies whether the user can de-select the scope on the consent screen (if such a feature is implemented in the consent screen). */
  required: boolean;
  /** Specifies whether the consent screen will emphasize this scope (if such a feature is implemented in the consent screen). Use this setting for sensitive or important scopes. */
  emphasize: boolean;
  /** Specifies whether it's a built-in identity resource. */
  readonly is_default: boolean;
}

/** The KeyMaterial Response class */
export interface KeyMaterial {
  /** Unique identifier of the key. */
  id: string;
  /** Specifies the type of algorithm used for signing. */
  signing_algorithm: SigningAlgorithms;
  /** Specifies whether the key is current default. */
  is_current: boolean;
  /** Specifies whether the key is system generated or not. */
  is_system_generated: boolean;
  /** Specifies the current use of the key. */
  use: KeyMaterialUses;
  /** Specifies the use for which the key was created. */
  original_use: KeyMaterialUses;
  /** Specifies the type of key. */
  key_type: KeyMaterialTypes;
  /** Specifies the creation time of the key (in Epoch). */
  creation_time: number;
  /** Specifies the time ( in Epoch ) from which the key is valid. */
  valid_from: number;
  /** Specifies the time ( in Epoch ) upto which the key is valid. */
  valid_to?: number | null;
  /** Specifies the revocation time of the key ( in Epoch ). */
  revocation_date?: number | null;
  /** Specifies the time ( in Epoch ) at which the key was rotated. */
  rotation_date?: number | null;
}

/** Specifies the type of the key
 * * **x509**
 * * **jwk**
 * * **ecdsa**
 * * **rsa** */
export const KeyMaterialTypes = {
  X509: 'x509',
  Jwk: 'jwk',
  Ecdsa: 'ecdsa',
  Rsa: 'rsa',
} as const;

export type KeyMaterialTypes =
  typeof KeyMaterialTypes[keyof typeof KeyMaterialTypes];

/** Specifies the purpose / use of the key
 * * **signing** - The key can be used for signing new tokens.
 * * **validation** - The key can be used for validating the tokens. */
export const KeyMaterialUses = {
  Signing: 'signing',
  Validation: 'validation',
} as const;

export type KeyMaterialUses =
  typeof KeyMaterialUses[keyof typeof KeyMaterialUses];

/** * **english_us** */
export const Languages = {
  EnglishUs: 'english_us',
} as const;

export type Languages = typeof Languages[keyof typeof Languages];

/** The Log Summary response class. */
export interface Log {
  id: string;
  category: LogEventCategories;
  event_id: LogEventIds;
  event_type: LogEventTypes;
  local_ip_address?: string | null;
  message?: string | null;
  name: string;
  process_id?: number | null;
  remote_ip_address?: string | null;
  time_stamp?: number | null;
  trace_id?: string | null;
  user_agent?: string | null;
  client_id?: string | null;
  client_name?: string | null;
  user_id?: string | null;
  username?: string | null;
  scheme?: string | null;
  scheme_user_id?: string | null;
  context: any;
}

/** * **authentication**
 * * **token**
 * * **grants**
 * * **error**
 * * **device**
 * * **notifications** */
export const LogEventCategories = {
  Authentication: 'authentication',
  Token: 'token',
  Grants: 'grants',
  Error: 'error',
  Device: 'device',
  Notifications: 'notifications',
} as const;

export type LogEventCategories =
  typeof LogEventCategories[keyof typeof LogEventCategories];

/** * **authorization_success**
 * * **authorization_failure**
 * * **resource_owner_authentication_success**
 * * **resource_owner_authentication_failure**
 * * **client_authentication_success**
 * * **client_authentication_failure**
 * * **api_authentication_success**
 * * **api_authentication_failure**
 * * **user_logout_success**
 * * **user_sign_in_failure**
 * * **user_sign_in_success**
 * * **user_account_blocked**
 * * **user_account_ip_blocked**
 * * **user_account_unblocked**
 * * **user_account_ip_unblocked**
 * * **user_account_ip_unblocked_all**
 * * **user_password_reset_success**
 * * **user_session_created**
 * * **user_session_renewed**
 * * **user_session_removed**
 * * **user_sign_up_success**
 * * **user_new_authentication_method_added**
 * * **token_issued_success**
 * * **token_issued_failure**
 * * **token_revoked_success**
 * * **token_introspection_success**
 * * **token_introspection_failure**
 * * **unhandled_exception**
 * * **invalid_client_configuration**
 * * **consent_granted**
 * * **consent_denied**
 * * **grants_revoked**
 * * **device_authorization_success**
 * * **device_authorization_failure**
 * * **passwordless_sign_in_notification_sent_event**
 * * **sign_up_verification_notification_sent_event**
 * * **user_password_reset_notification_sent** */
export const LogEventIds = {
  AuthorizationSuccess: 'authorization_success',
  AuthorizationFailure: 'authorization_failure',
  ResourceOwnerAuthenticationSuccess: 'resource_owner_authentication_success',
  ResourceOwnerAuthenticationFailure: 'resource_owner_authentication_failure',
  ClientAuthenticationSuccess: 'client_authentication_success',
  ClientAuthenticationFailure: 'client_authentication_failure',
  ApiAuthenticationSuccess: 'api_authentication_success',
  ApiAuthenticationFailure: 'api_authentication_failure',
  UserLogoutSuccess: 'user_logout_success',
  UserLoginSuccess: 'user_login_success',
  UserLoginFailure: 'user_login_failure',
  UserAccountBlocked: 'user_account_blocked',
  UserAccountIpBlocked: 'user_account_ip_blocked',
  UserAccountUnblocked: 'user_account_unblocked',
  UserAccountIpUnblocked: 'user_account_ip_unblocked',
  UserAccountIpUnblockedAll: 'user_account_ip_unblocked_all',
  UserPasswordReset: 'user_password_reset',
  UserSessionCreated: 'user_session_created',
  UserSessionRenewed: 'user_session_renewed',
  UserSessionRemoved: 'user_session_removed',
  TokenIssuedSuccess: 'token_issued_success',
  TokenIssuedFailure: 'token_issued_failure',
  TokenRevokedSuccess: 'token_revoked_success',
  TokenIntrospectionSuccess: 'token_introspection_success',
  TokenIntrospectionFailure: 'token_introspection_failure',
  UnhandledException: 'unhandled_exception',
  InvalidClientConfiguration: 'invalid_client_configuration',
  ConsentGranted: 'consent_granted',
  ConsentDenied: 'consent_denied',
  GrantsRevoked: 'grants_revoked',
  DeviceAuthorizationSuccess: 'device_authorization_success',
  DeviceAuthorizationFailure: 'device_authorization_failure',
  PasswordlessLoginSentEvent: 'passwordless_login_sent_event',
} as const;

export type LogEventIds = typeof LogEventIds[keyof typeof LogEventIds];

/** * **success**
 * * **failure**
 * * **information**
 * * **error** */
export const LogEventTypes = {
  Success: 'success',
  Failure: 'failure',
  Information: 'information',
  Error: 'error',
} as const;

export type LogEventTypes = typeof LogEventTypes[keyof typeof LogEventTypes];

/** The Log Summary response class */
export interface LogSummary {
  id: string;
  category: LogEventCategories;
  event_type: LogEventTypes;
  name: string;
  time_stamp?: number | null;
}

/** The Logout Options response class */
export interface LogoutOptions {
  /** Specifies whether the user should be automatically redirected to the client specified URL after sign out. */
  automatic_redirect_after_logout: boolean;
  /** Specifies whether there should be a prompt before log out. */
  show_logout_prompt: boolean;
}

/** * **not_allowed**
 * * **create_new_account**
 * * **merge_accounts**
 * * **login_prompt** */
export const MergeModes = {
  NotAllowed: 'not_allowed',
  CreateNewAccount: 'create_new_account',
  MergeAccounts: 'merge_accounts',
  LoginPrompt: 'login_prompt',
} as const;

export type MergeModes = typeof MergeModes[keyof typeof MergeModes];

export interface ProblemDetails {
  type?: string | null;
  title?: string | null;
  status?: number | null;
  detail?: string | null;
  instance?: string | null;

  [key: string]: any;
}

/** The Mtls Options response class */
export interface MtlsOptions {
  /** Enable MTLS */
  enabled: boolean;
  /** Specifies the permitted certificate types. */
  allowed_certificate_types: CertificateTypes;
  /** If set to true, will validates whether the certificate is intended for authentication */
  validate_certificate_use: boolean;
  /** If set to true, will verify the certificate's validity period */
  validate_validity_period: boolean;
  /** Specifies the type of revocation check. */
  revocation_mode: X509RevocationMode;
}

/** The Pagination Header response class */
export interface PaginationHeader {
  /** Page Size */
  page_size: number;
  /** Current Page */
  current_page: number;
  /** Total Number of Items */
  total_count: number;
  /** Specfies whether there is a previous page */
  has_previous: boolean;
  /** Specfies whether there is a next page */
  has_next: boolean;
}

/** * **off**
 * * **date**
 * * **count**
 * * **date_and_count** */
export const PasswordRestrictionModes = {
  Off: 'off',
  Date: 'date',
  Count: 'count',
  DateAndCount: 'date_and_count',
} as const;

export type PasswordRestrictionModes =
  typeof PasswordRestrictionModes[keyof typeof PasswordRestrictionModes];

/** The Patch Account Merging Options Request class */
export interface PatchAccountMergingOptionsRequest {
  /** Specifies account merge mode when the incoming email from an external provider is verified and the existing account's email is also verified. */
  external_verified_existing_verified?: MergeModes;
  /** Specifies account merge mode when the incoming email from an external provider is verified and the existing account's email is unverified. */
  external_verified_existing_unverified?: MergeModes;
  /** Specifies account merge mode when the incoming email from an external provider is unverified and the existing account's email is verified. */
  external_unverified_existing_verified?: MergeModes;
  /** Specifies account merge mode when the incoming email from an external provider is unverified and the existing account's email is also unverified. */
  external_unverified_existing_unverified?: MergeModes;
  /** Specifies account merge mode when the login is a passwordless one and the existing (external) account's email/phone is the same but unverified. */
  passwordless_verified_existing_external_unverified?: MergeModes;
  /** Specifies account merge mode when the login is a passwordless one and the existing (local) account's email/phone is the same but unverified. */
  passwordless_verified_existing_local_unverified?: MergeModes;
}

/** The Patch Account Protection Options Request class */
export interface PatchAccountProtectionOptionsRequest {
  /** Account Protection's User Lockout Options */
  user_lockout?: PatchAccountProtectionUserLockoutOptionsRequest;
}

/** The Patch Account Protection User Lockout Options Request class */
export interface PatchAccountProtectionUserLockoutOptionsRequest {
  /** Enable User Lockout */
  enabled?: boolean;
  /** Maximum Number of failed attempts a user account can have before the user is locked out. The specified value is inclusive of the count. */
  max_failed_access_attempts?: number;
  /** Lockout duration in minutes once a user account has been locked out. */
  user_lockout_time_span?: number;
  /** Lockout duration in minutes once an Ip address has been locked out. */
  ip_lockout_time_span?: number;
  /** Whitelisted IP Addresses where the Account Protection does not trigger. */
  allowed_ips?: string[] | null;
  /** Types of Lockouts to enable per User Account */
  lockout_type?: UserLockoutTypes;
}

/** The Patch Api Resource class */
export interface PatchApiResourceRequest {
  /** Specifies if the resource is enabled. */
  enabled?: boolean;
  /** The unique name of the resource. This is the value a client will use for the scope parameter in the authorize request. */
  name?: string;
  /** Display Name for the Resource */
  display_name?: string | null;
  /** A brief description about the Resource */
  description?: string | null;
  /** Specifies whether this resource is shown in the discovery document. */
  show_in_discovery_document?: boolean;
  /** List of associated user claim types that should be included in the Access token. */
  user_claims?: string[];
  /** List of API scope names. */
  scopes?: string[];
}

/** The Patch Api Scope class */
export interface PatchApiScopeRequest {
  /** Specifies if the resource is enabled. */
  enabled?: boolean;
  /** The unique name of the resource. This is the value a client will use for the scope parameter in the authorize request. */
  name?: string;
  /** Display Name for the Resource */
  display_name?: string | null;
  /** A brief description about the Resource */
  description?: string | null;
  /** Specifies whether this resource is shown in the discovery document. */
  show_in_discovery_document?: boolean;
  /** List of associated user claim types that should be included in the Access token. */
  user_claims?: string[];
  /** Specifies whether the user can de-select the scope on the consent screen (if such a feature is implemented in the consent screen). */
  required?: boolean;
  /** Specifies whether the consent screen will emphasize this scope (if such a feature is implemented in the consent screen). Use this setting for sensitive or important scopes. */
  emphasize?: boolean;
}

/** The Patch General Email Authentication Options Request class */
export interface PatchAuthenticationGeneralEmailOptionsRequest {
  /** Specifies if the users are allowed to sign-in using an email */
  enable_sign_in?: boolean;
  /** Specifies if the users are allowed to enter an email at the time of registration. */
  show_at_sign_up?: boolean;
  /** Specifies if the email is required at the time of registration. */
  required_at_sign_up?: boolean;
  /** Email verification related to Sign Up */
  verification?: PatchAuthenticationGeneralEmailVerificationOptionsRequest;
}

/** The Patch General Email Verification Options Request class */
export interface PatchAuthenticationGeneralEmailVerificationOptionsRequest {
  /** Specifies whether the email should be verified at registration. */
  verify_at_sign_up?: boolean;
  /** Email expiration time in seconds. */
  expiration?: number;
  /** If Email Code is Selected, Code length is chosen from this option */
  code_length?: number;
}

/** The Patch General Authentication Options Request class */
export interface PatchAuthenticationGeneralOptionsOptionsRequest {
  /** Specifies whether secure mode is enabled */
  enable_secure_mode?: boolean;
  /** Since access tokens have finite lifetimes, refresh tokens allow requesting new access tokens without user interaction. The clients need to be explicitly authorized by the User to request for refresh tokens. This option specifies if all the clients need Consent from the User for Offline Access. */
  consent_required_for_offline_access?: boolean;
  /** Show RememberMe Checkbox on the SignIn Screen */
  allow_remember_me?: boolean;
  /** RememberMe Duration in minutes */
  remember_me_duration?: number;
  /** General Email Requirement Options for Users */
  email?: PatchAuthenticationGeneralEmailOptionsRequest;
  /** General Phone Requirement Options for Users */
  phone?: PatchAuthenticationGeneralPhoneOptionsRequest;
  /** General Username Requirement Options for Users */
  username?: PatchAuthenticationGeneralUsernameOptionsRequest;
}

/** The Patch General Phone Authentication Options Request class */
export interface PatchAuthenticationGeneralPhoneOptionsRequest {
  /** Specifies if the users are allowed to sign-in using a phone number */
  enable_sign_in?: boolean;
  /** Specifies if the users are allowed to enter a phone number at the time of registration. */
  show_at_sign_up?: boolean;
  /** Specifies if the phone number is required at the time of registration. */
  required_at_sign_up?: boolean;
  /** Sms verification related to Sign Up */
  verification?: PatchAuthenticationGeneralPhoneVerificationOptionsRequest;
}

/** The Patch General Phone Verification Options Request class */
export interface PatchAuthenticationGeneralPhoneVerificationOptionsRequest {
  /** Specifies whether the phone should be verified at registration. */
  verify_at_sign_up?: boolean;
  /** Sms verification expiration time in seconds. */
  expiration?: number;
  /** Sms Code length is chosen from this option */
  code_length?: number;
}

/** The Patch General Username Authentication Options Request class */
export interface PatchAuthenticationGeneralUsernameOptionsRequest {
  /** Specifies if the users are allowed to sign-in using a username */
  enable_sign_in?: boolean;
  /** Specifies if the users are allowed to enter a username at the time of registration. */
  show_at_sign_up?: boolean;
  /** Specifies if the username is required at the time of registration. */
  required_at_sign_up?: boolean;
  /** Specifies the minimum length required for the username. */
  minimum_length?: number;
}

/** The Patch Authentication Method Email Code Options Request class */
export interface PatchAuthenticationMethodEmailCodeOptionsRequest {
  /** Enable Email Code Sign-in */
  enable_sign_in?: boolean;
  /** Enable Email Code Sign-up */
  enable_sign_up?: boolean;
  /** Specifies the expiration time in seconds for the OTP to be generated */
  otp_expiry?: number;
  /** Specifies the OTP character length */
  otp_length?: number;
}

/** The Patch Authentication Method Magic Link Options Request class */
export interface PatchAuthenticationMethodMagicLinkOptionsRequest {
  /** Enable Magic Link Sign-in */
  enable_sign_in?: boolean;
  /** Enable Magic Link Sign-up */
  enable_sign_up?: boolean;
  /** Specifies the expiration time in seconds for the OTP to be generated */
  link_expiry?: number;
}

/** The Patch Authentication Method Options Request class */
export interface PatchAuthenticationMethodOptionsRequest {
  /** Password Authentication Method Settings */
  password?: PatchAuthenticationMethodPasswordOptionsRequest;
  /** Sms Code Authentication Method Settings */
  sms_code?: PatchAuthenticationMethodSmsCodeOptionsRequest;
  /** Magic Link Authentication Method Settings */
  magic_link?: PatchAuthenticationMethodMagicLinkOptionsRequest;
  /** Email Code Authentication Method Settings */
  email_code?: PatchAuthenticationMethodEmailCodeOptionsRequest;
}

/** The Patch Authentication Method Password Expiration Options Request class */
export interface PatchAuthenticationMethodPasswordExpirationOptionsRequest {
  /** Specifies the expiration mode. */
  enabled?: boolean;
  /** Specifies the password expiration period in minutes. */
  expiration_period?: number;
}

/** The Patch Authentication Method Password Options Request class */
export interface PatchAuthenticationMethodPasswordOptionsRequest {
  /** Enable Password Sign-in */
  enable_sign_in?: boolean;
  /** Enable Password Sign-up */
  enable_sign_up?: boolean;
  /** Password Strength Options */
  strength?: PatchAuthenticationMethodPasswordStrengthOptionsRequest;
  /** Password Re-use Options */
  reuse?: PatchAuthenticationMethodPasswordReuseOptionsRequest;
  /** Password Expiration Options */
  expiration?: PatchAuthenticationMethodPasswordExpirationOptionsRequest;
}

/** The Patch Authentication Method Password Reuse Options Request class */
export interface PatchAuthenticationMethodPasswordReuseOptionsRequest {
  /** Specifies if there should be any restriction for password reuse. */
  restriction_mode?: PasswordRestrictionModes;
  /** Specifies the time in minutes in which the password cannot be reused. */
  restriction_period?: number;
  /** Specifies the number of previous passwords which cannot be reused. */
  restriction_count?: number;
}

/** The Patch Authentication Method Password Strength Options Request class */
export interface PatchAuthenticationMethodPasswordStrengthOptionsRequest {
  /** Specifies the minimum character length of password */
  minimum_length?: number;
  /** Specifies the whether a non alphanumeric character is required in the password. */
  require_non_alphanumeric_character?: boolean;
  /** Specifies the whether a digit is required in the password. */
  require_digit?: boolean;
  /** Specifies the whether a lowercase character is required in the password. */
  require_lowercase_character?: boolean;
  /** Specifies the whether a uppercase character is required in the password. */
  require_uppercase_character?: boolean;
  /** Specifies the number of unique characters required in the password. */
  required_unique_characters_count?: number;
}

/** The Patch Authentication Method Sms Code Options Request class */
export interface PatchAuthenticationMethodSmsCodeOptionsRequest {
  /** Enable Sms Code Sign-in */
  enable_sign_in?: boolean;
  /** Enable Sms Code Sign-up */
  enable_sign_up?: boolean;
  /** Specifies the expiration time in seconds for the OTP to be generated */
  otp_expiry?: number;
  /** Specifies the OTP character length */
  otp_length?: number;
}

/** The Patch Authentication Options Request class */
export interface PatchAuthenticationOptionsRequest {
  /** Account Protection Options */
  account_protection?: PatchAccountProtectionOptionsRequest;
  /** Authentication Method Options */
  authentication_methods?: PatchAuthenticationMethodOptionsRequest;
  /** External Provider Options */
  external_providers?: PatchExternalProviderOptionsRequest;
  /** Authentication General Options */
  general?: PatchAuthenticationGeneralOptionsOptionsRequest;
  /** Logout Options */
  logout?: PatchLogoutOptionsRequest;
  /** Sign-up Options */
  sign_up?: PatchSignUpOptionsRequest;
}

/** The Patch Branding Email Options Request class */
export interface PatchBrandingEmailOptionsRequest {
  /** Magic Link SignIn Branding Options */
  magic_link_sign_in?: PatchBrandingGenericCustomEmailOptionsRequest | null;
  /** Email Code SignIn Branding Options */
  email_code_sign_in?: PatchBrandingGenericCustomEmailOptionsRequest | null;
  /** Magic Link Verification Branding Options */
  magic_link_verification?: PatchBrandingGenericCustomEmailOptionsRequest | null;
  /** Email Code Verification Branding Options */
  email_code_verification?: PatchBrandingGenericCustomEmailOptionsRequest | null;
  /** Welcome Email Branding Options */
  welcome?: PatchBrandingGenericCustomEmailOptionsRequest | null;
  /** User Lockout Branding Options */
  user_lockout?: PatchBrandingGenericCustomEmailOptionsRequest | null;
  /** Reset Password Branding Options */
  reset_password?: PatchBrandingGenericCustomEmailOptionsRequest | null;
  /** Password Updated Branding Options */
  password_updated?: PatchBrandingGenericCustomEmailOptionsRequest | null;
}

/** The Patch Generic Branding Custom Email Options Request class */
export interface PatchBrandingGenericCustomEmailOptionsRequest {
  /** From Email Address */
  from_email?: string | null;
  /** From Name */
  from_name?: string | null;
  /** Specifies the text to be used as the email subject */
  subject?: string | null;
  /** Specifies the URI for the custom template to be used */
  template_uri?: string | null;
}

/** The Patch Generic Branding Custom Sms Options Request class */
export interface PatchBrandingGenericCustomSmsOptionsRequest {
  /** Custom LiquidJS template for the SMS */
  template: string;
}

/** The Patch Branding Options Request class */
export interface PatchBrandingOptionsRequest {
  /** Email Branding Options */
  email?: PatchBrandingEmailOptionsRequest;
  /** Sms Branding Options */
  sms?: PatchBrandingSmsOptionsRequest;
  /** Page Branding Options */
  page?: PatchBrandingPageOptionsRequest;
  /** Project Branding Options */
  project?: PatchBrandingProjectOptionsRequest;
}

/** The Patch Branding Page Options Request class */
export interface PatchBrandingPageOptionsRequest {
  /** Specifies the background css string to be used for pages */
  background?: string;
  /** Specifies the error colour to be used for pages */
  error_color?: string;
  /** Specifies Uri used for the favicon */
  favicon_uri?: string | null;
  /** Specifies Uri used for the logo */
  logo_uri?: string | null;
  /** Specifies the primary colour to be used for pages */
  primary_color?: string;
  /** Sign In Page Branding Options */
  sign_in?: PatchBrandingSignInPageOptionsRequest;
}

/** The Patch Branding Project Options Request class */
export interface PatchBrandingProjectOptionsRequest {
  /** Project Url */
  default_url?: string | null;
  /** Privacy Url */
  privacy_url?: string | null;
  /** Support Url */
  support_url?: string | null;
  /** Support Email */
  support_email?: string | null;
  /** Terms Url */
  terms_url?: string | null;
}

/** The Patch SignIn Page Options Request class */
export interface PatchBrandingSignInPageOptionsRequest {
  /** If enabled password will be prompted on the same screen as the username. */
  prompt_password_on_initial_screen?: boolean;
  /** If enabled, External SigIn Methods are shown on top and the Primary SigIn method is shown on bottom. */
  external_sign_in_methods_first?: boolean;
  /** Order of the External SigIn methods buttons */
  external_sign_in_methods_order?: ExternalIDPs[];
}

/** The Patch Branding Sms Options Request class */
export interface PatchBrandingSmsOptionsRequest {
  /** Sms Code SignIn Branding Options */
  sms_code_sign_in?: PatchBrandingGenericCustomSmsOptionsRequest | null;
  /** Sms Code Verification Branding Options */
  sms_code_verification?: PatchBrandingGenericCustomSmsOptionsRequest | null;
}

/** The Patch Client class */
export interface PatchClientRequest {
  /** Specifies if client is enabled. */
  enabled?: boolean;
  /** If set to false, no client secret is needed to request tokens at the token endpoint */
  require_client_secret?: boolean;
  /** The name of the client */
  client_name?: string;
  /** A brief description of the client. */
  description?: string | null;
  /** URI for providing further information about client */
  client_uri?: string | null;
  /** URI to client logo */
  logo_uri?: string | null;
  /** Specifies whether a consent screen is required to be shown */
  require_consent?: boolean;
  /** Specifies whether user can choose to store consent decisions */
  remember_consent?: RememberConsentTypes;
  /** Specifies whether or not the user is allowed to select the scopes on the consent screen */
  show_consent_scope_selection?: boolean;
  /** When requesting both an id token and access token, should the user claims always be added to the id token instead of requiring the client to use the userinfo endpoint. */
  always_include_user_claims_in_id_token?: boolean;
  /** Specifies the allowed grant types (legal combinations is required). */
  allowed_grant_types?: GrantTypes[];
  /** Specifies whether a proof key is required for authorization code based token requests */
  require_pkce?: boolean;
  /** Specifies whether a proof key can be sent using plain method (not recommended to be set to `true`) */
  allow_plain_text_pkce?: boolean;
  /** Specifies whether this client needs to wrap the authorize request parameters in a JWT */
  require_request_object?: boolean;
  /** Controls whether access tokens are transmitted via the browser for this client. This can prevent accidental leakage of access tokens when multiple response types are allowed. */
  allow_access_tokens_via_browser?: boolean;
  /** Specifies allowed URIs to return tokens or authorization codes to */
  redirect_uris?: string[];
  /** Specifies allowed URIs to redirect to after logout */
  post_logout_redirect_uris?: string[];
  /** Specifies logout URI at client for HTTP front-channel based logout. */
  front_channel_logout_uri?: string | null;
  /** Specifies if the user's session id should be sent to the FrontChannelLogoutUri */
  front_channel_logout_session_required?: boolean;
  /** Specifies logout URI at client for HTTP back-channel based logout. */
  back_channel_logout_uri?: string | null;
  /** Specifies if the user's session id should be sent to the BackChannelLogoutUri */
  back_channel_logout_session_required?: boolean;
  /** Specifies whether the client can request refresh tokens (by requesting the offline_access scope) */
  allow_offline_access?: boolean;
  /** Specifies the scopes the client is allowed to access (by default a client has no access to any resources) */
  allowed_scopes?: string[];
  /** Lifetime of identity token in seconds */
  identity_token_lifetime?: number;
  /** Lifetime of access token in seconds */
  access_token_lifetime?: number;
  /** Lifetime of authorization code in seconds */
  authorization_code_lifetime?: number;
  /** Lifetime of a user consent in seconds */
  consent_lifetime?: number | null;
  /** Maximum lifetime of a refresh token in seconds */
  absolute_refresh_token_lifetime?: number;
  /** Sliding lifetime of a refresh token in seconds */
  sliding_refresh_token_lifetime?: number;
  /** Specified the validity of a refresh token */
  refresh_token_usage?: RefreshTokenUsageTypes;
  /** Specifies a value indicating whether the access token (and its claims) should be updated on a refresh token request */
  update_access_token_claims_on_refresh?: boolean;
  /** Specifies how the refresh token expires */
  refresh_token_expiration?: RefreshTokenExpirationTypes;
  /** Specifies whether the access token is a reference token or a self contained JWT token. */
  access_token_type?: AccessTokenTypes;
  /** Specifies whether the local login (Username / Password) is allowed for this client. */
  enable_local_login?: boolean;
  /** Specifies which authentication providers can be used with this client (if list is empty all providers are allowed) */
  identity_provider_restrictions?: IDPs[];
  /** Specifies which authentication methods can be used with this client (if list is empty all methods are allowed) */
  authentication_method_restrictions?: AuthenticationMethods[];
  /** Specifies whether JWT access tokens should include an identifier */
  include_jwt_id?: boolean;
  /** Allows settings claims for the client (will be included in the access token). */
  claims?: CreateClaimRequest[];
  /** Specifies whether client claims should be always included in the access tokens - or only for client credentials flow. */
  always_send_client_claims?: boolean;
  /** If set, the client claim will be prefixed with this value */
  client_claims_prefix?: string | null;
  /** The allowed CORS origins for JavaScript clients. */
  allowed_cors_origins?: string[];
  /** The maximum duration (in seconds) since the last time the user authenticated. You can adjust the lifetime of a session token to control when and how often a user is required to reenter credentials instead of being silently authenticated, when using a web application. */
  user_sso_lifetime?: number | null;
  /** Specifies the type of code that will be generated for the device code flow */
  user_code_type?: DeviceFlowCodeTypes;
  /** Specifies the device code lifetime. */
  device_code_lifetime?: number;
}

/** The Patch Communication Email Options Request class */
export interface PatchCommunicationEmailOptionsRequest {
  /** SendGrid Email Options */
  send_grid?: PatchCommunicationEmailSendGridOptionsRequest | null;
  /** Use the the internal keys to send Emails */
  use_internal_keys?: boolean;
}

/** The Patch Communication Email SendGrid Options Request class */
export interface PatchCommunicationEmailSendGridOptionsRequest {
  /** SendGrid Api Key */
  api_key?: string;
}

/** The Patch Communication Options Request class */
export interface PatchCommunicationOptionsRequest {
  /** Email - Communication Options */
  email?: PatchCommunicationEmailOptionsRequest;
  /** Sms - Communication Options */
  sms?: PatchCommunicationSmsOptionsRequest;
}

/** The Patch Communication Sms Options Request class */
export interface PatchCommunicationSmsOptionsRequest {
  /** Twilio Options */
  twilio?: PatchCommunicationSmsTwilioOptionsRequest | null;
  /** Use the the internal keys to send Sms */
  use_internal_keys?: boolean;
}

/** The Patch Communication Sms Twilio Options Request class */
export interface PatchCommunicationSmsTwilioOptionsRequest {
  /** Twilio SID */
  sid?: string;
  /** Twilio Auth Token */
  auth_token?: string;
  /** Twilio Messaging SID */
  messaging_sid?: string | null;
  /** Twilio From */
  from?: string | null;
}

/** The Patch Device Flow Options Request class */
export interface PatchDeviceFlowOptionsRequest {
  /** Device Flow Code Length */
  code_length?: number;
}

/** The Patch Apple Provider Options Request class */
export interface PatchExternalProviderAppleOptionsRequest {
  /** Enable External Provider Sign-in */
  enable_sign_in?: boolean;
  /** Enable External Provider Sign-up */
  enable_sign_up?: boolean;
  /** If set to true, will sync the profile with each login */
  sync_user_profile_always?: boolean;
  /** Specifies whether the tokens issued by the the provider be saved */
  save_tokens?: boolean;
  /** Client Id issued for the customer by provider */
  client_id?: string;
  /** Client Secret issued for the customer by provider */
  client_secret?: string;
  /** List of provider scopes to be obtained */
  scopes?: string[] | null;
  /** Specifies if we should trust the email verified scope received from the external provider. */
  trust_email_verified_scope?: boolean;
  /** Apple generated teamId */
  team_id?: string;
  /** Apple generated keyId */
  key_id?: string;
}

/** The Patch Facebook Provider Options Request class */
export interface PatchExternalProviderFacebookOptionsRequest {
  /** Enable External Provider Sign-in */
  enable_sign_in?: boolean;
  /** Enable External Provider Sign-up */
  enable_sign_up?: boolean;
  /** If set to true, will sync the profile with each login */
  sync_user_profile_always?: boolean;
  /** Specifies whether the tokens issued by the the provider be saved */
  save_tokens?: boolean;
  /** Client Id issued for the customer by provider */
  client_id?: string;
  /** Client Secret issued for the customer by provider */
  client_secret?: string;
  /** List of provider scopes to be obtained */
  scopes?: string[] | null;
  /** Specifies if we should trust the email verified scope received from the external provider. */
  trust_email_verified_scope?: boolean;
  /** Required claims from facebook */
  fields?: string[] | null;
}

/** The Patch Google Provider Options Request class */
export interface PatchExternalProviderGoogleOptionsRequest {
  /** Enable External Provider Sign-in */
  enable_sign_in?: boolean;
  /** Enable External Provider Sign-up */
  enable_sign_up?: boolean;
  /** If set to true, will sync the profile with each login */
  sync_user_profile_always?: boolean;
  /** Specifies whether the tokens issued by the the provider be saved */
  save_tokens?: boolean;
  /** Client Id issued for the customer by provider */
  client_id?: string;
  /** Client Secret issued for the customer by provider */
  client_secret?: string;
  /** List of provider scopes to be obtained */
  scopes?: string[] | null;
  /** Specifies if we should trust the email verified scope received from the external provider. */
  trust_email_verified_scope?: boolean;
}

/** The Patch Provider Options Request class */
export interface PatchExternalProviderOptionsRequest {
  /** Google's ID Provider settings */
  google?: PatchExternalProviderGoogleOptionsRequest | null;
  /** Apple's ID Provider Settings */
  apple?: PatchExternalProviderAppleOptionsRequest | null;
  /** Facebook's Provider Settings */
  facebook?: PatchExternalProviderFacebookOptionsRequest | null;
}

/** The Patch Identity Resource class */
export interface PatchIdentityResourceRequest {
  /** Specifies if the resource is enabled. */
  enabled?: boolean;
  /** The unique name of the resource. This is the value a client will use for the scope parameter in the authorize request. */
  name?: string;
  /** Display Name for the Resource */
  display_name?: string | null;
  /** A brief description about the Resource */
  description?: string | null;
  /** Specifies whether this resource is shown in the discovery document. */
  show_in_discovery_document?: boolean;
  /** List of associated user claim types that should be included in the Access token. */
  user_claims?: string[];
  /** Specifies whether the user can de-select the scope on the consent screen (if such a feature is implemented in the consent screen). */
  required?: boolean;
  /** Specifies whether the consent screen will emphasize this scope (if such a feature is implemented in the consent screen). Use this setting for sensitive or important scopes. */
  emphasize?: boolean;
}

/** The Patch Logout Options Request class */
export interface PatchLogoutOptionsRequest {
  /** Specifies whether the user should be automatically redirected to the client specified URL after sign out. */
  automatic_redirect_after_logout?: boolean;
  /** Specifies whether there should be a prompt before log out. */
  show_logout_prompt?: boolean;
}

/** The Patch Mtls Options Request class */
export interface PatchMtlsOptionsRequest {
  /** Enable MTLS */
  enabled?: boolean;
  /** Specifies the permitted certificate types. */
  allowed_certificate_types?: CertificateTypes;
  /** If set to true, will validates whether the certificate is intended for authentication */
  validate_certificate_use?: boolean;
  /** If set to true, will verify the certificate's validity period */
  validate_validity_period?: boolean;
  /** Specifies the type of revocation check. */
  revocation_mode?: X509RevocationMode;
}

/** The Patch SignUp Custom Field Options Request class */
export interface PatchSignUpCustomFieldOptionsRequest {
  /** Specifies if the users are allowed to enter the claim at the time of signup. */
  enabled?: boolean;
  /** Specifies if the claim is required at the time of signup. */
  required?: boolean;
  /** Specifies the name for the claim. */
  claim_name?: string;
  /** Specifies the claim value type. */
  value_type?: ValueTypes;
  /** Specifies the label to be used for the claim at the time of signup. */
  label?: string;
}

/** The Patch SignUp Options Request class */
export interface PatchSignUpOptionsRequest {
  /** Registration Account Merge Options */
  account_merging?: PatchAccountMergingOptionsRequest;
}

/** The Patch Tenant class */
export interface PatchTenantRequest {
  /** Project Name */
  project_name?: string;
}

/** The Patch Certificate class */
export interface PatchTrustStoreCertificateRequest {
  /** Specifies if the certificate is enabled. */
  enabled?: boolean;
}

/** The Patch Certificate Revocation class */
export interface PatchTrustStoreRevocationRequest {
  /** Specifies if the certificate is enabled. */
  enabled?: boolean;
}

/** * **sliding** - When refreshing the token, the lifetime of the refresh token will be renewed (by the amount specified in "Sliding Refresh Token Lifetime" parameter). The lifetime will not exceed the time specified in the "Absolute Refresh Token Lifetime" parameter
 * * **absolute** - The refresh token will expire on a fixed point in time (specified by the "Absolute Refresh Token Lifetime" parameter) */
export const RefreshTokenExpirationTypes = {
  Sliding: 'sliding',
  Absolute: 'absolute',
} as const;

export type RefreshTokenExpirationTypes =
  typeof RefreshTokenExpirationTypes[keyof typeof RefreshTokenExpirationTypes];

/** * **reuse** - The refresh token handle will stay the same when refreshing tokens
 * * **one_time_only** - The refresh token handle will be updated when refreshing tokens */
export const RefreshTokenUsageTypes = {
  Reuse: 'reuse',
  OneTimeOnly: 'one_time_only',
} as const;

export type RefreshTokenUsageTypes =
  typeof RefreshTokenUsageTypes[keyof typeof RefreshTokenUsageTypes];

/** * **never**
 * * **always**
 * * **user_selected** */
export const RememberConsentTypes = {
  Never: 'never',
  Always: 'always',
  UserSelected: 'user_selected',
} as const;

export type RememberConsentTypes =
  typeof RememberConsentTypes[keyof typeof RememberConsentTypes];

/** The Client Secret response class */
export interface Secret {
  /** Unique ID of the client secret */
  id: string;
  /** Brief description of the secret */
  description?: string | null;
  /** The expiration date of the secret (in Epoch) */
  expiration?: number | null;
  /** Specifies type of secret */
  type: SecretTypes;
  /** Specifies the creation time of the client secret (in Epoch). */
  creation_time: number;
  /** Specifies the last update time of the client secret (in Epoch). */
  last_updated: number;
}

/** * **shared_secret**
 * * **x509_thumbprint**
 * * **x509_name**
 * * **x509_certificate_base64**
 * * **jwk**
 * * **plain_text** */
export const SecretTypes = {
  SharedSecret: 'shared_secret',
  X509Thumbprint: 'x509_thumbprint',
  X509Name: 'x509_name',
  X509CertificateBase64: 'x509_certificate_base64',
  Jwk: 'jwk',
  PlainText: 'plain_text',
} as const;

export type SecretTypes = typeof SecretTypes[keyof typeof SecretTypes];

/** The Secret response class */
export interface SecretValue {
  /** Unique ID of the client secret */
  id: string;
  /** Brief description of the secret */
  description?: string | null;
  /** The secret */
  value: string;
  /** The expiration date of the secret (in Epoch) */
  expiration?: number | null;
  /** Specifies type of secret */
  type: SecretTypes;
  /** Specifies the creation time of the client secret (in Epoch). */
  creation_time: number;
  /** Specifies the last update time of the client secret (in Epoch). */
  last_updated: number;
}

/** The SignUp Custom Field Options response class */
export interface SignUpCustomFieldOptions {
  /** Specifies if the users are allowed to enter the claim at the time of signup. */
  enabled: boolean;
  /** Specifies if the claim is required at the time of signup. */
  required: boolean;
  /** Specifies the name for the claim. */
  claim_name: string;
  /** Specifies the claim value type. */
  value_type: ValueTypes;
  /** Specifies the label to be used for the claim at the time of signup. */
  label: string;
}

/** The SignUp Options response class */
export interface SignUpOptions {
  /** Registration Account Merge Options */
  account_merging: AccountMergingOptions;
  /** Registration Custom Fields Options */
  custom_fields: SignUpCustomFieldOptions[];
}

/** * **rs_256**
 * * **rs_384**
 * * **rs_512**
 * * **ps_256**
 * * **ps_384**
 * * **ps_512**
 * * **es_256**
 * * **es_384**
 * * **es_512** */
export const SigningAlgorithms = {
  Rs256: 'rs_256',
  Rs384: 'rs_384',
  Rs512: 'rs_512',
  Ps256: 'ps_256',
  Ps384: 'ps_384',
  Ps512: 'ps_512',
  Es256: 'es_256',
  Es384: 'es_384',
  Es512: 'es_512',
} as const;

export type SigningAlgorithms =
  typeof SigningAlgorithms[keyof typeof SigningAlgorithms];

/** The Tenants response class */
export interface Tenant {
  /** Tenant Id */
  id: string;
  /** If the domain is myapp, the full Auth server url will look like https://myapp.monocloud.com */
  domain_name: string;
  /** Project Name */
  project_name: string;
  /** Tenant Region */
  region: TenantRegion;
  /** Tenant's management Keys */
  management_keys: TenantManagementKeys;
  /** Specifies the creation time of the tenant (in Epoch). */
  creation_time: number;
  /** Specifies the last updated time of the tenant (in Epoch). */
  last_updated: number;
}

/** The Tenants Management Keys response class */
export interface TenantManagementKeys {
  /** Tenants Public Key */
  public_key: TenantPublicKey;
  /** List of Tenant's Private Keys */
  private_keys: TenantPrivateKey[];
}

/** The Tenants Private key Response Class */
export interface TenantPrivateKey {
  /** Id of the Key */
  key_id: string;
  /** Name Given by the customer (you) to identify the key */
  name?: string | null;
  scopes: string[];
  /** Specifies expiration of the key in Epoch */
  expires_at: number;
}

/** The Tenants Public key Response Class */
export interface TenantPublicKey {
  /** Id of the Key */
  key_id: string;
  /** Specifies expiration of the key */
  expires_at: number;
}

/** * **as**
 * * **eu**
 * * **us** */
export const TenantRegion = {
  As: 'as',
  Eu: 'eu',
  Us: 'us',
} as const;

export type TenantRegion = typeof TenantRegion[keyof typeof TenantRegion];

/** * **default** */
export const ThemeNames = {
  Default: 'default',
} as const;

export type ThemeNames = typeof ThemeNames[keyof typeof ThemeNames];

/** * **link**
 * * **code** */
export const TokenSendTypes = {
  Link: 'link',
  Code: 'code',
} as const;

export type TokenSendTypes = typeof TokenSendTypes[keyof typeof TokenSendTypes];

/** Trust Store Response */
export interface TrustStore {
  /** List of certificates. */
  certificates: TrustStoreCertificate[];
  /** List of certificate revocations. */
  revocations: TrustStoreRevocation[];
}

/** Trust Store Certificate Response */
export interface TrustStoreCertificate {
  /** Certificate Id. */
  id: string;
  /** Specifies if the certificate is enabled. */
  enabled: boolean;
  /** Certificate Value. */
  value: string;
}

/** Trust Store Certificate Revocation Response */
export interface TrustStoreRevocation {
  /** Certificate Id. */
  id: string;
  /** Specifies if the certificate is enabled. */
  enabled: boolean;
  /** Certificate Crl Value. */
  value: string;
}

/** The User Email response class */
export interface UserEmail {
  id: string;
  primary: boolean;
  id_ps: IDPs[];
  authentication_methods: AuthenticationMethods[];
  verified: boolean;
  email: string;
}

export interface UserIDPSummary {
  /** Specifies the IDP name. */
  idp: ExternalIDPs;
  /** Specifies the idp user Id. */
  provider_user_id: string;
  /** Specifies the creation time of the scheme (in Epoch). */
  creation_time: number;
  /** Specifies the last update time of the scheme (in Epoch). */
  last_updated: number;
}

/** * **ip**
 * * **user_account** */
export const UserLockoutTypes = {
  Ip: 'ip',
  UserAccount: 'user_account',
} as const;

export type UserLockoutTypes =
  typeof UserLockoutTypes[keyof typeof UserLockoutTypes];

/** The User Phone response class */
export interface UserPhone {
  id: string;
  primary: boolean;
  id_ps: IDPs[];
  authentication_methods: AuthenticationMethods[];
  verified: boolean;
  phone: string;
}

/** The User Summary response class */
export interface UserSummary {
  /** Unique identifier of the user. */
  user_id: string;
  /** Specifies whether the account has been disabled. */
  disabled: boolean;
  /** List of registered schemes of user. */
  emails: UserEmail[];
  /** List of registered schemes of user. */
  phone_numbers: UserPhone[];
  /** List of registered schemes of user. */
  usernames: UserUsername[];
  /** List of registered idps of user. */
  id_ps: UserIDPSummary[];
  /** Specifies the creation time of the user (in Epoch). */
  creation_time: number;
  /** Specifies the last update time of the user (in Epoch). */
  last_updated: number;
}

/** The User Username response class */
export interface UserUsername {
  id: string;
  primary: boolean;
  id_ps: IDPs[];
  authentication_methods: AuthenticationMethods[];
  username: string;
}

/** * **string**
 * * **email**
 * * **phone** */
export const ValueTypes = {
  String: 'string',
  Email: 'email',
  Phone: 'phone',
} as const;

export type ValueTypes = typeof ValueTypes[keyof typeof ValueTypes];

/** * **no_check** - Will not check for revocation.
 * * **offline** - Will check for revocation against the customer generated revocation list */
export const X509RevocationMode = {
  NoCheck: 'no_check',
  Offline: 'offline',
} as const;

export type X509RevocationMode =
  typeof X509RevocationMode[keyof typeof X509RevocationMode];
