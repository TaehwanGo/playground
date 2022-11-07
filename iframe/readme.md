# iframe을 통해 메세지 주고 받기

- [ ] Typescript + 웹팩 개발 환경 설정
  - 저장 시 자동 반영, nodemon
  - 참고
    - https://velog.io/@ssh1997/webpack-typescript-%EA%B0%9C%EB%B0%9C%ED%99%98%EA%B2%BD-%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0

## Webpack + Typescript 개발환경 설정하기

```
npm install -D webpack webpack-cli webpack-dev-server html-webpack-plugin
```

- webpack : 번들러 모듈
- webpack-cli : webpack 명령어를 사용할 수 있게해주는 모듈
- webpack-dev-server : 실시간으로 변경사항을 보여주는 live server
- html-webpack-plugin : template html 파일에 번들 파일을 자동으로 추가해주는 플러그인

```
npm install -D @babel/core @babel/preset-env babel-loader
```

- @babel/core : The compiler for writing next generation JavaScript.(트랜스파일러 모듈)
- @babel/preset-env : 최신 자바스크립트 문법을 사용해도
- babel-loader : This package allows transpiling JavaScript files using Babel and webpack.

```
npm install -D typescript ts-loader
```

- ts-loader : This is the TypeScript loader for webpack.

### webpack 설정하기

#### webpack.config.js

- 웹팩 설정 파일

```js
// webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.ts", // 번들링 시작 위치
  output: {
    path: path.join(__dirname, "/dist"), // 번들 결과물 위치
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /[\.js]$/, // .js 에 한하여 babel-loader를 이용하여 transpiling
        exclude: /node_module/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.ts$/, // .ts 에 한하여 ts-loader를 이용하여 transpiling
        exclude: /node_module/,
        use: {
          loader: "ts-loader",
        },
      },
    ],
  },
  resolve: {
    modules: [path.join(__dirname, "src"), "node_modules"], // 모듈 위치
    extensions: [".ts", ".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", // 템플릿 위치
    }),
  ],
  devServer: {
    host: "localhost", // live-server host 및 port
    port: 5500,
  },
  mode: "development", // 번들링 모드 development / production
};
```

### package.json 스크립트 수정

```json
"scripts": {
  "start": "webpack serve --open", // live server 명령어
  "build": "webpack"               // build 명령어
},
```
