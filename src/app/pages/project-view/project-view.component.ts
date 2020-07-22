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
                    this.projectDescription = this.sanitizeHtml(p.slider_text.replace(/(http.*)[ .]/, '<a href="$1" target="_blank" rel="noopener noreferrer">LINK</a> '));
                    this.politicianService
                        .getAllByProject(p.slug, true)
                        .then(response => {
                            /*this.politiciansList = response;
                            var rPoliticiansListSlider = [];
                            response.forEach(function(politician) {
                                if (politician.position.name == 'Presidente')
                                  rPoliticiansListSlider.push(politician)
                            });
                            this.politiciansListSlider = rPoliticiansListSlider;*/
                            this.politiciansListSlider = response.slice(0, 20).sort(function() {return .5 - Math.random(); });
                        });
                    const element = document.querySelector('#activa');
                    element.scrollIntoView();
                });
        });
    }

}
