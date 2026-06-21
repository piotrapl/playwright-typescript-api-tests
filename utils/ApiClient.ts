import { APIRequestContext, APIResponse } from '@playwright/test';
import { ApiResponse } from './ApiResponse';

export class ApiClient {
  constructor(private request: APIRequestContext) {}

  private async parseResponse<T>(response: APIResponse): Promise<ApiResponse<T>> {
    const body = await response.json().catch(() => ({})) as T;
    return {
      status: response.status(),
      body,
      headers: response.headers(),
    };
  }

  async get<TResponse>(url: string): Promise<ApiResponse<TResponse>> {
    const response = await this.request.get(url);
    return this.parseResponse<TResponse>(response);
  }

  async post<TRequest, TResponse>(url: string, data: TRequest): Promise<ApiResponse<TResponse>> {
    const response = await this.request.post(url, {
      data,
    });
    return this.parseResponse<TResponse>(response);
  }

  async put<TRequest, TResponse>(url: string, data: TRequest): Promise<ApiResponse<TResponse>> {
    const response = await this.request.put(url, {
      data,
    });
    return this.parseResponse<TResponse>(response);
  }

  async delete<TResponse>(url: string): Promise<ApiResponse<TResponse>> {
    const response = await this.request.delete(url);
    return this.parseResponse<TResponse>(response);
  }
}
