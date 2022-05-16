import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestPersoComponent } from './test-perso.component';

describe('TestPersoComponent', () => {
  let component: TestPersoComponent;
  let fixture: ComponentFixture<TestPersoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestPersoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestPersoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
