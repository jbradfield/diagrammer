import { Component, OnInit } from '@angular/core';
import { ShapeType } from '../../model/shape-type.enum';
import { ShapeService } from '../../services/shape.service';
import { ShapeComponent } from '../shape/shape.component';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements OnInit {

  constructor(private shapeService: ShapeService) { }

  ngOnInit() { }

  getShapes(): ShapeComponent[] {
    return this.shapeService.getShapes();
  }

  addShape(x: string, y: string): void {
    // TODO: replace with service call to get correct component
    let comp = new ShapeComponent();
    comp.shapeData = {
      id: "PH",
      type: ShapeType.Rectangle,
      center: { x: parseFloat(x), y: parseFloat(y) }, // there has to be a way to take numbers from the form input?
      rotation: 0
    };
    this.shapeService.addShape(comp);
  }

  clear(): void {
    this.shapeService.removeAll();
  }
}