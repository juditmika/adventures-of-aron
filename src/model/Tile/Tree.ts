import { Base, register } from "./Base"

export class Tree extends Base {
	readonly type = "tree"
	readonly walkable = false
}
register("tree", Tree)
