import { GridMarks } from "../grid-marks";

describe('createGrid', () => {
    it('creates the grid', async () => {
        let component = new GridMarks();
        component.gridHeight = 212;

        const gridHeight = component.getGridHeight();
        expect(gridHeight).toBe(212);
    })

    describe('should create a grid', () => {
        it('of length 1 for a 1x1 size grid of cell size 1', () => {
            // Arrange
            let component = new GridMarks();
            component.gridHeight = 1;
            component.gridWidth = 1;
            component.cellSize = 1;

            // Act
            component.createGrid();

            // Assert
            expect(component.grid.gridCells.length).toBe(1);
        });
    });
})
