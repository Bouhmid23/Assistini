import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDevComponent } from './liste-dev.component';

describe('ListeDevComponent', () => {
  let component: ListeDevComponent;
  let fixture: ComponentFixture<ListeDevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeDevComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
