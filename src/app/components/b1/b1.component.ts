import { Component } from '@angular/core';
import { CounterServiceService } from '../../services/counter-service.service';
import { B2Component } from '../b2/b2.component';

@Component({
  selector: 'app-b1',
  standalone: true,
  imports: [B2Component],
  providers: [CounterServiceService],    // do not share same instance
  templateUrl: './b1.component.html',
  styleUrl: './b1.component.css'
})
export class B1Component {
  constructor(public CounterServiceService:CounterServiceService){

  }

}
