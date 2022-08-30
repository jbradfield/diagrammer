import {
  AfterViewInit,
  Directive,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  ViewContainerRef,
} from '@angular/core';
import { EllipseComponent } from '../components/ellipse/ellipse.component';
import { RectangleComponent } from '../components/rectangle/rectangle.component';
import { ShapeComponent } from '../components/shape/shape.component';
import { Shape } from '../model/shape';
import { ShapeType } from '../model/shape-type.enum';

const ShapeTypeLookup = {
  // [T in ShapeType]: { // TODO: only uncomment this outer bracket when all types are implemented
  [ShapeType.Rectangle]: RectangleComponent,
  [ShapeType.Ellipse]: EllipseComponent,
  // ...
  // } [T]
};

@Directive({
  selector: '[dynamic-svg]',
})
export class DynamicSvgDirective
  implements AfterViewInit, OnDestroy, OnChanges
{
  @Input() shape: Shape;
  @Input() isSelected: boolean;
  @Output() click: EventEmitter<Shape> = new EventEmitter<Shape>();

  private component: ShapeComponent;

  constructor(private vcr: ViewContainerRef) {}

  ngAfterViewInit(): void {
    this.vcr.clear();
    const compRef = this.vcr.createComponent<ShapeComponent>(
      ShapeTypeLookup[this.shape.type]
    );
    this.component = compRef.instance;
    this.component.shape = this.shape;
    this.component.isSelected = this.isSelected;
    const sub = this.component.click.subscribe(() => this.onClick());
    compRef.onDestroy(() => sub.unsubscribe());
    this.vcr.createEmbeddedView(this.component.shapeTemplate);
    console.log('dir init');
  }

  ngOnDestroy(): void {
    this.vcr.clear();
  }

  ngOnChanges(): void {
    if (this.component) {
      this.component.shape = this.shape;
      this.component.isSelected = this.isSelected;
    }
  }

  onClick(): void {
    this.click.emit(this.shape);
  }
}
