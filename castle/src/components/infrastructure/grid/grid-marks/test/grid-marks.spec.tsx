import { newSpecPage } from '@stencil/core/testing';
import { GridMarks } from '../grid-marks';

describe('grid-marks', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GridMarks],
      html: `<grid-marks></grid-marks>`,
    });
    expect(page.root).toEqualHtml(`
      <grid-marks>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </grid-marks>
    `);
  });
});

describe('createGrid', () => {
  
})
