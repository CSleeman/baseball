// Delete existing lines and balls (left with 3 meshes)
var removeLine = function() {

    var arrayChildren = scatterPlot.children
    while (arrayChildren.length>3) {
    //for (var k = 0; k<5; k++) {

	    for (var j = 0; j<arrayChildren.length; j++) {
	
		  	if (arrayChildren[j] instanceof THREE.GridHelper) {
     
        } else {    

          if (arrayChildren[j] instanceof THREE.Mesh) {
      			scatterPlot.remove(arrayChildren[j])
      		}
   	 	  
          if (arrayChildren[j] instanceof THREE.Object3D) {
            scatterPlot.remove(arrayChildren[j])
          }
        }

      }  

   	} 	

}	
