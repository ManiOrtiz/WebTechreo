import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.page.html',
  styleUrls: ['./phone.page.scss'],
})
export class PhonePage implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {
  }

  contact(){
    this.router.navigateByUrl('/start/login');
  }

  ok(){
    this.router.navigateByUrl('/start/elements/pass-reg');
  }
}
