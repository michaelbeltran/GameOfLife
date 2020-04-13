var WIDTH
var HEIGHT
var ctx
var life
var draw

function init() {
	var canvas = document.getElementById('canvas')
	ctx = canvas.getContext('2d')
	WIDTH = window.innerWidth
	HEIGHT = window.innerHeight
	ctx.canvas.width = WIDTH
	ctx.canvas.height = HEIGHT
	life = new LifeGame(Math.floor(HEIGHT / Drawing.DIMENSION), Math.floor(WIDTH / Drawing.DIMENSION))
	draw = new Drawing(ctx, life)
	initialState()
	draw.generateGrid(draw)
}
window.onload = init
document.onkeypress = function (event) {
	if (event.key == "s") {
		draw.play = false
		draw.generateGrid(draw)
	} else if (event.key == "r") {
		draw.play = false
		init()
	} else if (event.key == "p") {
		if (!draw.play) {
			draw.play = true
			draw.intervalID = setInterval(draw.generateGrid, draw.time, draw)
		}
	}
}
function initialState() {
	life.born(4, 1)
	life.born(5, 1)
	life.born(4, 0)
	life.born(5, 0)

	life.born(4, 10)
	life.born(5, 10)
	life.born(6, 10)

	life.born(3, 11)
	life.born(7, 11)

	life.born(2, 12)
	life.born(8, 12)

	life.born(2, 13)
	life.born(8, 13)

	life.born(5, 14)

	life.born(3, 15)
	life.born(7, 15)

	life.born(4, 16)
	life.born(5, 16)
	life.born(6, 16)

	life.born(5, 17)

	life.born(2, 20)
	life.born(3, 20)
	life.born(4, 20)

	life.born(2, 21)
	life.born(3, 21)
	life.born(4, 21)

	life.born(1, 22)
	life.born(5, 22)

	life.born(0, 24)
	life.born(1, 24)
	life.born(5, 24)
	life.born(6, 24)

	life.born(2, 34)
	life.born(3, 34)

	life.born(2, 35)
	life.born(3, 35)
}