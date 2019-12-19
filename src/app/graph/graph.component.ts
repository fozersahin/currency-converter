import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import * as CanvasJS from 'src/assets/canvasjs.min';
import {CurrencyApiService} from '../services/currency-api.service';
import {log} from 'util';
// var CanvasJS = require('./canvasjs.min');

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

  rate: any[] = [];
  constructor(private apiService: CurrencyApiService) { }

  ngOnInit() {
      const dataPoints = [];
      let dpsLength = 0;
      const chart = new CanvasJS.Chart('chartContainer', {
        exportEnabled: true,
        title: {
          text: 'Live Chart with Data-Points from External JSON'
        },
        data: [{
          type: 'spline',
          dataPoints,
        }]
      });


      // TO_DO implement data to graph.
      this.apiService.getMonthlyCurrency('EUR', 'TRY', '2019-11-1', '2019-12-1').subscribe((data) => {
       this.rate = data;
        });
      console.log('rate -----> >> ' + this.rate);

        $.getJSON('https://api.exchangeratesapi.io/history?start_at=2019-11-18&end_at=2019-12-18&symbols=TRY&base=GBP', function(data) {
        console.log('data ->' + data);
        $.each(data, function(key, value) {
          // if(key = 'rates')
          console.log('key ->' + key);
          console.log('value ->' + value);
          dataPoints.push({x: value[0], y: parseInt(value[1])});
        });
        dpsLength = dataPoints.length;
        chart.render();
        // updateChart();
      });
      // function updateChart() {
      //   $.getJSON('https://canvasjs.com/services/data/datapoints.php?xstart=" + (dpsLength + 1) + "&ystart=" + (dataPoints[dataPoints.length - 1].y) + "&length=1&type=json&callback=?', function(data) {
      //     $.each(data, function(key, value) {
      //       dataPoints.push({
      //         x: parseInt(value[0]),
      //         y: parseInt(value[1])
      //       });
      //       dpsLength++;
      //     });
      //
      //     if (dataPoints.length >  20 ) {
      //       dataPoints.shift();
      //     }
      //     chart.render();
      //     setTimeout(function(){updateChart()}, 1000);
      //   });
      // }
  };

}
