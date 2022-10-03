import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-person',
  templateUrl: './info-person.page.html',
  styleUrls: ['./info-person.page.scss'],
})
export class InfoPersonPage implements OnInit {

  t:boolean =true

  constructor() { }

  ngOnInit() {
  }

  ok(){

  }

  back(){

  }

  onClick(){
    this.t = false
  }

}
