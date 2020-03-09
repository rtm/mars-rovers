// Define rover object.

import {Heading, left, right} from "./heading";
import {Instruction} from "./instruction";
import {Plateau} from "./plateau";

export class Rover {
  constructor(public x: number, public y: number, public h: Heading, private plateau: Plateau) {}

  // Execute a single instruction against the rover.
  public executeInstruction(instruction: Instruction) {
    switch (instruction) {
      case "M":
        return this.move();
      case "L":
        return (this.h = left(this.h));
      case "R":
        return (this.h = right(this.h));
    }
  }

  // Move one space in the current heading.
  private move() {
    switch (this.h) {
      case "N":
        this.y++;
        break;
      case "E":
        this.x++;
        break;
      case "S":
        this.y--;
        break;
      case "W":
        this.x--;
        break;
    }

    const desc = `Rover move in heading "${this.h}" puts it at [${this.x}, ${this.y}]`;

    if (!this.plateau.inside(this.x, this.y)) throw new Error(`Outside plateau (${desc})`);

    // The problem statements given seem to have rovers colliding with each other.
    // Hence commenting out this check.
    // if (this.plateau.isOccupied(this.x, this.y)) throw new Error(`Rover collision (${desc})`);
  }

  // Create human-readable version of the rover's state.
  toString() {
    return `${this.x} ${this.y} ${this.h}`;
  }
}
