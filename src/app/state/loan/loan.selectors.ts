import { createSelector, createFeatureSelector } from '@ngrx/store';
import { LoanState } from './loan.reducer';

export const selectLoanState = createFeatureSelector<LoanState>('loan');

export const selectAmortizationSchedule = createSelector(
  selectLoanState,
  (state: LoanState) => state.amortizationSchedule
);
