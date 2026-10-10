/**
 * Note: When using the Node.JS APIs, the config file
 * doesn't apply. Instead, pass options directly to the APIs.
 *
 * All configuration options: https://remotion.dev/docs/config
 */

import { Config } from "@remotion/cli/config";

Config.setRspack(true);
Config.setVideoImageFormat("jpeg");
Config.setOverwriteOutput(true);

// remotion.media недоступен из этой сети, поэтому вместо патченной сборки Remotion
// используем стоковый Chrome Headless Shell от Google (Chrome for Testing).
// Обновить: скачать новую версию с googlechromelabs.github.io/chrome-for-testing и поменять путь.
Config.setBrowserExecutable(
  `${process.env.HOME}/.remotion-browser/155.0.8059.39/chrome-headless-shell-mac-arm64/chrome-headless-shell`,
);
