export default [
  {
    name: 'environmentMapTexture',
    type: 'cubeTexture',
    path: [
      'textures/environmentMaps/px.jpg',
      'textures/environmentMaps/nx.jpg',
      'textures/environmentMaps/py.jpg',
      'textures/environmentMaps/ny.jpg',
      'textures/environmentMaps/pz.jpg',
      'textures/environmentMaps/nz.jpg',
    ],
  },
  {
    name: 'grassColorTexture',
    type: 'texture',
    path: 'textures/dirt/color.jpg',
  },
  {
    name: 'grassNormalTexture',
    type: 'texture',
    path: 'textures/dirt/normal.jpg',
  },
  {
    name: 'foxModel',
    type: 'gltfModel',
    path: '/models/Fox/glTF/Fox.gltf',
  },
]
