# Rambler & Co dotfiles

- .eslintrc
- .editorconfig

Rambler&amp;Co Dotfiles for your javascripts. Use the force, Luke!

# How may i use it?

## Installation ssh on productions

1. Add next line inside package.json

    ```json
    "eslint-config-rambler": "https://github.com/rambler-digital-solutions/dotfiles.git#master"
    ```

2. Type in project dir

    ```bash
    $ npm i
    ```

3. Copy .editorconfig to project dir

## Packages for Sublime Text 3

1. Will need installed npm packages is global

    ```bash
    $ npm install -g eslint
    $ npm install -g babel-eslint
    ```

2. Install plugins

    * SublimeLinter ([full instructions](http://sublimelinter.readthedocs.org/en/latest/installation.html))
    * SublimeLinter-contrib-eslint ([full instructions](https://github.com/roadhump/SublimeLinter-eslint#plugin-installation))
    * EditorConfig ([EditorConfig](https://github.com/sindresorhus/editorconfig-sublime#install))

3. Project directory .eslintrc file should contain

      ```json
      {
          "extends": "./node_modules/eslint-config-rambler/.eslintrc"
      }
      ```

4. Restart ST

## Packages for Atom

1. Will need installed npm packages is local

    ```bash
    $ npm install eslint
    $ npm install babel-eslint
    ```

2. Plugins

    ```bash
    $ apm install linter
    $ apm install linter-eslint
    $ apm install editorconfig
    ```

    or through **Preferences → Install → Install Pacages** for linter, linter-eslint and editorconfig

3. Project directory .eslintrc file should contain

    ```json
    {
        "extends": "./node_modules/eslint-config-rambler/.eslintrc"
    }
    ```

4. Restart Atom

# Tested in:

- Sublime Text 3
- Atom 1.0.7
- PyCharm 4.0.6
