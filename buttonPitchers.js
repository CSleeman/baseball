// Buttons for Pitchers
var buttonPitchers = function() {

  buttonPitchers = svg3.selectAll(".buttonPitchers")
            .data([1,2,3,4,5,6,7,8,9,10])
            .enter()
            .append("rect")
            .attr("class", "buttonPitchers")
            .attr("x", function(d,i) { return (i<5) ? x(0.25) : x(20.25)})
            .attr("y", function(d,i) { return (i<5) ? y(19+i*15) : y(19+(i-5)*15) })
            .attr("width", x(20))
            .attr("height", y(15))
            .style("fill", "transparent")
            .style("stroke", colorHighlight)
            .style("stroke-opacity", 0)
            .style("stroke-width", 2)
            .on("mouseover", function(d){    

                svg3.selectAll(".buttonTextPitchers")
                    .style("fill", function(e,i) { return ((hittersOrPitchers==="pitchers" && i===playerSet[0]-1) || i===d-1 ) ? "#FFF" : colorLetters })

                if (playerSet.length===2) {
                  svg3.selectAll(".buttonTextPitchers")
                    .style("fill", function(e,i) { return ((hittersOrPitchers==="pitchers" && i===playerSet[0]-1) || (hittersOrPitchers==="pitchers" && i===playerSet[1]-1) || i===d-1 ) ? "#FFF" : colorLetters })
                }    

                svg3.selectAll('.line')
                    .style("stroke", colorCharts)
                  .style("opacity", 0.3)

                var selectX = "x"+d;
                var selectY = "y"+d;
                var selectZ = "z"+d;
                highlightLinesPitchers(selectX, selectY, selectZ, colorHighlight,0)  

                if (hittersOrPitchers==="pitchers") {

                  var selectXp1 = "x"+playerSet[0];
                  var selectYp1 = "y"+playerSet[0];
                  var selectZp1 = "z"+playerSet[0];
                  highlightLinesPitchers(selectXp1, selectYp1, selectZp1, colorFirst,0)  

                  if (playerSet.length===2) {
                    var selectXp2 = "x"+playerSet[1];
                    var selectYp2 = "y"+playerSet[1];
                    var selectZp2 = "z"+playerSet[1];
                    highlightLinesPitchers(selectXp2, selectYp2, selectZp2, colorSecond,0)  
                  }
                }    

            })
           .on("mouseout", function(d){

                svg3.selectAll(".buttonTextPitchers")
                    .style("fill", function(e,i) { return (hittersOrPitchers==="pitchers" && i===playerSet[0]-1) ? "#FFF" : colorLetters })

                if (playerSet.length===2) {
                  svg3.selectAll(".buttonTextPitchers")
                    .style("fill", function(e,i) { return ((hittersOrPitchers==="pitchers" && i===playerSet[0]-1) || (hittersOrPitchers==="pitchers" && i===playerSet[1]-1)) ? "#FFF" : colorLetters })
                }    

                svg3.selectAll('.line')
                   .transition()
                  .duration(500)
                    .style("stroke", colorCharts)
                  .style("stroke-width", 1)
                  .style("opacity", 0.3)
                
                if (hittersOrPitchers==="pitchers") {

                  var selectXp1 = "x"+playerSet[0];
                  var selectYp1 = "y"+playerSet[0];
                  var selectZp1 = "z"+playerSet[0];
                  highlightLinesPitchers(selectXp1, selectYp1, selectZp1, colorFirst,0)  

                  if (playerSet.length===2) {
                    var selectXp2 = "x"+playerSet[1];
                    var selectYp2 = "y"+playerSet[1];
                    var selectZp2 = "z"+playerSet[1];
                    highlightLinesPitchers(selectXp2, selectYp2, selectZp2, colorSecond,0)  
                  }
                }    

            })            
           .on('click', function(e,i) { 

                player = e; 

                removeLine()
                addLabels("pitchers")

                if (hittersOrPitchers=="pitchers") {

                  // Add a second line
                  if (playerSet.length===1) {
                    
                      if (player!=playerSet[0]) {
                        
                        playerSet.push(player);

                        svg3.selectAll(".buttonPitchers")
                          .style("fill", function(d,i) { return (d===playerSet[0]) ? colorFirst : (d===playerSet[1]) ? colorSecond : "transparent" })

                        svg3.selectAll(".buttonTextPitchers")
                          .style("fill", function(d,i) { return (i===playerSet[0]-1 || i===playerSet[1]-1 ) ? "#FFF" : colorLetters })

                        legendOneB.style.opacity = 1;
                        legendTwoB.style.opacity = 1;
                        legendThreeB.style.opacity = 1;
                        legendFourB.style.opacity = 1;
                        legendFiveB.style.opacity = 1;

                        clickNumber=2

                      }
                  } else if (player===playerSet[0]) { // Same person as 0

                        temp = playerSet[1]
                        playerSet = [temp]

                        svg3.selectAll(".buttonPitchers")
                          .style("fill", function(d,i) { return (d===playerSet[0]) ? colorFirst : "transparent" })

                        svg3.selectAll(".buttonTextPitchers")
                          .style("fill", function(d,i) { return (i===playerSet[0]-1) ? "#FFF" : colorLetters })

                        legendOneB.style.opacity = 0;
                        legendTwoB.style.opacity = 0;
                        legendThreeB.style.opacity = 0;
                        legendFourB.style.opacity = 0;
                        legendFiveB.style.opacity = 0;

                  
                  } else if (player===playerSet[1]) { // Same person as 1

                        temp = playerSet[0]
                        playerSet = [temp]

                        svg3.selectAll(".buttonPitchers")
                          .style("fill", function(d,i) { return (d===playerSet[0]) ? colorFirst : "transparent" })

                        svg3.selectAll(".buttonTextPitchers")
                          .style("fill", function(d,i) { return (i===playerSet[0]-1) ? "#FFF" : colorLetters })

                        legendOneB.style.opacity = 0;
                        legendTwoB.style.opacity = 0;
                        legendThreeB.style.opacity = 0;
                        legendFourB.style.opacity = 0;
                        legendFiveB.style.opacity = 0;


                  } else { // Different person (need to delete person 1)

                        temp = playerSet[1]
                        playerSet = [temp, player]

                        svg3.selectAll(".buttonPitchers")
                          .style("fill", function(d,i) { return (d===playerSet[0]) ? colorFirst : (d===playerSet[1]) ? colorSecond : "transparent" })

                        svg3.selectAll(".buttonTextPitchers")
                          .style("fill", function(d,i) { return (i===playerSet[0]-1 || i===playerSet[1]-1) ? "#FFF" : colorLetters })

                        legendOneB.style.opacity = 1;
                        legendTwoB.style.opacity = 1;
                        legendThreeB.style.opacity = 1;
                        legendFourB.style.opacity = 1;
                        legendFiveB.style.opacity = 1;

                  }

                } else { // hitters
                    temp = player
                    playerSet = [temp]
                    clickNumber = 2        

                    svg3.selectAll(".buttonPitchers")
                        .style("fill", function(d,i) { return (d===playerSet[0]) ? colorFirst : "transparent" })

                    svg3.selectAll(".buttonTextPitchers")
                        .style("fill", function(d,i) { return (i===playerSet[0]-1) ? "#FFF" : colorLetters })

                    svg2.selectAll(".buttonHitters")
                        .style("fill", "transparent")

                    svg2.selectAll(".buttonTextHitters")
                        .style("fill", colorLetters)

                    svg2.selectAll('.line')
                    .style("stroke", colorCharts)
                        .style("stroke-width", 1)
                        .style("opacity", 0.3)
   
                    legendOneB.style.opacity = 0;
                    legendTwoB.style.opacity = 0;
                    legendThreeB.style.opacity = 0;
                    legendFourB.style.opacity = 0;
                    legendFiveB.style.opacity = 0;
                                   
                } 

                hittersOrPitchers = "pitchers"
                j=0;
                s=0;        
                drawScale(hittersOrPitchers); 
                drawLine(hittersOrPitchers,e);

                cick="yes"        

                svg3.selectAll('.line')
                    .style("stroke", colorCharts)
                    .style("stroke-width", 1)
                    .style("opacity", 0.3)

                var selectXp1 = "x"+playerSet[0];
                var selectYp1 = "y"+playerSet[0];
                var selectZp1 = "z"+playerSet[0];
                highlightLinesPitchers(selectXp1, selectYp1, selectZp1, colorFirst,0)  

                if (playerSet.length===2) {

                  var selectXp2 = "x"+playerSet[1];
                  var selectYp2 = "y"+playerSet[1];
                  var selectZp2 = "z"+playerSet[1];
                  highlightLinesPitchers(selectXp2, selectYp2, selectZp2, colorSecond,0)  

                }  

             });


} 



