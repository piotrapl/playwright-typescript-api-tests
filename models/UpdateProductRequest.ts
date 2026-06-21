export interface UpdateProductRequest {
  title?: string;
  description?: string;
  price?: number;
  brand?: string;
  category?: string;
  thumbnail?: string;
  stock?: number;
  discountPercentage?: number;
}
