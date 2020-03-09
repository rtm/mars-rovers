// Simple tests for the plateau object.
//
// TODO: flesh these out.

import {Plateau} from "../plateau";
import {Rover} from "../rover";

let plateau: Plateau;

beforeEach(() => (plateau = new Plateau(5, 5)));

test("check if location is occupied", () => {
  plateau.addRover(new Rover(1, 1, "N", plateau));
  console.log(plateau.rovers);

  expect(plateau.isOccupied(1, 1)).toBe(true);
  expect(plateau.isOccupied(2, 2)).toBe(false);
});
