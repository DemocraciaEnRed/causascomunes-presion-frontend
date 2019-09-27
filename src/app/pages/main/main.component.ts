import { Component, HostListener } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ProjectService } from '../../services/project.service';
import { PoliticianService } from './../../services/politician.service';
import { Project } from '../../model/project';
import { ConfigService } from '../../services/config.service';
import { Politician } from '../../model/politician';

@Component({
    selector: 'main-page',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent {

    public projectList: Array<Project>;
    public tally: Number = 0;
    public highlightedProjectExists = false;
    public highlightedProject: Project;
    public politiciansList: Array<Politician>;
    public projectDescription: SafeHtml;
    public isMobileView: Boolean;

    public sanitizeHtml(html: string): any {
        return this.sanitizer.bypassSecurityTrustHtml(html);
    }

    constructor(public projectService: ProjectService,
            public politicianService: PoliticianService,
            public configService: ConfigService,
            public sanitizer: DomSanitizer) {
        if ($('#project-styles').length > 0) {
            $('#project-styles').remove();
        }
        $('#newsletter_project').val('Home').trigger('input').trigger('change');
        this.projectService
            .getAll()
            .then(response => {
                let $highlighted = false;
                let $highlightedProject = null;
                response.forEach(function(item) {
                    if (item.hasOwnProperty('highlighted') && item.highlighted === 1) {
                        $highlighted = true;
                        $highlightedProject = item;
                    }
                });
                if($highlighted) {
                    this.highlightedProjectExists = $highlighted;
                    this.highlightedProject = $highlightedProject;
                    //this.projectDescription = this.sanitizeHtml($highlightedProject.slider_text);
                    this.projectDescription = $highlightedProject.slider_text;
                    this.politicianService
                        .getAllByProject($highlightedProject.slug, true)
                        .then(r => this.politiciansList = r.slice(0, 20).sort(function() {return .5 - Math.random(); }) );
                }
                this.projectList = response;
            });
        this.configService
                .getTally()
                .then(response => {
                    this.tally = response;
                });
    }

    ngOnInit() {
        if( window.innerWidth <= 768) {
            this.isMobileView = true;
        } else {
            this.isMobileView = false;
        }
    }

    @HostListener('window:resize', ['$event'])
    onResize(_event) {
        if( window.innerWidth <= 768) {
            this.isMobileView = true;
        } else {
            this.isMobileView = false;
        }
        console.log('projectList', this.projectList);
    }



}
