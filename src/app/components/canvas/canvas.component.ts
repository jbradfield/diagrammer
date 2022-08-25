import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { Shape } from '../../model/shape';
import { ShapeType } from '../../model/shape-type.enum';
import { ShapeService } from '../../services/shape.service';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss'],
})
export class CanvasComponent implements OnInit, AfterViewInit {
  constructor(
    private shapeService: ShapeService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    console.log(this.getShapes());
  }

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }

  getShapes(): Shape[] {
    return this.shapeService.getShapes();
  }

  addShape(x: string, y: string): void {
    let shape = {
      id: 'PH',
      type: ShapeType.Rectangle,
      center: { x: parseFloat(x), y: parseFloat(y) }, // there has to be a way to take numbers from the form input?
      rotation: 0,
    };
    this.shapeService.addShape(shape);
    this.cdr.detectChanges();
  }

  clear(): void {
    this.shapeService.removeAll();
  }
}
