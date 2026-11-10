const express = require('express');
const pool = require('./db');

const app = express();

app.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok' });
});

app.get('/tasks', async (req, res) => {
    const result = await pool.query('SELECT id, title, done FROM tasks ORDER BY id');
    res.status(200).json(result.rows);
});

module.exports = app;