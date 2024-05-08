import { Injectable , Signal, computed, effect, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterServiceService {
  private count = signal(0)   // signal

  doubleCount: Signal<number> = computed(() => this.count() * 2)  // read only and alsways have double the value of count

  constructor() { 
    effect(()=>{
      console.log("count : ",this.count())   //for debugging purpose
    })
      
    
  }
  getcounter(){
    return this.count()
  }
  increment_counter(){
    // this.count.set(this.count() + 1)
    this.count.update((oldvalue)=>{
      return oldvalue + 1
    })
  }
}
