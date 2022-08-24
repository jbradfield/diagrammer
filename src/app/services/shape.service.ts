import { Injectable, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ShapeComponent } from '../components/shape/shape.component';
import { Shape } from '../model/shape';
import { LocalStorageService } from './local-storage.service';

@Injectable()
export class ShapeService implements OnInit {

  shapes: ShapeComponent[];
  shapeListKey: string;
  
  constructor(private storage: LocalStorageService) { 
    this.shapeListKey = environment.shapelist_key;
  }

  ngOnInit(): void {
    let shapeData: Shape[] = this.storage.getData(this.shapeListKey);
    this.shapes = shapeData.map(s => {
      let comp = new ShapeComponent(); // TODO: need to get proper component by type value
      comp.shapeData = s;
      return comp;
    });
  }

  save() {
    let shapeData: Shape[] = this.shapes.map(s => s.shapeData);
    this.storage.setData(this.shapeListKey, shapeData);
  }

}