import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-btn-com-load',
  templateUrl: './btn-com-load.component.html',
  styleUrls: ['./btn-com-load.component.scss']
})
export class BtnComLoadComponent  implements OnInit {
   
   constructor() { }
   
   @Output() clickEvent: EventEmitter<any> = new EventEmitter();
   @Input() disabled = false;  
   @Input() loading: boolean | undefined;
   @Input() textIdle: string | undefined;
   @Input() textLoad: string | undefined; 
   @Input() tooltip: string | undefined;
   
     ngOnInit(): void {
     }
   
     clickHandle()
     {
       this.clickEvent.emit();
     }
   
   }