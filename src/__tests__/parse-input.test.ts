// Unit tests for parsing input for Mars rovers
//
// TODO: add more tests for non-happy paths, etc.

import {parseInput} from "../parse-input";

test("parsing of valid input", () => {
  const PLATEAU_X = 5;
  const PLATEAU_Y = 5;
  const INSTRUCTIONS = "abcde";

  const input = parseInput(
    `${PLATEAU_X} ${PLATEAU_Y}
    1 2 N
    ${INSTRUCTIONS}`
  );

  expect(input).toEqual({
    plateau: {x: PLATEAU_X, y: PLATEAU_Y},
    rovers: [{x: 1, y: 2, h: "N", instructions: INSTRUCTIONS}],
  });
});
