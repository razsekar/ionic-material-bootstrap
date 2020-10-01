import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PastMedicalRecordsPage } from './past-medical-records.page';

const routes: Routes = [
  {
    path: '',
    component: PastMedicalRecordsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PastMedicalRecordsPageRoutingModule {}
