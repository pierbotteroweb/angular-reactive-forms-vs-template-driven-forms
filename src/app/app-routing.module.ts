import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateFormComponent } from './forms-demo/template-form/template-form.component';
import { ReactiveFormComponent } from './forms-demo/reactive-form/reactive-form.component';

const routes: Routes = [
  { path: 'template', component: TemplateFormComponent },
  { path: 'reactive', component: ReactiveFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
