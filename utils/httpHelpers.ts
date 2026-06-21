import { APIResponse } from '@playwright/test';

export interface RequestOptions<T> {
  data: T;
}

export const isSuccessfulStatus = (status: number): boolean => status >= 200 && status < 300;

export async function parseJson<T>(response: APIResponse): Promise<T> {
  return response.json().catch(() => ({} as T));
}
