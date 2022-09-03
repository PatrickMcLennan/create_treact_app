# create-treact-app

## A batteries-included but easy to modify TypeScript & React SPA development environment.

`create-treact-app` is similar to `create-react-app` and provides a starting point for new React applications. Some things included with `create-treact-app`, and some things we do differently than `create-react-app`:<br /><br />

- A working webpack configuration that can handle local development and dev + prod builds.
- `jest` and `@testing-library/react` configurations
- Full `swc` integration across testing, local development and builds for fast transpiling
- A docker container for the everything
- Easy access to the webpack configuration -- no need to eject, just maintain whatever you need to
  <br /><br />

**TL;DR**
Within an optional Docker container `create-treact-app` gives you testing, a local development server and dev + prod builds for React SPAs with a fast and easy to access toolchain. If you want a working no-frills framework for a prototype or if you're starting a larger SPA and think you'll eventually need to eject from CRA, then `create-treact-app` might be a good choice.

<br />
<hr />
<br />

## **What do you need?**

You can run `create-treact-app` 2 ways:

### With Docker (recommended)

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

### or with Node

If you have [nvm](https://github.com/nvm-sh/nvm) installed, you can simply run `nvm use` in the root (see [.nvmrc](https://github.com/PatrickMcLennan/create_treact_app/blob/release/v1/.nvmrc)). Or install [Node 16.17.0](https://nodejs.org/en/) manually.

<br />
<hr />
<br />

## **Installing**

If you're using Docker, run the following.

```bash
docker-compose up -d
```

This will create your Node.js container and mount a shared volume from the project root. See the [docker-compose config](https://github.com/PatrickMcLennan/create_treact_app/blob/release/v1/docker-compose.yml) for more details. This container is kept alive and should be used for all Node.js operations (but remember to kill it when you're done). Enter the container with

```bash
docker exec -it $CONTAINER_NAME /bin/bash
```

If you're not using Docker, make sure you have the correct Node version installed, or make sure you've ran `nvm use`.

When you're inside the container or using the correct Node version, run

```bash
npm install
```

and you're ready to develop.

<br />
<hr />
<br />

## **Using**

### These 5 commands should get you started:<br />

```bash
npm run webpack:dev
```

- Compiles for development environments.<br /><br />Hot Reloading | ❌ | Minifies | ❌ | Transpiles | ✅ | Prefixes CSS | ❌ |

```bash
npm run webpack:devServer
```

- Opens a dev-server on `http://localhost:3000` with hot-reloading for development. Same output as `webpack:dev` and not at all suitable for production (seriously don't do this).<br /><br />Hot Reloading | ✅ | Minifies | ❌ | Transpiles | ✅ | Prefixes CSS | ❌ |

```bash
npm run webpack:prod
```

- Compiles everything for prod. All `src/` code is split, bundled, given hashed filenames and injected into `index.html`. After this your `dist` directory is ready for deployment as is.<br /><br />Hot Reloading | ❌ | Minifies | ✅ | Transpiles | ✅ | Prefixes CSS | ✅ |
  <br /><br />

```bash
npm run jest
```

- Uses `jest` + `@testing-library/react` to run all tests in `__tests__` directories.<br /><br />

```bash
npm run jest:watch
```

- Same as `jest`, but runs in watch mode.

<br />
<hr />
<br />

## **Supports**

### Support for the following comes out of the box:<br /><br />

_Styles:_

- scss
- css

_React / JavaScript:_

- js
- ts
- jsx
- tsx

_Images:_

- png
- svg
- jpg
- jpeg
- gif

_Fonts:_

- woff
- woff2
- eot
- ttf
- otf
