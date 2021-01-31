import { Component, Injectable, OnInit } from '@angular/core';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { HttpClient } from '@angular/common/http';
import { TRANSACTIONS } from '../mock-transactions';

@Component({
  selector: 'app-recent-transactions',
  templateUrl: './recent-transactions.component.html',
  styleUrls: ['./recent-transactions.component.css']
})
@Injectable()
export class RecentTransactionsComponent implements OnInit {
  faBriefCase = faBriefcase;
  transactions = TRANSACTIONS;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.transactions;
  }

}
