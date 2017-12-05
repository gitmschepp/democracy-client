var webpackConfig = require("react-scripts/config/webpack.config.prod");

webpackConfig.output.publicPath = "";

require("react-scripts/scripts/build.js");
