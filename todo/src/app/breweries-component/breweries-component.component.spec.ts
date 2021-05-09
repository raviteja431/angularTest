import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreweriesComponentComponent } from './breweries-component.component';

describe('BreweriesComponentComponent', () => {
  let component: BreweriesComponentComponent;
  let fixture: ComponentFixture<BreweriesComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreweriesComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreweriesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
