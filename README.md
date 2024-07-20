# Workshop 1

## Link to hosted project
https://sapphire-rainy-flea.app.genez.io/

## Prerequisites

If you don't already have them, you'll need to install the following tools:
- [Node.js](https://nodejs.org/en/download/current) (version >= 18.0.0)
- [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- [Genezio](https://genezio.com)

Note: I recommend you to use [nvm](https://github.com/nvm-sh/nvm#installing-and-updating) to manage NodeJs and npm versions.
After installing `nvm`, you can easily get the any version of `node` by running `nvm install <node_version>`.
`nvm` will automatically install the corresponding `npm` version.

## Project Structure

```
client/
├── dist/ 
├── node_modules/
├── src/
| ├── App.css
│ ├── App.tsx
│ ├── FileUpload.tsx
│ ├── index.css
│ ├── main.tsx
│ ├── vite-env.d.ts
├── .eslintrc.cjs
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── README.md
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts

server/
├── node_modules/ (library root)
├── .gitignore
├── backend.ts
├── index.mjs
├── package.json
├── package-lock.json
├── .genezioignore
└── genezio.yaml
```

## Deploy Your Project

1. Install the Genezio CLI globally
```bash
npm install -g genezio
```

2. Login to Genezio
```bash
genezio login
```

3. Start a local server
```bash
genezio local
```

## Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install -g genezio`  | Installs genezio globally                        |
| `genezio login`           | Logs in to genezio                               |
| `genezio local`           | Starts a local server                            |
| `genezio deploy`          | Deploys a production project                     |
| `genezio --help`          | Get help using genezio                           |

