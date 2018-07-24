// Add labels
var addLabels = function(position) {

    good = makeTextSprite( "Best form", 
		{fontface: "Quicksand", backgroundColor: colorLettersRGB, fontsize: 25, borderColor: colorLettersRGB, borderThickness: 5 } );	
    good.position.normalize().multiplyScalar( 1 );
	good.position.setY(64)
	good.position.setX(35)
	good.position.setZ(80)
	scatterPlot.add(good);

    bad = makeTextSprite( "Worst form", 
		{fontface: "Quicksand", backgroundColor: colorLettersRGB, fontsize: 20, borderColor: colorLettersRGB, borderThickness: 5 } );
 	bad.position.normalize().multiplyScalar( 1 );
	bad.position.setY(-60)
	bad.position.setX(-80)
	bad.position.setZ(-50)

	scatterPlot.add(bad);

	var sphereGeometryBad = new THREE.SphereGeometry(5, 30, 30);
    var sphereMaterialBad = new THREE.MeshBasicMaterial({color: colorFormBall});

    sphereBad = new THREE.Mesh(sphereGeometryBad, sphereMaterialBad);
    sphereBad.position.x = xScale(vpts.xMin);
    sphereBad.position.y = yScale(vpts.yMin);
    sphereBad.position.z = zScale(vpts.zMin);
    scatterPlot.add(sphereBad);

	var sphereGeometryGood = new THREE.SphereGeometry(5, 30, 30);
    var sphereMaterialGood = new THREE.MeshBasicMaterial({color: colorFormBall});

    sphereGood = new THREE.Mesh(sphereGeometryGood, sphereMaterialGood);
    sphereGood.position.x = xScale(vpts.xMax);
    sphereGood.position.y = yScale(vpts.yMax);
    sphereGood.position.z = zScale(vpts.zMax);
    scatterPlot.add(sphereGood);
	
	if (position=="hitters") {

		ba = makeTextSprite( "Batting average", 
		{fontface: "Quicksand", backgroundColor: {r:0, g:0, b:31, a:1.0}, fontsize: 20, borderColor: {r:0, g:0, b:31, a:1.0}, borderThickness: 5 } );
		ba.position.normalize().multiplyScalar( 1 );
		ba.position.setY(-60)
		ba.position.setX(-25)
		ba.position.setZ(-50)
		scatterPlot.add(ba);

		hr = makeTextSprite( "Home runs", 
		{fontface: "Quicksand", backgroundColor: {r:0, g:0, b:31, a:1.0}, fontsize: 20, borderColor: {r:0, g:0, b:31, a:1.0}, borderThickness: 5 } );
		hr.position.normalize().multiplyScalar( 1 );
		hr.position.setY(5)
		hr.position.setX(5)
		hr.position.setZ(-30)
		scatterPlot.add(hr);


		rb = makeTextSprite( "Runs batted in", 
		{fontface: "Quicksand", backgroundColor: {r:0, g:0, b:31, a:1.0}, fontsize: 20, borderColor: {r:0, g:0, b:31, a:1.0}, borderThickness: 5 } );
		rb.position.normalize().multiplyScalar( 1 );
		rb.position.setY(-55)
		rb.position.setX(-85)
		rb.position.setZ(20)
		scatterPlot.add(rb);


	} else if (position=="pitchers") {


		ba = makeTextSprite( "Games won", 
		{fontface: "Quicksand", backgroundColor: {r:0, g:0, b:31, a:1.0}, fontsize: 20, borderColor: {r:0, g:0, b:31, a:1.0}, borderThickness: 5 } );
		ba.position.normalize().multiplyScalar( 1 );
		ba.position.setY(-60)
		ba.position.setX(-25)
		ba.position.setZ(-50)
		scatterPlot.add(ba);

		hr = makeTextSprite( "Strikeouts per 9 IP", 
		{fontface: "Quicksand", backgroundColor: {r:0, g:0, b:31, a:1.0}, fontsize: 20, borderColor: {r:0, g:0, b:31, a:1.0}, borderThickness: 5 } );
		hr.position.normalize().multiplyScalar( 1 );
		hr.position.setY(5)
		hr.position.setX(5)
		hr.position.setZ(-30)
		scatterPlot.add(hr);

		rb = makeTextSprite( "ERA (inverted)", 
		{fontface: "Quicksand", backgroundColor: {r:0, g:0, b:31, a:1.0}, fontsize: 20, borderColor: {r:0, g:0, b:31, a:1.0}, borderThickness: 5 } );
    	rb.position.normalize().multiplyScalar( 1 );
		rb.position.setY(-55)
		rb.position.setX(-85)
		rb.position.setZ(20)
		scatterPlot.add(rb);

	}



}
