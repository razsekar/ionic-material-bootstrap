import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
  }

  goLogin(){
    this.router.navigate(['/user/login'])
  }

  goRegister(){
    this.router.navigate(['/user/register'])
  }
}
