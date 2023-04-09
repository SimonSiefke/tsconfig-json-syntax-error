const vscode = require("vscode");
const path = require("path");

exports.run = async () => {
  const file = path.join(__dirname, "..", "src", "index.js");
  const uri = vscode.Uri.file(file);
  const document = await vscode.workspace.openTextDocument(uri);
  await vscode.window.showTextDocument(document);
  await new Promise(() => {});
};
