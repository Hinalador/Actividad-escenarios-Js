// Crear escena
const scene = new THREE.Scene();
scene.fog = new THREE.Fog(0x36F72A, 0.1, 10)
scene.background = new THREE.Color(0x46D359)

// Se crea la camara y la perspectiva con sus respectivas medidas
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// Se crea el render
const renderer = new THREE.WebGLRenderer();

// Se crea el tamaño de la ventana
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild(renderer.domElement);

const geometry = new THREE.RingGeometry( 1, 5, 10 );
const material = new THREE.MeshBasicMaterial( { color: 0xFF00D1, side: THREE.DoubleSide } );
const mesh = new THREE.Mesh( geometry, material );
scene.add( mesh );

camera.position.y = 0.5;
camera.position.z = 9;

function animate(){
    requestAnimationFrame(animate);

    mesh.rotation.x += 0.04;
    mesh.rotation.y += 0.08;
    mesh.rotation.z += 0.05
    renderer.render(scene, camera);
}
animate();