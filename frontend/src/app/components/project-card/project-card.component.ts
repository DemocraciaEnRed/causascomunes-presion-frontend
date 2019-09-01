import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../../model/project';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { environment } from '../../../environments/environment';

@Component({
    selector: 'project-card',
    templateUrl: 'project-card.component.html',
    styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {

    @Input() project: Project;
    public backgroundImage: string;
    public projectDescription: SafeHtml;

    public constructor(public sanitizer: DomSanitizer) {
    }

    public sanitizeStyle(style): any {
        return this.sanitizer.bypassSecurityTrustStyle(style);
    }

    public sanitizeHtml(html): any {
        return this.sanitizer.bypassSecurityTrustHtml(html);
    }

    public ngOnInit(): void {
        const backgroundAux = 'url(' +
            environment.imgBase + this.project.dir.replace(/\\/g, '/') + '/grid-' + this.project.image + ') no-repeat';
        this.backgroundImage = this.sanitizeStyle(backgroundAux);
        this.projectDescription = this.sanitizeHtml(this.project.short_text);
    }

}
