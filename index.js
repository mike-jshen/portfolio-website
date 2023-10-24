import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';


// you have to import filepath
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 8080;

// const menu = document.querySelector('#mobile-menu')
// const menuLinks = document.querySelector('.navbar__menu')

// menu.addEventListener('click', function() {
//     menu.classList.toggle('is-active');
//     menuLinks.classList.toggle('active');
// });

// update express server code to include route for all files 
// the route is within the public file and will make sure to include CSS files

app.use('/public', express.static(path.join(__dirname, 'public')));

// the same logic also must be used to import the images into the nodejs file
app.use('/images', express.static(path.join(__dirname, 'images')));

// i will need to add test cases in the future
app.use('/test_cases', express.static(path.join(__dirname, 'test_cases')));


// sendFile will go here
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

app.get('/upload.html', (req, res) => {
  res.sendFile(path.join(__dirname, './public/upload.html'));
});

app.get('/projects.html', (req, res) => {
  res.sendFile(path.join(__dirname, './public/projects.html'));
});

app.get('/mem-dump.html', (req, res) => {
  res.sendFile(path.join(__dirname, './public/mem-dump.html'));
});

app.get('/abt-me.html', (req, res) => {
  res.sendFile(path.join(__dirname, './public/abt-me.html'));
});

app.listen(port);
console.log(`Server started at http://localhost:${port}`);
