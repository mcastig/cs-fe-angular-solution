import { Component, OnInit } from '@angular/core';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-recent-transactions',
  templateUrl: './recent-transactions.component.html',
  styleUrls: ['./recent-transactions.component.css']
})
export class RecentTransactionsComponent implements OnInit {
  faBriefCase = faBriefcase;

  constructor() { }

  ngOnInit(): void {
  }

}
