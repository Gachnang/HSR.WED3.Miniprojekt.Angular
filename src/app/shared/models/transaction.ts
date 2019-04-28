export type AccountNr = string;

export class Transaction {
  constructor(public from: AccountNr,
              public target: AccountNr,
              public amount: number,
              public total: number,
              public date: string) {
  }

  public static fromDto(data: any): Transaction {
    return new Transaction(data.from, data.target, data.amount, data.total, data.date);
  }

  toDto(): any {
    return {
      from: this.from,
      target: this.target,
      amount: this.amount,
      total: this.total,
      date: this.date
    };
  }
}
