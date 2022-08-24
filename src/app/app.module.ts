import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShapeManagerComponent } from './shape-manager/shape-manager.component';
import { CanvasDirective } from './directives/canvas.directive';
import { RectangleComponent } from './canvas-components/rectangle/rectangle.component';
import { EllipseComponent } from './canvas-components/ellipse/ellipse.component';

@NgModule({
  declarations: [
    AppComponent,
    ShapeManagerComponent,
    RectangleComponent,
    EllipseComponent,
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
