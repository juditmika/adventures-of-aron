import { Bounds } from "./Bounds"
import { Direction } from "./Direction"
import { Hero } from "./Hero"
import { Map } from "./Map"
import { Point } from "./Point"
import { Size } from "./Size"
import * as Item from "./Item"

export class Game {
	private constructor(readonly map: Map, readonly scope: Bounds, readonly hero: Hero, readonly items: readonly Item.Base[]) {}

	move(direction: Direction): Game {
		const position = this.hero.position.move(direction)
		const tile = this.map.get(position)
		const scope = this.scope.reduce(2).inside(position)
			? this.scope
			: new Bounds(this.scope.leftTop.move(direction, this.scope.reduce(2).size), this.scope.size)

		return tile?.walkable ? new Game(this.map, scope, new Hero(position), this.items) : this
	}
	setViewport(viewport: Size): Game {
		const scope = new Bounds(
			this.scope.leftTop,
			new Size(Math.ceil(viewport.width / 64), Math.ceil(viewport.height / 64))
		)
		return new Game(this.map, scope, this.hero, this.items)
	}
	static create(): Game {
		return new Game(world, new Bounds(new Point(0, 0), new Size(8, 4)), new Hero(new Point(3, 3)), [new Item.Coin(new Point(5, 3)), new Item.Coin(new Point(4, 3))])
	}
}

const world = Map.load([
	["rock", "rock", "rock", "grass", "grass", "rock", "rock", "rock", "rock"],
	["rock", "grass", "grass", "grass", "grass", "grass", "grass", "rock", "rock"],
	["rock", "grass", "grass", "grass", "grass", "grass", "grass", "rock", "rock"],
	["rock", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "rock"],
	["grass", "grass", "grass", "grass", "tree", "grass", "grass", "grass", "grass"],
	["grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass"],
	["rock", "grass", "grass", "grass", "rock", "rock", "grass", "rock", "rock"],
	["rock", "grass", "grass", "grass", "rock", "rock", "grass", "grass", "rock"],
	["sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand"],
	["water", "water", "water", "bridge", "water", "water", "water", "water", "water"],
	["sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand", "sand"],
	["rock", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "rock"],
	["grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass"],
	["grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass", "grass"],
	["rock", "rock", "rock", "grass", "grass", "tree", "grass", "rock", "rock"],
	["rock", "rock", "rock", "grass", "grass", "grass", "grass", "rock", "rock"],
	["rock", "rock", "rock", "grass", "grass", "rock", "rock", "rock", "rock"],
])
