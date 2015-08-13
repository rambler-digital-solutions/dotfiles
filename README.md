# dotfiles

- .eslintrc
- .editorconfig

Rambler&amp;Co Dotfiles for your javascripts. Use the force, Luke!

# Install

  ```bash
  npm install https://github.com/rambler-digital-solutions/dotfiles.git --save-dev
  ```

# Configure

1. Create .eslintrc in the project root. This file must contains:

    Relative path (Sublime Text, Atom):

    ```json
    {
      "extends": "./node_modules/eslint-config-rambler/.eslintrc"
    }
    ```

    Package name (IntelliJ IDEA family)

    ```json
    {
      "extends": "eslint-config-rambler"
    }
    ```

2. Copy .editorconfig from package to the project root.


## IntelliJ IDEA

1. Enable ESLint

    Go **Preferences → Languages & Frameworks → JavaScript → Code Quality Tools → ESLint** and turn it on.

    ![ESLint preferences](http://img.rl0.ru/pgc/o/55cc664a-3216-8745-3216-870cb3846216.photo.0.png)

    You don't need to install ESLint globally, you can use ESLint installed with this package (./node_modules/eslint-config-rambler/node_modules/eslint).

    Additionally, you must set path to Configuration file.

2. Configure EditorConfig

    EditorConfig must works automatically by default. But if it doesn't - enable EditorConfig plugin and restart IDE.

## Sublime Text 3

1. Will need installed npm packages

    ```bash
    npm install -g eslint
    npm install -g babel-eslint
    ```

2. Install plugins

    * SublimeLinter ([full instructions](http://sublimelinter.readthedocs.org/en/latest/installation.html))
    * SublimeLinter-contrib-eslint ([full instructions](https://github.com/roadhump/SublimeLinter-eslint#plugin-installation))
    * EditorConfig ([EditorConfig](https://github.com/sindresorhus/editorconfig-sublime#install))

3. Restart ST

## Atom

1. Will need installed npm packages is local

       npm install eslint
       npm install babel-eslint

2. Install plugins

       apm install linter
       apm install linter-eslint
       apm install editorconfig

  or through **Preferences → Install → Install Pacages** for linter, linter-eslint and editorconfig.

3. Restart Atom


# Tested in:

- Sublime Text 3
- Atom 1.0.7
- PyCharm 4.0.6, IntelliJ IDEA 14
