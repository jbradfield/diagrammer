import {
  AfterViewInit,
  Component,
  OnInit,
  Type,
  ViewChild,
} from '@angular/core';
import { CanvasHostDirective } from '../../directives/canvas-host.directive';
import { ToolHostDirective } from '../../directives/tool-host.directive';
import { Shape } from '../../model/shape';
import { ShapeType } from '../../model/shape-type.enum';
import { ShapeService } from '../../services/shape.service';
import { EllipseComponent } from '../ellipse/ellipse.component';
import { RectangleComponent } from '../rectangle/rectangle.component';
import { ShapeComponent } from '../shape/shape.component';
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
  @ViewChild(CanvasHostDirective, { static: true })
  canvasHost!: CanvasHostDirective;

  ShapeTypeEnum = ShapeType;

  selectedTool: ShapeType | null = null;
  selectedComponents: ShapeComponent[] = [];
  shapeComponents: ShapeComponent[] = [];

  constructor(private shapeService: ShapeService) {}

  ngOnInit() {
    this.getShapes().forEach((s) => {
      this.createShapeComponent(s);
    });
  }

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

  selectComponent(component: ShapeComponent | null) {
    this.selectedComponents = [];
    this.selectedComponents.push(component);
    this.shapeComponents.forEach((c) => {
      c.isSelected = this.selectedComponents.indexOf(c) > -1;
    });
  }

  getShapes(): Shape[] {
    return this.shapeService.getShapes();
  }

  addShape(shape: Shape): void {
    this.shapeService.addShape(shape);
    this.createShapeComponent(shape);
  }

  clear(): void {
    this.shapeComponents = [];
    this.canvasHost.viewContainerRef.clear();
    this.shapeService.removeAll();
  }

  private getShapeComponentType(type: ShapeType): Type<ShapeComponent> {
    switch (type) {
      case ShapeType.Rectangle:
        return RectangleComponent;
      case ShapeType.Ellipse:
        return EllipseComponent;
      default:
        return ShapeComponent;
    }
  }

  private createShapeComponent(shape: Shape): void {
    const vcr = this.canvasHost.viewContainerRef;
    const compRef = vcr.createComponent<ShapeComponent>(ShapeComponent);
    const component = compRef.instance;
    component.shape = shape;
    component.isSelected = this.selectedComponents.indexOf(component) > -1;
    const sub = component.click.subscribe((event) => {
      console.log('canvas click: ' + event.shape.type);
      this.selectComponent(event);
    });
    compRef.onDestroy(() => sub.unsubscribe());
    vcr.createEmbeddedView(component.shapeTemplate);
    this.shapeComponents.push(component);
  }
}
