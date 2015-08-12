# dotfiles

- .eslintrc
- .editorconfig

Rambler&amp;Co Dotfiles for your javascripts. Use the force, Luke!

# Installations

## Installation ssh on productions

1. To package.json add line

    ```
    "eslint-config-rambler": "https://github.com/rambler-digital-solutions/dotfiles.git#master"
    ```

2. Type in project dir

    ```
    npm i
    ```

3. In project dir .eslintrc must contains

    ```
    { "extends": "./node_modules/eslint-config-rambler/.eslintrc" }
    ```

    >*in Sublime Text use only relative path

4. Copy .editorconfig to project dir

## Packages for Sublime Text 3

1. Will need installed npm packages

    ```
    npm install eslint
    npm install babel-eslint
    ```

    or run `npm install` after installation ssh on productions 

2. Install plugins

    * SublimeLinter ([full instructions](http://sublimelinter.readthedocs.org/en/latest/installation.html))
    * SublimeLinter-contrib-eslint ([full instructions](https://github.com/roadhump/SublimeLinter-eslint#plugin-installation))
    * EditorConfig ([EditorConfig](https://github.com/sindresorhus/editorconfig-sublime#install))

3. Restart ST

## Packages for Atom

1. Will need installed npm packages

    ```
    npm install -g eslint
    npm install -g babel-eslint
    ```

2. Install plugins

    ```
    apm install linter
    apm install linter-eslint
    apm install editorconfig
    ```

    or through **Preferences → Install → Install Pacages** for linter, linter-eslint and editorconfig

3. Restart ST

# Tested in:

- Sublime Text 3
- PyCharm 4.0.6
