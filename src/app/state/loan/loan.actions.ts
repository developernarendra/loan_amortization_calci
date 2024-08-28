import { createAction, props } from '@ngrx/store';

export const setLoanDetails = createAction(
  '[Loan] Set Loan Details',
  props<{ loanAmount: number; interestRate: number; termYears: number; startDate: Date }>()
);

export const calculateAmortization = createAction('[Loan] Calculate Amortization');
