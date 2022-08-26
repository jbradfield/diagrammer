import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {ShapeComponent} from '../components/shape/shape.component';
import {Shape} from '../model/shape';
import {LocalStorageService} from './local-storage.service';

@Injectable()
export class ShapeService {

  shapes: Shape[];
  shapeListKey: string;

  constructor(private storage: LocalStorageService) {
    this.shapeListKey = environment.shapelist_key;
    this.shapes = this.storage.getData(this.shapeListKey);
  }

  getShapes(): Shape[] {
    return this.shapes;
  }

  addShape(shape: Shape): void {
    this.shapes.push(shape);
    this.save();
  }

  removeShape(shape: Shape): void {
    const index = this.shapes.indexOf(shape);
    this.shapes.splice(index, 1);
    this.save();
  }

  removeAll(): void {
    this.shapes = [];
    this.save();
  }

  private save() {
    this.storage.setData(this.shapeListKey, this.shapes);
  }
}
