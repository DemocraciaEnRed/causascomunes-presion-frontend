import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../../model/project';
import { ProjectService } from '../../services/project.service';
import { Politician } from '../../model/politician';
import { PoliticianService } from '../../services/politician.service';
import { environment } from '../../../environments/environment';

@Component({
    selector: 'project-view',
    templateUrl: './project-view.component.html',
    styleUrls: ['./project-view.component.scss']
})
export class ProjectViewComponent implements OnInit {

    public currentProject: Project = new Project();
    public projectDescription: SafeHtml;
    public politiciansList = new Array<Politician>();
    public politiciansListSlider = new Array<Politician>();
  
    public propuestas: Array<Array<String>>;

    public sanitizeHtml(html: string): any {
        return this.sanitizer.bypassSecurityTrustHtml(html);
    }

    constructor(private route: ActivatedRoute,
        private projectService: ProjectService,
        private politicianService: PoliticianService,
        public sanitizer: DomSanitizer) {
    }

    public ngOnInit(): void {
        this.route.paramMap.subscribe(params => {
            this.projectService
                .getById(params['params']['id'])
                .then(p => {
                    this.currentProject = p;
                    /*const text = 'header {background-image: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url(' +
                        environment.imgBase + p.c_dir.replace(/\\/g, '/') + '/cover-' + p.cover_image +
                        '); background-size: cover;background-color: #' + p.secondary_color +
                        '!important;}.contact-button {border-color: #' + p.primary_color + '!important;color: #' +
                        p.primary_color + '!important;}.contact-button:hover {color: #fff!important; background-color: #' +
                        p.primary_color + '!important;}.indicator-icon {background-color: #' + p.primary_color +
                        '!important;}.btn-primary.btn-aec {background-color: #' + p.primary_color +
                        '!important;}.separador {border-top: solid 9px #' + p.secondary_color +
                        '!important;border-bottom: solid 7px #' + p.primary_color +
                        '!important;}.underline:after {background: #' + p.secondary_color +
                        '!important;}.bg-verde {background-color: #' + p.primary_color +
                        '!important;}.bg-violeta {background-color: #' + p.secondary_color +
                        '!important;}.follow-btn:hover,.follor-btn:focus {color: #' + p.primary_color +
                        '!important;}.follow-strip {background-color: #' + p.primary_color +
                        '!important;}.news-input {background-color: #' + p.primary_color +
                        '!important;}.btn-white {color: #' + p.primary_color + '!important;}';
                    if ($('#project-styles').data('project') !== p.name) {
                        $('#project-styles').html(text).data('project', p.name);
                    }
                    if ($('#project-styles').length < 1) {
                        $('style').after('<style id=\'project-styles\'></style>');
                        $('#project-styles').html(text).data('project', p.name);
                    }*/
                    $('#newsletter_project').val(p.name).trigger('input').trigger('change');
                    this.projectDescription = this.sanitizeHtml(p.slider_text);
                    this.politicianService
                        .getAllByProject(p.slug, true)
                        .then(response => {
                            this.politiciansList = response;
                            this.politiciansListSlider = response.slice(0, 20).sort(function() {return .5 - Math.random(); });
                        });
                    const element = document.querySelector('#activa');
                    element.scrollIntoView();
            
                    switch(p.slug.toLowerCase()){
                      case 'genero':
                        this.propuestas = [
                          ['Plazo mínimo', 'se extiende de dos a tres años el plazo mínimo de un contrato de alquiler.'], 
                          ['Actualización del precio', 'establece que los aumentos sean anuales (no semestrales) con un índice de actualización objetivo.'], 
                          ['Registro de contratos', 'el locador tiene la obligación de declarar el contrato ante el registro de la propiedad inmueble, para “blanquear” los contratos.'], 
                          ['Depósito', 'reduce el depósito en garantía a un mes de alquiler, a devolverse en el momento de restitución del inmueble y con el monto actualizado al valor del último mes de alquiler.'], 
                          ['Impuestos y expensas extraordinarias', 'el inquilino no tendrá a su cargo el pago de las expensas comunes extraordinarias'], 
                          ['Renovación del contrato', 'se obliga a acordar las condiciones de la renovación con tres meses del fin del contrato.'], 
                          ['Arreglos', 'el proyecto establece de qué forma y en qué plazos deben las partes ante un problema que demande reparaciones en el inmueble.'], 
                          ['Resolución anticipada', 'se elimina el plazo mínimo de seis meses para rescindir el contrato, se puede rescindir en cualquier momento (pagando una multa)'], 
                          ['Domicilio electrónico', 'las partes deben fijar un domicilio electrónico (mail) en el contrato de alquiler, para que todas las comunicaciones por ese medio sean válidas y vinculantes.'], 
                          ['Pagarés', 'el proyecto prohíbe a los propietarios exigir la firma de pagarés a los inquilinos.']
                        ];
                        break;
                      case 'ambiente':
                        this.propuestas = [
                        ];
                        break;
                    }
                });
        });
    }

}
