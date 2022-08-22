import {Component, Input, OnInit} from '@angular/core';
import { ShapeType } from '../enums/shape-type.enum';
import {Shape} from "../interfaces/shape";

@Component({
  selector: '[canvas-shape]',
  templateUrl: './canvas-shape.component.svg',
  styleUrls: ['./canvas-shape.component.scss']
})
export class CanvasShapeComponent implements OnInit {

  @Input() shape!: Shape;
  ShapeTypeEnum = ShapeType;

  constructor() { }

  ngOnInit(): void {
  }

}
