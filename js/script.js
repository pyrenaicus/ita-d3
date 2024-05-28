let dades = [8, 15, 34, 22, 38, 18]
let colors = ['darkgreen', 'purple', 'darkblue', 'orange', 'darkred', 'steelblue']
// variables dels rectangles
let ample = 50
let sep = 5
let marge = 20
let multAlt = 4
let IdDiv = '#chart-1'
let ampleGrafic = dades.length * (ample + sep) + marge * 2
let altGrafic = multAlt * Math.max(...dades) + marge * 2
let sepText = 5

// gràfic 1
graficBarres(dades, colors, ample, sep, marge, multAlt, IdDiv)

// gràfic 2
dades = [28, 35, 14, 65, 38, 18]
ample = 50
sep = 5
marge = 20
multAlt = 4
IdDiv = '#chart-2'
altGrafic = dades.length * (ample + sep) + marge * 2
ampleGrafic = multAlt * Math.max(...dades) + marge * 2
graficBarresHoritz(dades, colors, ample, sep, marge, multAlt, IdDiv)

function graficBarres(dades, colors, ample, sep, marge, multAlt, idDiv) {
  // creem el conteniodr gràfic
  let svg = d3.select(idDiv)
    .append('svg')
    .attr('width', ampleGrafic)
    .attr('height', altGrafic)

  // seleccionem tots els rectangles que crearem
  let rectangles = svg.selectAll('rect')

  rectangles
    .data(dades)
    .enter()
    .append('rect')
    .attr('width', 50)
    .attr('height', (d, i) => {
      console.log("d: ", d, "i: ", i)
      return d * multAlt
    })
    .attr('x', (d, i) => marge + i * (ample + sep))
    .attr('y', (d) => marge + multAlt * Math.max(...dades) - d * multAlt)
    // .attr('fill', 'plum')
    .attr('fill', (_, i) => colors[i])

  let text = svg.selectAll('text')

  text
    .data(dades)
    .enter()
    .append('text')
    .attr('x', (d, i) => marge + i * (ample + sep) + ample / 2)
    .attr('y', (d, i) => marge + multAlt * Math.max(...dades) - d * multAlt - sepText)
    .attr('text-anchor', 'middle')
    .text((d) => d)

}
// horizontal bar
function graficBarresHoritz(dades, colors, ample, sep, marge, multAlt, idDiv) {
  // creem el conteniodr gràfic
  let svg = d3.select(idDiv)
    .append('svg')
    .attr('width', ampleGrafic)
    .attr('height', altGrafic)

  // seleccionem tots els rectangles que crearem
  let rectangles = svg.selectAll('rect')

  rectangles
    .data(dades)
    .enter()
    .append('rect')
    .attr('height', 50)
    .attr('width', (d, i) => d * multAlt)
    .attr('x', (d) => marge)
    .attr('y', (d, i) => marge + i * (ample + sep))
    // .attr('fill', 'plum')
    .attr('fill', (_, i) => colors[i])

  let text = svg.selectAll('text')

  text
    .data(dades)
    .enter()
    .append('text')
    .attr('x', (d, i) => marge + multAlt * Math.max(...dades) - Math.max(...dades) - d)
    .attr('y', (d, i) => marge + i * (ample + sep) + ample / 2)
    .text((d) => d)

}
