import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MainPageLayoutPageRoutingModule } from './main-page-layout-routing.module';
import { MainPageLayoutPage } from './main-page-layout.page';
import { LayoutComponentsModule } from 'src/app/common-components/layout-components/layout-components.module';
import { CommonService } from 'src/app/services/common.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainPageLayoutPageRoutingModule,
    LayoutComponentsModule,
    HttpClientModule
  ],
  providers: [CommonService],
  declarations: [MainPageLayoutPage]
})
export class MainPageLayoutPageModule {}
