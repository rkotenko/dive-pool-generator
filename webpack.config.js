modules.exports = {
  entry: 'config/entry.js',
  output: {
    path: 'dist',
    filename: "dive.js"
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style!css'},
      {test: }
    ]
  }
};