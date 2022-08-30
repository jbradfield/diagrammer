import {
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
  @Input() isSelected: boolean;
  @Output() click: EventEmitter<ShapeComponent> =
    new EventEmitter<ShapeComponent>();
  @ViewChild('shapeTemplate', { static: true }) shapeTemplate: TemplateRef<any>;

  constructor() {}

  ngOnInit() {}

  onClick(): void {
    this.click.emit(this);
  }

  ngOnChanges() {
    console.log(this.shape.type + ' -- ' + this.isSelected);
  }
}
