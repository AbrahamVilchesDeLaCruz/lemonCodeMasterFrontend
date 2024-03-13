import { merge } from "webpack-merge";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import prod from "./webpack.prod.js";

export default merge(prod, {
  plugins: [new BundleAnalyzerPlugin()],
});
