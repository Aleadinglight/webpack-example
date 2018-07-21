# How to use Webpack

Important steps on using Webpack with some explanation.

## Steps

Initialize a webpack directory.

```bash
mkdir webpack-exampe && cd webpack-example
npm init -y
npm install webpack webpack-cli --save-dev
```

Build file from `/dist` to main.js.

```bash 
npx webpack 
```

Create `webpack.config.js` to clarify the config for build sources and output. Then you can run with command. If a webpack.config.js is present, the webpack command picks it up by default. We use the --config option here only to show that you can pass a config of any name. This will be useful for more complex configurations that need to be split into multiple files.

```bash
npx webpack --config webpack.config.js
```

Added this line to `package.json` to run build with `npm`. Now the `npm run build` command can be used in place of the `npx` command we used earlier. 

```json
 {
    "name": "webpack-demo",
    "version": "1.0.0",
    "description": "",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1",
+     "build": "webpack"
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "devDependencies": {
      "webpack": "^4.0.1",
      "webpack-cli": "^2.0.9",
      "lodash": "^4.17.5"
    }
  }
```