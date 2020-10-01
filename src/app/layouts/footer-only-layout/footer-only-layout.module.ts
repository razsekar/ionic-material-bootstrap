import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FooterOnlyLayoutPageRoutingModule } from './footer-only-layout-routing.module';

import { FooterOnlyLayoutPage } from './footer-only-layout.page';
import { LayoutComponentsModule } from 'src/app/common-components/layout-components/layout-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FooterOnlyLayoutPageRoutingModule,
    LayoutComponentsModule
  ],
  declarations: [FooterOnlyLayoutPage]
})
export class FooterOnlyLayoutPageModule {}
