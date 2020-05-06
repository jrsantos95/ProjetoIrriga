import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DefinicoesPage } from './definicoes.page';

describe('DefinicoesPage', () => {
  let component: DefinicoesPage;
  let fixture: ComponentFixture<DefinicoesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefinicoesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DefinicoesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
