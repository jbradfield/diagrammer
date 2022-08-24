import { Directive, Input, OnDestroy, OnInit, Type, ViewContainerRef } from '@angular/core';
import { EllipseShape } from '../canvas-components/ellipse/ellipse-shape';
import { EllipseComponent } from '../canvas-components/ellipse/ellipse.component';
import { RectangleShape } from '../canvas-components/rectangle/rectangle-shape';
import { RectangleComponent } from '../canvas-components/rectangle/rectangle.component';
import { ShapeComponent } from '../components/shape/shape.component';
import { CanvasComponent } from '../interfaces/canvas-component';
import { Shape } from '../interfaces/shape';

@Directive({
  selector: '[dynamic-svg]'
})
export class DynamicSvgDirective implements OnInit, OnDestroy {

  @Input() component: ShapeComponent;

  constructor(private viewContainerRef: ViewContainerRef) { }

  ngOnInit(): void {
    this.viewContainerRef.createEmbeddedView(this.component.template)
  }

  ngOnDestroy(): void {

  }
}