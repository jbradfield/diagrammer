import {AfterViewInit, Component, ElementRef, OnChanges, OnInit, ViewChild} from '@angular/core';
import {Shape} from "../interfaces/shape";
import {StorageService} from "../services/storage-service.service";
import {environment} from "../../environments/environment";
import { ShapeType } from '../enums/shape-type.enum';
import { CanvasDirective } from '../directives/canvas.directive';
import { CanvasShapeComponent } from '../canvas-shape/canvas-shape.component';
import { CanvasElement } from '../classes/canvas-element';
import { CanvasComponent } from '../interfaces/canvas-component';
import { RectangleComponent } from '../canvas-components/rectangle/rectangle.component';
import { EllipseComponent } from '../canvas-components/ellipse/ellipse.component';

@Component({
  selector: 'app-shape-manager',
  templateUrl: './shape-manager.component.html',
  styleUrls: ['./shape-manager.component.scss']
})
export class ShapeManagerComponent implements OnInit, AfterViewInit {

  @ViewChild("canvas") canvas!: CanvasDirective;
  
  shapeListKey: string;
  shapeList: CanvasElement[];
  // height: number;
  // width: number;

  keys = Object.keys;
  ShapeTypeEnum = ShapeType;

  constructor(private storageService: StorageService) {
    this.shapeListKey = environment.shapelist_key;
    this.shapeList = storageService.getData(this.shapeListKey) || [];
    // this.height = 0;
    // this.width = 0;
  }

  ngOnInit(): void {
    
  }

  ngAfterViewInit() {
    this.draw();
  }

  draw() {
    const canvasViewContainer = this.canvas.viewContainerRef;
    canvasViewContainer.clear();

    console.log(canvasViewContainer);

    this.shapeList.forEach((element) => {
      console.log(element);
      const comp = canvasViewContainer.createComponent<CanvasComponent>(element.type);
      comp.instance.shapeData = element.data;
    })
  }

  addShape(type: string, x: string, y: string, h: string, w: string): void {
    console.log(type);
    let element : CanvasElement;
    if (type == "Rectangle") {
      element = {
        type: RectangleComponent,
        data: {
          x: parseFloat(x) - (parseFloat(w) / 2),
          y: parseFloat(y) - (parseFloat(h) / 2),
          width: parseFloat(w),
          height: parseFloat(h)
        }
      };
      this.shapeList.push(element);
    }
    else if (type == "Ellipse") {
      element = {
        type: EllipseComponent,
        data: {
          x: parseFloat(x),
          y: parseFloat(y),
          rx: parseFloat(w) / 2,
          ry: parseFloat(h) / 2 
        }
      };
      this.shapeList.push(element);
    }
    this.saveList();
    this.draw();
  }

  saveList(): void {
    this.storageService.setData(this.shapeListKey, this.shapeList);
  }

  clear(): void {
    this.shapeList = [];
    this.saveList();
  }
}
