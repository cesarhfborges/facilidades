import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HomeComponent} from './pages/home/home.component';
import {BasiclayoutComponent} from './layouts/basiclayout/basiclayout.component';
import {HomelayoutComponent} from './layouts/homelayout/homelayout.component';
import {EmailAssinaturaComponent} from './pages/email-assinatura/email-assinatura.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmailAssinaturaComponent,
    BasiclayoutComponent,
    HomelayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
