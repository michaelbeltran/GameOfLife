class LifeGame {
	constructor(height, width) {
		this.grid = []
		this.height = height
		this.width = width
		this.init()
	}
	isAlive(iComponent, jComponent) {
		if (iComponent >= 0 && iComponent < this.height &&
			jComponent >= 0 && jComponent < this.width) {
			return this.currentState(iComponent, jComponent) == 1
		} else false
	}
	countNeighborsAlive(iComponent, jComponent) {
		var count = 0
		this.isAlive(iComponent - 1, jComponent - 1) && count++
		this.isAlive(iComponent - 1, jComponent) && count++
		this.isAlive(iComponent - 1, jComponent + 1) && count++

		this.isAlive(iComponent, jComponent - 1) && count++
		this.isAlive(iComponent, jComponent + 1) && count++

		this.isAlive(iComponent + 1, jComponent - 1) && count++
		this.isAlive(iComponent + 1, jComponent) && count++
		this.isAlive(iComponent + 1, jComponent + 1) && count++
		return count
	}
	cycle(i, j) {
		var neighborsAlive = this.countNeighborsAlive(i, j)
		if (this.currentState(i, j) == 0) {
			if (neighborsAlive == 3)
				this.born(i, j)
		} else if (!(neighborsAlive == 2 || neighborsAlive == 3))
			this.die(i, j)
	}
	born(i, j) {
		this.grid[i][j][1] = 1
	}
	die(i, j) {
		this.grid[i][j][1] = 0
	}
	currentState(i, j) {
		return this.grid[i][j][0]
	}
	switchStates() {
		for (let i = 0; i < this.height; i++) {
			for (let j = 0; j < this.width; j++) {
				if (this.grid[i][j][0] != this.grid[i][j][1]) {
					this.grid[i][j][0] = this.grid[i][j][1]
				}
			}
		}
	}
	init() {
		for (let i = 0; i < this.height; i++) {
			this.grid[i] = []
			for (let j = 0; j < this.width; j++) {
				this.grid[i][j] = [0, 0]
			}
		}
	}
}