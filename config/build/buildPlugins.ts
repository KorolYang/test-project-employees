import { Configuration } from "webpack";
import { BuildOptions } from "./types/types";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import path from "path";

export function buildPlugins(options: BuildOptions): Configuration["plugins"] {
  const isDev = options.mode === "development";
  return [
    new HtmlWebpackPlugin({
      template: options.paths.html,
      favicon: path.resolve(options.paths.favicon, "favicon.svg"),
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[name].[contenthash:8].css",
    }),
    options.analyser && new BundleAnalyzerPlugin(),
    new ForkTsCheckerWebpackPlugin(),
    isDev && new ReactRefreshWebpackPlugin(),
  ];
}
