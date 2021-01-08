import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {HomelayoutComponent} from './layouts/homelayout/homelayout.component';
import {EmailAssinaturaComponent} from './pages/email-assinatura/email-assinatura.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'assinatura-email',
    component: EmailAssinaturaComponent,
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
