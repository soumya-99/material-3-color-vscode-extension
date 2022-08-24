
import * as vscode from 'vscode';

export async function activate(context: vscode.ExtensionContext) {
	const url = "https://soumya-99.github.io/material-you-color-picker/";

	let uri = vscode.Uri.parse(url);

	let disposable = vscode.commands.registerCommand('m3-color-generator.m3ColorGenerator', () => {
		vscode.env.openExternal(uri);
	});

	context.subscriptions.push(disposable);
}

export function deactivate() { }
