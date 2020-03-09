// Types and utilities for headings.

export type Heading = "N" | "E" | "S" | "W";

type Turn = {[key in Heading]: Heading};

const leftTurn: Turn = {N: "W", E: "N", S: "E", W: "S"};
const rightTurn: Turn = {N: "E", E: "S", S: "W", W: "N"};

export const left = (h: Heading) => leftTurn[h];
export const right = (h: Heading) => rightTurn[h];

export function isHeading(h: string): h is Heading {
  return "NESW".includes(h);
}
