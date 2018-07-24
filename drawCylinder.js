var drawCylinder = function(hittersOrPitchers,vstart, vend,scene,i,secondLine){

    var HALF_PI = Math.PI * .5;
    var distance = vstart.distanceTo(vend);
    var position  = vend.clone().add(vstart).divideScalar(2);

    // Color
    if (hittersOrPitchers==="hitters") {

        var material = new THREE.MeshBasicMaterial({color: colorFirst, transparent: true, opacity: 0.1 });
             
        if (secondLine==="yes") {

            var material = new THREE.MeshBasicMaterial({color: colorSecond, transparent: true, opacity: 0.1 });

        } 

    } else if (hittersOrPitchers==="pitchers")  {

        var material = new THREE.MeshBasicMaterial({color: colorFirst, transparent: true, opacity: 0.1 });
              
        if (secondLine==="yes") {

            var material = new THREE.MeshBasicMaterial({color: colorSecond, transparent: true, opacity: 0.1 });

        } 

    }  

            
    var cylinder = new THREE.CylinderGeometry(0.75,0.75,distance,20,20,false);

    var orientation = new THREE.Matrix4();
    var offsetRotation = new THREE.Matrix4();
    var offsetPosition = new THREE.Matrix4();
    orientation.lookAt(vstart,vend,new THREE.Vector3(0,1,0));

    offsetRotation.makeRotationX(HALF_PI);
    orientation.multiply(offsetRotation);
    cylinder.applyMatrix(orientation)

    var mesh = new THREE.Mesh(cylinder,material);

    mesh.position.x = (vstart.x+vend.x)/2;
    mesh.position.y = (vstart.y+vend.y)/2;
    mesh.position.z = (vstart.z+vend.z)/2;

    scene.add(mesh);

    window.mesh = mesh;

}
