/**
 * @file Implement little web component to display the mars rover app.
 *
 * WORK IN PROGRESS.
 */

import {html, css, LitElement, customElement, property} from "lit-element";
import {Plateau} from "./plateau";

@customElement("mars-rover")
export class MarsRoverComponent extends LitElement {
  @property() plateau = {x: 4, y: 4};

  render() {
    return html`
      <h2>Select case></h2>
      <p>
        <select>
          <option value="1">Case 1</option>
          <option value="2">Case 2</option>
        </select>
      </p>

      <plateau-component .plateau=${this.plateau}></plateau-component>
    `;
  }
}
