import './style.css'
import * as THREE from 'three'

//Scene
const scene = new THREE.Scene()

//Object
// const geometry = new THREE.BoxGeometry(1, 1, 1)
// const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
// const mesh = new THREE.Mesh(geometry, material)
// scene.add(mesh)

// //Position
// mesh.position.set(0.7, -0.6, 1)

// //Scale
// mesh.scale.set(2, 0.5, 0.5)

// //Rotation
// mesh.rotation.reorder('YXZ')
// mesh.rotation.set(Math.PI / 2, Math.PI / 2, 0)

// Group Object
const group = new THREE.Group()
group.position.y = 1
group.scale.y = 2
group.rotation.y = 1
scene.add(group)

const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0xff0000 })
)

group.add(cube1)

const cube2 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x00ff00 })
)

cube2.position.x = -2
group.add(cube2)

const cube3 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x0000ff })
)

cube3.position.x = 2
group.add(cube3)

//Axes helper
const axesHeloer = new THREE.AxesHelper(2)
scene.add(axesHeloer)

//Camera
const sizes = {
  width: 800,
  height: 600,
}
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.set(0, 0, 3)
scene.add(camera)

// camera.lookAt(new THREE.Vector3(3, 0, 0))

//REnderer
const canvas = document.querySelector('.webgl')
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
})

renderer.setSize(sizes.width, sizes.height)

renderer.render(scene, camera)
