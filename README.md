# Universal React
## Based on:
- [React](https://facebook.github.io/react/) and [React Native](https://facebook.github.io/react-native/) ❤️
- Webapp built on top of [CRA](https://github.com/facebookincubator/create-react-app)
- [Redux](http://redux.js.org/) for data management
- [Redux-Observables](https://github.com/redux-observable/redux-observable) ([RxJS](https://github.com/Reactive-Extensions/RxJS)) for async flow
- [Ramda](http://ramdajs.com/docs/) for Haskell-like functional swag 🏄
- [Redux-Persist](https://github.com/rt2zz/redux-persist) for persisting data for user
- [Styled-Components](https://styled-components.com) for declarative styling with ease 💅
- [Native-Base](https://nativebase.io/) for more native-like feeling without sweating.
- and more, see `package.json`

## Tests
Testing powered by [Jest](https://facebook.github.io/jest/) including async Epics testing even with HTTP mocks. Check out the `__tests__` folders.

## Development
Using [ESlint Airbnb config](https://www.npmjs.com/package/eslint-config-airbn) for linting code along with [Prettier](https://github.com/prettier/prettier) and [FlowType](https://typeflow.org) for type checking. There is already automatic precommit flow that checks code validity for you.

- Entry point for `Web` app is in `src/web.jsx`
- Entry point for `Native` app is in `src/native.js`

### Available devstack's commands
- `start-native-cli` - start native cli
- `start-ios` - start iOS development (iPhone 7) + React Native CLI
- `start-android` - start Android development + React Native CLI + you could combine with emulator (`emulator -avd Nexus_5X_API_23`),
- `start-web` - start web app at port 3000
- `build-web` - build web app into `build/` folder
- `test` - run Jest tests
- `coverage` - generate test coverage
- `lint` - start ESlint check
- `flow` - start FlowType type check

