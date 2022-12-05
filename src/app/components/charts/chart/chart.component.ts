import { Component, HostListener, Input, OnInit} from '@angular/core';
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

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.resizeChart();
  }

  @Input() type: any;
  @Input() compareSelf: boolean = false;

  constructor(public userService: UserService, private store$: Store) { }

  destroy$: Subject<void> = new Subject<void>();
  items$: Observable<Item[]> = this.store$.select(ItemSelectors.selectAll);

  ngOnInit(): void {
    this.items$.pipe(takeUntil(this.destroy$)).subscribe(data => {

      if (this.type === 'points') {
        this.createPointsChart(data);
      } else {
        this.createOtherChart(data);
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
          },
          axisLabel: {
            show: false,
            hideOverlap: false
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

  createOtherChart(data: Item[]) {
    let otherOption: EChartsOption = {
      title: {
        show: true,
        text: '',
        textStyle: {
          color: '#fff'
        },
        textAlign: 'center',
        left: '50%',
        top: '5%'
      },
      tooltip: {
        extraCssText: 'max-width: 200px;white-space: pre-wrap; line-height: 1.5',
        confine: true,
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
      dataset: {
        source: []
      },
      xAxis: [
        {
          type: 'category',
          axisTick: {
            alignWithLabel: false
          },
          axisLabel: {
            show: false,
            hideOverlap: false
          }
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: []
    };

    let myTitle = ''

    if (this.type === 'mindmap') {
      myTitle = 'Mindmap'
    } else  if (this.type === 'squares') {
      myTitle = 'Public Challange method'
    } else  if (this.type === 'function') {
      myTitle = 'Challange method'
    }

    // @ts-ignore
    otherOption.title.text = myTitle

    let questions: {} = {};
    let scores: {} = {};


    data.forEach(i => {
      if (i.result) {
        for (let [k, v] of Object.entries(i.result)) {
          if (k.startsWith(this.type + 'Q')) {
            let question = v;
            let index = Number(k.replace(this.type + 'Q', ''));
            if (question && index) {
              // @ts-ignore
              questions[index] = question;
            }

            // score
            if (k.endsWith('Score')) {
              let index = Number(k.replace(this.type + 'Q', '').replace('Score', ''));
              // @ts-ignore
              // @ts-ignore
              if (scores[index] === undefined) {
                // @ts-ignore
                scores[index] = Number(v);
              } else {
                // @ts-ignore
                scores[index] = (Number(scores[index]) + (Number(v))) / 2;
              }
            }

          }
        }
      }
    });


    let dataSet = [['question','Others']];
    let thisSeries = [];

    for (let i = 1; i <= Object.keys(questions).length; i++) {
      let arr = [];
      // @ts-ignore
      arr.push(questions[i]);
      // @ts-ignore
      arr.push(scores[i]);
      dataSet.push(arr);
    }
    thisSeries.push({type: 'bar'});



    if (this.compareSelf) {
      let myId = this.userService.docId;
      let i = data.find(e => e.id === myId);
      if (i) {
        dataSet[0].push('You');
        thisSeries.push({type: 'bar'});


        let myScore: {} = {};

        for (let [k, v] of Object.entries(i.result)) {
          if (k.startsWith(this.type + 'Q')) {
            // score
            if (k.endsWith('Score')) {
              let index = Number(k.replace(this.type + 'Q', '').replace('Score', ''));

              // @ts-ignore
              if (myScore[index] === undefined) {
                // @ts-ignore
                myScore[index] = Number(v);
              } else {
                // @ts-ignore
                myScore[index] = (Number(myScore[index]) + (Number(v))) / 2;
              }
            }
          }
        }

        for (let [k, v] of Object.entries(myScore)) {
          // @ts-ignore
          dataSet[k].push(v);
        }

      }
    }

    // @ts-ignore
    otherOption.series = thisSeries;
    // @ts-ignore
    otherOption.dataset.source = dataSet;

    this.options = otherOption;
    console.warn(' this.options', this.options);
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

  echartsInstance: any;

  onChartInit(ec: any) {
    this.echartsInstance = ec;
    this.resizeChart();
  }

  resizeChart() {
    if (this.echartsInstance) {
      this.echartsInstance.resize();
    }
  }
}
