import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Shape } from '../../../model/shape';

@Component({
  selector: 'app-shape-tool',
  templateUrl: './shape-tool.component.html',
  styleUrls: ['./shape-tool.component.css'],
})
export class ShapeToolComponent implements OnInit {
  @Output() submit: EventEmitter<Shape>;

  constructor() {}

  ngOnInit() {}
}
