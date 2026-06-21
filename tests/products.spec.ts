import { expect, test } from '../fixtures/api-fixtures';
import { CreateProductRequest } from '../models/CreateProductRequest';
import { Product } from '../models/Product';
import { UpdateProductRequest } from '../models/UpdateProductRequest';

const productPayload: CreateProductRequest = {
  title: 'Test Product',
  description: 'A product created by API tests.',
  price: 99,
  brand: 'Test Brand',
  category: 'test-category',
  stock: 50,
};

const updatePayload: UpdateProductRequest = {
  title: 'Updated Test Product',
  price: 79,
};

test.describe('Product API', () => {
  test('GET /products/1 returns a product', async ({ apiClient }) => {
    const response = await apiClient.get<Product>('/products/1');

    expect(response.status).toBe(200);
    expect(response.body).toBeTruthy();
    expect(response.body.id).toBe(1);
    expect(response.body.title).toBeDefined();
    expect(response.body.price).toBeGreaterThan(0);
  });

  test('POST /products/add creates a new product', async ({ apiClient }) => {
    const response = await apiClient.post<CreateProductRequest, Product>('/products/add', productPayload);

    expect(response.status).toBe(201);
    expect(response.body).toBeTruthy();
    expect(response.body.id).toBeGreaterThan(0);
    expect(typeof response.body.id).toBe('number');
  });

  test('PUT /products/1 returns product details', async ({ apiClient }) => {
    const response = await apiClient.put<UpdateProductRequest, Product>('/products/1', updatePayload);

    expect(response.status).toBe(200);
    expect(response.body).toBeTruthy();
    expect(response.body.id).toBe(1);
    expect(response.body.title).toBeDefined();
    expect(typeof response.body.price).toBe('number');
  });

  test('DELETE /products/1 removes a product', async ({ apiClient }) => {
    const response = await apiClient.delete<{ isDeleted: boolean; } & Product>('/products/1');

    expect(response.status).toBe(200);
    expect(response.body).toBeTruthy();
    expect(response.body.isDeleted).toBe(true);
    expect(response.body.id).toBe(1);
  });
});
