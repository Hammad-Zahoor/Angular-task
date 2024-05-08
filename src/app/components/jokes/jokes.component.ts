import { Component } from '@angular/core';
import { JokesService } from '../../services/jokes.service';

@Component({
  selector: 'app-jokes',
  standalone: true,
  imports: [],
  templateUrl: './jokes.component.html',
  styleUrl: './jokes.component.css'
})
export class JokesComponent {
  joke = "loading"
  constructor(private JokesService:JokesService){}  
  ngOnInit(){
     this.JokesService.getjoke().subscribe((data:any)=>{
      this.joke = data.value
     })   
    }

    get_another(){
      this.JokesService.getjoke().subscribe({
        next:(data:any) => this.joke = data.value
        ,error:(error) => console.log(error)   // just like try and catch
      })
    }
}
