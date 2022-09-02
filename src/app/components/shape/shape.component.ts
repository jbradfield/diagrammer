import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { Ellipse, Line, Rectangle, Shape } from '../../model/shape';
import { ShapeType } from '../../model/shape-type.enum';

@Component({
  selector: 'app-shape',
  templateUrl: './shape.component.html',
  styleUrls: ['./shape.component.scss'],
})
export class ShapeComponent implements OnInit, OnChanges {
  
  @Output() click: EventEmitter<ShapeComponent> = new EventEmitter<ShapeComponent>();
  @ViewChild('shapeTemplate', { static: true }) shapeTemplate: TemplateRef<any>;

  isSelected: boolean;

  private _shape: Shape;
  private _path: string;
    

  constructor() {}

  ngOnInit() {}

  onClick(): void {
    this.click.emit(this);
    console.log('click: ' + this.shape.type);
  }

  ngOnChanges() {
    //  console.log('onchange: ' + this.shape.type + ' -- ' + this.isSelected);
  }

  get shape(): Shape {
    return this._shape;
  }

  @Input() set shape(value: Shape) {
    this._shape = value;
    this._path = this.buildPath(value);
  }

  // get isSelected() {
  //   return this._isSelected;
  // }

  // @Input() set isSelected(value: boolean) {
  //   this._isSelected = value;
  //   // this.cdr.markForCheck();
  // }

  get path(): string {
    return this._path;
  }

  private buildPath(shape: Shape): string {
    switch (shape.type) {
      case ShapeType.Line: return this.lineToPath(shape as Line);
      case ShapeType.Rectangle: return this.rectangleToPath(shape as Rectangle);
      case ShapeType.Ellipse: return this.ellipseToPath(shape as Ellipse);
      case ShapeType.Poly: return ""; // NYI
      case ShapeType.Donut: return ""; // NYI
      case ShapeType.Image: return ""; // NYI
      default: return "";
    }
  }

  private lineToPath(line: Line): string {
    let path = `M ${ line.start.x } ${ line.start.y } L ${ line.end.x } ${ line.end.y }`;
    return path;
  }

  private rectangleToPath(rectangle: Rectangle): string {
    console.log(rectangle);
    let x = rectangle.center.x - (rectangle.width / 2);
    let y = rectangle.center.y - (rectangle.height / 2);
    let w = rectangle.width;
    let h = rectangle.height;
    let path = `M ${x} ${y} h ${w} v ${h} h -${w} Z`;
    return path;
  }

  private ellipseToPath(ellipse: Ellipse): string {
    let cx = ellipse.center.x;
    let cy = ellipse.center.y;
    let rx = ellipse.rx;
    let ry = ellipse.ry;
    let path = `M ${cx - rx} ${cy} a ${rx} ${ry} 0 0 1 ${2 * rx} 0 a ${rx} ${ry} 0 0 1 -${2 * rx} 0 Z`;
    return path;
  }
}
