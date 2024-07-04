import express, { json } from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
// import items from './items';

const app = express();

app.use(json())

const PORT = process.env.PORT || 3000;
// you have to import filepath
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// app.get('/', async (req, res) => {
//     res.json({ status: true, message: "Our node.js app works" })
// });

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, './about.html'));
});

// app.get('/items', (req, res) => {
//     res.json({ status: true, message: "Fetched all items", data: items })
// })

app.listen(PORT, () => console.log(`App listening at port ${PORT}`));