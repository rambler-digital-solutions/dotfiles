# dotfiles

- .eslintrc
- .editorconfig

Rambler&amp;Co Dotfiles for your javascripts. Use the force, Luke!


# Instalation

1. to package.json add

    ```
    "eslint-config-rambler": "https://github.com/rambler-digital-solutions/dotfiles.git#master"
    ```

    >*ssh on prodactions blocked by admins*

2. type in project dir

    ```
    npm i
    ```

3. in project dir .eslintrc  must contains

    `{`
        `"extends": "eslint-config-rambler"`
    `}`

# Tested in:

- PyCharm 4.0.6 (eslint from project dir)
