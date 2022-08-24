import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Shape } from '../../model/shape';

@Component({
  selector: 'app-shape',
  templateUrl: './shape.component.html',
  styleUrls: ['./shape.component.scss']
})
export class ShapeComponent implements OnInit {

  shapeData: Shape;
  @ViewChild("template") template: TemplateRef<any>;

  constructor() { }

  ngOnInit() {
  }

}