import * as duckdb from '@duckdb/duckdb-wasm';
import { editorView } from './editor.js';

async function loadDuckDB() {
    const DUCKDB_MOD = await duckdb();
    const db = new DUCKDB_MOD.Database();
    return db;
}

let dbPromise = loadDuckDB();

async function executeQuery() {
    const db = await dbPromise;
    const query = editorView.state.doc.toString();
    const result = await db.query(query);
    document.getElementById('output').textContent = JSON.stringify(result, null, 2);
}

window.executeQuery = executeQuery;
