# Next-TS-Apollo

Next-TS-Apollo is a Next.js boilerplate with a certain amount of opinion about technologies. The intention of this boilerplate is to help kickstart any Next/Apollo/TS app and sprinkle in a few goodies to make developers smile.

Keep reading for more info on getting started and what's included.

#### Core Tech
- [Next.js](https://nextjs.org/docs)
- [React (latest and greatest)](https://reactjs.org/docs/getting-started.html)
- [Typescript](https://www.typescriptlang.org/docs/home.html)
- [Apollo (apollo-client/react-apollo)](https://www.apollographql.com/docs/react/) 
  *this boilerplate is setup to use @apollo/react-hooks specifically and is current in beta and not included in the official Apollo documentation*
- [styled-components](https://www.styled-components.com/docs) 
- [jest](https://jestjs.io/docs/en/getting-started) / [react-testing-library](https://testing-library.com/docs/react-testing-library/intro) *since this boilerplate takes full advantage of react hooks it also uses @testing-library/react-hooks - sample unit test included*
- [storybook](https://storybook.js.org/docs/basics/introduction/)
    

*The above is a quick rundown of core tech - for more info just follow the link for official documentation*

## Getting started (example app)

The example code provided relies on an Apollo server hosted on [CodeSandBox](https://codesandbox.io/s/apollo-server-with-typescript-pi27u).
Make sure you visit the link and the server is up and running before you get going!
 
  1. clone the boilerplate `git clone git@github.com:platypusrex/next-ts-apollo.git <your-app-name (optional)>`
  2. install dependencies (yarn is the default package manager) `yarn`
  3. run the app in development mode `yarn dev` or `npm run dev` (this will download your server schema and create `schema.json` - also generates TS types for GraphQL queries, mutations, fragments which are located in `src/typings/generated.ts`)
  4. view example app in the browser `http://localhost:3000`
  5. start storybook `yarn storybook` or `npm run storybook`
  6. view the example components in storybook `http://10.0.0.102:6006`
  7. run example unit tests `yarn test` or `npm run test`

## Available Scripts

You can run any of the below from the root directory.<br>
**Note: replace any `yarn` command with `npm`**

#### `yarn dev`
Runs the app in development mode.<br>
Hot reloading is baked in by default.<br>
Open `http://localhost:3000` to view the app in the browser.<br>
This script will also run a series of scripts in order: `apollo:generate`, `lint:ts`, `next`.

#### `yarn build`
Builds the app for production.

#### `yarn start`
Runs the built app in production mode.

#### `yarn test`
Launches `jest` test runner.<br>
Configured to look for test files with the following naming conventions:
* `.test.ts|tsx`
* `.spec.ts|tsx`

#### `yarn storybook`
Runs storybook<br>
Runs series in following order: `schema:dowload` then start storybook 

#### `yarn storybook:build`
Build static storybook

#### `yarn lint:ts`
Lint and fix TS

#### `yarn check:types`
Check TS types

#### `yarn generate:types`
Generate static types for GraphQL queries, mutations, and fragments<br>
By default this writes the file to `src/typing/generated.ts`

#### `yarn schema:download`
Introspects and downloads schema from GraphQL endpoint<br>
By default writes the file to `schema.json`

#### `yarn apollo:generate`
Runs in a series `yarn generate:types` and `yarn schema:download`