module.exports = {
    "env": {
        'browser': true,
        "jest/globals": true
    },
    "extends": "airbnb",
    "parser": "babel-eslint",
    'rules': {
        'semi': [2, 'never'],
        'comma-dangle': ["error", "never"],
        'arrow-parens': ["error", "as-needed"],
        'no-param-reassign': ["error", { "props": true, "ignorePropertyModificationsFor": ["opts"] }],
        'react/jsx-filename-extension': 0,
        'object-curly-newline': [0, {
            'minProperties': 4,
            'multiline': true,
        }],
        "import/no-named-as-default": 0,
        "import/no-extraneous-dependencies": ["error", {"devDependencies": true}],
    },
    "plugins": ["jest"]
};