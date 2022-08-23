import { Component, Input, OnInit } from '@angular/core';
import { CanvasComponent } from '../../interfaces/canvas-component';
import { RectangleShape } from './rectangle-shape';

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.css']
})
export class RectangleComponent implements OnInit, CanvasComponent {

  @Input() shapeData! : RectangleShape;

  constructor() { }

  ngOnInit() {
  }

}