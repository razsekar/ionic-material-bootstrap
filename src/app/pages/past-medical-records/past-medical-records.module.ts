import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PastMedicalRecordsPageRoutingModule } from './past-medical-records-routing.module';

import { PastMedicalRecordsPage } from './past-medical-records.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PastMedicalRecordsPageRoutingModule
  ],
  declarations: [PastMedicalRecordsPage]
})
export class PastMedicalRecordsPageModule {}
