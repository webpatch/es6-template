module.exports = {
  "parser": "babel-eslint",
  "rules": {
    "strict": 0,
    "no-console": 0,
    "global-require": 0,
    'import/no-dynamic-require': 0,
    'max-len': ["error", 120],
  },
  "extends": "airbnb",
  "env": {
    "browser": true,
    "node": true
  },
  "plugins": [
    "import"
  ],
  "globals": {
    "DEBUG":true,
  }
};
