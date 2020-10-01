import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/landing',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./layouts/header-only-layout/header-only-layout.module').then(m => m.HeaderOnlyLayoutPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./layouts/footer-only-layout/footer-only-layout.module').then(m => m.FooterOnlyLayoutPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./layouts/main-page-layout/main-page-layout.module').then(m => m.MainPageLayoutPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./layouts/plain-page-layout/plain-page-layout.module').then(m => m.PlainPageLayoutPageModule)
  },
  {
    path: 'past-medical-records',
    loadChildren: () => import('./pages/past-medical-records/past-medical-records.module').then( m => m.PastMedicalRecordsPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules },),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
