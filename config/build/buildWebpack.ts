import webpack from "webpack";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { buildDevServer } from "./buildDevServer";
import { buildLoader } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { BuildOptions } from "./types/types";
import { buildResolver } from "./buildResolver";

export function buildWebpack(options: BuildOptions): webpack.Configuration {
  const { mode, paths } = options;
  const isDev = mode === "development";
  return {
    mode: mode ?? "development",
    entry: paths.entry,
    output: {
      filename: "assets/[name]-[contenthash].js",
      path: paths.output,
      publicPath: '/',
      clean: true,
    },
    resolve: buildResolver(options),
    module: {
      rules: buildLoader(options),
    },
    plugins: buildPlugins(options),
    devtool: isDev && "inline-source-map",
    devServer: buildDevServer(options),
  };
}
