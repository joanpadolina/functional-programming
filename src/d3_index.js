//  ALL CREDITS TO MIKE BOSTOCK 
//  https://gist.github.com/mbostock/6fead6d1378d6df5ae77bb6a719afcb2 

// Dit hoe de radial chart uit ziet in een svg
let svg = d3.select("svg"),
    width = +svg.attr("width"),
    height = +svg.attr("height"),
    innerRadius = 100, // hoe groot de binnenste cirkel gaat worden
    outerRadius = Math.min(width, height) / 2.4,
    g = svg.append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

let x = d3.scaleBand()
    .range([0, 2 * Math.PI])
    .align(0);

let y = d3.scaleRadial()
    .range([innerRadius, outerRadius]);

let z = d3.scaleOrdinal()
    .range(["#98abc5", "#6b486b", "#a05d56", "#d0743c", "#ff8c00", "#7b6888"]);

d3.csv("data.csv", function (d, i, columns) {
    for (i = 1, t = 0; i < columns.length; ++i) t += d[columns[i]] = +d[columns[i]];
    d.total = t;
    return d;
}, function (error, data) {
    if (error) throw error;

    x.domain(data.map(function (d) {
        return d.State;
    }));
    y.domain([0, d3.max(data, function (d) {
        return d.total;
    })]);
    z.domain(data.columns.slice(1));

    g.append("g") // de waardes van data wordt hier gevisualiseerd
        .selectAll("g")
        .data(d3.stack().keys(data.columns.slice(1))(data))
        .enter().append("g")
        .attr("fill", function (d) {
            return z(d.key);
        })
        .selectAll("path")
        .data(function (d) {
            return d;
        })
        .enter().append("path")
        .attr("d", d3.arc()
            .innerRadius(function (d) {
                return y(d[0]);
            })
            .outerRadius(function (d) {
                return y(d[1]);
            })
            .startAngle(function (d) {
                return x(d.data.State);
            })
            .endAngle(function (d) {
                return x(d.data.State) + x.bandwidth();
            })
            .padAngle(0.02)
            .padRadius(innerRadius));

    let label = g.append("g")
        .selectAll("g")
        .data(data)
        .enter().append("g")
        .attr("text-anchor", "middle")
        // roteert de namen van de categorieen
        .attr("transform", function (d) {
            return "rotate(" + ((x(d.State) + x.bandwidth() / 2) * 180 / Math.PI - 90) + ")translate(" + innerRadius + ",0)";
        });

    label.append("text")
        // de categorie wordt hier in een cirkle geschreven
        .attr("transform", function (d) {
            return (x(d.State) + x.bandwidth() / 2 + Math.PI / 2) % (2 * Math.PI) < Math.PI ? "rotate(90)translate(0,16)" : "rotate(-90)translate(0,-9)";
        })
        .text(function (d) {
            return d.State;
        });

    let yAxis = g.append("g")
    // titel text wordt gecentreerd
        .attr("text-anchor", "middle");

    let yTick = yAxis
        .selectAll("g")
        .data(y.ticks(4).slice(0)) // de aantal zwarte lijnen omheen die de aantal laat zien. slice haalt de eerste lijn weg vanaf het middelpunt
        .enter().append("g");

    yTick.append("circle") // dit is de totale circle
        .attr("fill", "none")
        .attr("stroke", "#000")
        .attr("r", y);

    yTick.append("text") 
    // hier wordt de text van de aantallen leesbaarder dmv een border om de text
        .attr("y", function (d) {
            return -y(d);
        })
        .attr("dy", "0.35em")
        .attr("fill", "none")
        .attr("stroke", "#fff")
        .attr("stroke-width", 5)
        .text(y.tickFormat(5, "s"));

    yTick.append("text") // de tekst van de aantallen
        .attr("y", function (d) {
            return -y(d);
        })
        .attr("dy", "0.35em")
        .text(y.tickFormat(5, "s")); // schaalt preciezer anders wordt het grote cijfers

    yAxis.append("text")
        .attr("y", function (d) {
            return -y(y.ticks(5).pop());
        })
        .attr("dy", "-2em") 
        .text("Tropenmuseum de verzameling van beelden en foto's");

});