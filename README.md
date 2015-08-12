# dotfiles

- .eslintrc
- .editorconfig

Rambler&amp;Co Dotfiles for your javascripts. Use the force, Luke!

# Installations

## Installation ssh on prodactions

1. To package.json add

    ```"eslint-config-rambler": "https://github.com/rambler-digital-solutions/dotfiles.git#master"```

2. Type in project dir

    ```npm i```

3. In project dir .eslintrc must contains

    ```{ "extends": "./node_modules/eslint-config-rambler/.eslintrc" }```

    >*in Sublime Text use only relative path

4. Copy .editorconfig to project dir

# Tested in:

- PyCharm 4.0.6
