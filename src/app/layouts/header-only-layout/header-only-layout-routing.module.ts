import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderOnlyLayoutPage } from './header-only-layout.page';

const routes: Routes = [
  {
    path: 'user',
    component: HeaderOnlyLayoutPage,
    children: [
      {
        path: 'login',
        loadChildren: () => import('../../pages/login/login.module').then(m => m.LoginPageModule)
      },
      {
        path: 'forgot-password',
        loadChildren: () => import('../../pages/forgot-password/forgot-password.module').then(m => m.ForgotPasswordPageModule)
      },
      {
        path: 'register',
        loadChildren: () => import('../../pages/registration/registration.module').then( m => m.RegistrationPageModule)
      },
      {
        path: 'help',
        loadChildren: () => import('../../pages/help/help.module').then( m => m.HelpPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeaderOnlyLayoutPageRoutingModule {}
