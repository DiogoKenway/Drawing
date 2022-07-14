let currentColor = "black"
let canDraw = false
let mouseX = 0
let mouseY = 0

const screen = document.querySelector('#tela')
const ctx = screen.getContext('2d')

document.querySelectorAll('.colorArea .color').forEach( color => {
    color.addEventListener('click', colorClickEvent)
})

screen.addEventListener('mousedown', mouseDownEvent)
screen.addEventListener('mouseup', mouseUpEvent)
screen.addEventListener('mousemove', mouseMoveEvent)
document.querySelector('.clear').addEventListener('click', clearScreen)

function colorClickEvent (event) {
    let color = event.target.getAttribute('data-color')
    currentColor = color

    document.querySelector('.color.active').classList.remove('active')
    event.target.classList.add('active')
}


function mouseUpEvent () {
    canDraw = false
    
}

function  mouseDownEvent (e) {
    canDraw = true
    mouseX = e.pageX - screen.offsetLeft
    mouseY = e.pageY - screen.offsetTop 
}

function mouseMoveEvent (e) {
    if (canDraw) {
        draw(e.pageX, e.pageY)
    }
}

function draw (x, y) {
    let pointX = x - screen.offsetLeft
    let pointY = y - screen.offsetTop

    ctx.beginPath()
    ctx.lineWidth = 5
    ctx.lineJoin = 'round'
    ctx.moveTo(mouseX, mouseY)
    ctx.lineTo(pointX, pointY)
    ctx.closePath()
    ctx.strokeStyle = currentColor
    ctx.stroke()

    mouseX = pointX
    mouseY = pointY
}

function clearScreen () {
    ctx.setTransform(1, 0, 0, 1, 0, 0)
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
}