import { Injectable } from '@angular/core';
import { environment as env } from '../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
//import { DateUtil as util } from '../utils/date.util';
import { trimObjectSpaces } from '../utils/trim.util';
import * as moment from 'moment-mini-ts'

@Injectable({
  providedIn: 'root'
}) 
export class CommonService {

  constructor(private http: HttpClient) { 
    //console.log(env)
  }

  public loginWithEmail(params){
    return this.http.post(
      `${env.doctorAppApi}/services/clinics/loginWithEmail`,
        trimObjectSpaces({
          "organization":"100001", //TODO: Dynamic Organization and Tenant
          "tenant":"1000001",
          "language":"eng",
          "email_id": params.email,
          "password": params.password,
          "source_type":"Doctor App"
       })
    );
  }

  public getHomeCounts() {
    return this.http.post(
      `${env.doctorAppApi}/services/clinics/getDashboardCountsData`,
        trimObjectSpaces({
          "doctorId": "843039", //TODO: Dynamic Doctor ID
          "isComplaintList": "0",
          "isLabTest": "0",
          "isRadilologyTest": "0",
          "isPrescription": "0",
          "status": 2
        })
    );
  }

  public getConsultations(params) {
    return this.http.post(
      `${env.doctorAppApi}/services/clinics/getDoctorConsultationDetails`,
        trimObjectSpaces(params)
    );
  }
}
