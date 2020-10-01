import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { MainHeaderComponent } from './main-header/main-header.component';

@NgModule({
  declarations: [FooterComponent, HeaderComponent, MainHeaderComponent],
  entryComponents: [FooterComponent, HeaderComponent, MainHeaderComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [FooterComponent, HeaderComponent, MainHeaderComponent]
})
export class LayoutComponentsModule { }
