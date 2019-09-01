import { HttpService } from './services/http.service';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { ProjectService } from './services/project.service';
import { Project } from './model/project';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild('navbarToggler') navbarToggler:ElementRef;
  public formGroup: FormGroup;
  public newsletterMessage: string;
  public projectList: Array<Project>;
  public submitted = false;

  constructor(
    private httpService: HttpService,
    private projectService: ProjectService,
    public fb: FormBuilder) {
    this.formGroup = fb.group({
        email: ['', Validators.compose([Validators.email, Validators.required])],
        project: ['']
    });
    this.projectService
        .getAll()
        .then(response => this.projectList = response);
  }

  navBarTogglerIsVisible() {
    return this.navbarToggler.nativeElement.offsetParent !== null;
  }

  collapseNav() {
    if (this.navBarTogglerIsVisible()) {
      this.navbarToggler.nativeElement.click();
    }
  }

  public submitNewsletter() {
      this.newsletterMessage = '';
      if(this.formGroup.valid) {
        console.log(this.formGroup);
        this.httpService
          .post('api/v1/subscribe', JSON.stringify(this.formGroup.value))
          .then(response => {
            this.newsletterMessage = response;
            this.submitted = true;
          });
      } else {
        this.newsletterMessage = 'Ingrese un email válido';
      }
  }

}
