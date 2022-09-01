import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Rectangle } from '../../../model/shape';
import { ShapeType } from '../../../model/shape-type.enum';
import { ShapeToolComponent } from '../shape-tool/shape-tool.component';

@Component({
  selector: 'app-rectangle-tool',
  templateUrl: './rectangle-tool.component.html',
  styleUrls: ['./rectangle-tool.component.css'],
})
export class RectangleToolComponent extends ShapeToolComponent implements OnInit {
  @Output() submit: EventEmitter<Rectangle> = new EventEmitter<Rectangle>();

  shapeForm = this.fb.group({
    type: ShapeType.Rectangle,
    center: this.fb.group({
      x: [0],
      y: [0],
    }),
    rotation: [0],
    width: [0],
    height: [0],
    properties: this.fb.group({
      fill: [""],
      stroke: [""],
      strokeWidth: [0],
    })
  });

  JSON = JSON;

  constructor(private fb: FormBuilder) {
    super();
  }

  ngOnInit() {}

  submitValue(value: any): void {
    // TODO: figure out how to cast the Partial from shapeForm (which contains child Partials) to Rectangle
    let rect: Rectangle = {
      id: 'PH',
      type: value.type,
      center: {
        x: value.center.x,
        y: value.center.y,
      },
      rotation: value.rotation,
      width: value.width,
      height: value.height,
      properties: {
        fill: value.properties.fill,
        stroke: value.properties.stroke,
        strokeWidth: value.properties.strokeWidth,
      }
    };
    this.submit.emit(rect);
  }
}
