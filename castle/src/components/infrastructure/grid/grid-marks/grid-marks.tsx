import { Component, Host, h } from '@stencil/core';
import { Grid } from '../grid-models';

@Component({
  tag: 'grid-marks',
  styleUrl: 'grid-marks.css',
  shadow: true,
})
export class GridMarks {

  public gridHeight: number = 512;
  public gridWidth: number = 512;

  public grid: Grid;

  private createGrid(): void {
    
  }

  render() {
    return (
      <Host>
        <div class="grid-marks"></div>
      </Host>
    );
  }

}
