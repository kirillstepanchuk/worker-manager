const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
    devtool: "inline-source-map",
    devServer: {
        historyApiFallback: true,
        port: 3001,
    },
    mode: "development",
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
    ],
});