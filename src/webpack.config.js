// webpack.config.js
const Dotenv = require('dotenv-webpack');

module.exports = {
  ...
  plugins: [
    new Dotenv({
        path: './.env', // load this now instead of the ones in '.env'
        allowEmptyValues: true, // allow empty variables (e.g. `FOO=`) (treat it as empty string, rather than missing)
        systemvars: true, // load all the predefined 'process.env' variables which will trump anything local per dotenv specs.
        silent: true, // hide any errors
        prefix: 'import.meta.env.SECRET_URL' // reference your env variables as 'import.meta.env.ENV_VAR'.
    })
  ]
  ...
};