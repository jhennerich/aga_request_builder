import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgaRequests } from './aga-requests';

describe('AgaRequests', () => {
  let component: AgaRequests;
  let fixture: ComponentFixture<AgaRequests>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgaRequests]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgaRequests);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
