let path = require('path');
let conf = {
    entry: {
        index: './src/pages/index/index.js',
        auth: './src/pages/auth/auth.js',
        editor:'./src/editor.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    },
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    }
};

module.exports = conf;