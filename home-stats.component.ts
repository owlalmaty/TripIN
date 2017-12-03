import { Component, OnInit } from '@angular/core';
import { HelperService, CountData } from '../../services/helper.service';
import { Sort } from '@angular/material';

@Component({
  selector: 'app-home-stats',
  templateUrl: './home-stats.component.html',
  styleUrls: ['./home-stats.component.scss']
})
export class HomeStatsComponent implements OnInit {
  
  // dataSource: CountData[] = [];
  sortedData;

  popular;

  dataSource = [
    {service: 'People', count: '40'},
    {service: 'Airports', count: '5'},
    {service: 'Airlines', count: '3'},
    {service: 'New Come People', count: '13'},
    {service: 'Hot sales', count: '5'}
  
  ];

  constructor(private statsService: HelperService) { 
    this.sortedData = this.dataSource.slice();
    //  let services = ["People", "Airports", "Airlines", "NewComePeople"];

    
    // for (let i = 0; i < services.length; i ++){
    //   this.statsService.load(services[i]).subscribe(data => {
    //     if(data){
    //       this.dataSource[i] = data;
    //     }
    //     console.log(data);
    //   });
    // }

   }


  ngOnInit() {
    this.statsService.getPersonWithMostFriends().subscribe(data=> this.popular = data);
  }
  loadData() { 

  }

  sortData(sort: Sort) {
    const data = this.dataSource.slice();
    if (!sort.active || sort.direction == '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      let isAsc = sort.direction == 'asc';
      switch (sort.active) {
        case 'service': return compare(a.service, b.service, isAsc);
        case 'count': return compare(+a.count, +b.count, isAsc);     
        default: return 0;
      }
    });
  }
}

function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


