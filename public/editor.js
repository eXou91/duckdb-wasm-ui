import { EditorState } from "@codemirror/state";
import { EditorView, basicSetup } from "@codemirror/basic-setup";
import { sql } from "@codemirror/lang-sql";
import { oneDark } from "@codemirror/theme-one-dark";

export let editorView;

window.addEventListener('load', () => {
    editorView = new EditorView({
        state: EditorState.create({
            doc: "SELECT 42 AS Answer;",
            extensions: [basicSetup, sql(), oneDark]
        }),
        parent: document.getElementById('editor')
    });
});
