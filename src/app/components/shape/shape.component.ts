import { Component, Input, OnInit } from '@angular/core';
import { Shape } from '../../model/shape';

@Component({
  selector: 'g[app-shape]',
  templateUrl: './shape.component.html',
  styleUrls: ['./shape.component.scss'],
})
export class ShapeComponent implements OnInit {
  @Input() shapeData: Shape;

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {}
}
