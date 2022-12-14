//escenario

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x25a98);

var loader = new THREE.TextureLoader();
loader.load(
    '../IMG/berserk-wallpaper-hd-iphone-182823834.jpeg', function(texture){
        scene.background = texture
    }
);
    

//camaras

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

//render

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//geometrìas

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0xCCCCCC } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

//animaciòn

function animate() {
	requestAnimationFrame( animate );
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
	renderer.render( scene, camera );
}
animate();