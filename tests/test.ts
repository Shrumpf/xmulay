import { expect, test } from '@playwright/test';

test('about page has expected h2', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('heading', { name: 'Hot Clips in 🇩🇪 Germany' })).toBeVisible();
});
