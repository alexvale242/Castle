import { newSpecPage } from '@stencil/core/testing';
import { GameFloor } from '../game-floor';

describe('game-floor', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GameFloor],
      html: `<game-floor></game-floor>`,
    });
    expect(page.root).toEqualHtml(`
      <game-floor>
        <mock:shadow-root>
          <div class="floor"></div>
        </mock:shadow-root>
      </game-floor>
    `);
  });
});
