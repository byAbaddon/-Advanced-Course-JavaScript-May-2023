function cone(a, b) {
  let volume = 1 / 3 * (Math.PI * a * a * b)
  let height = Math.sqrt(a * a + b * b)
  let area = Math.PI * a * (a + height)
  return `volume = ${volume.toFixed(4)}\narea = ${area.toFixed(4)}`
}

//console.log(cone(3, 5))