import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponenteComponent } from './Componentes/Componente/Componente.component';
import { NavBarComponent } from './Componentes/nav-bar/nav-bar.component';
import { FooterComponent } from './Componentes/footer/footer.component';
import { DashboardComponent } from './Componentes/dashboard/dashboard.component';
import { CardComponent } from './Componentes/dashboard/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponenteComponent,
    NavBarComponent,
    FooterComponent,
    DashboardComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
