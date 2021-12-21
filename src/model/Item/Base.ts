import { Point } from "../Point"
import { Type } from "./Type"

export abstract class Base {
	abstract type: Type
	constructor(readonly position: Point) {}
}
export const types: { [type in Type]?: new (position: Point) => Base } = {}
export function register(type: Type, create: new (position: Point) => Base) {
	types[type] = create
}
