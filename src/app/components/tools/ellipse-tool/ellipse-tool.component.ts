import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Ellipse } from '../../../model/shape';
import { ShapeType } from '../../../model/shape-type.enum';
import { ShapeToolComponent } from '../shape-tool/shape-tool.component';

@Component({
  selector: 'app-ellipse-tool',
  templateUrl: './ellipse-tool.component.html',
  styleUrls: ['./ellipse-tool.component.css'],
})
export class EllipseToolComponent extends ShapeToolComponent implements OnInit {
  @Output() submit: EventEmitter<Ellipse> = new EventEmitter<Ellipse>();

  shapeForm = this.fb.group({
    type: ShapeType.Ellipse,
    center: this.fb.group({
      x: [0],
      y: [0],
    }),
    rotation: [0],
    rx: [0],
    ry: [0],
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
    // TODO: figure out how to cast the Partial from shapeForm (which contains child Partials) to Ellipse
    let ellipse: Ellipse = {
      id: 'PH',
      type: value.type,
      center: {
        x: value.center.x,
        y: value.center.y,
      },
      rotation: value.rotation,
      rx: value.rx,
      ry: value.ry,
      properties: {
        fill: value.properties.fill,
        stroke: value.properties.stroke,
        strokeWidth: value.properties.strokeWidth,
      }
    };
    this.submit.emit(ellipse);
  }
}
