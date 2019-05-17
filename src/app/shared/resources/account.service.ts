import {Injectable} from '@angular/core';
import {ResourceBase} from '@app/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AccountService extends ResourceBase {
  constructor(http: HttpClient) {
    super(http);
  }

  GetAccount(accountNr: string): Observable<Account> {
    return this.get(`/accounts/${accountNr}`)
      .pipe(
      map((result: any) => {
        if (result) {
          return result as Account;
        }
      }),
      catchError((error: any) => of<Account>(null))
    );
  }
}
