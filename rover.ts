enum Direction {
  N,
  E,
  S,
  W
}

class Field {
  constructor(public x: number, public y: number) {}
}

const directions: { [key in Direction]: [number, number] } = {
  [Direction.N]: [+1, 0],
  [Direction.E]: [0, +1],
  [Direction.S]: [-1, 0],
  [Direction.W]: [0, -1]
};

export class Rover {
  constructor(
    public x: number,
    public y: number,
    public d: Direction,
    private field: Field
  ) {}

  private turn(turns: number) {
    this.d = (this.d + turns) % 4;
  }

  left() {
    this.turn(-1);
  }
  right() {
    this.turn(+1);
  }

  move() {
    this.x += directions[this.d][0];
    this.y += directions[this.d][1];

    if (
      this.x < 0 ||
      this.x >= this.field.x - 1 ||
      this.y < 0 ||
      this.y >= this.field.y - 1
    )
      throw new Error("Rover outside of field");
  }
}
