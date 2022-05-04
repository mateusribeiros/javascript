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
Tablet.prototype.constructor = Tablet
Computer.prototype = Object.create(Cell.prototype)
Computer.prototype.constructor = Computer


let toque = (function() {
    return {
        toque1: function(obj) {
            obj.toque1 = function() {
                console.log('DING DONG!')
            }
        },
        toque2: function(obj) {
            obj.toque2 = function() {
                console.log('DONG DONG!')
            }
        },
        toque3(obj) {
            obj.toque3 = function() {
                console.log('DRING DRIN!')
            }
        }
    }
})()

let cell1 = new Cell('Mateus', 'Black')
let tablet1 = new Tablet('Mateus', 'White')
let computer1 = new Computer('Mateus', 'Red')

toque.toque1(cell1)

function imprimir() {
    res.innerHTML += cell1
}

console.log(cell1 instanceof Cell)
console.log()
