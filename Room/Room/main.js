// Scene
const scene = new THREE.Scene();

// Camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 3.5, 6); 
camera.rotation.set(-Math.PI / 4, 0, 0); 
 

// Target position for the camera to move towards
const targetPosition = new THREE.Vector3(0, 1, 3);

// Renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true; // Enable shadows
renderer.shadowMap.type = THREE.PCFSoftShadowMap; // Soft shadows
document.body.appendChild(renderer.domElement);

// Resize handling
window.addEventListener('resize', () => {
    const newWidth = window.innerWidth;
    const newHeight = window.innerHeight;

    camera.aspect = newWidth / newHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(newWidth, newHeight);
});

// Floor
const floorGeometry = new THREE.PlaneGeometry(10, 10);
const floorMaterial = new THREE.MeshStandardMaterial({ color: 0xaaaaaa, side: THREE.DoubleSide });
const floor = new THREE.Mesh(floorGeometry, floorMaterial);
floor.rotation.x = Math.PI / 2;
scene.add(floor);

// Walls
const wallGeometry1 = new THREE.BoxGeometry(10, 2, 0.1);
const wallMaterial = new THREE.MeshStandardMaterial({ color: 0xFFFFFF });
const wall1 = new THREE.Mesh(wallGeometry1, wallMaterial);
wall1.position.set(0, 1, -5);
scene.add(wall1);

const wallGeometry2 = new THREE.BoxGeometry(10, 2, 0.1);
const wall2 = new THREE.Mesh(wallGeometry2, wallMaterial);
wall2.position.set(0, 1, 5);
scene.add(wall2);

const wallGeometry3 = new THREE.BoxGeometry(0.1, 2, 10);
const wall3 = new THREE.Mesh(wallGeometry3, wallMaterial);
wall3.position.set(-5, 1, 0);
scene.add(wall3);

const wallGeometry4 = new THREE.BoxGeometry(0.1, 2, 10);
const wall4 = new THREE.Mesh(wallGeometry4, wallMaterial);
wall4.position.set(5, 1, 0);
scene.add(wall4);
//end of walls


// Bed Frame
const bedFrameGeometry = new THREE.BoxGeometry(2, 0.2, 4);
const bedFrameMaterial = new THREE.MeshStandardMaterial({
    color: 0x543c32,
});
const bedFrame = new THREE.Mesh(bedFrameGeometry, bedFrameMaterial);
bedFrame.position.set(-3.5, 0.2 / 2, 1.5);
bedFrame.castShadow = true;
bedFrame.receiveShadow = false;
scene.add(bedFrame);

// Bed
const bedGeometry = new THREE.BoxGeometry(1.8, 0.2, 3.8);
const bedMaterial = new THREE.MeshStandardMaterial({ color: 0xFFFFFF });
const bed = new THREE.Mesh(bedGeometry, bedMaterial);
bed.position.set(-3.5, 0.2 + 0.2 / 2, 1.5);
scene.add(bed);

// Blanket on Bed
const blanketGeometry = new THREE.BoxGeometry(1.8, 0.05, 2.5);
const blanketMaterial = new THREE.MeshStandardMaterial({ color: 0x87CEEB });
const blanket = new THREE.Mesh(blanketGeometry, blanketMaterial);
blanket.position.set(-3.5, 0.2 + 0.2, .9);
scene.add(blanket);

// Bed Headboard
const headboardGeometry = new THREE.BoxGeometry(2, 0.5, 0.1);
const headboardMaterial = new THREE.MeshStandardMaterial({ color: 0x543c32 });
const headboard = new THREE.Mesh(headboardGeometry, headboardMaterial);
headboard.position.set(-3.5, 1 / 2, 3.45);
scene.add(headboard);

// Bed Pillow
const pillowGeometry = new THREE.BoxGeometry(1, 0.3, 0.5);
const pillowMaterial = new THREE.MeshStandardMaterial({ color: 0xe8e4c9 });
const pillow = new THREE.Mesh(pillowGeometry, pillowMaterial);
pillow.position.set(-3.5, 0.2 + 0.2 / 2 + 0.1, 2.7);
scene.add(pillow);

// Open Laptop
const laptopBaseGeometry = new THREE.BoxGeometry(0.8, 0.05, 0.5);
const laptopScreenGeometry = new THREE.BoxGeometry(0.8, 0.6, 0.05);
const laptopMaterial = new THREE.MeshStandardMaterial({ color: 0x333333 });
const laptopBase = new THREE.Mesh(laptopBaseGeometry, laptopMaterial);
const laptopScreen = new THREE.Mesh(laptopScreenGeometry, laptopMaterial);
laptopBase.position.set(-3.5, 0.2 + 0.2 + 0.05, 1.8);
laptopScreen.position.set(-3.5, 0.2 + 0.2 + 0.23, 1.6);
scene.add(laptopBase);
scene.add(laptopScreen);

//Keyboard
const keyboardGeometry = new THREE.BoxGeometry(0.8, 0.01, 0.3);
const keyboardMaterial = new THREE.MeshStandardMaterial({ color: 0x000000 });
const keyboard = new THREE.Mesh(keyboardGeometry, keyboardMaterial);
keyboard.position.set(-3.5, 0.2 + 0.2 + 0.05 + 0.03, 1.7);
scene.add(keyboard);

