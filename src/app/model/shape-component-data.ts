import { Type } from "@angular/core";
import { ShapeComponent } from "../components/shape/shape.component";
import { Shape } from "./shape";

export class ShapeComponentData {
  
  constructor(
    public componentType: Type<ShapeComponent>,
    public shapeData: Shape
  ) {}
}