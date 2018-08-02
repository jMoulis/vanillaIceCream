module.exports = {
  extends: 'airbnb-base',
  parser: 'babel-eslint',
  env: {
    browser: true,
  },
  rules: {
    'brace-style': ['error', 'stroustrup'],
    'arrow-parens': ['off'],
    'no-param-reassign': ['error', { props: false }],
    'no-mixed-operators': ['error', { allowSamePrecedence: true }],
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'jsx-a11y/no-noninteractive-tabindex': 'off',
    'jsx-a11y/href-no-hash': 'off',
    'jsx-a11y/label-has-for': 'off',
    'react/jsx-filename-extension': 'off',
    'react/forbid-prop-types': 'off',
    'react/no-unescaped-entities': 'off',
    'react/no-array-index-key': 'off',
    'implicit-arrow-linebreak': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['/'],
      },
    },
  },
};
