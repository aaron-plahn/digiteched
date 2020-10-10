import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { WorkComponent } from './pages/work/work.component';
import { EducationComponent } from './pages/education/education.component';
import { TutorialsComponent } from './pages/tutorials/tutorials.component';
import { LinksComponent } from './pages/links/links.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "projects", component: ProjectsComponent },
  { path: "work", component: WorkComponent },
  { path: "education", component: EducationComponent },
  { path: "tutorials", component: TutorialsComponent },
  { path: "links", component: LinksComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
