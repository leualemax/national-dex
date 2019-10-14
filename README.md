# The National Dex

Hello there!

Welcome to The National Dex.

A simple Webapp that's cosume the [pokeapi](pokeapi.co).

Initially this app was developed as a code challenge to for a job application, but i've such a fun time doing it, so i've decided to expand it.

You can access the dex here: http://dex.alemax.live (courtesy of of [netlify](https://github.com/prettier/prettier))

---

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![codecov](https://codecov.io/gh/leualemax/national-dex/branch/master/graph/badge.svg)](https://codecov.io/gh/leualemax/national-dex)
[![Netlify Status](https://api.netlify.com/api/v1/badges/539028dd-c57b-4146-885d-8a104001138b/deploy-status)](https://app.netlify.com/sites/alemax-national-dex/deploys)

---

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

### format code

```sh
yarn run format
```

### lint

```sh
yarn run lint
```

### test

```sh
yarn run test
```
