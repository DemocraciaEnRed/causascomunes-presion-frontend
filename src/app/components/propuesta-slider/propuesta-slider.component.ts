import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../../model/project';

class Propuesta{
  public titulo: String;
  public texto: String;

    public constructor(titulo: String, texto: String) {
        this.titulo = titulo;
        this.texto = texto;
    }
}

@Component({
    selector: 'propuesta-slider',
    templateUrl: './propuesta-slider.component.html',
    styleUrls: ['./propuesta-slider.component.scss']
})
export class PropuestaSliderComponent implements OnInit {
  
    //@Input() project: Project;
    //public propuestas: Array<Propuesta>;
    @Input() propuestas: Array<Array<String>>;

    constructor() {
    }
  
    public ngOnInit(): void {
      /*this.propuestas = [
        new Propuesta('tttrtrtr',this.project.slug),
        new Propuesta('uyyuyuyu',this.project.name)
      ];
      switch(this.project.slug.toLowerCase()){
        case 'genero':
          this.propuestas = [
            new Propuesta('asd','dfg'),
            new Propuesta('hgf','yytr')
          ];
          break;
        case 'ambiente':
          this.propuestas = [
            new Propuesta('2323','sdddd'),
            new Propuesta('h555555gf','y23ytr')
          ];
          break;
      }*/
    }

}
