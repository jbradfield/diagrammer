import {
  AfterViewInit,
  Directive,
  Input,
  OnDestroy,
  OnInit,
  ViewContainerRef,
} from '@angular/core';
import { ShapeComponent } from '../components/shape/shape.component';
import { Shape } from '../model/shape';
import { ShapeType } from '../model/shape-type.enum';

const shapeTypeComponentMap: Map<ShapeType, ShapeComponent> = new Map(); // TODO fill this out with types

@Directive({
  selector: '[dynamic-svg]',
})
export class DynamicSvgDirective implements OnInit, AfterViewInit, OnDestroy {
  @Input() shape: Shape;

  constructor(private vcr: ViewContainerRef) {}

  ngOnInit(): void {
    this.vcr.clear();
    const compRef = this.vcr.createComponent<ShapeComponent>(ShapeComponent); // TODO pull type from map
    compRef.instance.shapeData = this.shape;
  }

  ngAfterViewInit(): void {
    // this.viewContainerRef.createEmbeddedView(this.component.shapeTemplate);
  }

  ngOnDestroy(): void {
    this.vcr.clear();
  }
}
