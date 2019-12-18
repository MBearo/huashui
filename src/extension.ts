// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "huashui" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('extension.huashui', () => {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
    //vscode.window.showInformationMessage('Hello World vs code');
    // 创建并显示新的webview
    const panel = vscode.window.createWebviewPanel(
      'huashui', // 只供内部使用，这个webview的标识
      'Hua Shui', // 给用户显示的面板标题
      vscode.ViewColumn.One, // 给新的webview面板一个编辑器视图
      {} // Webview选项。我们稍后会用上
    );
    // 设置HTML内容
    panel.webview.html = getWebviewContent('https://www.taobao.com');
	});

	context.subscriptions.push(disposable);
}
function getWebviewContent (url:String){
  return  `
  <!DOCTYPE html >
  <html lang="en">
  <head>
  <head>
  <style>
    body, html
      {
        margin: 0; padding: 0; height: 100%; overflow: hidden;
      }
      .vscode-light {
          background: #fff;
      }
  </style>
</head>
<body>
  <iframe  class="vscode-light" id= "iframe" width="100%" height="100%" src="${url}" frameborder="0">
  </iframe>
</body>
</html>
  `
}
// this method is called when your extension is deactivated
export function deactivate() {}
