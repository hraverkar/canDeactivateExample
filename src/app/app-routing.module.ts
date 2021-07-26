import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { CanExitGuard } from './can-exit.guard';


const routes: Routes = [{
  path: '', component: HomeComponent
}, {
  path: 'contact',
  component: ContactComponent,
  canDeactivate: [CanExitGuard]
},
{
  path: '**',
  component: HomeComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
