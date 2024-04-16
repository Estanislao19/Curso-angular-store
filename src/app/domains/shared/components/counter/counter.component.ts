import { Component, Input, SimpleChange, signal } from '@angular/core';
import { setInterval } from 'timers/promises';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
@Input({required: true}) duration=0;
@Input({required: true}) message='';
counter = signal(0)
counterRef: number | undefined

constructor () {
  //NO ASYNC
  // before render
  console.log('constructor');
  console.log('-'.repeat(10));
}

 ngOnChanges(changes: SimpleChange) {//se ejecuta antes del render y durante
  console.log('ngOnChanges');
  console.log('-'.repeat(10));
  console.log(changes);
  const duration = (changes as { [key: string]: any })['duration'];
  if(duration && duration.currentValue !== duration.previousValue) {
    this.doSomething();
  }
 }

 ngOnInit() {
  console.log('ngOnInit');
  console.log('-'.repeat(10));
  console.log('duration => ', this.duration);
  console.log('message => ', this.message);
  this.counterRef = window.setInterval(()=> {
    console.log('run interval');
    this.counter.update(statePrev => statePrev + 1)
  },1000)
 }

 ngAfterViewInit() {
  //after render
  //hijos ya fueron renderizados
  console.log('ngAfterViewInit');
  console.log('-'.repeat(10));
 }

 ngOnDestroy() {
  console.log('ngOnDestroy');
  console.log('-'.repeat(10));
  if (typeof window !== 'undefined') {
    // Código que depende de window
    window.clearInterval(this.counterRef)
  }

 }

 doSomething() {
  console.log('change duraiton');
  //async
 }

}
