const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(ttf|eot|woff|woff2)$/,
                loader: 'asset/inline',
                options: {
                    useRelativePath: true,
                    esModule: false,
                },
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
    ],
    devServer: {
        historyApiFallback: true,
        port: 3001,
    },
};