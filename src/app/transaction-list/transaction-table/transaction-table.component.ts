import {Component, Input, OnInit} from '@angular/core';
import {Transaction} from '../../shared/models/transaction';

@Component({
  selector: 'wed-transaction-table',
  templateUrl: './transaction-table.component.html',
  styleUrls: ['./transaction-table.component.scss']
})
export class TransactionTableComponent implements OnInit {
  public transactions: Transaction[] = [];

  @Input() includeDate: boolean;

  constructor() {
  }

  ngOnInit() {
  }
}
