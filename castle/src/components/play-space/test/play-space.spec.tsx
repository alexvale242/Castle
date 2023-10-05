import { newSpecPage } from '@stencil/core/testing';
import { PlaySpace } from '../play-space';

describe('play-space', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PlaySpace],
      html: `<play-space></play-space>`,
    });
    expect(page.root).toEqualHtml(`
      <play-space>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </play-space>
    `);
  });
});
