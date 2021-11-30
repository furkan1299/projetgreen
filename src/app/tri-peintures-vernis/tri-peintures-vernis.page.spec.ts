import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TriPeinturesVernisPage } from './tri-peintures-vernis.page';

describe('TriPeinturesVernisPage', () => {
  let component: TriPeinturesVernisPage;
  let fixture: ComponentFixture<TriPeinturesVernisPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TriPeinturesVernisPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TriPeinturesVernisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
