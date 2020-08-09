# Flickr App Server

![Heroku](https://heroku-badge.herokuapp.com/?app=flickerapp-server)

Flickr App Server is an Node.js Express Server providing (currently) [Flickr Public Feed](https://www.flickr.com/services/feeds/docs/photos_public/).

## Installation

You can install with Yarn (recommended) or NPM

```bash
$ yarn
or
$ npm i
```

## Running

You need to set environment variables for the Flickr URL
example before running **production** server:

```
$ FLICKR_PUBLIC_FEED_URL=https://api.flickr.com/services/feeds/photos_public.gne
```

```bash
$ yarn start
or
$ npm run start
```

or if you prefer using `.env` file (see `.env.example` file), you can run using development environment,
but you also need `nodemon` to be installed globally:

```bash
// installing nodemon
$ npm install -g nodemon
```

```bash
// running development server
$ yarn dev
or
$ npm run dev
```

## Available APIs

| Method | Path           | Arguments                         | Description                            |
| ------ | -------------- | --------------------------------- | -------------------------------------- |
| GET    | /api/v2/flickr | ?tags=[optionalTag1,optionalTag2] | Get flicker public feed in JSON format |

## Development and testing

Running in development environment:

```bash
$ yarn dev
or
$ npm run dev
```

Tests is available for unit and End-to-end test, run with following command:

```bash
$ yarn test:watch
```

You can find more available command in [Jest documentation](https://jestjs.io/).

> Note: commit messages are based on [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)

## Built with

- [Express](https://expressjs.com/) - The RESTful server used
- [Axios](https://github.com/axios/axios) - HTTP client
- [Jest](https://jestjs.io/) - Testing framework
