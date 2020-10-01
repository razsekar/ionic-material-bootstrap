import { Component, OnInit, TemplateRef } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Router, ActivatedRoute } from '@angular/router';
import * as moment from 'moment-mini-ts'

@Component({
  selector: 'app-consultations',
  templateUrl: './consultations.page.html',
  styleUrls: ['./consultations.page.scss'],
})
export class ConsultationsPage implements OnInit {
  oneAtATime: boolean = true;
  consultations: any = []
  modalRef: BsModalRef;
  config = {
    animated: true
  };
  loading: boolean = true
  page: String = ''
  constructor(
    private commonService: CommonService, 
    public router: Router,
    public activatedRoute: ActivatedRoute,
    private modalService: BsModalService) { }

  ngOnInit() {
    this.getConsultations();
    this.page = this.activatedRoute.snapshot.queryParams.type
    console.log(this.page)
  }

  /* ngOnChanges(){
    this.page = this.activatedRoute.snapshot.queryParams.type
    console.log(this.page)
  } */

  getConsultations(){
    let params = {
      "doctorId":"843039",
      "from_date": moment().add(-30, 'days').format('YYYY-MM-DD'), //"2020-05-31",
      "to_date": moment().format('YYYY-MM-DD'), //"2020-07-12",
      "dateFilterType":"scheduled_date",
      "status": 1
    }

    if(this.page === 'Scheduled')
      params.status = 1 

    if(this.page === 'Total')
      delete params.status

    if(this.page === 'Missed')
    {
      params.to_date = moment().add(-1, 'days').format('YYYY-MM-DD')
    }

    console.log(params)

    this.commonService.getConsultations(params).subscribe( (response: any) => {
      if(response.status === 1){
        this.consultations = response.result;
        console.log(this.consultations)
      }
    });
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: 'gray modal-lg customBottomModal' })
    );
  }
}
