'use strict'

let grid = document.getElementById('grid')

let wordList = [
    'patio',
    'darts',
    'piano',
    'horse',
]

let randomIndex = Math.floor(Math.random() * wordList.length)
let secret = wordList[randomIndex]

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

let attempts = []
let currentAttempt = ''

let counter = 0

function updateGrid () {
    let row = grid.firstChild
    for (let attempt of attempts) {
        drawPastAttempt(row, attempt)
        row = row.nextSibling
        }
    drawPastAttempt(row, currentAttempt)
}

function drawPastAttempt(row, attempt) {

}

function drawCurrentAttempt(row, attempt) {

}






























