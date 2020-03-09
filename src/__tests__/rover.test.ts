// Unit tests for rover object.

import {Rover} from "../rover";
import {Plateau} from "../plateau";

let rover: Rover;
const plateau = new Plateau(5, 5);

test("turns right from north", () => {
  const rover = new Rover(1, 1, "N", plateau);
  rover.executeInstruction("R");
  expect(rover.h).toBe("E");
});

test("turns right from east", () => {
  const rover = new Rover(1, 1, "E", plateau);
  rover.executeInstruction("R");
  expect(rover.h).toBe("S");
});

test("turns right from south", () => {
  const rover = new Rover(1, 1, "S", plateau);
  rover.executeInstruction("R");
  expect(rover.h).toBe("W");
});

test("turns right from west", () => {
  const rover = new Rover(1, 1, "W", plateau);
  rover.executeInstruction("R");
  expect(rover.h).toBe("N");
});

test("turns left from north", () => {
  const rover = new Rover(1, 1, "N", plateau);
  rover.executeInstruction("L");
  expect(rover.h).toBe("W");
});

test("turns left from east", () => {
  const rover = new Rover(1, 1, "E", plateau);
  rover.executeInstruction("L");
  expect(rover.h).toBe("N");
});

test("turns left from south", () => {
  const rover = new Rover(1, 1, "S", plateau);
  rover.executeInstruction("L");
  expect(rover.h).toBe("E");
});

test("turns left from west", () => {
  const rover = new Rover(1, 1, "W", plateau);
  rover.executeInstruction("L");
  expect(rover.h).toBe("S");
});
