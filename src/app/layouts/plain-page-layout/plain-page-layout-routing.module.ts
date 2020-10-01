import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlainPageLayoutPage } from './plain-page-layout.page';

const routes: Routes = [
  {
    path: '',
    component: PlainPageLayoutPage,
    children: [
      {
        path: 'landing',
        loadChildren: () => import('../../pages/landing/landing.module').then(m => m.LandingPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlainPageLayoutPageRoutingModule {}
