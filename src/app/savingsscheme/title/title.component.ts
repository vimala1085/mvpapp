import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {
  @Input()
  public customerName:string;
  constructor() { }

  ngOnInit() {
  }
 public getTitle(): any{
  return this.customerName+'update the customername'; 
  }

}
