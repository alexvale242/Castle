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
        const gridCells = [];

        for (let i = 0; i < this.gridHeight; i += this.cellSize) {
            for (let j = 0; j < this.gridWidth; j += this.cellSize) {
                gridCells.push(this.createCell(i, j));
            }
        }

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
                <div class="grid-marks">
                    <grid-mark cellSize={1} xPosition={1} yPosition={1}></grid-mark>
                </div>
            </Host>
        );
    }

}
