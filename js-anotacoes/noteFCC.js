let res = document.querySelector('#res')

function Cell(dono, color) {
    this.dono = dono,
    this.color = color
}

Cell.prototype = {
    marker: 'Xiaomi'
}

function Tablet(dono, color) {
    this.dono = dono,
    this.color = color
}

function Computer(dono, color) {
    this.dono = dono,
    this.color = color
}

Tablet.prototype = Object.create(Cell.prototype)
Computer.prototype = Object.create(Cell.prototype)

let cell1 = new Cell('Mateus', 'Black')
let tablet1 = new Tablet('Mateus', 'White')
let computer1 = new Computer('Mateus', 'Red')

function imprimir() {
    res.innerHTML += cell1
}