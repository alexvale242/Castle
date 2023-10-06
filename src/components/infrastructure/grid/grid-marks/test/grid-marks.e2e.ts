import { newE2EPage } from '@stencil/core/testing';

describe('grid-marks', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<grid-marks></grid-marks>');

    const element = await page.find('grid-marks');
    expect(element).toHaveClass('hydrated');
  });
});
