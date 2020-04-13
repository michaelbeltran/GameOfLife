class Drawing {
	constructor(ctx, life) {
		this.ctx = ctx
		this.DIMENSION = 10
		this.life = life
		this.intervalID
		this.play = false
		this.time = 20
	}
	static get DIMENSION() { return 10 }
	backGroundColor() {
		this.ctx.fillStyle = '#ddd'
		this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
	}

	drawBlock(x, y) {
		this.ctx.strokeStyle = '#fff'
		this.ctx.strokeRect(x, y, Drawing.DIMENSION, Drawing.DIMENSION)
	}

	fillBlock(x, y) {
		this.ctx.fillStyle = '#000'
		this.ctx.fillRect(x, y, Drawing.DIMENSION, Drawing.DIMENSION)
	}

	generateGrid(object) {
		var x,y
		clearInterval(object.intervalID)
		object.backGroundColor()
		object.life.switchStates()
		for (let i = 0; i < object.life.height; i++) {
			y = i * Drawing.DIMENSION
			for (let j = 0; j < object.life.width; j++) {
				x = j * Drawing.DIMENSION
				object.drawBlock(x, y)
				if (object.life.currentState(i, j) == 1) object.fillBlock(x, y)
				object.life.cycle(i, j)
			}	
		}
		if (object.play)
			object.intervalID = setInterval(object.generateGrid, object.time, object);
	}
}