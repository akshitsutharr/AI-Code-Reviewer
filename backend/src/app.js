const express = require('express');
const aiRoutes = require('./routes/ai.routes.js')
const cors = require('cors')

const app = express();

app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World');
    // res.send(process.env.GOOGLE_GEMINI_KEY);
});

app.use('/ai', aiRoutes)

module.exports = app;
