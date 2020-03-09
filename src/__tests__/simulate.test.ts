// Unit tests for entire simulation.
//
// TODO: add more tests for non-happy paths, etc.

import {simulate} from "../simulate";

test("case 1", () => {
  const plateau = simulate(`5 5
                           1 2 N
                           LMLMLMLMM
                           3 3 E
                           MMRMMRMRRM`);

  expect(plateau.toString()).toBe(`1 3 N\n5 1 E`);
});

test("case 2", () => {
  const plateau = simulate(`3 3
                           0 0 S
                           LMMLM
                           1 2 W
                           LMLMRM`);

  expect(plateau.toString()).toBe(`2 1 N\n2 0 S`);
});

test("invalid heading on rover", () => {
  expect(() => simulate(`3 3\n0 0 Q\nLMLMLM`)).toThrow();
});

test("invalid instruction", () => {
  expect(() => simulate(`3 3\n0 0 N\nQ`)).toThrow();
});

test("outside plateau", () => {
  expect(() => simulate(`3 3\n0 0 S\nM`)).toThrow();
});
