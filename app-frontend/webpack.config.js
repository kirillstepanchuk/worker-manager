const buildConfig = (env) => require(`./webpacks/webpack.${env.mode}.js`)

module.exports = buildConfig
