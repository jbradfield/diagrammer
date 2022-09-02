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
import { Shape } from '../../model/shape';
import { ShapeType } from '../../model/shape-type.enum';

@Component({
  selector: 'app-shape',
  templateUrl: './shape.component.html',
  styleUrls: ['./shape.component.scss'],
})
export class ShapeComponent implements OnInit, OnChanges {
  
  @Output() click: EventEmitter<ShapeComponent> = new EventEmitter<ShapeComponent>();
  @ViewChild('shapeTemplate', { static: true }) shapeTemplate: TemplateRef<any>;

  private _shape: Shape;
  private _isSelected: boolean;
  private _path: string;
    

  constructor() {}

  ngOnInit() {}

  onClick(): void {
    this.click.emit(this);
    console.log('click: ' + this.shape.type);
  }

  ngOnChanges() {
    console.log('onchange: ' + this.shape.type + ' -- ' + this.isSelected);
  }

  get shape(): Shape {
    return this._shape;
  }

  @Input() set shape(value: Shape) {
    this._shape = value;
    this._path = this.buildPath(value);
  }

  get isSelected() {
    return this._isSelected;
  }

  @Input() set isSelected(value: boolean) {
    this._isSelected = value;
    // this.cdr.markForCheck();
  }

  get path(): string {
    return this.path;
  }

  private buildPath(shape: Shape): string {
    switch (shape.type) {
      case ShapeType.Line: return ""; // NYI
      case ShapeType.Rectangle: return ""; // NYI
      case ShapeType.Ellipse: return ""; // NYI
      case ShapeType.Poly: return ""; // NYI
      case ShapeType.Donut: return ""; // NYI
      case ShapeType.Image: return ""; // NYI
      default: return "";
    }
  }
}
