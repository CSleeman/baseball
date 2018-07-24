var makeTextSprite = function(message, parameters) {

    if ( parameters === undefined ) parameters = {};
    
    var fontface = parameters.hasOwnProperty("fontface") ? 
        parameters["fontface"] : "Quicksand";
    
    var fontsize = parameters.hasOwnProperty("fontsize") ? 
        parameters["fontsize"] : 18;
    
    var borderThickness = parameters.hasOwnProperty("borderThickness") ? 
        parameters["borderThickness"] : 4;
    
    var borderColor = parameters.hasOwnProperty("borderColor") ?
        parameters["borderColor"] : { r:0, g:0, b:0, a:1.0 };
    
    var backgroundColor = parameters.hasOwnProperty("backgroundColor") ?
        parameters["backgroundColor"] : { r:0, g:0, b:0, a:1.0 };
    
    
    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');
    context.font = "Bold " + fontsize + "px " + fontface;

    var metrics = context.measureText( message );
    var textWidth = metrics.width;
    
    // background color
    context.fillStyle   = "rgba(" + backgroundColor.r + "," + backgroundColor.g + ","
                                  + backgroundColor.b + "," + backgroundColor.a + ")";

    context.strokeStyle = "rgba(" + borderColor.r + "," + borderColor.g + ","
                                  + borderColor.b + "," + borderColor.a + ")";
    context.lineWidth = borderThickness;
    roundRect(context, borderThickness/2, borderThickness/2, textWidth + borderThickness, fontsize * 1.4 + borderThickness, 0);
    
    context.fillStyle = "rgba(255, 255, 255, 1.0)";
    context.fillText( message, borderThickness, fontsize + borderThickness);
    
    var texture = new THREE.Texture(canvas) 
    texture.needsUpdate = true;
    texture.minFilter = THREE.LinearFilter
    
    var spriteMaterial = new THREE.SpriteMaterial( 
        { map: texture, transparent:false}); 
   
    var sprite = new THREE.Sprite( spriteMaterial );
    sprite.scale.set(100,50,0.5);
    return sprite;  


// function for drawing rounded rectangles
function roundRect(ctx, x, y, w, h, r) 
{
    ctx.beginPath();
    ctx.moveTo(x+r, y);
    ctx.lineTo(x+w-r, y);
    ctx.quadraticCurveTo(x+w, y, x+w, y+r);
    ctx.lineTo(x+w, y+h-r);
    ctx.quadraticCurveTo(x+w, y+h, x+w-r, y+h);
    ctx.lineTo(x+r, y+h);
    ctx.quadraticCurveTo(x, y+h, x, y+h-r);
    ctx.lineTo(x, y+r);
    ctx.quadraticCurveTo(x, y, x+r, y);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();   
}

}


// //from http://stackoverflow.com/questions/19618286/threejs-text-sprites-font-size-difference-between-webgl-renderer-and-canvas-re
//   /*  
//         if (parameters === undefined) parameters = {};
//         var fontface = parameters.hasOwnProperty("fontface") ? parameters["fontface"] : "Helvetica";
//         var fontsize = parameters.hasOwnProperty("fontsize") ? parameters["fontsize"] : 18;
//         var borderThickness = parameters.hasOwnProperty("borderThickness") ? parameters["borderThickness"] : 0;
//         var borderColor = parameters.hasOwnProperty("borderColor") ? parameters["borderColor"] : {
//             r: 0,
//             g: 0,
//             b: 0,
//             a: 1.0
//         };
//         var backgroundColor = parameters.hasOwnProperty("backgroundColor") ? parameters["backgroundColor"] : {
//             r: 255,
//             g: 255,
//             b: 255,
//             a: 1.0
//         };
//         var textColor = parameters.hasOwnProperty("textColor") ? parameters["textColor"] : {
//             r: 0,
//             g: 0,
//             b: 0,
//             a: 1.0
//         };

//         var canvas = document.createElement('canvas');
//         var WIDTH = message.length*14  //130; //400;
//         var HEIGHT = fontsize*1.4; //150;

//         canvas.width = WIDTH;
//         canvas.height = HEIGHT;
//         var context = canvas.getContext("2d", {alpha:true});
//         context.font = fontsize + "px " + fontface;

