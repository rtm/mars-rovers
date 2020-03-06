# mars-rovers

`mars-rovers` is a simulation of some rovers expxloring the surface of Mars.

## PREREQUISITES

Install node/npm.

## USAGE

This is a TypeScript program designed for use in node.js.

## COMPONENT AND HTML INTERFACE

We have provided a web component (build using `lit-element`) around
this simulation and made it available through a web
page.

    $ npm start

which is equivalent to

    $ npm run build    # bundle the component and its dependencies
    $ npm run serve    # run a local server

Then, visit `localhost:8080`.

The web assets are found in the `dist` directory.

## DEVELOPMENT

Clone the repo, then run `npm install`.

## TESTS

    $ npm t

In additional to console output, this will place test results
artifacts in the `artifacts/test-results` directory, including
`test-results.html` and various formats of coverage files.

## SEE ALSO

* [spec](docs/SPEC.md)
* [design notes](docs/DESIGN-NOTES.md)
* [Problem statement](docs/PROBLEM.txt)
