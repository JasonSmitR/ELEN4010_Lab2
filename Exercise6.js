'use strict'

let account = {
  accountHolder: '',
  balance: 0,
  deposit: function (amount) {
    this.balance = this.balance + amount
    this.runningDeposits = this.runningDeposits + amount
  },
  withdraw: function (amount) {
    if (amount <= this.balance) {
      this.balance = this.balance - amount
      this.runningWithdrawls = this.runningWithdrawls + amount
    } else {
      console.log(`Insufficient funds withdrawl of R${amount} rejected`)
    }
  },
  summary: function () {
    console.log(`This account has a balance of R${this.balance}. There have been deposits totalling R${this.runningDeposits} and withdrawals totalling R${this.runningWithdrawls}.”`)
  },
  // this is not good coding practise, perhaps a proper journal is appropriate here
  runningDeposits: 0,
  runningWithdrawls: 0 // should be reset every month
}

let Customer = account
Customer.accountHolder = 'John' // opens a new account

Customer.deposit(500)
Customer.withdraw(200)
Customer.withdraw(400)
Customer.deposit(5000)
Customer.withdraw(1000)

Customer.summary()
