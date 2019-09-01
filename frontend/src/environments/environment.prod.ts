const packageVars = require('../../package.json');

export const environment = {
  api: packageVars.api,
  imgBase: packageVars.imgBase,
  production: packageVars.production
};
