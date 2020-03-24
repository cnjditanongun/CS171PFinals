let scene, camera, renderer, meshBed;
let meshFloor, ambientLight, light, controls, meshWall1, floorTexture;
 
let keyboard = {};
let player = { height:2, speed:1, turnSpeed:Math.PI*2 };
let USE_WIREFRAME = false;
 
function init(){
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(60,window.innerWidth / window.innerHeight, 1, 1000);
    scene.background = (new THREE.TextureLoader().load('assets/textures/bg.jpg'))
    camera.rotation.x = Math.PI/2;


    //Cone

    //Middle COne
    const moutainTopGeometry = new THREE.ConeGeometry( 50, 45, 4 );
    const moutainToptexture = new THREE.TextureLoader().load('assets/textures/nni.jpg');
    const mountainTopMaterial = new THREE.MeshLambertMaterial( {map: moutainToptexture, transparent: true} );
    const mountainTop = new THREE.Mesh( moutainTopGeometry, mountainTopMaterial );
    
    mountainTop.rotation.y = 0.8;
    mountainTop.position.set(-20,-90,155);
    scene.add( mountainTop );

    //Right COne
    const moutainRightConeGeometry = new THREE.ConeGeometry( 32,28, 5 );
    const  moutainRightConeTexture = new THREE.TextureLoader().load('assets/textures/nni.jpg' );
    const  moutainRightConeMaterial =new THREE.MeshPhongMaterial({map:moutainRightConeTexture});
    const  moutainRightCone = new THREE.Mesh( moutainRightConeGeometry, moutainRightConeMaterial );
    moutainRightCone.rotation.x = 0.1;
    moutainRightCone.rotation.y = 0.8;
    moutainRightCone.position.set(-188,-80 ,158);
    scene.add( moutainRightCone );


    //Moutain Tops

    //First Top Right beside the mid Con
    const firstRightTopWidth = 28;
    const firstRightTopHeight = 28;
    const firstRightTopDepth = 70;
    const firstRightTopGeometry = new THREE.BoxBufferGeometry(firstRightTopWidth, firstRightTopHeight, firstRightTopDepth);
    const firstRightTopTexture = new THREE.TextureLoader().load('assets/textures/ah.jpg' );
    const firstRightTopMaterial =new THREE.MeshPhongMaterial({map:firstRightTopTexture});
    const firstRightTop = new THREE.Mesh(firstRightTopGeometry, firstRightTopMaterial);
    firstRightTop.position.set(-75,-110,158);
    firstRightTop.rotation.x = 1.6;
    firstRightTop.rotation.y = 4.7 ;
    firstRightTop.rotation.z = 2.3;
    scene.add(firstRightTop );


    //Second Top Right beside the mid Con
    const secondTopRightWidth = 28;
    const secondTopRightHeight = 28;
    const secondTopRightDepth = 40;
    const secondTopRightGeometry = new THREE.BoxBufferGeometry(secondTopRightWidth, secondTopRightHeight, secondTopRightDepth);
    const secondTopRightTexture = new THREE.TextureLoader().load('assets/textures/ah.jpg' );
    const secondTopRightMaterial =new THREE.MeshPhongMaterial({map:secondTopRightTexture});
    const secondTopRight = new THREE.Mesh(secondTopRightGeometry, secondTopRightMaterial);
    secondTopRight.position.set(-130,-108 ,160);
    secondTopRight.rotation.x = 1.7;
    secondTopRight.rotation.y = 7.7 ;
    secondTopRight.rotation.z = 2.3;
    scene.add(secondTopRight );


    //Third Top Right beside the mid Con
    const thirdTopRightWidth = 28;
    const thirdTopRightHeight = 29;
    const thirdTopRightDepth = 40;
    const thirdTopRightGeometry = new THREE.BoxBufferGeometry(thirdTopRightWidth, thirdTopRightHeight, thirdTopRightDepth);
    const thirdTopRightTexture = new THREE.TextureLoader().load('assets/textures/ah.jpg' );
    const thirdTopRightMaterial =new THREE.MeshPhongMaterial({map:thirdTopRightTexture});
    const thirdTopRight = new THREE.Mesh(thirdTopRightGeometry, thirdTopRightMaterial);
    thirdTopRight.position.set(-165,-103,160);
    thirdTopRight.rotation.x = 1.7;
    thirdTopRight.rotation.y = 7.7;
    thirdTopRight.rotation.z = 2.3;
    scene.add(thirdTopRight);

    //first top left
    const firstTopLeftWidth = 28;
    const firstTopLeftHeight = 28;
    const firstTopLeftDepth = 60;
    const firstTopLeftGeometry = new THREE.BoxBufferGeometry(firstTopLeftWidth, firstTopLeftHeight, firstTopLeftDepth);
    const firstTopLeftTexture = new THREE.TextureLoader().load('assets/textures/ah.jpg' );
    const sfirstTopLeftMaterial =new THREE.MeshPhongMaterial({map:firstTopLeftTexture});
    const firstTopLeft = new THREE.Mesh(firstTopLeftGeometry, sfirstTopLeftMaterial);
    firstTopLeft.position.set(30,-103,148);
    firstTopLeft.rotation.x = 1.6;
    firstTopLeft.rotation.y = 4.68 ;
    firstTopLeft.rotation.z = 2.4;
    scene.add(firstTopLeft );

    //second top left
    const secondTopLeftWidth = 28;
    const secondTopLeftHeight = 28;
    const secondTopLeftDepth = 60;
    const secondTopLeftGeometry = new THREE.BoxBufferGeometry(secondTopLeftWidth, secondTopLeftHeight, secondTopLeftDepth);
    const secondTopLeftTexture = new THREE.TextureLoader().load('assets/textures/ah.jpg' );
    const secondTopLeftMaterial =new THREE.MeshPhongMaterial({map:secondTopLeftTexture});
    const secondTopLeft = new THREE.Mesh(secondTopLeftGeometry, secondTopLeftMaterial);
    secondTopLeft.position.set(85,-103,148);
    secondTopLeft.rotation.x = 1.6;
    secondTopLeft.rotation.y = 4.75 ;
    secondTopLeft.rotation.z = 2.4;
    scene.add(secondTopLeft );
    
    //thirdTopLeft
    const thirdTopLeftWidth = 28;
    const thirdTopLeftHeight = 28;
    const thirdTopLeftDepth = 60;
    const thirdTopLeftgeometry = new THREE.BoxBufferGeometry(thirdTopLeftWidth, thirdTopLeftHeight, thirdTopLeftDepth);
    const thirdTopLeftTexture = new THREE.TextureLoader().load('assets/textures/ah.jpg' );
    const thirdTopLeftMaterial =new THREE.MeshPhongMaterial({map:thirdTopLeftTexture});
    const thirdTopLeft = new THREE.Mesh(thirdTopLeftgeometry, thirdTopLeftMaterial);
    thirdTopLeft.position.set(145,-96,148.5);
    thirdTopLeft.rotation.x = 1.6;
    thirdTopLeft.rotation.y = 4.9 ;
    thirdTopLeft.rotation.z = 2.4;
    scene.add(thirdTopLeft );

    //fourthTopLeft
    const fourthTopLeftWidth = 28;
    const fourthTopLeftHeight = 28;
    const deptfourthTopLeftDepthh8 = 30;
    const fourthTopLeftGeometry = new THREE.BoxBufferGeometry(fourthTopLeftWidth, fourthTopLeftHeight, deptfourthTopLeftDepthh8);
    const fourthTopLeftTexture = new THREE.TextureLoader().load('assets/textures/ah.jpg' );
    const fourthTopLeftMaterial =new THREE.MeshPhongMaterial({map:fourthTopLeftTexture});
    const fourthTopLeft = new THREE.Mesh(fourthTopLeftGeometry, fourthTopLeftMaterial);
    fourthTopLeft.position.set(185,-88,150);
    fourthTopLeft.rotation.x = 1.7;
    fourthTopLeft.rotation.y = 4.8 ;
    fourthTopLeft.rotation.z = 2.5;
    scene.add(fourthTopLeft);
    

    //Bottom

    //firstBottomLeft
    const firstBottomLeftWidth = 90;
    const firstBottomLeftHeight = 28;
    const firstBottomLeftDepth = 70;
    const firstBottomLeftGeometry = new THREE.BoxBufferGeometry(firstBottomLeftWidth, firstBottomLeftHeight, firstBottomLeftDepth);
    const firstBottomLeftTexture = new THREE.TextureLoader().load('assets/textures/ah.jpg' );
    const firstBottomLeftMaterial =new THREE.MeshPhongMaterial({map:firstBottomLeftTexture});
    const firstBottomLeft = new THREE.Mesh(firstBottomLeftGeometry, firstBottomLeftMaterial);
    firstBottomLeft.position.set(38,-130,125);
    firstBottomLeft.rotation.x = 1.7;
    firstBottomLeft.rotation.y = 4.7 ;
    firstBottomLeft.rotation.z = 2.3;
    scene.add(firstBottomLeft );

    //secondBottom left
    const secondBottomLeftWidth = 90;
    const secondBottomLeftHeight = 28;
    const secondBottomLeftDepth = 60;
    const secondBottomLeftGeometry = new THREE.BoxBufferGeometry(secondBottomLeftWidth, secondBottomLeftHeight, secondBottomLeftDepth);
    const secondBottomLeftTexture = new THREE.TextureLoader().load('assets/textures/ah.jpg' );
    const secondBottomLeftMaterial =new THREE.MeshPhongMaterial({map:secondBottomLeftTexture});
    const secondBottomLeft = new THREE.Mesh(secondBottomLeftGeometry, secondBottomLeftMaterial);
    secondBottomLeft.position.set(90 ,-125, 125);
    secondBottomLeft.rotation.x = 1.7;
    secondBottomLeft.rotation.y = 4.9 ;
    secondBottomLeft.rotation.z = 2.3;
    scene.add(secondBottomLeft );

    //third bottom left
    const thirdBottomLeftWidth = 78;
    const thirdBottomLeftHeight = 28;
    const thirdBottomLeftDepth = 78;
    const thirdBottomLeftGeometry = new THREE.BoxBufferGeometry(thirdBottomLeftWidth, thirdBottomLeftHeight, thirdBottomLeftDepth);
    const thirdBottomLeftTexture = new THREE.TextureLoader().load('assets/textures/ah.jpg' );
    const thirdBottomLeftMaterial =new THREE.MeshPhongMaterial({map:thirdBottomLeftTexture});
    const thirdBottomLeft = new THREE.Mesh(thirdBottomLeftGeometry, thirdBottomLeftMaterial);
    thirdBottomLeft.position.set(160 ,-120, 115);
    thirdBottomLeft.rotation.x = 1.7;
    thirdBottomLeft.rotation.y = 4.9 ;
    thirdBottomLeft.rotation.z = 2.3;
    scene.add(thirdBottomLeft );

    //middleBottom
    const middleBottomtWidth = 80;
    const middleBottomHeight = 28;
    const middleBottomLeftDepth = 83;
    const middleBottomLeftGeometry = new THREE.BoxBufferGeometry(middleBottomtWidth, middleBottomHeight, middleBottomLeftDepth);
    const middleBottomLeftTexture = new THREE.TextureLoader().load('assets/textures/ah.jpg' );
    const middleBottomLeftMaterial =new THREE.MeshPhongMaterial({map:middleBottomLeftTexture});
    const middleBottomLeft = new THREE.Mesh(middleBottomLeftGeometry, middleBottomLeftMaterial);
    middleBottomLeft.position.set(-33,-135,125);
    middleBottomLeft.rotation.x = 1.7;
    middleBottomLeft.rotation.y = 4.7 ;
    middleBottomLeft.rotation.z = 2.3;
    scene.add(middleBottomLeft );


    //firstBottomRight
    const firstBottomRightWidth = 28;
    const firstBottomRightHeight = 75;
    const firstBottomRightDepth = 70;
    const firstBottomRightGeometry = new THREE.BoxBufferGeometry(firstBottomRightWidth, firstBottomRightHeight, firstBottomRightDepth);
    const firstBottomRightTexture = new THREE.TextureLoader().load('assets/textures/ah.jpg' );
    const firstBottomRightMaterial =new THREE.MeshPhongMaterial({map:firstBottomRightTexture});
    const firstBottomRight = new THREE.Mesh(firstBottomRightGeometry, firstBottomRightMaterial);
    firstBottomRight.position.set(-110,-135,123);
    firstBottomRight.rotation.x = 1.8;
    firstBottomRight.rotation.y = 7.8 ;
    firstBottomRight.rotation.z = 2.3;
    scene.add(firstBottomRight );


    //secondBottomRight
    const secondBottomRightWidth = 28;
    const secondBottomRightHeight = 70;
    const secondBottomRightDepth = 60;
    const secondBottomRightGeometry = new THREE.BoxBufferGeometry(secondBottomRightWidth, secondBottomRightHeight, secondBottomRightDepth);
    const secondBottomRightTexture = new THREE.TextureLoader().load('assets/textures/ah.jpg' );
    const secondBottomRightMaterial =new THREE.MeshPhongMaterial({map:secondBottomRightTexture});
    const secondBottomRight = new THREE.Mesh(secondBottomRightGeometry, secondBottomRightMaterial);
    secondBottomRight.position.set(-175,-128,120);
    secondBottomRight.rotation.x = 1.8;
    secondBottomRight.rotation.y = 7.7;
    secondBottomRight.rotation.z = 2.3;
    scene.add(secondBottomRight);


    //Back

    //first Bottom from the Left
    const firstBottomBackWidth = 80;
    const firstBottomBackHeight = 28;
    const firstBottomBackDepth = 60;
    const firstBottomBackGeometry = new THREE.BoxBufferGeometry(firstBottomBackWidth, firstBottomBackHeight, firstBottomBackDepth);
    const firstBottomBackTexture = new THREE.TextureLoader().load('assets/textures/ah.jpg' );
    const firstBottomBackMaterial =new THREE.MeshPhongMaterial({map:firstBottomBackTexture});
    const firstBottomBack = new THREE.Mesh(firstBottomBackGeometry, firstBottomBackMaterial);
    firstBottomBack.position.set(165,-127,195);
    firstBottomBack.rotation.x = 1.7;
    firstBottomBack.rotation.y = 4.8 ;
    firstBottomBack.rotation.z = 4.2;
    scene.add(firstBottomBack );

    //Second Bottom from the Left
    const secondBottomBackWidth = 80;
    const secondBottomBackHeight = 28;
    const secondBottomBackDepth = 60;
    const secondBottomBackGeometry = new THREE.BoxBufferGeometry(secondBottomBackWidth, secondBottomBackHeight, secondBottomBackDepth);
    const secondBottomBackTexture = new THREE.TextureLoader().load('assets/textures/ah.jpg' );
    const secondBottomBackMaterial =new THREE.MeshPhongMaterial({map:secondBottomBackTexture});
    const secondBottomBack = new THREE.Mesh(secondBottomBackGeometry, secondBottomBackMaterial);
    secondBottomBack.position.set(105,-133,195);
    secondBottomBack.rotation.x = 1.7;
    secondBottomBack.rotation.y = 4.8 ;
    secondBottomBack.rotation.z = 4.2;
    scene.add(secondBottomBack);

    //Third Bottom from the Left
    const thirdBottomBackWidth = 80;
    const thirdBottomBackHeight = 28;
    const thirdBottomBackDepth = 60;
    const thirdBottomBackGeometry = new THREE.BoxBufferGeometry(thirdBottomBackWidth, thirdBottomBackHeight, thirdBottomBackDepth);
    const thirdBottomBackTexture = new THREE.TextureLoader().load('assets/textures/ah.jpg' );
    const thirdBottomBackMaterial =new THREE.MeshPhongMaterial({map:thirdBottomBackTexture});
    const thirdBottomBack = new THREE.Mesh(thirdBottomBackGeometry, thirdBottomBackMaterial);
    thirdBottomBack.position.set(48,-137, 195);
    thirdBottomBack.rotation.x = 1.7;
    thirdBottomBack.rotation.y = 4.7 ;
    thirdBottomBack.rotation.z = 4.2;
    scene.add(thirdBottomBack);

    //Fourth Bottom from the Left
    const fourthBottomBackWidth = 80;
    const fourthBottomBackHeight = 28;
    const fourthBottomBackDepth = 60;
    const fourthBottomBackGeometry = new THREE.BoxBufferGeometry(fourthBottomBackWidth, fourthBottomBackHeight, fourthBottomBackDepth);
    const fourthBottomBackTexture = new THREE.TextureLoader().load('assets/textures/ah.jpg' );
    const fourthBottomBackMaterial =new THREE.MeshPhongMaterial({map:fourthBottomBackTexture});
    const fourthBottomBack = new THREE.Mesh(fourthBottomBackGeometry, fourthBottomBackMaterial);
    fourthBottomBack.position.set(-10,-135, 195);
    fourthBottomBack.rotation.x = 1.7;
    fourthBottomBack.rotation.y = 4.7 ;
    fourthBottomBack.rotation.z = 4.2;
    scene.add(fourthBottomBack);

    //Fifth Bottom from the Left
    const fifthBottomBackWidth = 80;
    const fifthBottomBackHeight = 28;
    const fifthBottomBackDepth = 60;
    const fifthBottomBackGeometry = new THREE.BoxBufferGeometry(fifthBottomBackWidth, fifthBottomBackHeight, fifthBottomBackDepth);
    const fifthBottomBackTexture = new THREE.TextureLoader().load('assets/textures/ah.jpg' );
    const fifthBottomBackMaterial =new THREE.MeshPhongMaterial({map:fifthBottomBackTexture});
    const fifthBottomBack = new THREE.Mesh(fifthBottomBackGeometry, fifthBottomBackMaterial);
    fifthBottomBack.position.set(-70,-135, 195);
    fifthBottomBack.rotation.x = 1.7;
    fifthBottomBack.rotation.y = 4.7 ;
    fifthBottomBack.rotation.z = 4.2;
    scene.add(fifthBottomBack);

    //six Bottom from the Left 
    const sixBottomBackWidth = 80;
    const sixBottomBackHeight = 28;
    const sixBottomBackDepth = 60;
    const sixBottomBackGeometry = new THREE.BoxBufferGeometry(sixBottomBackWidth, sixBottomBackHeight, sixBottomBackDepth);
    const sixBottomBackTexture = new THREE.TextureLoader().load('assets/textures/ah.jpg' );
    const sixBottomBackMaterial =new THREE.MeshPhongMaterial({map:sixBottomBackTexture});
    const sixhBottomBack = new THREE.Mesh(sixBottomBackGeometry, sixBottomBackMaterial);
    sixhBottomBack.position.set(-128,-130, 195);
    sixhBottomBack.rotation.x = 1.7;
    sixhBottomBack.rotation.y = 4.65 ;
    sixhBottomBack.rotation.z = 4.2;
    scene.add(sixhBottomBack);

    //seven Bottom from the Left
    const sevenBottomBackWidth = 80;
    const sevenBottomBackHeight = 28;
    const sevenBottomBackDepth = 60;
    const sevenBottomBackGeometry = new THREE.BoxBufferGeometry(sevenBottomBackWidth, sevenBottomBackHeight, sevenBottomBackDepth);
    const sevenBottomBackTexture = new THREE.TextureLoader().load('assets/textures/ah.jpg' );
    const sevenBottomBackMaterial =new THREE.MeshPhongMaterial({map:sevenBottomBackTexture});
    const sevenBottomBack = new THREE.Mesh(sevenBottomBackGeometry, sevenBottomBackMaterial);
    sevenBottomBack.position.set(-178,-130, 195);
    sevenBottomBack.rotation.x = 1.7;
    sevenBottomBack.rotation.y = 4.65 ;
    sevenBottomBack.rotation.z = 4.2;
    scene.add(sevenBottomBack);


    // LIGHTS
    ambientLight = new THREE.AmbientLight(0xADD8E6, 0.5);
    scene.add(ambientLight);


    //left blue lght
    leftLight = new THREE.PointLight(0x0034c2, 8  , 10 );
    leftLight.position.set(140,-90,130);
    leftLight.castShadow = true;

    leftLight.shadow.camera.near = 0.1;
    leftLight.shadow.camera.far = 20;
    scene.add(leftLight);


    //right blue light
    rightLight = new THREE.PointLight(0x0034c2, 3  , 40);
    rightLight.position.set(-140,-120,110);
    rightLight.castShadow = true;

    rightLight.shadow.camera.near = 0.1;
    rightLight.shadow.camera.far = 20;
    scene.add(rightLight);


    //hemisphere
    const skyColor = 0x566671;  // light blue
    const groundColor = 0xB1E1FF;  // brownish orange
    const hemiIntensity = 0.5;
    const hemishpehereLight = new THREE.HemisphereLight(skyColor, groundColor, hemiIntensity);
    scene.add(hemishpehereLight);


    //orange light
    const orangeColor = 0xed7014;
    const orangeIntensity = 5;
    const orangeLight = new THREE.SpotLight(orangeColor, orangeIntensity, 430);
    orangeLight.position.set(-180, 80, 300);
    scene.add(orangeLight);


    //pink color
    const pinkColor = 0xFF1493;
    const pinkIntensity = 4;
    const pinkLight = new THREE.SpotLight(pinkColor, pinkIntensity,370);
    pinkLight.position.set(150, 190, 300);
    scene.add(pinkLight);
  
    //Stars
    starGeo = new THREE.Geometry();
      for(let i=0;i<6000;i++) {
        star = new THREE.Vector3(
          Math.random() * 600 - 300,
          Math.random() * 200 - 300,
          Math.random() * 1 - 300
        );
        star.velocity = 0;
        star.acceleration = 0.02;
        starGeo.vertices.push(star);
      }

      let sprite = new THREE.TextureLoader().load( 'assets/textures/star.png' );
      let starMaterial = new THREE.PointsMaterial({
        color: 0xaaaaaa,
        size: 0.7,
        map: sprite
      });

      stars = new THREE.Points(starGeo,starMaterial);
      stars.position.set(0,150 ,540);
      scene.add(stars);

    window.addEventListener("resize", onWindowResize, false);


    camera.position.set(0, player.height, -5);
    camera.lookAt(new THREE.Vector3(0,player.height,0));

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(1280, 720);


    // Enable Shadows in the Renderer
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PhongShadowMap;

    document.body.appendChild(renderer.domElement);
    controls = new THREE.OrbitControls (camera, renderer.domElement);
    
    animate();
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }
 
