# The National Dex

Hello there!

Welcome to The National Dex.

A simple Webapp that's cosume the pokeapi.co. 

Initially this app was developed as a code challenge to for a job application, but i've such a fun time doing it, so i've decided to expand it.

## Technical overview:
This is a React App, so i've used `react-scripts` to generate it, is a simple app, so i've not yet decided to eject it from the script or not, lets keep this way for now.

I'm using `Redux`, with 2 middleware, the `redux-promise` and `redux-thunk`, the first one helps to execute the promises before the reducer been called, and the other helps to chain the actions.

For unit testing i'm using `Jest` with some little help of `mocha`, there's a setup file thats mocks all `axios` http calls, the file is on `/src/setupTests.js`. All the mocked jsons are in `/src/mocks`. 

## Contribuite

Feel free to help adds more features, send a PR. 😎

Pls, make sure you are in Node Version `10.16`.

### setup
```sh
yarn install
```

### run
```sh
yarn start
```

### lint
```sh
yarn run lint
```

### test
```sh
yarn run test
```