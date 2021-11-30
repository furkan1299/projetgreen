import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TriDechetsOrganiquesPage } from './tri-dechets-organiques.page';

describe('TriDechetsOrganiquesPage', () => {
  let component: TriDechetsOrganiquesPage;
  let fixture: ComponentFixture<TriDechetsOrganiquesPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TriDechetsOrganiquesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TriDechetsOrganiquesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
