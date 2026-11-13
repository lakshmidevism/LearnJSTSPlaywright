import {test, expect, type Page} from '@playwright/test';

test('uses await to handle async operations',async ({page}: {page: Page}) => {
    await page.goto('https://example.com');
    await page.getByText('Example Domain').click();
})