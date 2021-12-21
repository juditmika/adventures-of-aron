import { Base, types } from "./Base"
import { Grass } from "./Grass"
import { Rock } from "./Rock"
import { Tree } from "./Tree"
import { Water } from "./Water"
import { Sand } from "./Sand"
import { Bridge } from "./Bridge"
import { Type } from "./Type"

export { Grass, Rock, Tree, Water, Sand, Bridge, Base, Type }

export function load(type: Type): Base {
	const t = types[type]
	return t ? new t() : new Rock()
}
