## INSTALACAO

- npm i -D @babel/core @babel/cli @babel/preset-env

## GERAR ARQUIVO DE DISTRIBUICAO PARA VISUALIZAR CODIGO COMPILADO

- npx babel index.js --out-file dist.js --presets=@babel/preset-env

## GERAR PASTA COM TODO O MEU PROJETO

- npx babel src --out-dir dist --presets=@babel/preset-env

## CRIAR CONFIG DO BABEL PARA PRESETS

- na pasta principal criar arquivo babel.config.js

## COMO CRIAR UM SCRIPT NPM NO package.json

- em "scripts";
- "babel": "babel src --out-dir dist" // não precisa de: --presets=@babel/preset-env pois ja foi feito no arquivo de config do babel

* npm run babel
