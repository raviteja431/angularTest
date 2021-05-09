import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerwelcomeComponent } from './beerwelcome.component';

describe('BeerwelcomeComponent', () => {
  let component: BeerwelcomeComponent;
  let fixture: ComponentFixture<BeerwelcomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerwelcomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerwelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
