import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ShapeComponent } from '../shape/shape.component';
import { Rectangle } from '../../model/shape';

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.scss'],
})
export class RectangleComponent extends ShapeComponent implements OnInit {
  shape: Rectangle;

  constructor() {
    super();
  }

  ngOnInit(): void {}
}
