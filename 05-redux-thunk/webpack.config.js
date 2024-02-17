const path = require("path");

module.exports = {
   entry: "./src/app.js",
   output: {
      filename: "app.js",
      path: path.resolve(__dirname, "dist"),
      clean: false,
   },
   devServer: {
      port: 8080,
      open: true,
      static: {
         directory: path.join(__dirname, "./dist"),
      },
   },
   mode: "development",
};

