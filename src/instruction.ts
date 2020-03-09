// Type definitions for "instructions" (commands to rover).

export type Instruction = "M" | "L" | "R";

export function isInstruction(i: string): i is Instruction {
  return "MLR".includes(i);
}
