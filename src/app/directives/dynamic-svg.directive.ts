import { Directive, Input, OnDestroy, OnInit, Type, ViewContainerRef } from '@angular/core';
import { ShapeComponent } from '../components/shape/shape.component';

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
    this.viewContainerRef.clear();
  }
}