import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'play-space',
  styleUrl: 'play-space.css',
  shadow: true,
})
export class PlaySpace {

  render() {
    return (
      <Host>
        <section class="play-space">
            <grid-marks></grid-marks>
        </section>
      </Host>
    );
  }

}
