import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { CanvasComponent } from '../../interfaces/canvas-component';
import { EllipseShape } from './ellipse-shape';

@Component({
  selector: 'svg:g[app-ellipse]',
  templateUrl: './ellipse.component.html',
  styleUrls: ['./ellipse.component.css'],
})
export class EllipseComponent implements OnInit, CanvasComponent {
  
  @Input() shapeData!: EllipseShape;
  @ViewChild('template') template: TemplateRef<any>;

  constructor() {}

  ngOnInit() {}
}
