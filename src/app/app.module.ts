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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RectangleToolComponent } from './components/tools/rectangle-tool/rectangle-tool.component';
import { EllipseToolComponent } from './components/tools/ellipse-tool/ellipse-tool.component';
import { ToolHostDirective } from './directives/tool-host.directive';
import { CanvasHostDirective } from './directives/canvas-host.directive';

@NgModule({
  declarations: [
    AppComponent,
    CanvasComponent,
    ShapeComponent,
    DynamicSvgDirective,
    ToolHostDirective,
    CanvasHostDirective,
    RectangleComponent,
    EllipseComponent,
    RectangleToolComponent,
    EllipseToolComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [ShapeService, LocalStorageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
