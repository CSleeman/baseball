// Draw Line
var drawLine = function(hittersOrPitchers, e) {
  
  // e is player
    
  // Data source
  if (hittersOrPitchers==="hitters") {
     dataSource = dataHitters
  } else if (hittersOrPitchers==="pitchers") {
     dataSource = dataPitchers
  }

    // Draw first line
  	    unfiltered_1 = [];
 	  	for (var i = 0; i < data_length; i ++) {
	
            temp_x = eval(dataSource[i]['x'+playerSet[0]])
            temp_y = eval(dataSource[i]['y'+playerSet[0]])
            temp_z = eval(dataSource[i]['z'+playerSet[0]])

	        unfiltered_1[i] = {
                	x: +temp_x,
                	y: +temp_y,
                	z: +temp_z
            };

        }

   	 	var lx = xScale(unfiltered_1[0].x);
    	var ly = yScale(unfiltered_1[0].y);
    	var lz = zScale(unfiltered_1[0].z);

    	for (var i = 1; i < data_length; i ++) {

        	var x = xScale(unfiltered_1[i].x);
        	var y = yScale(unfiltered_1[i].y);
        	var z = zScale(unfiltered_1[i].z);

        	var a = new THREE.Vector3( lx, ly, lz );
        	var b = new THREE.Vector3( x, y, z );

        	var lx = x;
        	var ly = y;
        	var lz = z;

    	    drawCylinder(hittersOrPitchers,a,b,scatterPlot,i,"no")

    	}

   // Draw second line  
   if (playerSet.length===2) {

  	    unfiltered_2 = [];
 	  	for (var i = 0; i < data_length; i ++) {
	
            temp_x = eval(dataSource[i]['x'+playerSet[1]])
            temp_y = eval(dataSource[i]['y'+playerSet[1]])
            temp_z = eval(dataSource[i]['z'+playerSet[1]])

	        unfiltered_2[i] = {
                	x: +temp_x,
                	y: +temp_y,
                	z: +temp_z
            };

        }	

   	 	var lx = xScale(unfiltered_2[0].x);
    	var ly = yScale(unfiltered_2[0].y);
    	var lz = zScale(unfiltered_2[0].z);

    	for (var i = 1; i < data_length; i ++) {

        	var x = xScale(unfiltered_2[i].x);
        	var y = yScale(unfiltered_2[i].y);
        	var z = zScale(unfiltered_2[i].z);

        	var a = new THREE.Vector3( lx, ly, lz );
        	var b = new THREE.Vector3( x, y, z );

        	var lx = x;
        	var ly = y;
        	var lz = z;

    	    drawCylinder(hittersOrPitchers,a,b,scatterPlot,i,"yes")

    	}


    } // Add second line	


	// Balls
    if (playerSet.length===1) {

	    drawBall(unfiltered_1,0)

	} else {
     
        drawBall(unfiltered_1,unfiltered_2)

	}    


}
