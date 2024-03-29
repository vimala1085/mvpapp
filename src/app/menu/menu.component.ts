import { Component, OnInit } from '@angular/core';
import {MenuService} from "../services/menuservice";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
 public data:any;
 public model:any;
  constructor(private menuService:MenuService) { }

  ngOnInit() {
    this.data=this.menuService.getMenuData();
  }

}
