import { newE2EPage } from '@stencil/core/testing';

describe('grid-mark', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<grid-mark></grid-mark>');

    const element = await page.find('grid-mark');
    expect(element).toHaveClass('hydrated');
  });
});
