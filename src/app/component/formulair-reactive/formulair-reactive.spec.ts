import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormulairReactive } from './formulair-reactive';

describe('FormulairReactive', () => {
  let component: FormulairReactive;
  let fixture: ComponentFixture<FormulairReactive>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormulairReactive],
    }).compileComponents();

    fixture = TestBed.createComponent(FormulairReactive);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
