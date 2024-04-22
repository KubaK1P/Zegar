const path = require('path');

module.exports = {
  mode: "production",
  entry: './static/dist/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'static/bundle/'),
  },
};