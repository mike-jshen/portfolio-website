import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
// import * as THREE from "three";
// import stylesheet from './format.css';

// you have to import filepath
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 8080;

// update express server code to include route for all files 
// the route is within the public file and will make sure to include CSS files

app.use('/public', express.static(path.join(__dirname, 'public')));

// the same logic also must be used to import the images into the nodejs file
app.use('/images', express.static(path.join(__dirname, 'images')));

// sendFile will go here
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

app.get('/upload.html', (req, res) => {
  res.sendFile(path.join(__dirname, './public/upload.html'));
});

app.listen(port);
console.log(`Server started at http://localhost:${port}`);


//Constructing the overall scene and choosing the color
// const scene = new THREE.Scene();
// scene.background = new THREE.Color(0x000000);

// Add a cube to the scene
// const geometry = new THREE.BoxGeometry(3, 1, 3); // width, height, depth
// const material = new THREE.MeshLambertMaterial({ color: 0xfb8e00 });
// const mesh = new THREE.Mesh(geometry, material);
// mesh.position.set(0, 0, 0); // Optional, 0,0,0 is the default
// scene.add(mesh);


// Set up lights
// const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
// scene.add(ambientLight);

// const dirLight = new THREE.DirectionalLight(0xffffff, 0.6);
// dirLight.position.set(10, 20, 0); // x, y, z
// scene.add(dirLight);

// Camera
// const width = 10;
// const height = width * (window.innerHeight / window.innerWidth);
// const camera = new THREE.OrthographicCamera(
//   width / -2, // left
//   width / 2, // right
//   height / 2, // top
//   height / -2, // bottom
//   1, // near
//   100 // far
// );

// NO CAMERA IF WINDOW IS NOT DEFINED
// camera.position.set(4, 4, 4);
// camera.lookAt(0, 0, 0);

// RENDERER is NOT defined 

// Renderer
// const renderer = new THREE.WebGLRenderer({ antialias: true });
// renderer.setSize(window.innerWidth, window.innerHeight);
// renderer.render(scene, camera);

// Add it to HTML
// document.body.appendChild(renderer.domElement);
