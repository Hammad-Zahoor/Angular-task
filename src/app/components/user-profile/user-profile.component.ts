import { CommonModule } from '@angular/common';
import { asNativeElements, Component,ElementRef,EventEmitter,Input, numberAttribute, Output, SimpleChanges, ViewChild, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AgePipe } from '../../pipes/age.pipe';
import { HighlightsDirective } from '../../directives/highlights.directive';
import { JokesComponent } from '../jokes/jokes.component';

function formatname(value:string){
  return "Hi " + value
}

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [FormsModule,CommonModule,AgePipe,HighlightsDirective,JokesComponent],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent{
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

  // bgcolor = "red"

  // constructor(){
  //   // same as ngOnIt but also we cann have dependency injection in it
  //   console.log("constructor",this.bgcolor)
  // }

  // ngOnChange(changes:SimpleChanges) : void{
  //   // when input is changed
  //   console.log("nogonchange")
  // }

  // ngOnInit(){
  //   // same like constructor and call the api's or function one time when page is ready
  //   console.log("ngonit",this.bgcolor)
  // }

  // ngOnDestroy(){
  //   // when a component is destroyed
  //   console.log("element destroyed")
  // }

  // @ViewChild("senddatabtn") btn1?: ElementRef;
  // ngAfterViewInit(){
  //   let btn = this.btn1?.nativeElement as HTMLButtonElement;
  //   btn.style.backgroundColor = "yellow"
  // }
  // //btn1.style.backgroundColor = "yellow"

  // clear(){
  //   this.bgcolor = ""
  // }

  // //input decorator
  // @Input({alias : "user",transform:formatname}) name = "";
  // @Input({transform:numberAttribute}) age!: number  // deals at runtime

  // //output decorator
  // @Output() myevent = new EventEmitter()
  // send_data(){
  //   this.myevent.emit("Output decoration : Child to parent")
  // }
}
