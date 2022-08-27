// Crear escena
const scene = new THREE.Scene();
scene.fog = new THREE.Fog(0x1BD6E9, 0.1, 10)
let loader = new THREE.TextureLoader();
loader.load(
    '../img/berser.jpg', function(texture){
        scene.background = texture;
    }
)

// Se crea la camara y la perspectiva con sus respectivas medidas
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// Se crea el render
const renderer = new THREE.WebGLRenderer();

// Se crea el tamaño de la ventana
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild(renderer.domElement);

const geometry = new THREE.CylinderGeometry( 1, 1, 5, 12 );
const material = new THREE.MeshBasicMaterial( {color: 0x951BE9} );
const cylinder = new THREE.Mesh( geometry, material );
scene.add( cylinder );


camera.position.z = 5;

function animate(){
    requestAnimationFrame(animate);

    cylinder.rotation.x += 0.04;
    cylinder.rotation.y += 0.08;
    cylinder.rotation.z += 0.05
    renderer.render(scene, camera);
}
animate();