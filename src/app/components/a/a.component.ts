import { Component } from '@angular/core';
import { CounterServiceService } from '../../services/counter-service.service';

@Component({
  selector: 'app-a',
  standalone: true,
  imports: [],
  templateUrl: './a.component.html',
  styleUrl: './a.component.css'
})
export class AComponent {
   constructor(public CounterServiceService:CounterServiceService){

   }

  //  getcoutnt(){
  //      return this.CounterServiceService.getcounter()
  //  }
}
