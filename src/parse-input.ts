/**
 * @file parse-input.ts: Parse input to Mars rover problem.
 *
 * We do not do a lot of error checking here.
 * We leave that up to the callbacks passed in.
 */

// Little utility to break an array into chunks of `n` items each.
// TODO: move this to some kind of utilities module.
const partitioner = (n: number) => <T>(array: T[]) =>
  Array.from(Array(Math.ceil(array.length / n)), (_, i) => array.slice(i * n, (i + 1) * n));

const partition2 = partitioner(2);

export function parseInput(input: string) {
  const [plateauData, ...roversData] = input.split(/\r?\n/).map(s => s.trim());

  const [x, y] = plateauData.split(/\s+/).map(Number);
  const plateau = {x, y};

  const rovers = partition2(roversData).map(([positionInput, instructions]) => {
    const [x, y, h] = positionInput.split(/\s+/).filter(Boolean);

    return {x: +x, y: +y, h, instructions};
  });

  return {plateau, rovers};
}
