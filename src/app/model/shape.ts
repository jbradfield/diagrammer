import { NgClass } from '@angular/common';
import { ShapeType } from './shape-type.enum';

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

export interface Line extends Shape {
  start: Vector2;
  end: Vector2;
}

export interface Rectangle extends Shape {
  width: number;
  height: number;
}

export interface Ellipse extends Shape {
  rx: number;
  ry: number;
}

export interface Polygon extends Shape {
  type: ShapeType.Polygon;
  // NYI
}

export interface Donut extends Shape {
  type: ShapeType.Donut;
  // NYI
  // outerPath
  // innerPath
}
