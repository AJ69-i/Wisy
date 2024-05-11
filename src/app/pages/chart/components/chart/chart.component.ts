import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  ElementRef,
  ViewChild,
  OnDestroy,
} from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnChanges, OnDestroy {
  chart!: any;
  borderColor: string = '';
  timestamps: string[] = [];
  temperatures: number[] = [];
  periodNames: string[] = [];
  @Input() periods: any[] = [];
  @ViewChild('canvas') canvas!: ElementRef<HTMLCanvasElement>;

  constructor(private datePipe: DatePipe) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.timestamps = [];
    this.temperatures = [];
    this.periodNames = [];
    if (
      changes['periods'] &&
      changes['periods'].currentValue &&
      this.periods.length
    ) {
      this.borderColor = this.periods[this.periods.length - 1].color;
      this.periods.pop();
      this.periods.forEach((period: any) => {
        this.timestamps.push(period.startTime);
        this.temperatures.push(period.temperature);
        this.periodNames.push(period.name);
      });

      this.drawChart();
    }
  }

  drawChart(): void {
    let periodnames: string[] = [];
    let ctx = undefined as any; // or null

    this.chart ? this.chart.destroy() : undefined;

    periodnames = this.periodNames;
    ctx = this.canvas.nativeElement;

    this.chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: this.timestamps.map((timestamp) =>
          this.datePipe.transform(timestamp, 'short')
        ), // Format timestamp,
        datasets: [
          {
            data: this.temperatures,
            borderColor: this.borderColor,
            fill: false,
            label: 'Temperature (F)',
          },
        ],
      },
      options: {
        animations: {
          tension: {
            duration: 1000,
            easing: 'linear',
            from: 1,
            to: 0,
            loop: true,
          },
        },
        animation: {
          duration: 2000,
          easing: 'easeOutBounce',
        },
        plugins: {
          title: {
            display: true,
            text: 'Weather Forecast',
          },
          subtitle: {
            display: true,
            text: 'Weather Periods',
          },
          tooltip: {
            callbacks: {
              label: function (context) {
                let label = context.dataset.label || '';
                let value = context.parsed.y;
                if (label) {
                  label += ': ';
                }
                if (context.parsed.y !== null) {
                  label += periodnames[context.dataIndex];
                }
                return `${label}${' '}${value}°F`;
              },
            },
          },
        },
      },
    });
  }

  ngOnDestroy(): void {
    return this.chart ? this.chart.destroy() : undefined;
  }
}
