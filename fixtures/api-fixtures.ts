import { test as baseTest } from '@playwright/test';
import { ApiClient } from '../utils/ApiClient';

type ApiFixtures = {
  apiClient: ApiClient;
};

export const test = baseTest.extend<ApiFixtures>({
  apiClient: async ({ request }, use) => {
    const apiClient = new ApiClient(request);
    await use(apiClient);
  },
});

export const expect = test.expect;
