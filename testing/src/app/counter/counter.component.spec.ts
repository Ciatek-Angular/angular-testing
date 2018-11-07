import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  // --increment test
  it('should increment', () => {
    let number = 0
    let newNumber = component.increment(number)
    expect(newNumber).toBe(1)
  })

  // --decrement test
  it('should decrement', () => {
    let number = 10
    let newNumber = component.decrement(number)
    expect(newNumber).toBe(9)
  })

  // --skip test
  xit('should be skipped', ()=> {
    let message = 'I m skipped'
    expect(message).toBe( 'I m ')
  })

  // --array test
  it('array should contain sami', () => {
    let array = ['sami', 'rami', 'nami']
    expect(array).toContain('sami')
  })

  // spies test
  it('spies should have been called', () => {
    let person = {
      getName(){
        return 'ahmad'
      }
    }
    spyOn(person, 'getName')
    person.getName()
    expect(person.getName).toHaveBeenCalled()
  })



});
