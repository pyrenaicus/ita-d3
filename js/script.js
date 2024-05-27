function sumar(num1, num2) {
  console.log(num1 + num2);
}

sumar(2, 3);

const restar = (num1, num2) => {
  console.log(num1 - num2);
};

restar(2, 3);

// document.querySelector('div').innerHTML = "<p>vengo de JS</p>";

// d3.select("div")
//   .append("h2")
//   .text("Soy un elemento de D3")


const svg = d3.select("#canvas").append("svg").attr("width", 400).attr("height", 200);

svg.append("circle").attr("cx", 100).attr("cy", 50).attr("r", 30).style("fill", "#ccc");
svg.append("circle").attr("cx", 40).attr("cy", 80).attr("r", 30).style("fill", "#ccc");
svg.append("circle").attr("cx", 110).attr("cy", 150).attr("r", 10).style("fill", "navy");
svg.append("circle").attr("cx", 50).attr("cy", 150).attr("r", 10).style("fill", "tomato");
svg
  .append("text")
  .text("Hola")
  .attr("x", 10)
  .attr("y", 100)
  .style("font-size", "24px")
  .style("font-family", "Arial")
  .style("font-weight", "bold")
  .style("fill", "darkgreen");

svg
  .append("line")
  .attr("x1", 10)
  .attr("y1", 10)
  .attr("x2", 200)
  .attr("y2", 200)
  .attr("stroke", "green")
  .attr("stroke-width", "4px");
svg
  .append("line")
  .attr("x1", 200)
  .attr("y1", 200)
  .attr("x2", 140)
  .attr("y2", 20)
  .attr("stroke", "green")
  .attr("stroke-width", "4px");