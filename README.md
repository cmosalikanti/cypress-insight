## About

This project aims to explore the various features available in Cypress (https://www.cypress.io/) with different kind of tests.

##  How to set-up the project
1. Clone the project
2. Run the below to install the node dependencies
```
npm install
```
3. Run the tests with the below command line.

## Command line - running the Tests

Run all the tests
```
npx cypress run
```

Run all the tests on Chrome (headed)
```
npx cypress run --browser chrome --headed
```

## Advantages of using TypeScript
1. It can guide in helping less errors in the code.
2. It can help by auto-suggesting different command arguements.

## Useful commands
#### Global installation of typescript
```
npm i typescript -g
```
The above will enable to issue '>tsc' commands at the terminal.

#### Check for any compilation errors in the project
```
tsc --noEmit
```
#### Define "lint" command in the "scripts" inside package.json
```
  "scripts": {
    "lint": "tsc --noEmit"
  },
```

and we can do something like,
```
npm run lint
```
