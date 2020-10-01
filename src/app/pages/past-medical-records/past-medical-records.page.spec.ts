import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PastMedicalRecordsPage } from './past-medical-records.page';

describe('PastMedicalRecordsPage', () => {
  let component: PastMedicalRecordsPage;
  let fixture: ComponentFixture<PastMedicalRecordsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastMedicalRecordsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PastMedicalRecordsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
