import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecializacionesComponent } from './especializaciones.component';

describe('EspecializacionesComponent', () => {
  let component: EspecializacionesComponent;
  let fixture: ComponentFixture<EspecializacionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EspecializacionesComponent]
    });
    fixture = TestBed.createComponent(EspecializacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
