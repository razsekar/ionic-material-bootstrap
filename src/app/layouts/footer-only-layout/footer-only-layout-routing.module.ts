import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FooterOnlyLayoutPage } from './footer-only-layout.page';

const routes: Routes = [
  {
    path: 'home',
    component: FooterOnlyLayoutPage,
    children: [
      {
        path: '',
        loadChildren: () => import('../../pages/home/home.module').then(m => m.HomePageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FooterOnlyLayoutPageRoutingModule {}
