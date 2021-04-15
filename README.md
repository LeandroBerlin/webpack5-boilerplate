# Webpack Boilerplate

![Berlin](https://img.shields.io/badge/Built%20in-Berlin-critical.svg?logo=webpack) ![Repo_size](https://img.shields.io/github/repo-size/LeandroDCI/webpack5-boilerplate.svg)
![DevDeps](https://david-dm.org/leandroDCI/webpack5-boilerplate/dev-status.svg)
[![MIT License](https://img.shields.io/github/license/leandroDCI/webpack5-boilerplate.svg)](LICENSE)


A [Webpack 5](https://webpack.js.org/) boilerplate with build-in:

- creation of HTML files to serve your webpack bundles using [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin)
- ECMAScript 6 to ECMAScript 5 transpiling with [babel](https://babeljs.io/) 
- CSS extraction into a single file using [style-loader](https://github.com/webpack-contrib/style-loader), [css-loader](https://github.com/webpack-contrib/css-loader) and [css-mini-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin) 
- SCSS support using [sass-loader](https://github.com/webpack-contrib/sass-loader) and [node-sass](https://github.com/sass/node-sass).
- Images import with [file-loader](https://github.com/webpack-contrib/file-loader)
- [Bootstrap](https://getbootstrap.com/) SCSS and [Fontawesome](https://fontawesome.com) local fonts support
- Github Pages publishing using [gh-pages](https://www.npmjs.com/package/gh-pages)
- Use aliases for easy imports
- [BrowserSync](https://www.browsersync.io/) integration
- [ESlint](https://eslint.org/) linting

  
[DEMO](https://leandrodci.github.io/webpack5-boilerplate/)
  
## Get Started


- [Project Structure](#project-structure)
- [Commands](#commands)
    - [Development](#development)
    - [Production](#production)
    - [Deploy to Github Pages](#deploy-to-github-pages)
- [Setup](#setup)
    - [Quick setup](#quick-setup)



## Project Structure

```
Project
│
│   README.md
│   package.json
│   webpack.config.js
└───src
│   │   index.html
│   │
│   └───assets
│       └───js
│            └───index.js
│       └───scss
│            └───styles.scss
│       └───img
│            └───logo.png
│
└───dist

```

### Commands

#### Development

Run **Webpack** in **Development** mode and start coding!

```
npm run dev
```

#### Production

Run **Webpack** in **Production** mode.

```
npm run build
```

#### Deploy to Github Pages

Deploy your code to **Github Pages**: this script creates a 'gh-pages' branch and serve the production bundle to this branch (ie. [https://leandrodci.github.io/webpack5-boilerplate/](https://leandrodci.github.io/webpack5-boilerplate/))

```
npm deploy
```


## Setup

### Quick setup

Create a directory for your new project, clone this repository, install the required modules and start coding!

```
mkdir myNewProject && cd myNewProject
clone https://github.com/LeandroDCI/webpack4-boilerplate .
npm i
npm run dev
```



***  

### Credits

Based on my previous [webpack4-boilerplate](https://github.com/LeandroDCI/webpack4-boilerplate/)  
Quality metadata badges from [shields.io](https://shields.io)  
Background image from [thepatternlibrary](http://thepatternlibrary.com/#fancy-pants)

