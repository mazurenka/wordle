'use strict'

let grid = document.getElementById('grid')

function buildGrid() {
    for (let i = 0; i < 6; i++) {
        let row = document.createElement('div')
        for (let j = 0; j < 5; j++) {
            let cell = document.createElement('div')
            cell.className = 'cell'
            row.appendChild(cell)
        }
        grid.appendChild(row)
    }
}

buildGrid()


