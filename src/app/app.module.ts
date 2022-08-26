import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DynamicSvgDirective } from './directives/dynamic-svg.directive';
import { CanvasComponent } from './components/canvas/canvas.component';
import { ShapeComponent } from './components/shape/shape.component';
import { ShapeService } from './services/shape.service';
import { LocalStorageService } from './services/local-storage.service';
import { RectangleComponent } from './components/rectangle/rectangle.component';
import { EllipseComponent } from './components/ellipse/ellipse.component';

@NgModule({
  declarations: [
    AppComponent,
    CanvasComponent,
    ShapeComponent,
    DynamicSvgDirective,
    RectangleComponent,
    EllipseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    ShapeService,
    LocalStorageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
