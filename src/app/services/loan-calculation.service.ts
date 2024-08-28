import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoanCalculationService {
  calculateMonthlyPayment(loanAmount: number, annualInterestRate: number, termYears: number): number {
    const monthlyInterestRate = annualInterestRate / 100 / 12;
    const numberOfPayments = termYears * 12;
    return (loanAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
  }

  generateAmortizationSchedule(loanAmount: number, annualInterestRate: number, termYears: number): any[] {
    const monthlyPayment = this.calculateMonthlyPayment(loanAmount, annualInterestRate, termYears);
    const numberOfPayments = termYears * 12;
    const schedule = [];
    let balance = loanAmount;

    for (let i = 1; i <= numberOfPayments; i++) {
      const monthlyInterest = balance * (annualInterestRate / 100 / 12);
      const principalPayment = monthlyPayment - monthlyInterest;
      balance -= principalPayment;

      schedule.push({
        month: i,
        payment: monthlyPayment,
        principal: principalPayment,
        interest: monthlyInterest,
        balance: Math.max(balance, 0) // Ensure balance does not go negative
      });
    }

    return schedule;
  }
}
