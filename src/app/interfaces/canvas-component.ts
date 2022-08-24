import { TemplateRef } from "@angular/core";
import { Shape } from "./shape";

export interface CanvasComponent {
  template: TemplateRef<any>;
  shapeData: Shape;
}