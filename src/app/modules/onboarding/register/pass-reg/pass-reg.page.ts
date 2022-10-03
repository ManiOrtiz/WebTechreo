import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pass-reg',
  templateUrl: './pass-reg.page.html',
  styleUrls: ['./pass-reg.page.scss'],
})
export class PassRegPage implements OnInit {

  constructor( private router: Router,) { }

  ngOnInit() {
  }

  ok(){
    this.router.navigateByUrl('/start/elements/prevention');
  }

  contact(){
    this.router.navigateByUrl('/start/login');
  }
}
