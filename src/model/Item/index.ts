import { Point } from "../Point"
import { Base, types } from "./Base"
import { Coin } from "./Coin"
import { Type } from "./Type"

export { Coin, Base, Type }

export function load(type: Type, position: Point): Base {
	const t = types[type]
	return t ? new t(position) : new Coin(position)
}
