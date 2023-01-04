// import Robot from './Robot'
// import FlyingRobot from './FlyingRobot'

// const wallE = new Robot('Wall-E', 0)
// const ultron = new FlyingRobot('Ultron', 2)
// const astroBoy = new FlyingRobot('Astro Boy', 2)

import './style.css'
import Experience from './Experience/Experience'

const experience = new Experience(document.querySelector('canvas.webgl'))

// /**
//  * Base
//  */
// // Debug
// const gui = new dat.GUI()
// const debugObject = {}

// // scene.background = environmentMap
// scene.environment = environmentMap

// debugObject.envMapIntensity = 0.4
// gui
//   .add(debugObject, 'envMapIntensity')
//   .min(0)
//   .max(4)
//   .step(0.001)
//   .onChange(updateAllMaterials)

// /**
//  * Models
//  */
// let foxMixer = null

// gltfLoader.load('/models/Fox/glTF/Fox.gltf', (gltf) => {
//   // Model
//   gltf.scene.scale.set(0.02, 0.02, 0.02)
//   scene.add(gltf.scene)

//   // Animation
//   foxMixer = new THREE.AnimationMixer(gltf.scene)
//   const foxAction = foxMixer.clipAction(gltf.animations[0])
//   foxAction.play()

//   // Update materials
//   updateAllMaterials()
// })

// gui
//   .add(directionalLight, 'intensity')
//   .min(0)
//   .max(10)
//   .step(0.001)
//   .name('lightIntensity')
// gui
//   .add(directionalLight.position, 'x')
//   .min(-5)
//   .max(5)
//   .step(0.001)
//   .name('lightX')
// gui
//   .add(directionalLight.position, 'y')
//   .min(-5)
//   .max(5)
//   .step(0.001)
//   .name('lightY')
// gui
//   .add(directionalLight.position, 'z')
//   .min(-5)
//   .max(5)
//   .step(0.001)
//   .name('lightZ')
