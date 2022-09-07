import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListbyGroupComponent } from './listby-group.component';

describe('ListbyGroupComponent', () => {
  let component: ListbyGroupComponent;
  let fixture: ComponentFixture<ListbyGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListbyGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListbyGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
