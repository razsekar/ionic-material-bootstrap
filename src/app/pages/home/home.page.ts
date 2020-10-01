import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { Router } from '@angular/router';
//import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  private dashboardCounts: any = {};

  constructor(
    private commonService: CommonService,
    public router: Router
    ) { }

  ngOnInit() {
    this.getDashboardCounts();
  }

  getDashboardCounts(){
    this.commonService.getHomeCounts().subscribe( (response: any) => {
      if(response.status === 1){
        this.dashboardCounts = response.data;
      }
    });
  }

  navigateTo(type){
    console.log(`${type} Consultations`)
    this.router.navigate(['/page/consultations'], { queryParams: { type: type } })
  }
}
