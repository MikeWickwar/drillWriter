import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetManagementComponent } from './set-management.component';

describe('SetManagementComponent', () => {
  let component: SetManagementComponent;
  let fixture: ComponentFixture<SetManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetManagementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SetManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
