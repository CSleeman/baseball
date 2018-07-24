// Highlight lines in small multiples for Hitters
var highlightLinesHitters = function(selectX, selectY, selectZ, color, duration) {

                // X    
                svg2.selectAll('.line[id="'+selectX+'"]')
                  .transition()
                  .duration(duration)
                  .style("stroke", color)
                  .style("stroke-width", 2)
                  .style("opacity", 1)

                var nodeX = svg2.select('.line[id="'+selectX+'"]').node();
                var parentX = nodeX.parentNode;
                var grandparentX = nodeX.parentNode.parentNode;
                    grandparentX.removeChild(parentX);
                    grandparentX.appendChild(parentX);

                // Y
                svg2.selectAll('.line[id="'+selectY+'"]')
                  .transition()
                  .duration(duration)
                  .style("stroke", color)
                  .style("stroke-width", 2)
                  .style("opacity", 1)

                var nodeY = svg2.select('.line[id="'+selectY+'"]').node();
                var parentY = nodeY.parentNode;
                var grandparentY = nodeY.parentNode.parentNode;
                    grandparentY.removeChild(parentY);
                    grandparentY.appendChild(parentY);

                // Z    
                svg2.selectAll('.line[id="'+selectZ+'"]')
                  .transition()
                  .duration(duration)
                  .style("stroke", color)
                  .style("stroke-width", 2)
                  .style("opacity", 1)

                var nodeZ = svg2.select('.line[id="'+selectZ+'"]').node();
                var parentZ = nodeZ.parentNode;
                var grandparentZ = nodeZ.parentNode.parentNode;
                    grandparentZ.removeChild(parentZ);
                    grandparentZ.appendChild(parentZ);


}