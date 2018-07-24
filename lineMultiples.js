var lineMultiples = function(svgRef,data,letter,positionX,ymin,ymax,title,tickValues){

   x.domain([0,25]);
   y.domain([100,0])
    .rangeRound([height*0.88, 40])


var line = d3.svg.line()
    .defined(function(d) { return !isNaN(d.temperature); })
    .x(function(d) { return positionX+x(d.date); })
    .y(function(d) { return y(d.temperature); });


var cities = d3.keys(data[0]).filter(function(key) { return key[0]===letter  ; }).map(function(name) {
    return {
      name: name,
      values: data.map(function(d) {
        if (d[name]=="null") {
           return {date: d.date, temperature: NaN};
        } else {
           return {date: d.date, temperature: +d[name]};
        }
      })
    };
  });

  y.domain([
    d3.min(cities, function(c) { return d3.min(c.values, function(v) { return ymin; }); }),
    d3.max(cities, function(c) { return d3.max(c.values, function(v) { return ymax; }); })
  ]);


  svgRef.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate("+positionX+"," + y.range()[0] + ")")
	  .call(xAxis)
	  .selectAll("text")
      .style("text-anchor", "middle")
      
  svgRef.append("text")
      .attr("x", positionX+x(((x.domain()[1])-(x.domain()[0]))/2 ))
      .attr("y", y(y.domain()[1])-10)
      .attr("class", "smallTitle")
      .style("text-anchor", "middle")
      .text(title)
      .style("font-size", "12px")
      .style("fill", "#7f7f7f")



  if (letter==="x") {

    if (svgRef===svg3) {
        var formatyAxis = d3.format('.0f')
    }
    if (svgRef===svg2) {
        var formatyAxis = d3.format('.1f')
    }    

    yAxis.tickValues(tickValues)
           .tickFormat(formatyAxis)

    var city = svgRef.selectAll(".city1")  	 
      .data(cities)
      .enter().append("g")
      .attr("class", "city1");

  } else if (letter==="y") {

    if (svgRef===svg3) {
        var formatyAxis = d3.format('.0f')
    }
    if (svgRef===svg2) {
        var formatyAxis = d3.format('.0f')
    }    

    yAxis.tickValues(tickValues)
         .tickFormat(formatyAxis)

    var city = svgRef.selectAll(".city2")  	 
      .data(cities)
      .enter().append("g")
      .attr("class", "city2");

  } else if (letter==="z") {

    // Invert axis
    if (svgRef===svg3) {
        y.domain([d3.max(cities, function(c) { return d3.max(c.values, function(v) { return ymax; }); }), d3.min(cities, function(c) { return d3.min(c.values, function(v) { return ymin; }); })]);
        var formatyAxis = d3.format('.0f')
    }
    if (svgRef===svg2) {
        var formatyAxis = d3.format('.1f')
    }    

    yAxis.tickValues(tickValues)
         .tickFormat(formatyAxis)

    var city = svgRef.selectAll(".city3")  	 
      .data(cities)
      .enter().append("g")
      .attr("class", "city3");

  }  


  svgRef.append("g")
      .attr("class", "y axis")
      .attr("transform", "translate("+positionX+"," + 0 + ")")
      .call(yAxis)

  city.append("path")
      .attr("class", "line")
      .attr("id", function(d,i) { var result = letter.toString()+(i+1); return result;})
      .attr("d", function(d) { return line(d.values); })
      .style("stroke-width", 1)
      .style("opacity", 0.3)

}