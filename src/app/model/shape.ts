import { ShapeType } from "./shape-type.enum";

export interface Vector2 {
  x: number;
  y: number;
}

export interface Shape {
  id: string;
  type: ShapeType;
  center: Vector2;
  rotation: number;
}

export interface Rectangle extends Shape {
  width: number;
  height: number;
}

export interface Ellipse extends Shape {
  rx: number;
  ry: number;
}
