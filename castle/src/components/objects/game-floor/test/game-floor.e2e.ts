import { newE2EPage } from '@stencil/core/testing';

describe('game-floor', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<game-floor></game-floor>');

    const element = await page.find('game-floor');
    expect(element).toHaveClass('hydrated');
  });
});
