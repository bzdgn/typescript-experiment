TypeScript Experiment
=====================
The aim of this project is to demonstrate a simple front-end project with the use of typescript and other frameworks from the scratch.

TOC
---
- [0 Introduction and goal of the project](#0-introduction-and-goal-of-the-project) <br/>
- [1 Initializing TypeScript project from the scratch](#1-initializing-typescript-project-from-the-scratch) <br/>
  * [1.1 Initialize NPM Project](#11-initialize-npm-project) <br/>
  * [1.2 Add typescript and ts-node as dev dependency](#12-add-typescript-and-ts-node-as-dev-dependency) <br/>
  * [1.3 Initialize TypeScript with tsc](#13-initialize-typescript-with-tsc) <br/>
  * [1.4 Create a TypeScript file](#14-create-a-typescript-file) <br/>
  * [1.5 Test index.ts file](#15-test-indexts-file) <br/>
  * [1.6 Update the script in package.json](#16-update-the-script-in-packagejson) <br/>
  * [1.7 Test the script via NPM](#17-test-the-script-via-npm) <br/>
  * [1.8 Finishing touches](#18-finishing-touches) <br/>
  * [1.9 Summary](#19-summary) <br/>



 0 Introduction and goal of the project
---------------------------------------
This project aims to demonstrate a typescript project from the scratch. The aim is to understand and demonstrate the setup and the configuration of a TypeScript project, and how package managers are configured.

The goal of the project is to make a simple TypeScript application with a webpack-dev server and json-server in the backend.

[Go back to TOC](#toc)


 1 Initializing TypeScript project from the scratch
---------------------------------------------------
In this part I'm going to show you how to build up a TypeScript project step by step.

 1.1 Initialize NPM Project
---------------------------
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


 1.2 Add typescript and ts-node as dev dependency
-------------------------------------------------
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


 1.3 Initialize TypeScript with tsc
-----------------------------------
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


 1.4 Create a TypeScript file
-----------------------------
We need a TypeScript file to test our application. That will be [index.ts](https://github.com/bzdgn/typescript-experiment/blob/main/index.ts). This is a simple file to test TypeScript.

**Command:** `echo console.log("Hello world! Fenerbahce is the best!")  > index.ts`

```
>echo console.log("Hello world! Fenerbahce is the best!")  > index.ts

>type index.ts
console.log("Hello world! Fenerbahce is the best!")
```

[Go back to TOC](#toc)


 1.5 Test index.ts file
-----------------------
Let's test [index.ts](https://github.com/bzdgn/typescript-experiment/blob/main/index.ts) file via node with loader flag. I'll write here two variations of the same command, each of them is ok to use;

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


 1.6 Update the script in package.json
--------------------------------------
The script part in [package.json](https://github.com/bzdgn/typescript-experiment/blob/main/package.json) file is used with npm command (ex: *npm run test, npm run dev*). The generated file initially has the script part as below;

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


 1.7 Test the script via NPM
----------------------------
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


 1.8 Finishing touches
----------------------
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
  "keywords": [
    "typescript",
    "ts-node",
    "tsc"
  ],
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


 1.9 Summary
------------
Until now, we have set up and configured a **TypeScript** project without the help of any external tool. This was important to understand when you use a tool, like `vite` or old `npx create-react-app`. To understand the `TypeScript` projects, it's useful to go this way step-by-step. In the following section, I'm going to introduce the setup and configuration of the `webpack-dev-server`.

[Go back to TOC](#toc)


...to be continued