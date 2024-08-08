// Reference: https://www.youtube.com/watch?v=_OwJV2xL8M8

// scene is established
const scene = new THREE.Scene()

// generate a sphere and the numbers in the brackets
// determine sides
const geometry = new THREE.SphereGeometry(3,64,64)
const material = new THREE.MeshStandardMaterial({
    color:"#00ff83"
})

const mesh = new THREE.Mesh(geometry,material)
scene.add(mesh)

// first value is FOV
// second value is aspect ratio
const camera = new THREE.PerspectiveCamera(50, 800, 600)
camera.position.z = 20
scene.add(camera)

// renderer

const canvas = document.querySelector('.webgl')
const render = new THREE.WebGLRenderer({canvas})
renderer.setsize(800,600)
renderer.render(scene,camera)