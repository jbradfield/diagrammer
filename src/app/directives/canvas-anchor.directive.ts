import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCanvasAnchor]'
})
export class CanvasAnchorDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}