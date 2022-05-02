import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HemComponent } from './hem/hem.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { KyrkanComponent } from './kyrkan/kyrkan.component';
import { SamfallighetComponent } from './samfallighet/samfallighet.component';

const routes: Routes = [
  {
      path: '',
      component: HemComponent
  },
  {
      path: 'samfallighet',
      component: SamfallighetComponent
  },
  {
      path: 'kyrkan',
      component: KyrkanComponent
  },
  {
      path: 'kontakt',
      component: KontaktComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
