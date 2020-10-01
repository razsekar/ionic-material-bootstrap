import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageLayoutPage } from './main-page-layout.page';

const routes: Routes = [
  {
    path: 'page',
    component: MainPageLayoutPage,
    children: [
      {
        path: 'my-appointments',
        loadChildren: () => import('../../pages/my-appointments/my-appointments.module').then(m => m.MyAppointmentsPageModule)
      },
      {
        path: 'consultations',
        loadChildren: () => import('../../pages/consultations/consultations.module').then( m => m.ConsultationsPageModule)
      },
      {
        path: 'packages',
        loadChildren: () => import('../../pages/packages/packages.module').then( m => m.PackagesPageModule)
      },
      {
        path: 'notifications',
        loadChildren: () => import('../../pages/notifications/notifications.module').then( m => m.NotificationsPageModule)
      },
      {
        path: 'consultation',
        loadChildren: () => import('../../pages/consultation/consultation.module').then( m => m.ConsultationPageModule)
      },
      {
        path: 'chat',
        loadChildren: () => import('../../pages/chat/chat.module').then( m => m.ChatPageModule)
      },
      {
        path: 'past-medical-records',
        loadChildren: () => import('../../pages/past-medical-records/past-medical-records.module').then( m => m.PastMedicalRecordsPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageLayoutPageRoutingModule {}
