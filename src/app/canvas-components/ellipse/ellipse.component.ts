import { Component, Input, OnInit } from '@angular/core';
import { EllipseShape } from './ellipse-shape';

@Component({
  selector: 'app-ellipse',
  templateUrl: './ellipse.component.html',
  styleUrls: ['./ellipse.component.css']
})
export class EllipseComponent implements OnInit {

  @Input() shapeData! : EllipseShape;

  constructor() { }

  ngOnInit() {
  }

}