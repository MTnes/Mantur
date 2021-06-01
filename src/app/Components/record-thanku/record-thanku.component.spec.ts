import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordThankuComponent } from './record-thanku.component';

describe('RecordThankuComponent', () => {
  let component: RecordThankuComponent;
  let fixture: ComponentFixture<RecordThankuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecordThankuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordThankuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
