import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Ellipse, Rectangle, Shape } from '../../model/shape';
import { ShapeType } from '../../model/shape-type.enum';
import { ShapeService } from '../../services/shape.service';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss'],
})
export class CanvasComponent implements OnInit, AfterViewInit {
  ShapeTypeEnum = ShapeType;

  constructor(private shapeService: ShapeService) {}

  ngOnInit() {}

  ngAfterViewInit() {}

  getShapes(): Shape[] {
    return this.shapeService.getShapes();
  }

  addShape(type: string, x: string, y: string): void {
    let shape: Shape = {
      id: 'PH',
      type: ShapeType[type],
      center: { x: parseFloat(x), y: parseFloat(y) }, // there has to be a way to take numbers from the form input?
      rotation: 0,
    };
    // TODO: do this dynamically, somehow? iterate through the fields of the shape type?
    if (type == ShapeType.Rectangle) {
      (<Rectangle>shape).width = 100;
      (<Rectangle>shape).height = 100;
    } else if (type == ShapeType.Ellipse) {
      (<Ellipse>shape).rx = 50;
      (<Ellipse>shape).ry = 50;
    }
    this.shapeService.addShape(shape);
  }

  clear(): void {
    this.shapeService.removeAll();
  }
}
