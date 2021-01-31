import { Component, OnInit } from '@angular/core';
import { faSyncAlt, faBriefcase } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-make-a-transfer',
  templateUrl: './make-a-transfer.component.html',
  styleUrls: ['./make-a-transfer.component.css']
})
export class MakeATransferComponent implements OnInit {
  faSyncAlt = faSyncAlt;
  faBriefCase = faBriefcase;

  constructor() { }

  ngOnInit(): void {
  }

}
