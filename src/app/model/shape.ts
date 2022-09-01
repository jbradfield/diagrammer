import { NgClass } from '@angular/common';
import { ShapeType } from './shape-type.enum';

export interface ShapeProperties {
  fill: string,
  stroke: string,
  strokeWidth: number
}

export interface Vector2 {
  x: number,
  y: number,
}

export interface Shape {
  id: string,
  type: ShapeType,
  center: Vector2,
  centerOffset?: Vector2,
  rotation?: number,
  properties: ShapeProperties,
}

export interface Line extends Shape {
  start: Vector2,
  end: Vector2,
}

export interface Rectangle extends Shape {
  width: number,
  height: number,
}

export interface Ellipse extends Shape {
  rx: number,
  ry: number,
}

export interface Poly extends Shape {
  points: Vector2[],
  closed: boolean
}

export interface Donut extends Shape {
  // NYI
  // outerPath
  // innerPath
}

export interface Image extends Rectangle {
  // NYI
}
