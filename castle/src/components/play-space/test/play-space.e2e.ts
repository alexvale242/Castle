import { newE2EPage } from '@stencil/core/testing';

describe('play-space', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<play-space></play-space>');

    const element = await page.find('play-space');
    expect(element).toHaveClass('hydrated');
  });
});
