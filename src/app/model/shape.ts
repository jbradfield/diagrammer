import { ShapeType } from "./shape-type.enum";

export interface Shape {
  id: string;
  type: ShapeType;
  center: Vector2;
  rotation: number;
}

export interface Vector2 {
  x: number;
  y: number;
}