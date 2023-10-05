import { Component, Host, h } from '@stencil/core';
import { Grid, GridCell } from '../grid-models';

@Component({
    tag: 'grid-marks',
    styleUrl: 'grid-marks.css',
    shadow: true,
})
export class GridMarks {

    public gridHeight: number = 512;
    public gridWidth: number = 512;
    public cellSize: number = 32;

    public grid: Grid;

    public getGridHeight(): number {
        return this.gridHeight;
    }

    public createGrid(): void {
        const cell = this.createCell(0,0);
        const gridCells = [cell];
        this.grid = {
            gridCells: gridCells
        }
    }

    public createCell(xPosition: number, yPosition: number): GridCell {
        return {
            size: this.cellSize,
            xPosition: xPosition,
            yPosition: yPosition
        }
    }

    render() {
        return (
            <Host>
                <div class="grid-marks"></div>
            </Host>
        );
    }

}
