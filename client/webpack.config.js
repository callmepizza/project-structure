const buildValidations = require('./utils-webpack/validations')

const commonConfig = require('./utils-webpack/webpack.common')

const webpackMerge = require('webpack-merge')

const addons = (addonsArg) => {
  let addons = [...[addonsArg]].filter(Boolean)

  return addons.map((addonName) =>
    require(`./utils-webpack/addons/webpack.${addonName}.js`)
  )
}

module.exports = (env) => {
  if (!env) {
    throw new Error(buildValidations.ERR_NO_ENV_FLAG)
  }

  const envConfig = require(`./utils-webpack/webpack.${env.env}.js`)

  const mergedConfig = webpackMerge(
    commonConfig,

    envConfig,

    ...addons(env.addons)
  )

  return mergedConfig
}
