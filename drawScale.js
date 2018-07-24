// Re-draw the scale
var drawScale = function(hittersOrPitchers) {

  // Data source
  if (hittersOrPitchers==="hitters") {
     dataSource = dataHitters
  } else if (hittersOrPitchers==="pitchers") {
     dataSource = dataPitchers
  }

   // First series
   unfiltered = []

   for (var i = 0; i < data_length; i ++) {

        temp_x = eval(dataSource[i]['x'+playerSet[0]])
        temp_y = eval(dataSource[i]['y'+playerSet[0]])
        temp_z = eval(dataSource[i]['z'+playerSet[0]])

	    unfiltered[i] = {
               x: +temp_x,
               y: +temp_y,
               z: +temp_z
            };

    }	

   // Second series 
   if (playerSet.length===2) {

	    for (var i = 0; i < data_length; i ++) {
	
        temp_x = eval(dataSource[i]['x'+playerSet[1]])
        temp_y = eval(dataSource[i]['y'+playerSet[1]])
        temp_z = eval(dataSource[i]['z'+playerSet[1]])


	        unfiltered[data_length+i] = {
                	x: +temp_x,
                	y: +temp_y,
                	z: +temp_z
            };

        }	
   }

   var xExent = d3.extent(unfiltered, function(d) {return d.x; }),
        yExent = d3.extent(unfiltered, function(d) {return d.y; }),
        zExent = d3.extent(unfiltered, function(d) {return d.z; });

    vpts = {
        xMax: xExent[1],
        xCen: (xExent[1] + xExent[0]) / 2,
        xMin: xExent[0],
        yMax: yExent[1],
        yCen: (yExent[1] + yExent[0]) / 2,
        yMin: yExent[0],
        zMax: zExent[1],
        zCen: (zExent[1] + zExent[0]) / 2,
        zMin: zExent[0]
    }

    xScale = d3.scale.linear()
                  .domain(xExent)
                  .range([-70,50]);
    yScale = d3.scale.linear()
                  .domain(yExent)
                  .range([-50,70]);                  
    zScale = d3.scale.linear()
                  .domain(zExent)
                  .range([-50,70]);                  

}
