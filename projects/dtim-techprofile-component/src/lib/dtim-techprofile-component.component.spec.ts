import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DtimTechprofileComponentComponent } from './dtim-techprofile-component.component';

describe('DtimTechprofileComponentComponent', () => {
  let component: DtimTechprofileComponentComponent;
  let fixture: ComponentFixture<DtimTechprofileComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DtimTechprofileComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DtimTechprofileComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
