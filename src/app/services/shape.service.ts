import { Injectable, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { ShapeComponent } from '../components/shape/shape.component';
import { Shape } from '../model/shape';
import { LocalStorageService } from './local-storage.service';

@Injectable()
export class ShapeService {

  shapes: ShapeComponent[];
  shapeListKey: string;
  
  constructor(private storage: LocalStorageService) { 
    this.shapeListKey = environment.shapelist_key;
    let shapeData: Shape[] = this.storage.getData(this.shapeListKey);
    this.shapes = shapeData.map(s => {
      let comp = new ShapeComponent(); // TODO: need to get proper component by type value
      comp.shapeData = s;
      return comp;
    });
  }

  getShapes(): ShapeComponent[] {
    return this.shapes;
  }

  addShape(shape: ShapeComponent): void {
    this.shapes.push(shape);
    this.save();
    console.log(this.shapes);
  }

  removeShape(shape: ShapeComponent): void {
    const index = this.shapes.indexOf(shape);
    this.shapes.splice(index, 1);
    this.save();
  }

  removeAll(): void {
    this.shapes = [];
    this.save();
  }

  private save() {
    let shapeData: Shape[] = this.shapes.map(s => s.shapeData);
    this.storage.setData(this.shapeListKey, shapeData);
  }
}