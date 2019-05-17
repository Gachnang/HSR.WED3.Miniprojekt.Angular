export interface Account {
  accountNr: string;
  amount?: number;
  owner: { accountNr: string, firstname: string, lastname: string, login?: string };
}
