// Crear escena
const scene = new THREE.Scene();
scene.fog = new THREE.Fog(0x00A6FF, 0.1, 3)
scene.background = new THREE.Color(0x501A2)

// Se crea la camara y la perspectiva con sus respectivas medidas
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// Se crea el render
const renderer = new THREE.WebGLRenderer();

// Se crea el tamaño de la ventana
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild(renderer.domElement);

const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 );
const material = new THREE.MeshBasicMaterial( { color: 0x7459E1, wireframe:true } );
const capsule = new THREE.Mesh( geometry, material );
scene.add( capsule );

camera.position.x = 1;
camera.position.y = 0;
camera.position.z = 3;

function animate(){
    requestAnimationFrame(animate);

    capsule.rotation.x += 0.05;
    capsule.rotation.y += 0.6;
    renderer.render(scene, camera);
}
animate();