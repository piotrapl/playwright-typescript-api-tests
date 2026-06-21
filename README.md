# Playwright TypeScript API Tests

This repository contains a layered Playwright API test suite implemented in TypeScript.

## Project Structure

- `tests/` - API test specifications.
- `fixtures/` - Playwright fixture extensions.
- `models/` - TypeScript request and response models.
- `utils/` - Shared HTTP client and helper types.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Install Playwright browsers if needed:
   ```bash
   npx playwright install
   ```

## Run tests

- Run the full API test suite:
  ```bash
  npm test
  ```

- Run tests in headed mode:
  ```bash
  npm run test:headed
  ```

- Open the HTML report after a run:
  ```bash
  npm run test:report
  ```

## Notes

- The API client is exposed to tests via the `apiClient` fixture defined in `fixtures/api-fixtures.ts`.
- The `playwright.config.ts` file configures the test base URL as `https://dummyjson.com`.
