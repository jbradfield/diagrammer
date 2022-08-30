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

@Component({
  selector: 'app-shape',
  templateUrl: './shape.component.html',
  styleUrls: ['./shape.component.scss'],
})
export class ShapeComponent implements OnInit, OnChanges {
  @Input() shape: Shape;
  @Output() click: EventEmitter<ShapeComponent> =
    new EventEmitter<ShapeComponent>();
  @ViewChild('shapeTemplate', { static: true }) shapeTemplate: TemplateRef<any>;

  private _isSelected: boolean;

  constructor() {}

  ngOnInit() {}

  onClick(): void {
    this.click.emit(this);
    console.log('click: ' + this.shape.type);
  }

  ngOnChanges() {
    console.log('onchange: ' + this.shape.type + ' -- ' + this.isSelected);
  }

  get isSelected() {
    return this._isSelected;
  }

  @Input() set isSelected(value: boolean) {
    this._isSelected = value;
    // this.cdr.markForCheck();
  }
}
