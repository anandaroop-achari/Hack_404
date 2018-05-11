var fs = require('fs')
var path = require('path')

module.exports = {

    entry: path.resolve(__dirname, 'server.js'),

    output: {
        filename: 'server.bundle.js'
    },

    target: 'node',

    externals: fs.readdirSync(path.resolve(__dirname, 'node_modules')).concat([
        'react-dom/server'
    ]).reduce(function (ext, mod) {
        ext[mod] = 'commonjs ' + mod
        return ext
    }, {}),

    node: {
        __filename: false,
        __dirname: false
    },

    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' },
            { test: /[\/\\]node_modules[\/\\]some-module[\/\\]index\.js$/, loader: "imports?this=>window" }
        ]
    }

}
