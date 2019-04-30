import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'wed-transaction-filter',
  templateUrl: './transaction-filter.component.html',
  styleUrls: ['./transaction-filter.component.scss']
})
export class TransactionFilterComponent implements OnInit {
  public currentYear: number;
  public currentMonth: number;

  public years = [];
  public months = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli',
    'August', 'September', 'Oktober', 'November', 'Dezember'];

  @Output()
  public yearChanged = new EventEmitter<number>();

  @Output()
  public monthChanged = new EventEmitter<number>();

  constructor() {
    const date = new Date();
    this.currentYear = date.getFullYear();
    this.currentMonth = date.getMonth();
    this.years = [this.currentYear, this.currentYear - 1, this.currentYear - 2];
  }

  ngOnInit() {
  }
}
