export interface ApiResponse<T> {
  data: T
  statusCode: number
  message: string
  errors: string[]
}
export interface ApiErrorResponse {
  message: string;
  statusCode?: number;
  errors?: string[] | Record<string, string[]>;
}