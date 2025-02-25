import path from "path";
import webpack from "webpack";
import { buildWebpack } from "./config/build/buildWebpack";
import { BuildMode, BuildPaths } from "./config/build/types/types";

interface EnvVariables {
  mode: BuildMode;
  port: number;
  analyser: boolean;
}

export default (env: EnvVariables) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, "src", "main.tsx"),
    html: path.resolve(__dirname, "public", "./index.html"),
    output: path.resolve(__dirname, "dist"),
    favicon: path.resolve(__dirname, "public"),
    src: path.resolve(__dirname, "src"),
  };
  const config: webpack.Configuration = buildWebpack({
    port: env.port ?? 3000,
    mode: env.mode,
    paths,
    analyser: env.analyser,
  });
  return config;
};
