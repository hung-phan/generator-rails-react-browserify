# generator-rails-react-browserify

> [Yeoman](http://yeoman.io) generator

[![NPM](https://nodei.co/npm/generator-rails-react-browserify.png?downloads=true)](https://nodei.co/npm/generator-rails-react-browserify/)

## Getting Started

To install `generator-rails-react-browserify` from npm, run:

```bash
$ npm install -g generator-rails-react-browserify
```

## Usage for Rails 4.*

Create Ruby on Rails project with normal `rails` command, but skip gem bundling:

```bash
$ rails new app-name --skip-bundle
```

Then, initiate the generator:

```bash
$ cd app-name
$ yo rails-react-browserify
```

Answer 'Yes' to all 'Overwrite' actions. Then, update 'config/database.yml' if you use different database than 'sqlite3'.

## Dependencies

- [Bower](http://bower.io/) via `npm install -g bower`

## Application template

I define all my javascript modules in 'app/assets/sources', which will be compiled into 'app/assets/javascript/build'
folder later.

### package.json

Manage development dependencies for javascript with incremental rebuilding for each module. Turn ES6+ code into vanilla ES5
using [6to5](https://6to5.org/) with the support of [Browserify](http://browserify.org/) for javascript moduling. Inject
`regeneratorRunTime` environment to support ES6 generators feature which allows you to using modern javascript libraries like
[js-csp](https://github.com/ubolonton/js-csp) today. Contain transform configurations for [browserify-shim](https://github.com/thlorenz/browserify-shim).
Make sure that view their [recipes](https://github.com/thlorenz/browserify-shim/wiki/browserify-shim-recipes) for more informations.

### gulpfile.js

- `tasks/config.json` is responsible for controlling development and production build for javascript modules. Additionally, you can
  define extra configurations here, then, it will be loaded into `javascript-build.js` via `config = require('./config.json');`
- `tasks/errors-handler.json` is responsible for errors handling. Currently, there is only [Browserify](http://browserify.org/)
  has use this functions
- `tasks/javascript-build.json` is responsible for transforming ES6+ into ES5 and building javascript modules.

### Current transformation applied

- [babelify](https://github.com/babel/babelify)
- [browserify-shim](https://github.com/thlorenz/browserify-shim)
- [envify](https://github.com/babel/babelify)

### ES6 generator
Add `require('babel/pollyfill');` to support es6 generator syntax

### Available gulp task

```bash
$ guld javascript:clean # remove the build folder placed at 'app/assets/javascripts/build'
$ guld javascript:dev # watch over changes for multiple js bundle
$ guld javascript:dev --only main-build.js # watch over changes for single js module
$ guld javascript:build # build for production with no source map
```

## Start developing

Run these commands, and start coding

```bash
$ gulp javascript:dev
```

```bash
$ rails server
```

## Assets compile
Compile your assets before deploying to production server

```bash
$ gulp javascript:build
$ rake assets:precompile RAILS_ENV=production
```

## Options

Name: mongoid (for mongodb)

add `--skip-active-record` option to your `rails new app --skip-active-record` command before selecting this option.

## Task

### Live reload

For using livereload utility, firstly, install [guard](https://github.com/guard/guard-livereload). Then, use [rack-livereload](https://github.com/johnbintz/rack-livereload)
or install [LiveReload Safari/Chrome extension](http://feedback.livereload.com/knowledgebase/articles/86242-how-do-i-install-and-use-the-browser-extensions-)

## Testing
Comming up

```bash
$ bundle exec guard # to run the guard server and enjoy coding
```
## Structure

```
application/
  |- app/
  |  |- assets/
  |  |  |- images/
  |  |  |- javascripts/
  |  |  |  |- build/
  |  |  |  |  |- page-module-build.js
  |  |  |  |- application.js
  |  |  |- sources/
  |  |  |  |- <page-module>/
  |  |  |  |- <page-module>-build.js
  |  |  |- stylesheets/
  |  |  |  |- application.css
  |  |- controllers/
  |  |- helpers/
  |  |- mailers/
  |  |- models/
  |  |- views/
  |  |  |- application/
  |  |  |  |- index.html # default template for the application
  |  |  |- layouts/
  |  |  |  |- application.html.erb
  |- bin/
  |- config/
  |  |- initializers/
  |  |  |- bower_rails.rb # bower rails config
  |- db/
  |- lib/
  |- log/
  |- public/
  |- tasks/
  |  |- config.json
  |  |- errors-handler.js
  |  |- javascript-build.js
  |- test/
  |- vendor/
  |  |- assets/
  |  |  |- bower_components/
  |  |  |  |- third libararies/
  |- |  |- bower.json
  |- Bowerfile # bower package dependencies
  |- config.ru
  |- gulpfile.js
  |- package.json
  |- config.ru
  |- Gemfile
  |- Gemfile.lock
  |- Guardfile # Guard file for livereload
  |- Rakefile
  |- README.rdoc
```

## Running example
![alt text](https://raw.githubusercontent.com/hung-phan/generator-rails-react-browserify/master/screenshot.png "application screenshot")

## Contribution
All contributions are welcomed.

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
