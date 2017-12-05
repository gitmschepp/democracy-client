![Screenshot](https://www.democracy-deutschland.de/files/images/forfb2.png)

# Democracy-Client &nbsp; <a href="https://github.com/kriasoft/nodejs-api-starter/stargazers"><img src="https://img.shields.io/github/stars/demokratie-live/democracy-client.svg?style=social&label=Star&maxAge=3600" height="20"></a>  <a href="https://twitter.com/democracy_de"><img src="https://img.shields.io/twitter/follow/democracy_de.svg?style=social&label=Follow&maxAge=3600" height="20"></a>

The Client for the DEMOCRACY App. This includes iOS, Android and Web Clients generated from the same Codebase.

## Tech Stack

* [Node.js][node], [Yarn][yarn], [JavaScript][js]
* [ReactNative][reactnative], [React][react], ([Electron][electron])

## Prerequisites

* [Node.js][node]
* [Android Studio or SDK][android] follow the installation Instructions [here](http://facebook.github.io/react-native/docs/getting-started.html)

## Getting started

Clone the git repo & run the project
```
git clone git@github.com:demokratie-live/democracy-client.git democracy-client
cd democracy-client
yarn install
```

Compile and start Version of your choosing
```
yarn start:web
yarn start:android
yarn start:ios
```

## Keeping Up-to-Date

If you keep the original Git history after cloning this repo, you can always fetch and merge
the recent updates back into your project by running:

```bash
git remote add democracy-client https://github.com/demokratie-live/democracy-client.git
git checkout master
git fetch democracy-client
git merge democracy-client/master
yarn install
```

*NOTE: Try to merge as soon as the new changes land on the master branch in Democracy Client
repository, otherwise your project may differ too much from the base/upstream repo.*


## Deployment

TODO

## Contributing

Anyone and everyone is welcome to [contribute](CONTRIBUTING.md). Start by checking out the list of
[open issues](https://github.com/demokratie-live/democracy-client/issues) marked.

## License

Copyright © 2017-present DEMOCRACY Deutschland e.V.. This source code **might be** licensed under the MIT license found in the
~~[LICENSE.txt](https://github.com/emokratie-live/democracy-client/blob/master/LICENSE.txt)~~ file.

---

Made with ♥ by Team DEMOCRACY ([democracy-deutschland.de](https://www.democracy-deutschland.de)), [startnext contributors](https://www.startnext.com/democracy/unterstuetzer/) and [contributors](https://github.com/demokratie-live/democracy-client/graphs/contributors)

[node]: https://nodejs.org
[yarn]: https://yarnpkg.com
[js]: https://developer.mozilla.org/docs/Web/JavaScript
[reactnative]: http://www.reactnative.com/
[react]: https://reactjs.org/
[electron]: https://electronjs.org/
[android]: https://developer.android.com/studio/index.html
