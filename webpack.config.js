const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: {
        "react-openseadragon-too": './src/component',
        "dev-server": './src/dev-server'
    },
    output: {
        libraryTarget: 'umd',
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                include: path.resolve(__dirname, 'src'),
                use: [
                    {
                        loader: 'cache-loader'
                    },
                    {
                        loader: 'thread-loader',
                        options: {
                            workers: require('os').cpus().length - 1,
                        },
                    },
                    {
                        loader: 'ts-loader',
                        options: {
                            happyPackMode: true,
                        },
                    },
                ],
            },
        ]
    },
    resolve: {
        extensions: [ '.js', '.ts', '.tsx' ]
    }
}
