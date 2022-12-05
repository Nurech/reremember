import { Component, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import type { EChartsOption } from 'echarts';
import { UserService } from '../../../services/user.service';
import { Store } from '@ngrx/store';
import { Observable, Subject, takeUntil } from 'rxjs';
import { Item } from '../../../ngrx/models/item.model';
import { ItemSelectors } from '../../../ngrx/items-store';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  @Input() type: any;
  @Input() compareSelf: boolean = false;

  constructor(public userService: UserService, private store$: Store) { }

  destroy$: Subject<void> = new Subject<void>();
  items$: Observable<Item[]> = this.store$.select(ItemSelectors.selectAll);

  ngOnInit(): void {
    this.items$.pipe(takeUntil(this.destroy$)).subscribe(data => {
      console.warn('items data', data);

      if (this.type === 'points') {
        this.createPointsChart(data);
      }
    });
  }

  createPointsChart(data: Item[]) {
    let pointsOption: EChartsOption = {
      title: {
        show: true,
        text: 'Average points earned',
        textStyle: {
          color: '#fff'
        },
        textAlign: 'center',
        left: '50%',
        top: '5%'
      },
      color: ['#3398DB'],
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          data: ['Others'],
          axisTick: {
            alignWithLabel: true
          }
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: 'Points',
          type: 'bar',
          barWidth: '60%',
          data: [],
          tooltip: {
            valueFormatter: value => Math.round(Number(value)).toString()
          }
        }
      ]
    };

    let averageScore = 0;
    data.forEach(i => {
      let points = i.common?.points + i.train?.points + i.learn?.points;
      averageScore = (points + averageScore) / 2;
    });

    // @ts-ignore
    pointsOption?.series[0].data.push(averageScore);


    if (this.compareSelf) {
      let myId = this.userService.docId;
      let i = data.find(e => e.id === myId);
      console.warn(i)
      if (i) {
        let myScore = i.common?.points + i.train?.points + i.learn?.points;
        // @ts-ignore
        pointsOption?.series[0].data.push(myScore);
        // @ts-ignore
        pointsOption?.xAxis[0].data.push('You');
      }
    }

    this.options = pointsOption;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }


  initOpts = {
    renderer: 'svg',
    width: 300,
    height: 300
  };

  options: EChartsOption = {};
}
