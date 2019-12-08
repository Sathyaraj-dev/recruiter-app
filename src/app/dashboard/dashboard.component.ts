import { Component, OnInit } from '@angular/core';
import { RecruiterService } from '../services/recruiter.service';

export interface candidateElement {
  candidateId: string;
  name: string;
  domain: string;
  yearOfExperience: string;
  recruiterName: string;
  interviewType: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})

export class DashboardComponent implements OnInit {

  recruiterData: candidateElement[] = [];
  groupByDomain = [];

  constructor(private recruiterService: RecruiterService) {
  }

  ngOnInit() {
    this.recruiterData = this.recruiterService.responseData.data;
    const groupByDomain = this.groupBy(this.recruiterData, 'domain');
    this.groupByDomain = Object.entries(groupByDomain).map((e) => ({ key: [e[0]], value: e[1] }));
  }

  // method to group the domain
  groupBy(array, key) {
    const keyFn = key instanceof Function ? key : (obj) => obj[key];
    return array.reduce((objectsByKeyValue, obj) => {
      const value = keyFn(obj);
      objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
      return objectsByKeyValue;
    }, {});
  }

}
