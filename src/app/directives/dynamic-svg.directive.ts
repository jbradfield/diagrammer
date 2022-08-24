import { Directive, Input, OnInit, Type, ViewContainerRef } from '@angular/core';
import { EllipseShape } from '../canvas-components/ellipse/ellipse-shape';
import { EllipseComponent } from '../canvas-components/ellipse/ellipse.component';
import { RectangleShape } from '../canvas-components/rectangle/rectangle-shape';
import { RectangleComponent } from '../canvas-components/rectangle/rectangle.component';
import { CanvasComponent } from '../interfaces/canvas-component';
import { Shape } from '../interfaces/shape';

@Directive({
  selector: '[dynamic-svg]'
})
export class DynamicSvgDirective implements OnInit {

  @Input() type: Type<CanvasComponent>;
  @Input() data: Shape;

  constructor(private viewContainer: ViewContainerRef) { }

  ngOnInit(): void {
    // TODO this should be some kind of factory
    let component: CanvasComponent = this.makeCanvasComponent(this.type, this.data);
    this.viewContainer.createEmbeddedView(component.template);
  }

  makeCanvasComponent(type: Type<CanvasComponent>, data: Shape): CanvasComponent {
    if (type == RectangleComponent) {
      let c = new RectangleComponent();
      c.shapeData = data as RectangleShape;
      return c;
    }
    else if (type == EllipseComponent) {
      let c = new EllipseComponent();
      c.shapeData = data as EllipseShape;
      return c;
    }
  }

}