/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import { ApiRequestOptions } from './ApiRequestOptions';
import { ApiResult } from './ApiResult';

export class ApiError extends Error {
  public readonly url: string;
  public readonly status: number;
  public readonly statusText: string;
  public readonly body: any;
  public readonly request: ApiRequestOptions;

  constructor(request: ApiRequestOptions, response: ApiResult, message: string) {
    super(message);

    this.name = 'ApiError';
    this.url = response.url;
    this.status = response.status;
    this.statusText = response.statusText;
    this.body = response.body;
    this.request = request;
  }
}
