import {Component, Input, OnInit} from '@angular/core';
import {Shape} from "../interfaces/shape";

@Component({
  selector: '[canvas-shape]',
  templateUrl: './canvas-shape.component.svg',
  styleUrls: ['./canvas-shape.component.scss']
})
export class CanvasShapeComponent implements OnInit {

  @Input() shape: Shape = {x: 0, y: 0, rot: 0};

  constructor() { }

  ngOnInit(): void {
  }

}
