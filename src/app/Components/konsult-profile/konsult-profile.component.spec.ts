import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KonsultProfileComponent } from './konsult-profile.component';

describe('KonsultProfileComponent', () => {
  let component: KonsultProfileComponent;
  let fixture: ComponentFixture<KonsultProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KonsultProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KonsultProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
