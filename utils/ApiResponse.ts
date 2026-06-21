export interface ApiResponse<T> {
  status: number;
  body: T;
  headers: Record<string, string>;
}
