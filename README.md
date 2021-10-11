# create-treact-app

## **Overview**

### A containerized TypeScript & React SPA development environment.

<br />9/10 times that I use React I'm using Next.js. But when duty calls I always find myself building a config similiar to this, so, here it is.<br />

`create-treact-app` aims to speed up app development by providing an environment with the following things:

- An easy-to-use development workflow, including a dev build that outputs source maps and has an accompanying hot-reloading dev server,
- a production build that transpiles, minifies, prefixes and packages all code to a directory for immediate deployment,
- a testing environment with `jest` and `@testing-library/react`,
- and finally, Containerization for the entire projects needs.
  <br /><br />

**The goal is not to include everything, but provide as much as possible to as many as possible. Hopefully. once installed, you should have to do minimal work -- if any -- to tailor this to your application.** This also aims to be easy to use -- all points above can be run with simple `npm` or `docker` commands.<br /><br />

If you want to use Docker, and you're looking for an alternative to `create-react-app` that's easy-to-use and faster (we use `swc`!) -- this might be for you.

<br />
<hr />
<br />

## **What do you need to use this?**

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

<br />
<hr />
<br />

## **Installing**

### Once you have installed Docker & Docker componse, clone this repo. Then, in the root, run:

```
$ docker-compose up -d
```

This will create your Node.js container and mount a shared volume from the project root to it's `/app` directory.
<br />
<br />

> <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**IMPORTANT** -- use this container for everything! Every `npm` or `node` command should be run inside of it -- basically any time you compile, test, install or run JS. If you're new to Docker, you can run the following to access its bash shell and run your commands as normal:<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`$ docker exec -it $CONTAINER_NAME /bin/bash`<br /><br />

<br />
Then run

```
$ npm install
```

inside the container to install all packages. Once that completes, you're ready to develop!

<br />
<hr />
<br />

## **Using**

### These 5 commands should get you started:<br />

```
$ npm run webpack:dev
```

- Compiles everything for dev. Source maps are included, no prefixing / transpilation (you'll want to develop on Chrome / Firefox).<br /><br />

```
$ npm run webpack:devServer
```

- Opens a dev-server on `http://localhost:3000` with hot-reloading for development. Same output as `webpack:dev` and not at all suitable for production (seriously don't do this).<br /><br />
  > <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Note** -- `3000` is the only port exposed by the container.<br /><br />

```
$ npm run webpack:prod
```

- Compiles everything for prod. All `src/` code is split, bundled, given hashed filenames and injected into `index.html`. After this your `dist` directory is ready for deployment as is.<br /><br />

```
$ npm run jest
```

- Uses `jest` + `@testing-library/react` to run all tests in `__tests__` directories.<br /><br />

```
$ npm run jest:watch
```

- Same as `jest`, but runs in watch mode.

<br />
<hr />
<br />

## **Supports**

### Support for the following comes out of the box:<br /><br />

_Styles:_

- scss, css
  - `webpack:dev` gives source maps, no prefixing or minification.
  - `webpack:prod` prefixes + minifies into hashed-named files & injects `<link>` tags in `<head>`.

_React / JavaScript:_

- js, ts, jsx, tsx
  - `webpack:dev` gives source maps, no transpiling.
  - `webpack:prod` transpiles with `swc` and bundles for prod (`cacheGroups` should be tweaked in `webpack.prod.js`, empty by default). `<script>` tags with `defer` attributes are injected in `<head>`.
  - `eslint` & `prettier` configured and working. Best used with your editors `formatOnSave` turned on.

_Images:_

- png, svg, jpg, jpeg, gif
  - Images should be stored within `src/public` and imported relatively from there.
  - `webpack:prod` will output all images top-level in `dist`, adjusting `publicUrls` automatically (you don't have to do anything).

_Fonts:_

- woff, woff2, eot, ttf, otf
  - Fonts should be stored within `src/public` and imported relatively from there.
  - `webpack:prod` will output all fonts top-level in `dist`, adjusting `publicUrls` automatically (you don't have to do anything).
