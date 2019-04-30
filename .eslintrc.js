module.exports = {
    'env': {
        'commonjs': true,
        'es6': true,
        'node': true
    },
    'extends': 'eslint:recommended',
    'globals': {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly'
    },
    'parserOptions': {
        'ecmaVersion': 2018
    },
    'rules': {
        'indent': [
            'error',
            2
        ],
        'linebreak-style': [
            'error',
            'windows'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'always'
        ],
        'camelcase' : 2,
        'id-length' : 2,
        'keyword-spacing' : [
            "error", 
            { "after": true }
        ],
        'space-infix-ops' : 2,
        'comma-spacing' : [
            "error", {
                 "before": false, 
                 "after": true 
                }
        ],
        'space-before-blocks' : 2,
        'spaced-comment' : [
            "error", 
            "always"
        ],
        'key-spacing' : [
            "error", 
            { "beforeColon": false }
        ],
        'no-multi-spaces' : "error",
        'space-in-parens': [
            "error",
             "always",
              { "exceptions": ["empty"] }
        ],
        'space-before-function-paren' : [
            "error", 
            "never"
        ],
        'func-call-spacing': [
            "error",
             "never"
        ],
        'no-multiple-empty-lines': "error",
        'padded-blocks' : [
            "error", 
            { "blocks": "never" }
        ],
        'quotes': [
            "error",
             "single"
        ],
        'no-floating-decimal': "error",
        'object-property-newline' : "error",
        'brace-style': "error",
        'eqeqeq': [
            "error", 
            "always"
        ],
        'no-array-constructor': "error",      
    }
};