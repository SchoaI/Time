import { Plugin, TFile, MarkdownView, MarkdownEditor, Editor } from 'obsidian';

export default class CustomDatePlugin extends Plugin {
  async onload() {
    console.log('Custom Date Plugin loaded.');

    this.addCommand({
      id: 'insert-current-date',
      name: 'Insert Current Date and Time',
      editorCallback: (editor: Editor) => this.insertCurrentDateAndTime(editor),
    });

    this.addContextMenuItem('Date', 'insert-current-date');
  }

  insertCurrentDateAndTime(editor: Editor) {
    const currentDate = new Date();
    const date = currentDate.toLocaleDateString();
    const time = currentDate.toLocaleTimeString();
    editor.replaceSelection(`${date} ${time}`);
  }
}
