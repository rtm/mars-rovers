// Run a simple imsulation, with a hard-wired set of initial conditions.
// This will be run from the node command line with ts-node.

import {parseInput} from "./parse-input";
import {Rover} from "./rover";
import {Plateau} from "./plateau";
import {Heading, isHeading} from "./heading";
import {Instruction, isInstruction} from "./instruction";

export function simulate(input: string) {
  const {
    plateau: {x, y},
    rovers,
  } = parseInput(input);

  const plateau = new Plateau(x, y);

  // For each rover,
  rovers.forEach(({x, y, h, instructions}) => {
    if (![...instructions].every(isInstruction))
      throw new Error(`Invalid instruction in '${instructions}'`);

    if (!isHeading(h)) throw new Error(`Invalid heading code '${h}'`);

    const rover = new Rover(x, y, h, plateau);

    plateau.addRover(rover);
    [...instructions].forEach(instruction => rover.executeInstruction(instruction as Instruction));
  });

  return plateau;
}
