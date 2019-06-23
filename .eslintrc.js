const path = require('path');
module.exports = {
    "extends": "airbnb",
    "rules": {
        "indent": [0, "tab"],
        "react/jsx-indent": [0, 'tab'],
        "react/jsx-indent-props": [0, 2],
        "react/jsx-one-expression-per-line": 0,
        "react/jsx-closing-tag-location": 0,
        "no-tabs": 0,
        "import/order": 0,
        "no-mixed-spaces-and-tabs": [2, "smart-tabs"],
        "no-param-reassign": 0,
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "import/no-named-as-default":0,
        "import/prefer-default-export": 0,
        "max-len": [0, { "code": 140 }],
        "camelcase": [0, {properties: "always"}],
        "no-console": [0, { allow: ["warn"]}],
        "react/no-multi-comp": 0,
        "import/no-cycle": 0,
        "no-underscore-dangle": 0,
        "jsx-a11y/label-has-for": [ "error", {
            "required": {
                "some": [ "nesting", "id"  ]
            }
        }],
        "jsx-a11y/label-has-associated-control": [ "error", {
            "required": {
                "some": [ "nesting", "id"  ]
            }
        }],
        "import/no-extraneous-dependencies": 0,
        "jsx-a11y/anchor-is-valid": [ "error", {
            "components": [ "Link" ],
            "specialLink": [ "hrefLeft", "hrefRight" ],
            "aspects": [ "invalidHref" ]
        }],
        "react/sort-comp": 0,
    },
    "parser": "babel-eslint",
    "settings": {
        "import/resolver": {
            "webpack": {
                "config": path.resolve(__dirname, "webpack.dev.config.js")
            }
        }
    },
    "globals": {
        "document": true,
        "window": true,
        "fetch": true,
    },
    "parserOptions": {
        "ecmaFeatures": {
            "legacyDecorators": true
        },
        "parser": 'babel-eslint'
    }
};
