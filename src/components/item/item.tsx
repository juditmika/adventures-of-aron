import { Component, h, Host, Prop } from "@stencil/core"
import { Bounds, Point } from "../../model"
import { graphics } from "./graphics"

@Component({
	tag: "aron-item",
	styleUrl: "item.css",
	scoped: true,
})
export class AronItem {
	@Prop() item: { position: Point, type: "coin" }
	@Prop() scope: Bounds
	render() {
        console.log("render item", this.item)
		const position = this.item.position.subtract(this.scope.leftTop)
		return (
			<Host
				style={{
					left: (position.x * 64).toString() + "px",
					top: (position.y * 64).toString() + "px",
				}}>
				<img src={graphics[this.item.type]} />
			</Host>
		)
	}
}
