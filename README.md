[![Angular Logo](https://www.vectorlogo.zone/logos/angular/angular-icon.svg)](https://angular.io/) [![Electron Logo](https://www.vectorlogo.zone/logos/electronjs/electronjs-icon.svg)](https://electronjs.org/) [<img src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Google_Material_Design_Logo.svg" alt="Material Design Logo" width="64px" height="64px"/>](https://material.io/design)

![Maintained][maintained-badge]
[![Make a pull request][prs-badge]][prs]
[![License][license-badge]](LICENSE.md)

[![Linux Build][linux-build-badge]][linux-build]
[![MacOS Build][macos-build-badge]][macos-build]
[![Windows Build][windows-build-badge]][windows-build]

[![Watch on GitHub][github-watch-badge]][github-watch]
[![Star on GitHub][github-star-badge]][github-star]
[![Tweet][twitter-badge]][twitter]

# Introduction

This project is a fork of https://github.com/maximegris/angular-electron

This project aims to integrate 3 different projects:
- the aforementioned Angular Electron project found at https://github.com/maximegris/angular-electron
- the Material Design project for Angular found at https://material.angular.io/
- the Material Design Icons project found at https://materialdesignicons.com/

## Getting Started

*Clone this repository locally:*

``` bash
git clone https://github.com/toongeorges/angular-electron-material-design.git
```

*Install dependencies with npm:*

``` bash
npm install
```

*Under Linux:*

``` bash
sudo chown root node_modules/electron/dist/chrome-sandbox
sudo chmod 4755 node_modules/electron/dist/chrome-sandbox
```

## To Build for Development

``` bash
npm start
```


## Other Commands

| Command                  | Description                                                                                           |
|--------------------------|-------------------------------------------------------------------------------------------------------|
| `npm run ng:serve`       | Execute the app in the web browser (DEV mode)                                                         |
| `npm run web:build`      | Build the app that can be used directly in the web browser. Your built files are in the /dist folder. |
| `npm run electron:local` | Builds your application and start electron locally                                                    |
| `npm run electron:build` | Builds your application and creates an app consumable based on your operating system                  |

**Your application is optimised. Only /dist folder and NodeJS dependencies are included in the final bundle.**

e.g. to test the production build under Linux:

``` bash
npm run electron:build
release/angular-electron-10.5.2.AppImage --no-sandbox
```

## More Info

- about Angular, check https://angular.io/
- about Electron, check https://www.electronjs.org/
- about Angular and Electron integration, check https://github.com/maximegris/angular-electron
- about Material Design, check
  - https://material.angular.io/
  - https://material.io/design
- about Material Design Icons, check https://materialdesignicons.com/

[license-badge]: https://img.shields.io/badge/license-MIT-blue.svg
[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[prs]: http://makeapullrequest.com

[linux-build-badge]: https://github.com/toongeorges/angular-electron-material-design/workflows/Linux%20Build/badge.svg
[linux-build]: https://github.com/toongeorges/angular-electron-material-design/actions?query=workflow%3A%22Linux+Build%22
[macos-build-badge]: https://github.com/toongeorges/angular-electron-material-design/workflows/MacOS%20Build/badge.svg
[macos-build]: https://github.com/toongeorges/angular-electron-material-design/actions?query=workflow%3A%22MacOS+Build%22
[windows-build-badge]: https://github.com/toongeorges/angular-electron-material-design/workflows/Windows%20Build/badge.svg
[windows-build]: https://github.com/toongeorges/angular-electron-material-design/actions?query=workflow%3A%22Windows+Build%22

[github-watch-badge]: https://img.shields.io/github/watchers/toongeorges/angular-electron-material-design.svg?style=social
[github-watch]: https://github.com/toongeorges/angular-electron-material-design/watchers
[github-star-badge]: https://img.shields.io/github/stars/toongeorges/angular-electron-material-design.svg?style=social
[github-star]: https://github.com/toongeorges/angular-electron-material-design/stargazers
[twitter-badge]: https://img.shields.io/twitter/url/https/github.com/toongeorges/angular-electron-material-design.svg?style=social
[twitter]: https://twitter.com/intent/tweet?text=Check%20out%20angular-electron-material-design!%20https://github.com/toongeorges/angular-electron-material-design%20%F0%9F%91%8D
[maintained-badge]: https://img.shields.io/badge/maintained-yes-brightgreen
