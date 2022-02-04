'use strict'

let grid = document.getElementById('grid')

function buildGrid() {
    for (let i = 0; i < 6; i++) {
        let row = document.createElement('div')
        for (let j = 0; j < 5; j++) {
            let cell = document.createElement('div')
            cell.className = 'cell'
            cell.textContent = ''
            row.appendChild(cell)
        }
        grid.appendChild(row)
    }
}

buildGrid()

let wordList = [
    'patio',
    'darts',
    'piano',
    'horse',
]

let randomIndex = Math.floor(Math.random() * wordList.length)
let secret = wordList[randomIndex]

let attempts = []
let currentAttempt = ''

















