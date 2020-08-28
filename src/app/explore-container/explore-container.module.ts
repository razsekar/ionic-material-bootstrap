import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponent } from './explore-container.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {
  MatFormFieldModule,
} from '@angular/material/form-field';

import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input'

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule, BsDatepickerModule.forRoot(), MatDatepickerModule,
    MatFormFieldModule, MatNativeDateModule, MatInputModule
    ],
  declarations: [ExploreContainerComponent],
  exports: [ExploreContainerComponent]
})
export class ExploreContainerComponentModule {}
