import {
  Directive,
  Input,
  OnDestroy,
  OnInit,
  Type,
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
export class DynamicSvgDirective implements OnInit, OnDestroy {
  @Input() shape: Shape;

  constructor(private vcr: ViewContainerRef) {}

  ngOnInit(): void {
    this.vcr.clear();
    const compRef = this.vcr.createComponent<ShapeComponent>(
      ShapeTypeLookup[this.shape.type]
    );
    compRef.instance.shape = this.shape;
    this.vcr.createEmbeddedView(compRef.instance.shapeTemplate);
  }

  ngOnDestroy(): void {
    this.vcr.clear();
  }
}
