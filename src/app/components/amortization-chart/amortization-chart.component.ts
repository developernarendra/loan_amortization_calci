import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-amortization-chart',
  standalone:true,
  templateUrl: './amortization-chart.component.html',
  styleUrls: ['./amortization-chart.component.css']
})
export class AmortizationChartComponent implements OnChanges {
  @Input() schedule: any[] = []; // Initialize with an empty array
  chart: any;

  constructor() {
    Chart.register(...registerables);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['schedule']) {
      this.updateChart();
    }
  }

  private updateChart() {
    if (!this.schedule || this.schedule.length === 0) {
      return; // No data to display
    }

    const months = this.schedule.map(item => `Month ${item.month}`);
    const principal = this.schedule.map(item => item.principal);
    const interest = this.schedule.map(item => item.interest);

    if (this.chart) {
      this.chart.destroy();
    }

    this.chart = new Chart('chartCanvas', {
      type: 'line',
      data: {
        labels: months,
        datasets: [
          {
            label: 'Principal',
            data: principal,
            borderColor: 'blue',
            backgroundColor: 'transparent'
          },
          {
            label: 'Interest',
            data: interest,
            borderColor: 'red',
            backgroundColor: 'transparent'
          }
        ]
      },
      options: {
        responsive: true,
        scales: {
          x: {
            title: {
              display: true,
              text: 'Month'
            }
          },
          y: {
            title: {
              display: true,
              text: 'Amount'
            }
          }
        }
      }
    });
  }
}
