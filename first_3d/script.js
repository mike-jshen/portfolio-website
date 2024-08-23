// Create the scene
const scene = new THREE.Scene();

// Create a camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Create a renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create a pyramid geometry
const geometry = new THREE.ConeGeometry(1, 1.5, 4);
const material = new THREE.MeshBasicMaterial({ color: 0x0071e3, wireframe: true });
const pyramid = new THREE.Mesh(geometry, material);
scene.add(pyramid);

// Function to handle mouse move
function onMouseMove(event) {
    const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
    const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;

    const vector = new THREE.Vector3(mouseX, mouseY, 0.5).unproject(camera);
    vector.sub(camera.position).normalize();

    const distance = -camera.position.z / vector.z;
    const pos = camera.position.clone().add(vector.multiplyScalar(distance));

    pyramid.lookAt(pos);
}

// Event listener for mouse move
document.addEventListener('mousemove', onMouseMove, false);

// Handle window resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}, false);

// Render loop
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate();
