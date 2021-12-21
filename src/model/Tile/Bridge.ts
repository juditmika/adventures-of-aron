import { Base, register } from "./Base"

export class Bridge extends Base {
	readonly type = "bridge"
	readonly walkable = true
}
register("bridge", Bridge)
