import { newSpecPage } from '@stencil/core/testing';
import { GridMark } from '../grid-mark';

describe('grid-mark', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GridMark],
      html: `<grid-mark></grid-mark>`,
    });
    expect(page.root).toEqualHtml(`
      <grid-mark>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </grid-mark>
    `);
  });
});
