import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PlainPageLayoutPage } from './plain-page-layout.page';

describe('PlainPageLayoutPage', () => {
  let component: PlainPageLayoutPage;
  let fixture: ComponentFixture<PlainPageLayoutPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlainPageLayoutPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PlainPageLayoutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
