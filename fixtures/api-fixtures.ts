import { test as baseTest } from '@playwright/test';
import { ApiClient } from '../utils/ApiClient';

// to jest plik konfiguracyjny dla testów API,
// definiuje on rozszerzenie testów Playwright o klienta API.
type ApiFixtures = {
  apiClient: ApiClient;
};

// Tworzymy nowe rozszerzenie testów Playwright, które dodaje klienta API do kontekstu testowego.
// export const test = baseTest.extend<ApiFixtures>({
// oznacza, że każdy test będzie miał dostęp do instancji ApiClient 
// poprzez fixture `apiClient`.
export const test = baseTest.extend<ApiFixtures>({
  apiClient: async ({ request }, use) => {
    const apiClient = new ApiClient(request);
    await use(apiClient);
  },
});

export const expect = test.expect;
