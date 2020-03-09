# Design Notes for `mars-rover`

We have adopted an object-oriented style, with both the plateau on
which the rovers roam and the rovers themselves represented as
classes.  Methods on the `Rover` class execute "instructions"
(commands, essentially), telling the rover to turn left or right, or
proceed one square in the direction it is headed.
