import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnComLoadComponent } from './btn-com-load.component';

describe('BtnComLoadComponent', () => {
  let component: BtnComLoadComponent;
  let fixture: ComponentFixture<BtnComLoadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnComLoadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnComLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
