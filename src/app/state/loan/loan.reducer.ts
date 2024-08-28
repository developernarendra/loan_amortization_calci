import { createReducer, on } from '@ngrx/store';
import { setLoanDetails, calculateAmortization } from './loan.actions';
import { LoanCalculationService } from '../../services/loan-calculation.service';

export interface LoanState {
  loanAmount: number;
  interestRate: number;
  termYears: number;
  amortizationSchedule: any[];
}

const initialState: LoanState = {
  loanAmount: 0,
  interestRate: 0,
  termYears: 0,
  amortizationSchedule: []
};

export const loanReducer = createReducer(
  initialState,
  on(setLoanDetails, (state, { loanAmount, interestRate, termYears }) => ({
    ...state,
    loanAmount,
    interestRate,
    termYears
  })),
  on(calculateAmortization, (state) => {
    const amortizationSchedule = new LoanCalculationService().generateAmortizationSchedule(
      state.loanAmount,
      state.interestRate,
      state.termYears
    );
    return { ...state, amortizationSchedule };
  })
);