// Window Material
const windowMaterial = new THREE.MeshStandardMaterial({ color: 0xadd8e6, transparent: true, opacity: 0.7 });

// Windows
const windowGeometry1 = new THREE.BoxGeometry(2, 1, 0.2);
const window1 = new THREE.Mesh(windowGeometry1, windowMaterial);
window1.position.set(0, 1, -5);
scene.add(window1);

const windowGeometry2 = new THREE.BoxGeometry(2, 1, 0.2);
const window2 = new THREE.Mesh(windowGeometry2, windowMaterial);
window2.position.set(0, 1, 5);
scene.add(window2);

const windowGeometry3 = new THREE.BoxGeometry(0.2, 1, 2);
const window3 = new THREE.Mesh(windowGeometry3, windowMaterial);
window3.position.set(-5, 1, 0);
scene.add(window3);

const windowGeometry4 = new THREE.BoxGeometry(0.2, 1, 2);
const window4 = new THREE.Mesh(windowGeometry4, windowMaterial);
window4.position.set(5, 1, 0);
scene.add(window4);
//end of windows

// Long Table Legs
const legGeometry = new THREE.BoxGeometry(0.1, 0.8, 0.1);
const legMaterial = new THREE.MeshStandardMaterial({ color: 0x964B00 });

const frontLeftLeg = new THREE.Mesh(legGeometry, legMaterial);
frontLeftLeg.position.set(-1.4, 0.4, 0.4);
scene.add(frontLeftLeg);

const frontRightLeg = new THREE.Mesh(legGeometry, legMaterial);
frontRightLeg.position.set(1.4, 0.4, 0.4);
scene.add(frontRightLeg);

const backLeftLeg = new THREE.Mesh(legGeometry, legMaterial);
backLeftLeg.position.set(-1.4, 0.4, -0.4);
scene.add(backLeftLeg);

const backRightLeg = new THREE.Mesh(legGeometry, legMaterial);
backRightLeg.position.set(1.4, 0.4, -0.4);
scene.add(backRightLeg);

// Long Table
const longTableGeometry = new THREE.BoxGeometry(3, 0.2, 1);
const longTableMaterial = new THREE.MeshStandardMaterial({ color: 0x964B00 });
const longTable = new THREE.Mesh(longTableGeometry, longTableMaterial);
longTable.position.set(0, 0.9, 0);
scene.add(longTable);
//end of table

// Cellphone on Long Table
const cellphoneGeometry = new THREE.BoxGeometry(0.2, 0.05, 0.1);
const cellphoneMaterial = new THREE.MeshStandardMaterial({ color: 0x000000 });
const cellphone = new THREE.Mesh(cellphoneGeometry, cellphoneMaterial);
cellphone.position.set(-1.0, 1.1, 0);
scene.add(cellphone);

// Cake on Long Table
const cakeGeometry = new THREE.BoxGeometry(0.8, 0.4, 0.8); 
const cakeMaterial = new THREE.MeshStandardMaterial({ color: 0xFFD700 }); // Adjust color as needed
const cake = new THREE.Mesh(cakeGeometry, cakeMaterial);
cake.position.set(0, 1.1, 0); 
scene.add(cake);

// Candles on Cake
const candleGeometry = new THREE.CylinderGeometry(0.02, 0.02, 0.3, 8); // Adjust dimensions as needed
const candleMaterial = new THREE.MeshStandardMaterial({ color: 0xFFFFFF }); // Adjust color as needed

const candle1 = new THREE.Mesh(candleGeometry, candleMaterial);
candle1.position.set(-0.2, 1.3, 0.2); // Adjusted position on the cake
scene.add(candle1);

const candle2 = new THREE.Mesh(candleGeometry, candleMaterial);
candle2.position.set(0.2, 1.3, 0.2); // Adjusted position on the cake
scene.add(candle2);

const candle3 = new THREE.Mesh(candleGeometry, candleMaterial);
candle3.position.set(0, 1.3, -0.2); // Adjusted position on the cake
scene.add(candle3);
//end of candles

// Gift Box
const giftGeometry = new THREE.BoxGeometry(0.3, 0.3, 0.3); // Adjust dimensions as needed
const giftMaterial = new THREE.MeshStandardMaterial({ color: 0xf6bfbc }); // Adjust color as needed

const gift = new THREE.Mesh(giftGeometry, giftMaterial);
gift.position.set(0.8, 1.2, 0.3); // Adjusted position beside the cake
scene.add(gift);

// Ambient Light
const ambientLight = new THREE.AmbientLight(0x404040);
scene.add(ambientLight);

// Point Light
const pointLight = new THREE.PointLight(0xffffff, 1, 100);
pointLight.position.set(0, 3, 5);
pointLight.castShadow = true;
scene.add(pointLight);

// Set up shadow properties for the light
pointLight.shadow.mapSize.width = 1024; 
pointLight.shadow.mapSize.height = 1024;
pointLight.shadow.camera.near = 0.5;
pointLight.shadow.camera.far = 500; 

// Animation
const animate = () => {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
};

animate();
