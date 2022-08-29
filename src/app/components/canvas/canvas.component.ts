import {
  AfterViewInit,
  Component,
  OnInit,
  Type,
  ViewChild,
} from '@angular/core';
import { ToolHostDirective } from '../../directives/tool-host.directive';
import { Ellipse, Rectangle, Shape } from '../../model/shape';
import { ShapeType } from '../../model/shape-type.enum';
import { ShapeService } from '../../services/shape.service';
import { EllipseToolComponent } from '../tools/ellipse-tool/ellipse-tool.component';
import { RectangleToolComponent } from '../tools/rectangle-tool/rectangle-tool.component';
import { ShapeToolComponent } from '../tools/shape-tool/shape-tool.component';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss'],
})
export class CanvasComponent implements OnInit, AfterViewInit {
  @ViewChild(ToolHostDirective, { static: true }) toolHost!: ToolHostDirective;
  selectedTool: ShapeType | null = null;
  ShapeTypeEnum = ShapeType;

  constructor(private shapeService: ShapeService) {}

  ngOnInit() {}

  ngAfterViewInit() {}

  onChangeTool(): void {
    let toolComponentType: Type<ShapeToolComponent> | null = null;
    switch (this.selectedTool) {
      case ShapeType.Rectangle:
        toolComponentType = RectangleToolComponent;
        break;
      case ShapeType.Ellipse:
        toolComponentType = EllipseToolComponent;
        break;
      default:
        break;
    }
    this.toolHost.viewContainerRef.clear();
    if (toolComponentType != null) {
      const comp =
        this.toolHost.viewContainerRef.createComponent<ShapeToolComponent>(
          toolComponentType
        );
      const sub = comp.instance.submit.subscribe((shape) => {
        this.addShape(shape);
        this.selectedTool = null;
        this.onChangeTool();
      });
      comp.onDestroy(() => sub.unsubscribe);
    }
  }

  getShapes(): Shape[] {
    return this.shapeService.getShapes();
  }

  addShape(shape: Shape): void {
    this.shapeService.addShape(shape);
  }

  clear(): void {
    this.shapeService.removeAll();
  }
}
