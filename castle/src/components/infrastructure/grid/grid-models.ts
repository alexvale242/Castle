export interface Grid {
    gridCells: GridCell[];
}

export interface GridCell {
    height: number;
    width: number;
    xPosition: number;
    yPosition: number;
}