import { CommonModule } from '@angular/common';
import { Component,EventEmitter,Input, numberAttribute, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AgePipe } from '../../pipes/age.pipe';

function formatname(value:string){
  return "Hi " + value
}

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [FormsModule,CommonModule,AgePipe],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
  //  name = "Hammad"
  //  age = 0
  //  users = [
  //   {name:"Hammad",age:22},
  //   {name:"Zohaib",age:23},
  //   {name:"Moeed",age:21}
  //  ];

  //  isdisabled = true
  //  onChange(e:Event){
  //   const value = (e.target as HTMLInputElement).value
  //   console.log(value)
  //   this.name = value
  //  }

  //input decorator
  @Input({alias : "user",transform:formatname}) name = "";
  @Input({transform:numberAttribute}) age!: number  // deals at runtime

  //output decorator
  @Output() myevent = new EventEmitter()
  send_data(){
    this.myevent.emit("Output decoration : Child to parent")
  }
}
