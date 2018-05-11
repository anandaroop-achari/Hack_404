var webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const config = {
    entry: {
        app: './index.js',
        vendor: [
            'jquery',
            'react',
            'react-dom',
            'bootstrap/dist/js/bootstrap.min.js',
            'react-bootstrap'
        ]
    },

    output: {
        path: path.join(__dirname, '/public'),
        filename: '[name].bundle.js',
        publicPath: '/'
    },

    plugins: [
        getImplicitGlobals(),
        // new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new CopyWebpackPlugin([{ from: './images', to: 'images' }]),
        new CopyWebpackPlugin([{ from: './styles', to: '' }]),
    ],

    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' },
            { test: /[\/\\]node_modules[\/\\]some-module[\/\\]index\.js$/, loader: "imports?this=>window" },
            //{ test: require.resolve("jquery"), loader: "expose-loader?jQuery" },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: true
                        }
                    },

                ]
            },
            {
                test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif)(\?\S*)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 100000,
                            name: '[name].[ext]'
                        }
                    }
                ]
            }
        ]
    }
};

function getImplicitGlobals() {
    return new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery'
    });
};

module.exports = config
