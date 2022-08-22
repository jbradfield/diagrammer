import {AfterViewInit, Component, ElementRef, OnInit} from '@angular/core';
import {Shape} from "../interfaces/shape";
import {StorageService} from "../services/storage-service.service";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-shape-manager',
  templateUrl: './shape-manager.component.html',
  styleUrls: ['./shape-manager.component.scss']
})
export class ShapeManagerComponent implements OnInit, AfterViewInit {

  shapeListKey: string;
  shapeList: Shape[];

  height: number;
  width: number;

  constructor(private storageService: StorageService, private canvas: ElementRef) {
    this.shapeListKey = environment.shapelist_key;
    this.shapeList = storageService.getData(this.shapeListKey) || [];
    this.height = 0;
    this.width = 0;
  }

  ngAfterViewInit() {
    this.height = this.canvas.nativeElement.height;
    this.width = this.canvas.nativeElement.width;
  }

  ngOnInit(): void {

  }

  addShape(x: string, y: string): void {
    this.shapeList.push({x: parseInt(x), y: parseInt(y), rot: 0});
  }

}
