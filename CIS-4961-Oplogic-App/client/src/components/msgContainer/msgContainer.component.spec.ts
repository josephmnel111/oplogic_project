import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgBoxComponent } from './msgContainer.component';

describe('MsgBoxComponent', () => {
  let component: MsgBoxComponent;
  let fixture: ComponentFixture<MsgBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsgBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MsgBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
