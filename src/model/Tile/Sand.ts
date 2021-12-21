import { Base, register } from "./Base"

export class Sand extends Base {
	readonly type = "sand"
	readonly walkable = true
}
register("sand", Sand)
