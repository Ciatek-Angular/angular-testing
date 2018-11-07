import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseComponent } from './exercise.component';

describe('ExerciseComponent', () => {
  let component: ExerciseComponent;
  let fixture: ComponentFixture<ExerciseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExerciseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // ************************ Start Exercises *****************************

  it('should add the 2 numbers',() => {
    const x = 10
    const y = 20
    let result = component.add(x,y)
    expect(result).toBe(30)
  })

  it('should subtract the 2 numbers',() => {
    const x = 50
    const y = 15
    let result = component.subtract(x,y)
    expect(result).toBe(35)
  })
  
  it('should multiply the 3 numbers',() => {
    const x = 120
    const y = 150
    const z = 23
    let result = component.multiply(x,y,z)
    expect(result).toBe(414000)
  })
  
  it('should divide the 2 numbers',() => {
    const x = 2000
    const y = 20
    let result = component.divide(x,y)
    expect(result).toBe(100)
  })

  it('should return array', () => {
    let numbers = [1,2,3,4,5,6,7,8,9]
    let result = component.removeLastItemInArray(numbers)
    expect(result).toEqual([1,2,3,4,5,6,7,8])
  })
  
  it('should return ahmad', () => {
    let path = '/home/ahmad'
    let result = component.removeSlashes(path)
    expect(result).toBe('ahmad')
  })

  it('should return array and remove one item', () => {
    let vegetables = ['potato','tomato','olive','lettuce']
    let result = component.removeItemFromArray(vegetables)
    expect(result).toEqual(['potato','tomato','lettuce'])
  })
  
  it('should return array and add two items', () => {
    let vegetables = ['potato','tomato','olive','lettuce']
    let result = component.addItemsToArray(vegetables)
    expect(result).toEqual(['potato','tomato','cucumber','carrot','olive','lettuce'])
  })
  
  it('should return add the 2 strings', () => {
    let message1 = 'I like Angular.'
    let message2 = 'Angular is so powerful.'
    let result = component.add2Messages(message1,message2)
    expect(result).toEqual('I like Angular.Angular is so powerful.')
  })
 
  it('should convert the array to string', () => {
    let fruits = ["Banana", "Orange", "Apple", "Mango"];
    let result = component.convertArrayToString(fruits)
    expect(result).toEqual("Banana,Orange,Apple,Mango")
  })




});
