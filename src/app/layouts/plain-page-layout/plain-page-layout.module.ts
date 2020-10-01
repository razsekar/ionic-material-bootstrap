import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlainPageLayoutPageRoutingModule } from './plain-page-layout-routing.module';

import { PlainPageLayoutPage } from './plain-page-layout.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlainPageLayoutPageRoutingModule
  ],
  declarations: [PlainPageLayoutPage]
})
export class PlainPageLayoutPageModule {}
