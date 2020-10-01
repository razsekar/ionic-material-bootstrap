import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HeaderOnlyLayoutPageRoutingModule } from './header-only-layout-routing.module';
import { HeaderOnlyLayoutPage } from './header-only-layout.page';
import { LayoutComponentsModule } from 'src/app/common-components/layout-components/layout-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeaderOnlyLayoutPageRoutingModule,
    LayoutComponentsModule
  ],
  declarations: [HeaderOnlyLayoutPage]
})
export class HeaderOnlyLayoutPageModule {}
