import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCanvasHost]'
})
export class CanvasHostDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}