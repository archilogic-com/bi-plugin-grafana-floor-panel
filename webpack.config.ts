import type { Configuration } from 'webpack'
import grafanaConfig from './.config/webpack/webpack.config'

const config = async (env): Promise<Configuration> => {
  const baseConfig = await grafanaConfig(env)
  return baseConfig
}

export default config
