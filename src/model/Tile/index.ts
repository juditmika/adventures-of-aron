import { Base, types } from "./Base"
import { Grass } from "./Grass"
import { Rock } from "./Rock"
import { Tree } from "./Tree"
import { Type } from "./Type"

export { Grass, Rock, Tree, Base, Type }

export function load(type: Type): Base {
	const t = types[type]
	return t ? new t() : new Rock()
}
