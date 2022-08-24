import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShapeManagerComponent } from './shape-manager/shape-manager.component';
import { CanvasShapeComponent } from './canvas-shape/canvas-shape.component';
import { CanvasDirective } from './directives/canvas.directive';

@NgModule({
  declarations: [
    AppComponent,
    ShapeManagerComponent,
    CanvasShapeComponent,
    CanvasDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
