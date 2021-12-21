import { Component, h, Host, Prop } from "@stencil/core"
import { Bounds, Hero, Point } from "../../model"
import hero from "./hero.svg"

@Component({
	tag: "aron-hero",
	styleUrl: "hero.css",
	scoped: true,
})
export class AronHero {
	@Prop() hero: Hero
	@Prop() scope: Bounds
	previous = new Point(0, 0)
	render() {
		const position = this.hero.position.subtract(this.scope.leftTop)
		const transition = position.subtract(this.previous).distance > 2 ? "none" : "left .2s, top .2s"
		this.previous = position
		return (
			<Host
				style={{
					left: (position.x * 64).toString() + "px",
					top: (position.y * 64).toString() + "px",
					transition,
				}}>
				<img src={hero} />
			</Host>
		)
	}
}
