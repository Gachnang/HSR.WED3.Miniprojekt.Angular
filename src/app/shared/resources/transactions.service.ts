import {Injectable} from '@angular/core';
import {ResourceBase} from '@app/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {Transaction} from '../models/transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService extends ResourceBase {
  constructor(http: HttpClient) {
    super(http);
  }

  private lastTransactionsSubscriber: ((transactions: Transaction[]) => void)[] = [];
  private lastTransactionsValue: Transaction[] = [];

  public subscribeLastTransactions(subscriber: (transactions: Transaction[]) => void): (() => void) {
    const self = this;

    this.lastTransactionsSubscriber.push(subscriber);
    if (self.lastTransactionsValue.length === 0) {
      self.updateLastTransactions();
    } else {
      subscriber(self.lastTransactionsValue);
    }

    return () => {
      self.lastTransactionsSubscriber = self.lastTransactionsSubscriber.filter(s => s === subscriber);
    };
  }

  public updateLastTransactions(count: number = 3) {
    const self = this;

    this.get(`/accounts/transactions?count=${count}`)
      .pipe(
        map((result: any) => {
          if (result) {
            return (result.result as Array<any>).map(value => Transaction.fromDto(value));
          }
          return [];
        }),
        catchError((error: any) => of<Transaction[]>(null))
      ).toPromise().then((result: Transaction[]) => {
        self.lastTransactionsValue = result;
        self.lastTransactionsSubscriber.forEach(subscriber => subscriber(result));
    });
  }

  public getTransactions(
    fromDate: string = '',
    toDate: string = '',
    count: number = 3,
    skip: number = 0
  ): Observable<Transaction[]> {
    return this.get(`/accounts/transactions?fromDate=${fromDate}&toDate=${toDate}&count=${count}&skip=${skip}`)
      .pipe(
        map((result: any) => {
          if (result) {
            return (result.result as Array<any>).map(value => Transaction.fromDto(value));
          }
          return [];
        }),
        catchError((error: any) => of<Transaction[]>(null))
      );
  }

  public transfer(
    target: string,
    amount: number
  ): Observable<Transaction> {
    const self = this;

    return this.post('/accounts/transactions', {
      target,
      amount
    }).pipe(
      map((result: any) => {
        if (result) {
          self.updateLastTransactions();
          return Transaction.fromDto(result);
        }
      }),
      catchError((error: any) => of<Transaction>(null))
    );
  }
}
