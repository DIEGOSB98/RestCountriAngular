import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { PaisesPageComponent } from './componentes/paises-page/paises-page.component';
import { PaisesPageViewComponent } from './componentes/paises-page-view/paises-page-view.component';
import {RouterModule} from '@angular/router';
import {RUTAS} from './app.routes';
import { LoadingComponent } from './shared/loading/loading.component';
import { ErrorComponent } from './shared/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    PaisesPageComponent,
    PaisesPageViewComponent,
    LoadingComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(RUTAS),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
