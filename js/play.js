const data = [8, 15, 34, 22, 38];

// definim svg
const svg = d3.select("#chart")
  .append("svg")
  .attr("width", 800)
  .attr("height", 600);
// creem cercle
svg.append("circle")
  .attr("cx", 100)
  .attr("cy", 50)
  .attr("r", 30)
  .style("fill", "#ccc");
// creem poligon
svg.append("polygon")
  .attr("points", "100,10 40,180 190,60")
  .attr("stroke", "plum")
  .attr("stroke-width", 3)
  .style("fill", "pink")
  .style("opacity", 0.5);
// 6 cercles
for (let i = 0; i < 6; i++) {
  svg.append("circle")
    .attr("cx", 117 + 40 * i)
    .attr("cy", 50 + 8 * i)
    .attr("r", 20 + 4 * i)
    .style("fill", `hsl(${i * 60} 60% 60% / 0.8)`);
}