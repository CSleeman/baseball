// Draw ball
var drawBall = function(dataBallOne, dataBallTwo) {

	// First Ball
  var sphereGeometryOne = new THREE.SphereGeometry(6, 30, 30);
  var sphereMaterialOne = new THREE.MeshBasicMaterial({color: colorBallFirst});
  var pointCount = dataBallOne.length;


    var texture = THREE.ImageUtils.loadTexture('ball.png'); 
        texture.minFilter = THREE.LinearFilter
   
    var mat = new THREE.MeshBasicMaterial({map: texture})

    sphereOne = new THREE.Mesh(sphereGeometryOne, mat);
    sphereOne.position.x = xScale(dataBallOne[0].x);
    sphereOne.position.y = yScale(dataBallOne[0].y);
    sphereOne.position.z = zScale(dataBallOne[0].z);
    scatterPlot.add(sphereOne);

    window.dataBallOne = dataBallOne;



    // Second Ball
    if (playerSet.length===2) {

		var sphereGeometryTwo = new THREE.SphereGeometry(6, 30, 30);
		var sphereMaterialTwo = new THREE.MeshBasicMaterial({color: colorBallSecond});
		var pointCount = dataBallTwo.length;

      sphereTwo = new THREE.Mesh(sphereGeometryTwo, mat);
    	sphereTwo.position.x = xScale(dataBallTwo[0].x);
   	 	sphereTwo.position.y = yScale(dataBallTwo[0].y);
    	sphereTwo.position.z = zScale(dataBallTwo[0].z);
    	scatterPlot.add(sphereTwo);

      window.dataBallTwo = dataBallTwo;

    }


}

