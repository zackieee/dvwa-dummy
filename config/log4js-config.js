const path = require("path");
// ログ出力先は、サーバー内の絶対パスを動的に取得して出力先を設定したい
const APP_ROOT = path.join(__dirname, "../");

// ログ出力設定
module.exports = {
  appenders: {
    consoleLog: {
      type: "console"
    },
    debugLog: {
      type: "file",
      filename: path.join(APP_ROOT, "./log/debug.log"),
      maxLogSize: 5000000, // 5MB
      backups: 5, // 世代管理は5ファイルまで、古いやつgzで圧縮されていく
      compress: true
    }
  },
  categories: {
    default: {
      appenders: ["consoleLog"],
      level: "all"
    },
    SuccessExploitation: {
      appenders: ["debugLog"],
      level: "debug"
    }
  }
};