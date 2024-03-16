# TypeScript Experiment

The aim of this project is to demonstrate a simple front-end project with the use of typescript and other frameworks from the scratch.

## TOC

- [0 Introduction and goal of the project](#0-introduction-and-goal-of-the-project) <br/>
- [1 Initializing TypeScript project from the scratch](#1-initializing-typescript-project-from-the-scratch) <br/>
  - [1.1 Initialize NPM Project](#11-initialize-npm-project) <br/>
  - [1.2 Add typescript and ts-node as dev dependency](#12-add-typescript-and-ts-node-as-dev-dependency) <br/>
  - [1.3 Initialize TypeScript with tsc](#13-initialize-typescript-with-tsc) <br/>
  - [1.4 Create a TypeScript file](#14-create-a-typescript-file) <br/>
  - [1.5 Test index.ts file](#15-test-indexts-file) <br/>
  - [1.6 Update the script in package.json](#16-update-the-script-in-packagejson) <br/>
  - [1.7 Test the script via NPM](#17-test-the-script-via-npm) <br/>
  - [1.8 Finishing touches](#18-finishing-touches) <br/>
  - [1.9 Summary](#19-summary) <br/>
- [2 Webpack Dev Server Setup](#2-webpack-dev-server-setup) <br/>
  - [2.1 Structure of the project](#21-structure-of-the-project) <br/>
  - [2.2 Place .ts files under src folder](#22-place-ts-files-under-src-folder) <br/>
  - [2.3 Place .html files under public folder](#23-place-html-files-under-public-folder) <br/>
  - [2.4 Install webpack dev server dependencies](#24-install-webpack-dev-server-dependencies) <br/>
  - [2.5 Configure webpack dev server](#25-Configure-webpack-dev-server) <br/>
  - [2.6 Configure scripts in package.json](#26-configure-scripts-in-packagejson) <br/>
  - [2.7 Test application](#27-test-application) <br/>
  - [2.8 Finishing touches](#28-finishing-touches) <br/>
  - [2.9 Summary](#29-summary) <br/>

## 0 Introduction and goal of the project

This project aims to demonstrate a typescript project from the scratch. The aim is to understand and demonstrate the setup and the configuration of a TypeScript project, and how package managers are configured.

The goal of the project is to make a simple TypeScript application with a webpack-dev server and json-server in the backend.

[Go back to TOC](#toc)

## 1 Initializing TypeScript project from the scratch

In this part I'm going to show you how to build up a TypeScript project step by step.

## 1.1 Initialize NPM Project

Initialize the NPM project. This will generate the [package.json](https://github.com/bzdgn/typescript-experiment/blob/main/package.json) file.

**Command:** `npm init --yes`

```
>npm init --yes
Wrote to D:\00_LEV\bzdgn\typescript-experiment\package.json:

{
  "name": "typescript-experiment",
  "version": "1.0.0",
  "description": "The aim of this project is to demonstrate a simple front-end project with the use of typescript and other frameworks from the scratch.",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

[Go back to TOC](#toc)

## 1.2 Add typescript and ts-node as dev dependency

We need two dev dependencies to continue, these are `typescript` and `ts-node`. To add a dev dependency in `npm`, `-D` flag needs to be used as can be seen below;

**Command:** `npm i -D typescript ts-node`

Here is the output in windows cmd;

```
>npm i -D typescript ts-node

added 20 packages, and audited 21 packages in 3s

found 0 vulnerabilities
```

See that typescript and ts-node are added as dev dependency;

```
>type package.json
{
  "name": "typescript-experiment",
  "version": "1.0.0",
  "description": "The aim of this project is to demonstrate a simple front-end project with the use of typescript and other frameworks from the scratch.",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "ts-node": "^10.9.2",
    "typescript": "^5.4.2"
  }
}
```

[Go back to TOC](#toc)

## 1.3 Initialize TypeScript with tsc

Use tsc via the node_modules folder and initialize the TypeScript config file;

**Command:** `node_modules\.bin\tsc --init`

```
>node_modules\.bin\tsc --init

Created a new tsconfig.json with:
                                                                                                                TS
  target: es2016
  module: commonjs
  strict: true
  esModuleInterop: true
  skipLibCheck: true
  forceConsistentCasingInFileNames: true


You can learn more at https://aka.ms/tsconfig
```

See that the [tsconfig.json](https://github.com/bzdgn/typescript-experiment/blob/main/tsconfig.json) is generated;

```
>dir tsconfig.json
 Volume in drive D is MDATA
 Volume Serial Number is FEF9-198D

 Directory of D:\00_LEV\bzdgn\typescript-experiment

03/16/2024  02:30 PM            12,397 tsconfig.json
               1 File(s)         12,397 bytes
               0 Dir(s)  3,224,276,291,584 bytes free
```

[Go back to TOC](#toc)

## 1.4 Create a TypeScript file

We need a TypeScript file to test our application. That will be [index.ts](https://github.com/bzdgn/typescript-experiment/blob/main/src/index.ts). This is a simple file to test TypeScript.

**Command:** `echo console.log("Hello world! Fenerbahce is the best!")  > index.ts`

```
>echo console.log("Hello world! Fenerbahce is the best!")  > index.ts

>type index.ts
console.log("Hello world! Fenerbahce is the best!")
```

[Go back to TOC](#toc)

## 1.5 Test index.ts file

Let's test [index.ts](https://github.com/bzdgn/typescript-experiment/blob/main/src/index.ts) file via node with loader flag. I'll write here two variations of the same command, each of them is ok to use;

**Command:** `node --loader ts-node/esm index.ts` <br />
**Command:** `node --loader ts-node/esm --experimental-specifier-resolution=node index.ts` <br />

Let's test'em both;

```
>node --loader ts-node/esm index.ts
(node:7580) ExperimentalWarning: `--experimental-loader` may be removed in the future; instead use `register()`:
--import 'data:text/javascript,import { register } from "node:module"; import { pathToFileURL } from "node:url"; register("ts-node/esm", pathToFileURL("./"));'
(Use `node --trace-warnings ...` to show where the warning was created)
Hello world! Fenerbahce is the best!

>node --loader ts-node/esm --experimental-specifier-resolution=node index.ts
(node:26644) ExperimentalWarning: `--experimental-loader` may be removed in the future; instead use `register()`:
--import 'data:text/javascript,import { register } from "node:module"; import { pathToFileURL } from "node:url"; register("ts-node/esm", pathToFileURL("./"));'
(Use `node --trace-warnings ...` to show where the warning was created)
Hello world! Fenerbahce is the best!
```

[See: Can't run my Node.js Typescript project TypeError...](https://stackoverflow.com/questions/62096269/cant-run-my-node-js-typescript-project-typeerror-err-unknown-file-extension) <br/>
[See: What is the difference between ts-node and tsc](https://stackoverflow.com/questions/58954683/what-is-the-difference-between-ts-node-and-tsc) <br/>

[Go back to TOC](#toc)

## 1.6 Update the script in package.json

The script part in [package.json](https://github.com/bzdgn/typescript-experiment/blob/main/package.json) file is used with npm command (ex: _npm run test, npm run dev_). The generated file initially has the script part as below;

```
...
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
...
```

What we want is to add the previous command to the script to run it via `npm run` command. Thus we are going to update the scripts as below;

```
...

  "scripts": {
    "test": "node --loader ts-node/esm index.ts"
  },
...
```

The final version of the [package.json](https://github.com/bzdgn/typescript-experiment/blob/main/package.json) in this step, will be as follows;

```json
{
  "name": "typescript-experiment",
  "version": "1.0.0",
  "description": "The aim of this project is to demonstrate a simple front-end project with the use of typescript and other frameworks from the scratch.",
  "main": "index.js",
  "scripts": {
    "test": "node --loader ts-node/esm index.ts"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "ts-node": "^10.9.2",
    "typescript": "^5.4.2"
  }
}
```

[Go back to TOC](#toc)

## 1.7 Test the script via NPM

Now we can test our application via **npm run script** command;

**Command:** `npm run test`

```
>npm run test

> typescript-experiment@1.0.0 test
> node --loader ts-node/esm index.ts

(node:17668) ExperimentalWarning: --experimental-loader may be removed in the future; instead use register():
--import 'data:text/javascript,import { register } from "node:module"; import { pathToFileURL } from "node:url"; register("ts-node/esm", pathToFileURL("./"));'
(Use node --trace-warnings ... to show where the warning was created)
Hello world! Fenerbahce is the best!
```

[Go back to TOC](#toc)

## 1.8 Finishing touches

Let's do some finishing touches to the [package.json](https://github.com/bzdgn/typescript-experiment/blob/main/package.json);

Have you ever spotted the **author** and the **keywords** sections? If not, you should. Let's fill those;

```
  "keywords": [
    "typescript",
    "ts-node",
    "tsc"
  ],
  "author": "Levent Divilioglu",
```

The final version of the package.json will be like this;

```json
{
  "name": "typescript-experiment",
  "version": "1.0.0",
  "description": "The aim of this project is to demonstrate a simple front-end project with the use of typescript and other frameworks from the scratch.",
  "main": "index.js",
  "scripts": {
    "test": "node --loader ts-node/esm index.ts"
  },
  "keywords": ["typescript", "ts-node", "tsc"],
  "author": "Levent Divilioglu",
  "license": "ISC",
  "devDependencies": {
    "ts-node": "^10.9.2",
    "typescript": "^5.4.2"
  }
}
```

Proud what you have achieved with the author section ;)

[Go back to TOC](#toc)

## 1.9 Summary

Until now, we have set up and configured a **TypeScript** project without the help of any external tool. This was important to understand when you use a tool, like `vite` or old `npx create-react-app`. To understand the `TypeScript` projects, it's useful to go this way step-by-step. In the following section, I'm going to introduce the setup and configuration of the `webpack-dev-server`.

[Go back to TOC](#toc)

## 2 Webpack Dev Server Setup

In this section, I'll demonstrate the setup and the configuration of the [webpack-dev-server](https://webpack.js.org/configuration/dev-server/). **webpack** is a module bundler and **webpack-dev-server** is an express server and I find it easy to use for development server.

The goal of this section is to display an **index.html**, and integrate the **TypeScript** entrypoint file. This way, we can have a primitive setup, publish our **index.html** in the development server and use **TypeScript** through the bundled JavaScript file.

## 2.1 Structure of the project

Let's organize things. Here will be our project structure

```
.
|__node_modules
      |_________________ node modules file directory
|__package-lock.json
|__package.json
|__public
      |_________________ we will serve our public files here, in particular, index.html  file will be place here
|__README.md
|__src
      |_________________ we will put our TypeScript source files here, in particular, index.ts file will be place here
|__tsconfig.json
|__webpack.config.js ___ this is hte webpack configuration file
```

Thus, the structure will be as below without descriptions;

```
.
|__node_modules [DIRECTORY]
|__package-lock.json
|__package.json
|__public
      |_________________ index.html
|__README.md
|__src
      |_________________ index.ts
|__tsconfig.json
|__webpack.config.js
```

In order to achieve this structure, we will do the changes in the following steps.

[Go back to TOC](#toc)

## 2.2 Place .ts files under src folder

Create a folder named `src` and place the [index.ts](https://github.com/bzdgn/typescript-experiment/blob/main/src/index.ts) file under the `src` folder.

**Command:** `mkdir src` <br />
**Command:** `move index.ts src\` <br />

[Go back to TOC](#toc)

## 2.3 Place .html files under public folder

Create a folder named `public` and create an [index.html](https://github.com/bzdgn/typescript-experiment/blob/main/public/index.html) file under this new folder.

**Command:** `mkdir public`

Create an index.html file, which is as below;

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>My Cool Application</title>
  </head>
  <body>
    <div id="app">
      <p>Test: Fenerbahce is the best!</p>
    </div>
    <script src="bundle.js"></script>
  </body>
</html>
```

The **bundle.js** file is actually generated by the webpack-dev-server. We are going to install and configure it in the following steps.

If you applied all the steps up to now, the latest structure of the folder will be as below;

```
.
|__node_modules [DIRECTORY]
|__package-lock.json
|__package.json
|__public
      |_________________ index.html
|__README.md
|__src
      |_________________ index.ts
|__tsconfig.json
```

[Go back to TOC](#toc)

## 2.4 Install webpack dev server dependencies

To install webpack-dev-server, we need two devepeloment dependencies;

- webpack-dev-server
- webpack-cli

Let's do them;

**Command:** `npm i -D webpack-dev-server` <br />
**Command:** `npm i -D webpack-cli` <br />

After applying these two commands, you will see the following outputs;

```
>npm i -D webpack-dev-server

up to date, audited 363 packages in 1s

67 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

D:\00_LEV\bzdgn\typescript-experiment>npm i -D webpack-cli

up to date, audited 363 packages in 1s

67 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

The `-D` flag installs the depencencies as a dev dependency and thus the latest form of the [package.json](https://github.com/bzdgn/typescript-experiment/blob/main/package.json) will be as follows;

```json
{
  "name": "typescript-experiment",
  "version": "1.0.0",
  "description": "The aim of this project is to demonstrate a simple front-end project with the use of typescript and other frameworks from the scratch.",
  "main": "index.js",
  "scripts": {
    "test": "node --loader ts-node/esm index.ts"
  },
  "keywords": ["typescript", "ts-node", "tsc"],
  "author": "Levent Divilioglu",
  "license": "ISC",
  "devDependencies": {
    "ts-node": "^10.9.2",
    "typescript": "^5.4.2",
    "webpack-cli": "^5.1.4",
    "webpack-dev-server": "^5.0.3"
  }
}
```

[Go back to TOC](#toc)

## 2.5 Configure webpack dev server

Create a file named webpack.config.js under the root folder.

Here is the configuration file content;

```
/* eslint-disable */

const path = require('path');
const index = "index"

module.exports = {
  entry: `./src/${index}.ts`,
  resolve: {
    extensions: ['.ts', '.js'],
  },
  mode: 'development',
  devServer: {
    static: {
      directory: path.join(__dirname, "./public")
    },
    port: 8080
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
}
```

1. The first comment line about eslint is to escape linter.
2. We define path becaus we are going to use path operations.
3. Abstracting index variable is a choice.

In the module export;

1. entry: the entry point file, in our case, index.ts
2. resolve: the types of the files going to be used, .ts and .js
3. mode: can be 'production' or 'development', in our case, it's 'development'
4. devServer: we define the static files through devServer.static, this points out the path of the public folder. Also devServer.port defines the serving port.
5. output: output.filename is the bundle webpack bundles, and we referenced that in our index.html file. output.path is set as 'dist'.

[Go back to TOC](#toc)

## 2.6 Configure scripts in package.json

To use **webpack-dev-server** which we have just configured, we need to update the [package.json](https://github.com/bzdgn/typescript-experiment/blob/main/package.json) and add an alias to the **scripts** section. Let's remove the old one and add the following;

```
...
  "scripts": {
    "dev": "webpack serve"
  },
...
```

The final version of the [package.json](https://github.com/bzdgn/typescript-experiment/blob/main/package.json) will be as below;

```json
{
  "name": "typescript-experiment",
  "version": "1.0.0",
  "description": "The aim of this project is to demonstrate a simple front-end project with the use of typescript and other frameworks from the scratch.",
  "main": "index.js",
  "scripts": {
    "test": "node --loader ts-node/esm index.ts",
    "dev": "webpack serve"
  },
  "keywords": ["typescript", "ts-node", "tsc"],
  "author": "Levent Divilioglu",
  "license": "ISC",
  "devDependencies": {
    "ts-node": "^10.9.2",
    "typescript": "^5.4.2",
    "webpack-cli": "^5.1.4",
    "webpack-dev-server": "^5.0.3"
  }
}
```

Now we are ready to go.

[Go back to TOC](#toc)

## 2.7 Test application

Let's test our application;

**Command:** `npm run dev`

The output of the command will be as follows;

```
>npm run dev

> typescript-experiment@1.0.0 dev
> webpack serve

asset bundle.js 260 KiB [emitted] (name: main)
runtime modules 27.4 KiB 12 modules
modules by path ./node_modules/ 173 KiB
  modules by path ./node_modules/webpack-dev-server/client/ 69.8 KiB 16 modules
  modules by path ./node_modules/webpack/hot/*.js 5.18 KiB
    ./node_modules/webpack/hot/dev-server.js 1.94 KiB [built] [code generated]
    ./node_modules/webpack/hot/log.js 1.74 KiB [built] [code generated]
    + 2 modules
  modules by path ./node_modules/html-entities/lib/*.js 78.9 KiB
    ./node_modules/html-entities/lib/index.js 4.84 KiB [built] [code generated]
    ./node_modules/html-entities/lib/named-references.js 73.1 KiB [built] [code generated]
    ./node_modules/html-entities/lib/numeric-unicode-map.js 389 bytes [built] [code generated]
    ./node_modules/html-entities/lib/surrogate-pairs.js 583 bytes [built] [code generated]
  ./node_modules/ansi-html-community/index.js 4.16 KiB [built] [code generated]
  ./node_modules/events/events.js 14.5 KiB [built] [code generated]
./src/index.ts 55 bytes [built] [code generated]
webpack 5.90.3 compiled successfully in 457 ms
<i> [webpack-dev-server] Project is running at:
<i> [webpack-dev-server] Loopback: http://localhost:8080/
<i> [webpack-dev-server] On Your Network (IPv4): http://192.168.178.108:8080/
<i> [webpack-dev-server] Content not from webpack is served from 'D:\00_LEV\bzdgn\typescript-experiment\public' directory
```

If you check the link `http://localhost:8080` you will see that our [index.html](https://github.com/bzdgn/typescript-experiment/blob/main/public/index.html) is published and if you open the developer tools of your browser, you will the that the command in our [index.ts](https://github.com/bzdgn/typescript-experiment/blob/main/src/index.ts) file is executed as below;

![01_webpack.PNG](https://github.com/bzdgn/typescript-experiment/blob/main/misc/01_webpack.PNG)

[Go back to TOC](#toc)

## 2.8 Finishing touches

Let's do some finishing touches again to the [package.json](https://github.com/bzdgn/typescript-experiment/blob/main/package.json);

We have worked with `webpack-dev-server` and better to add it to the keywords section;

```
  "keywords": [
    "typescript",
    "ts-node",
    "tsc",
    "webpack-dev-server"
  ],
  "author": "Levent Divilioglu",
```

## 2.9 Summary

In this section, we have configured our application and served our public files via the webpack-dev-server. We have also integrated TypeScript sources to our html files.

[Go back to TOC](#toc)

...to be continued
