//Learning how to draw with three.js

var renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
camera.position.z = 4;

// Create the Geometry passing the size
var geometry = new THREE.BoxGeometry( 1, 1, 1 );
// Create the Material passing the color
var material = new THREE.MeshBasicMaterial( { color: "#433F81" } );
// Create the Mesh
var cube = new THREE.Mesh( geometry, material );
// Add the mesh to the scene
scene.add( cube );

// Render Loop
var render = function () {
  requestAnimationFrame( render );
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
};
render();
