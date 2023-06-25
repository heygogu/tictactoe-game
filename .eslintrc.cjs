// eslint-disable-next-line no-undef
module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  
  "parserOptions": {
    "ecmaVersion": 2021,
    "ecmaFeatures": {
      "jsx": true
    },
    "sourceType": "module"
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "rules": {
    "react/prop-types": "off",
    "no-unused-vars": "warn",
    'react-refresh/only-export-components': 'warn'
  },
  
  plugins: ['react-refresh'],

}
