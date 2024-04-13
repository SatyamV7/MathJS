const path = require('path');

module.exports = {
    entry: './math.js',
    mode: 'production',
    output: {
        filename: 'math.min.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '',
        sourceMapFilename: '[file].map',
    },
    devtool: 'source-map',
};