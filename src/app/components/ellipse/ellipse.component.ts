import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ShapeComponent } from '../shape/shape.component';
import { Ellipse } from '../../model/shape';

@Component({
  selector: 'app-ellipse',
  templateUrl: './ellipse.component.html',
  styleUrls: ['./ellipse.component.scss'],
})
export class EllipseComponent extends ShapeComponent implements OnInit {
  // shape: Ellipse;

  constructor() {
    super();
  }

  ngOnInit(): void {}
}
