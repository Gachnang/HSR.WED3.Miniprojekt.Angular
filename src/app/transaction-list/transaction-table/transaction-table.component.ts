import {Component, Input, OnInit} from '@angular/core';
import {Transaction} from '../../shared/models/transaction';
import {TransactionsService} from '../../shared/resources/transactions.service';

@Component({
  selector: 'wed-transaction-table',
  templateUrl: './transaction-table.component.html',
  styleUrls: ['./transaction-table.component.scss']
})
export class TransactionTableComponent implements OnInit {
  public transactions: Transaction[] = [];

  @Input() includeDate: boolean;

  public forYear?: number = undefined;
  public forMonth?: number = undefined;

  constructor(private transactionsResource: TransactionsService) {
  }

  ngOnInit() {
    this.update();
  }

  showYear(year: number) {
    this.forYear = year;
    this.update();
  }

  showMonth(month: number) {
    this.forMonth = month;
    this.update();
  }

  private update() {
    if (this.includeDate && this.forYear && this.forMonth) {
      console.log(this.forYear, this.forMonth);

      const fromDate = new Date(this.forYear, this.forMonth, 1).toISOString();
      // The month will wrap around (13 is January)
      const toDate = new Date(this.forYear, this.forMonth + 1, 1).toISOString();

      console.log(fromDate, toDate);

      this.transactionsResource.getTransactions(fromDate, toDate, Number.MAX_SAFE_INTEGER)
        .subscribe(ts => {
          console.log('ts', ts);
          this.transactions = ts;
          console.log(this.transactions.length);
        });
    } else {
      this.transactionsResource.getTransactions()
        .subscribe(ts => this.transactions = ts);
    }
  }
}
