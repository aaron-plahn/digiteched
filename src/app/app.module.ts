import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProjectsComponent } from './pages/projects/projects.component';
import { WorkComponent } from './pages/work/work.component';
import { EducationComponent } from './pages/education/education.component';
import { TutorialsComponent } from './pages/tutorials/tutorials.component';
import { LinksComponent } from './pages/links/links.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ProjectsComponent,
    WorkComponent,
    EducationComponent,
    TutorialsComponent,
    LinksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
