import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { CanvasComponent } from '../../interfaces/canvas-component';
import { RectangleShape } from './rectangle-shape';

@Component({
  selector: 'svg:g[app-rectangle]',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.css'],
})
export class RectangleComponent implements OnInit, CanvasComponent {
  
  @Input() shapeData!: RectangleShape;
  @ViewChild('template') template: TemplateRef<any>;

  constructor() {}

  ngOnInit() {}
}
