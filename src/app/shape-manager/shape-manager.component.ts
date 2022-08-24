import {
  AfterViewInit,
  Component,
  ElementRef,
  OnChanges,
  OnInit,
  ViewChild,
} from '@angular/core';
import { StorageService } from '../services/storage-service.service';
import { environment } from '../../environments/environment';
import { ShapeType } from '../enums/shape-type.enum';
import { CanvasElement } from '../classes/canvas-element';
import { CanvasComponent } from '../interfaces/canvas-component';
import { RectangleComponent } from '../canvas-components/rectangle/rectangle.component';
import { EllipseComponent } from '../canvas-components/ellipse/ellipse.component';
import { CanvasAnchorDirective } from '../directives/canvas-anchor.directive';

@Component({
  selector: 'app-shape-manager',
  templateUrl: './shape-manager.component.html',
  styleUrls: ['./shape-manager.component.scss'],
})
export class ShapeManagerComponent implements OnInit, AfterViewInit {
  @ViewChild(CanvasAnchorDirective) canvas!: CanvasAnchorDirective;

  shapeListKey: string;
  shapeList: CanvasElement[];

  keys = Object.keys;
  ShapeTypeEnum = ShapeType;

  json = JSON;

  constructor(private storageService: StorageService) {
    this.shapeListKey = environment.shapelist_key;
    this.shapeList = storageService.getData(this.shapeListKey) || [];
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {}

  addShape(type: string, x: string, y: string, h: string, w: string): void {
    let element: CanvasElement;
    if (type == 'Rectangle') {
      element = {
        type: RectangleComponent,
        data: {
          x: parseFloat(x) - parseFloat(w) / 2,
          y: parseFloat(y) - parseFloat(h) / 2,
          width: parseFloat(w),
          height: parseFloat(h),
        },
      };
      this.shapeList.push(element);
    } else if (type == 'Ellipse') {
      element = {
        type: EllipseComponent,
        data: {
          x: parseFloat(x),
          y: parseFloat(y),
          rx: parseFloat(w) / 2,
          ry: parseFloat(h) / 2,
        },
      };
      this.shapeList.push(element);
    }
    this.saveList();
  }

  saveList(): void {
    this.storageService.setData(this.shapeListKey, this.shapeList);
  }

  clear(): void {
    this.shapeList = [];
    this.saveList();
  }
}
