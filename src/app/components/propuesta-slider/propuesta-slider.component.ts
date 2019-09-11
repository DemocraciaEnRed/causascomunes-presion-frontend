import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../../model/project';

@Component({
    selector: 'propuesta-slider',
    templateUrl: './propuesta-slider.component.html',
    styleUrls: ['./propuesta-slider.component.scss']
})
export class PropuestaSliderComponent implements OnInit {
  
    @Input() propuestas: Array<Array<String>>;

    constructor() {
      
      // LAS PROPUESTAS SE DEFINEN EN:
      // pages/project-view/project-view.component.ts
      
    }
  
    public ngOnInit(): void {
    }

}
