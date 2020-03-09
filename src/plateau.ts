// Type definitions for "Plateau" classd.

import {Rover} from "./rover";

export class Plateau {
  constructor(public x: number, public y: number, public rovers: Rover[] = []) {}

  public inside(x: number, y: number) {
    return x >= 0 && x <= this.x && y >= 0 && y <= this.y;
  }

  public addRover(rover: Rover) {
    this.rovers.push(rover);
  }

  public isOccupied(x: number, y: number) {
    return this.rovers.some(rover => rover.x === x && rover.y === y);
  }

  public toString() {
    return this.rovers.map(rover => rover.toString()).join("\n");
  }
}
