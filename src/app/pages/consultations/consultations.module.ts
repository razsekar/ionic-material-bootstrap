import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { ModalModule } from 'ngx-bootstrap/modal';
import { IonicModule } from '@ionic/angular';
import { ConsultationsPageRoutingModule } from './consultations-routing.module';
import { ConsultationsPage } from './consultations.page';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { ConsultationsFilterPipe } from './consultations-filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccordionModule.forRoot(),
    ModalModule.forRoot(),
    ConsultationsPageRoutingModule,
    MatProgressBarModule
  ],
  declarations: [ConsultationsPage, ConsultationsFilterPipe]
})
export class ConsultationsPageModule {}
