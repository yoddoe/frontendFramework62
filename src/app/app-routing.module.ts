import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


// change component
const routes: Routes = [
  {path :"",redirectTo:"/login",pathMatch:"full"},
  {path :"login:" component:LoginComponent},
  {path :"register:" component:RegisterComponent},
  {path :"home:" component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
