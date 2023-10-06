import { Component, Host, Prop, h } from '@stencil/core';
import { Random } from "random-js";

@Component({
    tag: 'grid-mark',
    styleUrl: 'grid-mark.css',
    shadow: true,
})
export class GridMark {

    @Prop() xPosition: number;
    @Prop() yPosition: number;
    @Prop() cellSize: number;

    private cellColour: string;

    private randomColourArray = ['black', 'red', 'green', 'yellow', 'orange', 'white']

    private setColour(): void {
        const random = new Random();
        const value = random.integer(0, 5);
        this.cellColour = this.randomColourArray[value];
    }

    private getStyles() {
        return {
            backgroundColor: this.cellColour,
            width: this.cellSize?.toString() + 'px',
            height: this.cellSize?.toString() + 'px',
        }
    }

    connectedCallback() {
        this.setColour();
    }

    render() {
        return (
            <Host>
                <div class="grid-mark" style={this.getStyles()}></div>
            </Host >
        );
    }
}
