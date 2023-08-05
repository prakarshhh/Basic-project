import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component {
  @Output() sendmsg = new EventEmitter<string>();
  process(text:any)
  {
    this.sendmsg.emit(text)
  }

  
}
