import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appToolHost]'
})
export class ToolHostDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}