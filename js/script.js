const dades = [8, 15, 34, 22, 38];
const colors = ['plum', 'tomato', 'lightgreen', 'hotpink', 'blue'];
// variables dels rectangles
const ample = 50;
const sep = 5;
const marge = 100;
const multAlt = 4;

// creem el conteniodr gràfic
const svg = d3.select('#chart').append('svg').attr('width', 400).attr('height', 400);

// seleccionem tots els rectangles que crearem
const rectangles = svg.selectAll('rect');

rectangles
  .data(dades)
  .enter()
  .append('rect')
  .attr('width', 50)
  .attr('height', (d, i) => {
    console.log("d: ", d, "i: ", i);
    return d * multAlt;
  })
  .attr('x', (_, i) => marge + i * (ample + sep))
  .attr('y', (d) => marge + multAlt * Math.max(...dades) - d * multAlt)
  // .attr('fill', 'plum')
  .attr('fill', (_, i) => colors[i]);