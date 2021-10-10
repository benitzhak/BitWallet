import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { ContactEditComponent } from './pages/contact-edit/contact-edit.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SignupComponent } from './pages/signup/signup.component';
import { StatisticsComponent } from './pages/statistics/statistics.component';


const routes: Routes = [
  {path:'contact/:id' ,component:ContactDetailsComponent},
  {path:'contact', component:ContactPageComponent},
  {path:'edit/:id', component:ContactEditComponent},
  {path:'edit', component:ContactEditComponent},
  {path:'statistics', component:StatisticsComponent},
  {path:'signup', component:SignupComponent},
  {path:'',component:HomePageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
