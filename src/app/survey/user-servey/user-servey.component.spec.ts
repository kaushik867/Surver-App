import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserServeyComponent } from './user-servey.component';

describe('UserServeyComponent', () => {
  let component: UserServeyComponent;
  let fixture: ComponentFixture<UserServeyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserServeyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserServeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
