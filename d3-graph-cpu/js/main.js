/*global d3, console, $*/
var data;

function renderGraph(dataset, res_id, labels) {
    //Width and height
    var w = 880;
    var h = 370;
    var padding = 40;
    var div, svg; // div and svg elements for this graph
    var clrs = d3.scale.category10();

    // Define axis ranges & scales
    var xExtents = d3.extent(d3.merge(dataset), function (d) {
        if (d && d.time) {
            return d.time;
        }
    });
    var yExtents = d3.extent(d3.merge(dataset), function (d) {
        if (d && d.val) {
            return d.val;
        }
    });

    var xScale = d3.time.scale()
        .domain([xExtents[0], xExtents[1]])
        .range([padding, w - padding * 2]);

    var yScale = d3.scale.linear()
        .domain([(yExtents[0] > 0) ? 0 : yExtents[0], yExtents[1] * 1.1])
        .range([h - padding, padding]);

    // Define line
    var line = d3.svg.line()
        .interpolate('basis')
        .x(function (d) {
            if (d && d.time) {
                return xScale(d.time);
            }
        })
        .y(function (d) {
            if (d && d.val) {
                return yScale(d.val);
            }
        })

    //Define X axis
    var xAxis = d3.svg.axis()
        .scale(xScale)
        .orient("bottom")
        .ticks(5);

    //Define Y axis
    var format_y = d3.format(".2s");
    var yAxis = d3.svg.axis()
        .scale(yScale)
        .orient("left")
        .ticks(5)
        .tickFormat(function (d) {
            return format_y(d);
        });

    // Grid functions
    function make_x_axis() {
        return d3.svg.axis()
            .scale(xScale)
            .orient("bottom")
            .ticks(5);
    }

    function make_y_axis() {
        return d3.svg.axis()
            .scale(yScale)
            .orient("left")
            .ticks(5);
    }

    svg = d3.select("#" + res_id + " svg")

    // Render the data
    d3.transition().duration(1250).each(function () {
        var pathContainers = svg.selectAll('g.line')
            .data(dataset);

        pathContainers.enter()
            .append('g')
            .attr('class', function (d, i) {
                return 'line ' + labels[i];
            })
            .attr("style", function (d, i) {
                return 'stroke: ' + clrs(i);
            });

        pathContainers.exit()
            .remove();

        var path = pathContainers.selectAll('path')
            .data(function (d) {
                return [d];
            }); // continues the data from the pathContainer

        path.attr('d', line);

        path.enter()
            .append('path')
            .attr('d', line);

        path.exit()
            .remove();

        pathContainers.selectAll('path')
            .data(function (d) {
                return [d];
            }) // continues the data from the pathContainer
            .exit()
            .remove();

        // Update the grid
        svg.select(".x.grid")
            .call(make_x_axis()
                .tickSize(-(h - padding * 2), 0, 0)
                .tickFormat("")
        );

        svg.select(".y.grid")
            .call(make_y_axis()
                .tickSize(-(w - padding * 3), 0, 0)
                .tickFormat("")
        );

        // Update the axis
        svg.select(".x.axis")
            .call(xAxis);

        svg.select(".y.axis")
            .call(yAxis);
    });
}

function initialiseGraph(title, dataset, res_id, labels) {
    //Width and height
    var w = 880;
    var h = 370;
    var padding = 40;
    var div, svg; // div and svg elements for this graph
    var clrs = d3.scale.category10();

    // Define axis ranges & scales
    var xExtents = d3.extent(d3.merge(dataset), function (d) {
        if (d && d.time) {
            return d.time;
        }
    });
    var yExtents = d3.extent(d3.merge(dataset), function (d) {
        if (d && d.val) {
            return d.val;
        }
    });

    var xScale = d3.time.scale()
        .domain([xExtents[0], xExtents[1]])
        .range([padding, w - padding * 2]);

    var yScale = d3.scale.linear()
        .domain([(yExtents[0] > 0) ? 0 : yExtents[0], yExtents[1] * 1.1])
        .range([h - padding, padding]);

    // Define line
    var line = d3.svg.line()
        .interpolate('basis')
        .x(function (d) {
            return xScale(d.time);
        })
        .y(function (d) {
            return yScale(d.val);
        })

    //Define X axis
    var xAxis = d3.svg.axis()
        .scale(xScale)
        .orient("bottom")
        .ticks(5);

    //Define Y axis
    var format_y = d3.format(".2s");
    var yAxis = d3.svg.axis()
        .scale(yScale)
        .orient("left")
        .ticks(5)
        .tickFormat(function (d) {
            return format_y(d);
        });

    // Grid functions
    function make_x_axis() {
        return d3.svg.axis()
            .scale(xScale)
            .orient("bottom")
            .ticks(5);
    }

    function make_y_axis() {
        return d3.svg.axis()
            .scale(yScale)
            .orient("left")
            .ticks(5);
    }

    // Add the DIV for the SVG element
    div = d3.select("#chart")
        .append("div")
        .attr("id", res_id);

    // Create SVG element
    svg = div
        .append("svg")
        .attr("width", w)
        .attr("height", h);

    // Draw the grid
    svg.append("g")
        .attr("class", "x grid")
        .attr("transform", "translate(0," + (h - padding) + ")")
        .call(make_x_axis()
            .tickSize(-(h - padding * 2), 0, 0)
            .tickFormat("")
    );

    svg.append("g")
        .attr("class", "y grid")
        .attr("transform", "translate(" + padding + ",0)")
        .call(make_y_axis()
            .tickSize(-(w - padding * 3), 0, 0)
            .tickFormat("")
    );

    //Add X axis
    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + (h - padding) + ")")
        .call(xAxis);

    //Add Y axis
    svg.append("g")
        .attr("class", "y axis")
        .attr("transform", "translate(" + padding + ",0)")
        .call(yAxis);

    // Add title
    svg.append("svg:text")
        .attr("class", "chart-title")
        .attr("x", (w / 2))
        .attr("y", (padding / 2))
        .attr("text-anchor", "middle")
        .text(title);

    // add legend
    var legend = svg.append("g")
        .attr("class", "legend")
        .attr("height", 100)
        .attr("width", 100)
        .attr('transform', 'translate(-10,50)');

    legend.selectAll('rect')
        .data(dataset)
        .enter()
        .append("rect")
        .attr("x", w - 65)
        .attr("y", function (d, i) {
            return i * 20;
        })
        .attr("width", 10)
        .attr("height", 10)
        .style("fill", function (d, i) {
            return clrs(i);
        });

    legend.selectAll('text')
        .data(dataset)
        .enter()
        .append("text")
        .attr("x", w - 52)
        .attr("y", function (d, i) {
            return i * 20 + 9;
        })
        .text(function (d, i) {
            return labels[i];
        });
}

d3.xhr("test.json", function (error, text) {
    "use strict";
    if (error) {
        return console.warn(error);
    }
    data = JSON.parse(text.responseText.replace(/(['"])?([a-zA-Z0-9_]+)(['"])?:/g, '"$2": ').replace(/'/g, '\"'));
    console.dir(data);

    initialiseGraph('Internet Usage', data.data, 'usage', ['Bob', 'Mary']);
    renderGraph(data.data, 'usage', ['Bob', 'Mary']);
});
