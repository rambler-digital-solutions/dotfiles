# Rambler & Co dotfiles

- .eslintrc
- .editorconfig

Rambler&amp;Co Dotfiles for your javascripts. Use the force, Luke!

# How may i use it?

## Install

1. Add next line inside package.json

    ```json
    "eslint-config-rambler": "https://github.com/rambler-digital-solutions/dotfiles.git#master"
    ```

2. Type in project dir

    ```bash
    $ npm i
    ```

3. Project directory .eslintrc file should contain

    ```json
    { 
    "extends": "./node_modules/eslint-config-rambler/.eslintrc" 
    }
    ```

    > *in Sublime Text use only relative path

4. Copy .editorconfig to project dir


## Packages for Sublime Text 3

1. Will need installed npm packages

    ```bash
    $ npm install -g eslint
    $ npm install -g babel-eslint
    ```

2. Plugins

    SublimeLinter ([full instructions](http://sublimelinter.readthedocs.org/en/latest/installation.html))
    SublimeLinter-contrib-eslint ([full instructions](https://github.com/roadhump/SublimeLinter-eslint#plugin-installation))

3. Restart ST

# Tested in:

- Sublime Text 3
- PyCharm 4.0.6
