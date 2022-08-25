import {
  Component,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { Shape } from '../../model/shape';

@Component({
  selector: 'app-shape',
  templateUrl: './shape.component.html',
  styleUrls: ['./shape.component.scss'],
})
export class ShapeComponent implements OnInit {
  @Input() shape: Shape;
  @ViewChild('shapeTemplate', { static: true }) shapeTemplate: TemplateRef<any>;

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {}
}