//         var metrics = context.measureText(message);
//         var extend = 0;
//         var textWidth = (metrics.width)+extend;
// */

//         //////////////////////////////////////////
//         var canvas = document.createElement('canvas'),
//         context = canvas.getContext('2d'),
//         metrics = null,
//         textHeight = 50,
//         textWidth = 0,
//         actualFontSize = fsize;

// canvas.id = "thiscanvas";
        
    

//         context.font = "normal " + textHeight + "px Arial";
//         metrics = context.measureText(message);
//         var textWidth = metrics.width;

//         canvas.width = textWidth;
//         canvas.height = textHeight; ///////

//         console.log("TW"+textWidth)
//         console.log("TH"+textHeight)
    
    

//         context.font = "normal " + textHeight + "px Arial";
//         context.textAlign = "center";
//         context.textBaseline = "middle";
 
//   //      context.fillStyle = "rgba(255, 255, 255, 1.0)";

//             context.strokeStyle = "rgba(0, 0, 255, 1.0)";
//             context.stroke()
//             //context.fill();

 
//         context.fillStyle = "rgba(255, 255, 155, 1.0)";
//         context.fillText(message, textWidth / 2, textHeight / 2);
         
//         var texture = new THREE.Texture(canvas);
//             texture.needsUpdate = true;

//         var material = new THREE.SpriteMaterial({ map: texture }) //, alignment: THREE.SpriteAlignment.center });
 
//   //          material.transparent = true;
  
//         var textObject = new THREE.Object3D();
//         var sprite = new THREE.Sprite(material);
    
//         textObject.textHeight = actualFontSize;
//         textObject.textWidth = (textWidth / textHeight) * textObject.textHeight;
    
//     //    if (rendererType == "2d") {
//     //        sprite.scale.set(textObject.textWidth / textWidth, textObject.textHeight / textHeight, 1);
//     //     } else {
//         sprite.scale.set(textWidth / textHeight * actualFontSize, actualFontSize, 1);
//     //    }

//         textObject.add(sprite);
//         textObject.position.set(locationx,locationy,locationz);
           
//         location.add(textObject);

// }


// /*




//         context.fillStyle = "rgba(" + backgroundColor.r + "," + backgroundColor.g + "," + backgroundColor.b + "," + backgroundColor.a + ")";
//         context.strokeStyle = "rgba(" + borderColor.r + "," + borderColor.g + "," + borderColor.b + "," + borderColor.a + ")";

//         context.lineWidth = borderThickness;
//         //roundRect(context, borderThickness / 2, borderThickness / 2, (textWidth + borderThickness) * 1.1, fontsize * 1.4 + borderThickness, 0);

//         context.fillStyle = "rgba(" + textColor.r + ", " + textColor.g + ", " + textColor.b + ", 1.0)";
//         context.fillText(message, borderThickness, fontsize + borderThickness);
        
//         var texture = new THREE.Texture(canvas, THREE.ClampToEdgeWrapping, THREE.ClampToEdgeWrapping, THREE.ClampToEdgeWrapping, THREE.NearestFilter, THREE.NearestFilter);
//         texture.needsUpdate = true;
//         var spriteMaterial = new THREE.SpriteMaterial({
//             map: texture,
//             useScreenCoordinates: false,
//             transparent: false,
//         });
//         var sprite = new THREE.Sprite(spriteMaterial);
//         //sprite.scale.set(1, 1, 1);

//         var width = spriteMaterial.map.image.width;
//         var height = spriteMaterial.map.image.height;
//         sprite.scale.set( 17.5,11,1 );


// function roundRect(ctx, x, y, w, h, r) 
// {
//     ctx.beginPath();
//     ctx.moveTo(x+r, y);
//     ctx.lineTo(x+w-r, y);
//     ctx.quadraticCurveTo(x+w, y, x+w, y+r);
//     ctx.lineTo(x+w, y+h-r);
//     ctx.quadraticCurveTo(x+w, y+h, x+w-r, y+h);
//     ctx.lineTo(x+r, y+h);
//     ctx.quadraticCurveTo(x, y+h, x, y+h-r);
//     ctx.lineTo(x, y+r);
//     ctx.quadraticCurveTo(x, y, x+r, y);
//     ctx.closePath();
//     ctx.fill();
//     ctx.stroke();   
// }


//         return sprite;
// }
// */