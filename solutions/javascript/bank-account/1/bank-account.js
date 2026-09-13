//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
  constructor() {
    this._open = false;
    this._balance = 0;
  }

  open() {
    if (this._open) {
      throw new ValueError();
    }
    this._open = true;
    this._balance = 0;
  }

  close() {
    if (!this._open) {
      throw new ValueError();
    }
    this._open = false;
  }

  deposit(amount) {
    if (!this._open || amount < 0) {
      throw new ValueError();
    }
    this._balance += amount;
  }

  withdraw(amount) {
    if (!this._open || amount < 0 || amount > this._balance) {
      throw new ValueError();
    }
    this._balance -= amount;
  }

  get balance() {
    if (!this._open) {
      throw new ValueError();
    }
    return this._balance;
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}
