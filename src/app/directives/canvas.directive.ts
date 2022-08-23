import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCanvas]'
})
export class CanvasDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}