import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'game-floor',
  styleUrl: 'game-floor.css',
  shadow: true,
})
export class GameFloor {

  render() {
    return (
      <Host>
        <div class="floor"></div>
      </Host>
    );
  }

}
