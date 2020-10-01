import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FooterOnlyLayoutPage } from './footer-only-layout.page';

describe('FooterOnlyLayoutPage', () => {
  let component: FooterOnlyLayoutPage;
  let fixture: ComponentFixture<FooterOnlyLayoutPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterOnlyLayoutPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FooterOnlyLayoutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
