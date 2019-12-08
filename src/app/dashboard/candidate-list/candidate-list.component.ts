import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  candidateId: string;
  name: string;
  domain: string;
  yearOfExperience: string;
  recruiterName: string;
  interviewType: string;
}

@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.sass']
})

export class CandidateListComponent implements OnInit {

  @Input() recruiterList: [];

  displayedColumns: string[] = ['candidateId', 'name', 'domain', 'yearOfExperience', 'recruiterName', 'interviewType'];
  dataSource: MatTableDataSource<PeriodicElement>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor() {
    this.dataSource = new MatTableDataSource<PeriodicElement>();
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.data = this.recruiterList;
  }
}
