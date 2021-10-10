import { Component, OnInit } from '@angular/core';
import { Column,GoogleChartComponent,ChartType,} from 'angular-google-charts';
import { BitcoinService } from 'src/app/services/bitcoin/bitcoin.service';
@Component({
  selector: 'statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {
  priceChart = {
    title: 'Line Chart',
      type: ChartType.Line,
      columns: ['Days', 'Price'],
      data: [
        
      ],
    }
    volumeChart = {
      title: 'Line Chart',
        type: ChartType.Line,
        columns: ['Days', 'Volume'],
        data: [
          
        ]
    }
    myOptions = {
      colors: ['#FFB830'],
  };

  
  constructor(private bitcoinService:BitcoinService) { }

  ngOnInit(): void {
    this.bitcoinService.getMarketPrice().then(data=>{
      data.forEach(el => {
        let x = new Date(el.x)
        this.priceChart.data.push([x,el.y])
      });
    })
    this.bitcoinService.getMarketVolume().then(data=>{
      data.forEach(el => {
        let x = new Date(el.x)
        this.volumeChart.data.push([x,el.y])
      });
    })
  }

}
