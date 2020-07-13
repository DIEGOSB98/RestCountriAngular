import {Routes} from '@angular/router';
import {PaisesPageComponent} from './componentes/paises-page/paises-page.component';
import {PaisesPageViewComponent} from './componentes/paises-page-view/paises-page-view.component';

export const RUTAS: Routes = [
  {path : 'home', component: PaisesPageComponent},
  {path : 'view/:name', component: PaisesPageViewComponent},
  {path : '**', pathMatch: 'full', redirectTo: 'home'}
]
