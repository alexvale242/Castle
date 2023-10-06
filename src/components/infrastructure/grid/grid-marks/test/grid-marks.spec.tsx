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

        it('of length 4 for a 2x2 size grid of cell size 1', () => {
            // Arrange
            let component = new GridMarks();
            component.gridHeight = 2;
            component.gridWidth = 2;
            component.cellSize = 1;

            // Act
            component.createGrid();

            // Assert
            expect(component.grid.gridCells.length).toBe(4);
        });

        it('of length 9 for a 3x3 size grid of cell size 1', () => {
            // Arrange
            let component = new GridMarks();
            component.gridHeight = 3;
            component.gridWidth = 3;
            component.cellSize = 1;

            // Act
            component.createGrid();

            // Assert
            expect(component.grid.gridCells.length).toBe(9);
        });

        it('of length 1 for a 2x2 size grid of cell size 2', () => {
            // Arrange
            let component = new GridMarks();
            component.gridHeight = 2;
            component.gridWidth = 2;
            component.cellSize = 2;

            // Act
            component.createGrid();

            // Assert
            expect(component.grid.gridCells.length).toBe(1);
        });

        it('of length 4 for a 4x4 size grid of cell size 2', () => {
            // Arrange
            let component = new GridMarks();
            component.gridHeight = 4;
            component.gridWidth = 4;
            component.cellSize = 2;

            // Act
            component.createGrid();

            // Assert
            expect(component.grid.gridCells.length).toBe(4);
        });

        it('of length 2 for a 2x4 size grid of cell size 2', () => {
            // Arrange
            let component = new GridMarks();
            component.gridHeight = 2;
            component.gridWidth = 4;
            component.cellSize = 2;

            // Act
            component.createGrid();

            // Assert
            expect(component.grid.gridCells.length).toBe(2);
        });
    });
})
