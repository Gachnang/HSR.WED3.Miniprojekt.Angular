import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../auth/services/auth.service';
import {TransactionsService} from '../../../shared/resources/transactions.service';
import {AccountService} from '../../../shared/resources/account.service';
import {Account} from '../../../shared/models/account';
@Component({
  selector: 'wed-transaction-new',
  templateUrl: './transaction-new.component.html',
  styleUrls: ['./transaction-new.component.scss']
})
export class TransactionNewComponent {
  public zuInput = '';
  public zuValid = false;
  public zuMsg = 'Bitte Zielaccount eingeben.';
  public amountInput: number;
  public amountMsg = 'Bitte Betrag eingeben.';

  public showResult = false;

  get amountValid(): boolean {
    return this.amountInput > 0;
  }
  get valid(): boolean {
    return this.zuValid && this.amountValid;
  }

  constructor(private autSvc: AuthService, private transactionsService: TransactionsService, private accountService: AccountService) {
  }

  get von(): string {
    const {firstname, lastname, accountNr} = this.autSvc.authenticatedUser;
    return `${firstname} ${lastname} [${accountNr}]`;
  }

  validateZu(event) {
    const self = this;
    if (self.zuInput === self.autSvc.authenticatedUser.accountNr) {
      self.zuMsg = 'Zahlung an eigener Account nicht möglich.';
    } else {
      self.accountService.GetAccount(this.zuInput).toPromise()
        .then(result => {
          self.zuValid = !!result;
          if (result) {
            const {firstname, lastname} = (result as unknown as Account).owner;
            self.zuMsg = `${firstname} ${lastname}`;
          } else {
            self.zuMsg = 'Account mit dieser Nummer nicht gefunden.';
          }
        })
        .catch(error => {
          self.zuMsg = 'Account mit dieser Nummer nicht gefunden.';
          self.zuValid = false;
        });
    }
  }

  transfer() {
    const self = this;

    if (this.valid) {
      this.transactionsService.transfer(this.zuInput, this.amountInput).toPromise()
        .then(result => self.showResult = true)
        .catch(error => console.log(error));
    }
  }
}