function animate(){
    controls.update();
    requestAnimationFrame(animate);
    
    if(keyboard[87]){ // W key
        camera.position.x -= Math.sin(camera.rotation.y) * player.speed;
        camera.position.z -= -Math.cos(camera.rotation.y) * player.speed;
    }
    if(keyboard[83]){ // S key
        camera.position.x += Math.sin(camera.rotation.y) * player.speed;
        camera.position.z += -Math.cos(camera.rotation.y) * player.speed;
    }
    if(keyboard[65]){ // A key
        camera.position.x += Math.sin(camera.rotation.y + Math.PI/2) * player.speed;
        camera.position.z += -Math.cos(camera.rotation.y + Math.PI/2) * player.speed;
    }
    if(keyboard[68]){ // D key
        camera.position.x += Math.sin(camera.rotation.y - Math.PI/2) * player.speed;
        camera.position.z += -Math.cos(camera.rotation.y - Math.PI/2) * player.speed;
    }

    if(keyboard[37]){ // left arrow key
        camera.rotation.y -= player.turnSpeed;
    }
    if(keyboard[39]){ // right arrow key
        camera.rotation.y += player.turnSpeed;
    }
  
  renderer.render(scene, camera);
}
 
function keyDown(event){
    keyboard[event.keyCode] = true;
}
 
function keyUp(event){
    keyboard[event.keyCode] = false;
}
 
window.addEventListener('keydown', keyDown);
window.addEventListener('keyup', keyUp);
 
window.onload = init;
