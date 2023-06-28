import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { RecordatoriosPage } from './recordatorios.page';
import { RecordatoriosService } from '../services/recordatorios.service';

describe('RecordatoriosPage', () => {
  let component: RecordatoriosPage;
  let fixture: ComponentFixture<RecordatoriosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RecordatoriosPage],
      imports: [IonicModule.forRoot(), HttpClientTestingModule],
      providers: [LocalNotifications, RecordatoriosService]
    }).compileComponents();

    fixture = TestBed.createComponent(RecordatoriosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
