import * as THREE from 'three';


var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var geometry = new THREE.BoxGeometry(3,3,3);
var material = new THREE.MeshBasicMaterial({
    color: 0x70e617
});

var geometry2 = new THREE.BoxGeometry(3,3,3);
var material2 = new THREE.MeshBasicMaterial({
    color: 0xb1e617
});

var geometry3 = new THREE.BoxGeometry(3,3,3);
var material3 = new THREE.MeshBasicMaterial({
    color: 0xd6e617
})



var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

var cube2 = new THREE.Mesh(geometry2,material2);
scene.add(cube2);

var cube3 = new THREE.Mesh(geometry3,material3);
scene.add(cube3)

cube.position.x = -3;
cube2.position.x = 0;
cube3.position.x = 3;
camera.position.z = 6;


function animate() {
    requestAnimationFrame( animate );

    cube.rotation.x -= 0.01;
    cube2.rotation.x += 0.01;
    cube3.rotation.x -= 0.01;

    renderer.render( scene, camera );
}

animate();