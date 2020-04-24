import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StayactivePage } from './stayactive.page';

describe('StayactivePage', () => {
  let component: StayactivePage;
  let fixture: ComponentFixture<StayactivePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StayactivePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StayactivePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
