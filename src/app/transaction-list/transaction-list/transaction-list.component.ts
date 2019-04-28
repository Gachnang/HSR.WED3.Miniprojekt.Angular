import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'wed-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent implements OnInit {

  @Input() showFilter = true;
  @Input() title = 'Konto Bewegungen';

  constructor() { }

  ngOnInit() {
  }

}
