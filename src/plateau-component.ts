/**
 * @file Web component to display the plateau and the rovers thereon.
 *
 * WORK IN PROGRESS.
 */

import {html, css, LitElement, customElement, property} from "lit-element";
import {Plateau} from "./plateau";

@customElement("plateau-component")
export class PlateauComponent extends LitElement {
  static get styles() {
    return css`
      .square {
        border: 1px solid gray;
        font-size: 36px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    `;
  }

  @property() plateau?: Plateau;

  render() {
    if (!this.plateau) return html``;

    const {x, y} = this.plateau;

    const squares = Array.from(Array(y + 1), (_, i) =>
      Array.from(
        Array(x + 1),
        (_, j) =>
          html`
            <div class="square" style="grid-row: {i}; grid-column: {j}"></div>
          `
      )
    );

    return html`
      <style>
        .plateau {
          display: grid;
          grid-template-columns: repeat(${this.plateau.x + 1}, 120px);
          grid-template-rows: repeat(${this.plateau.y + 1}, 120px);
        }
      </style>

      <div class="plateau">
        ${squares}
        <div class="square" style="grid-row: 3; grid-column: 2; ">&#x1F916;</div>
      </div>
    `;
  }
}
