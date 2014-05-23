var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0];

var margin = {top: 0, right: 0, bottom: 0, left: 0}
    //width = 800 - margin.left - margin.right,
    //height = 400 - margin.top - margin.bottom;

var width = w.innerWidth || e.clientWidth || g.clientWidth;
var height = 200 - margin.top - margin.bottom;

var x = d3.time.scale()
    .domain([0, 1])
    .range([0, width]);

var y = d3.scale.linear()
    .domain([0, 1])
    .range([height, 0]);

var area = d3.svg.area()
    .x(function(d) { return x(d.x); })
    .y0(height)
    .y1(function(d) { return y(d.y); })
    .interpolate('basis');

var line = d3.svg.line()
    .x(function(d) { return x(d.x); })
    .y(function(d) { return y(d.y); })
    .interpolate('basis');

var svg = d3.select("body").append("svg")
    //.attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    //.attr("transform", "translate(" + 80 + "," + margin.top + ")");

function updateWindow(){
    width = w.innerWidth || e.clientWidth || g.clientWidth;
    svg.attr("width", width);
}
window.onresize = updateWindow;

var data = d3.range(0, 7).map(function(y) {
    return d3.range(0, 40).map(function(x) {
        return {
            x: x / 30,
            y0: y / 9,
            //y: y / 80
            y: (y / 40) + Math.cos(x / (Math.PI * 3)) * (Math.random() / 5)
        };
    });
}).reverse();

function draw(data) {

    var wave = svg.selectAll('g.wave')
        .data(data)
        .enter()
        .append('g')
        .attr('class', 'wave');

    wave.append('path')
        .attr("class", "area")
        .attr("d", area);

    svg.selectAll('path.area').transition().duration(100).attr("d", area);

    wave.append('path')
        .attr("class", "line");

    svg.selectAll('path.line').transition().duration(100).attr("d", line);

}




window.setInterval(function() {
    for (var y = 0; y < data.length; y++) {
        for (var x = 0; x < data[y].length; x++) {
            data[y][x].y = Math.min(
                data[y][x].y0 + 0.09,
                Math.max(
                    data[y][x].y0 - 0.09, data[y][x].y + (Math.random() - 0.5) * Math.sin(x / (Math.PI * 4)) * 0.02));
        }
    }
    draw(data);
}, 50);

draw(data);

