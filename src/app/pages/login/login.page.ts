import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  currentView: string = 'login-with-mobile'
  data: any = {}
  loading: boolean = false
  constructor(
    public router: Router,
    private commonService: CommonService
  ) { }

  ngOnInit() {
  }

  handleLogin(){
    console.log(this.data)
    this.loading = true
    this.commonService.loginWithEmail(this.data).subscribe((response: any) => {
      this.loading = false
      console.log(response)
      if(response.status === 'SUCCESS'){
        this.router.navigate(['/home'])
      }
      //
    })
  }

  goHome(){
    this.router.navigate(['/home'])
  }

}
