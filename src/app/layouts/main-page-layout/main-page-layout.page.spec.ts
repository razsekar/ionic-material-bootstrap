import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MainPageLayoutPage } from './main-page-layout.page';

describe('MainPageLayoutPage', () => {
  let component: MainPageLayoutPage;
  let fixture: ComponentFixture<MainPageLayoutPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainPageLayoutPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MainPageLayoutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
