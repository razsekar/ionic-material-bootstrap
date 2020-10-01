import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HeaderOnlyLayoutPage } from './header-only-layout.page';

describe('HeaderOnlyLayoutPage', () => {
  let component: HeaderOnlyLayoutPage;
  let fixture: ComponentFixture<HeaderOnlyLayoutPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderOnlyLayoutPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderOnlyLayoutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
