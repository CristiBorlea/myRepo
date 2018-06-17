import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ThDataModel } from '../../models/thdatamodel';
import { LocationService } from '../../services/location.service';
import { UserService } from '../../services/user.service';
import { ChartService } from '../../services/chart.service';


@Component({
    selector: 'app-charts',
    templateUrl: './charts.component.html',
    styleUrls: ['./charts.component.scss'],
    animations: [routerTransition()]
})
export class ChartsComponent implements OnInit {

    public page="charts";
    public lineChartLabels: Array < any >;
    public lineChartData: Array < any >;


    constructor(private locationService: LocationService, private userService: UserService,
        private chartService: ChartService) {}

    ngOnInit() {
        this.lineChartData = new Array();
        this.lineChartLabels = new Array();
        
        this.chartService.getChartData();

        this.chartService.labels.subscribe(labels => {
            this.lineChartLabels = labels;
        });
        this.chartService.lineChartData.subscribe(lineChartData => {
            this.lineChartData = lineChartData;
        });
    }

    // lineChart
    public lineChartOptions: any = {
        responsive: true,
        showXLabels: 3
    };
    public lineChartColors: Array < any > = [{
            // grey
            backgroundColor: 'rgba(148,159,177,0.2)',
            borderColor: 'rgba(148,159,177,1)',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        },
        {
            // dark grey
            backgroundColor: 'rgba(77,83,96,0.2)',
            borderColor: 'rgba(77,83,96,1)',
            pointBackgroundColor: 'rgba(77,83,96,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(77,83,96,1)'
        },
        {
            // grey
            backgroundColor: 'rgba(148,159,177,0.2)',
            borderColor: 'rgba(148,159,177,1)',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        }
    ];
    public lineChartLegend: boolean = true;
    public lineChartType: string = 'line';


    // bar chart
    public barChartOptions: any = {
        scaleShowVerticalLines: false,
        responsive: true,
        title: {
            text: "my bar ch",
            display: false
        }
    };
    public barChartLabels: string[] = [
        '21-1-2006',
        '27-1-2006',
        '21-12-2006',
        '2007',
        '2008',
        '2009',
        '2010',
        '2011',
        '2012',
        '2013',
        '2015',
        '2017',
        '2018',
        '2019',
        '21-05-2021',
        '21-09-2021',
        '2022',
        '2070'
    ];
    public barChartType: string = 'bar';
    public barChartLegend: boolean = true;

    public barChartData: any[] = [
        { data: [65, 59, 80, 81, 56, 55, 40], label: 'Temperature' },
        { data: [28, 48, 40, 19, 86, 27, 90], label: 'Humidity' }
    ];


    // events
    public chartClicked(e: any): void {
        // console.log(e);
    }

    public chartHovered(e: any): void {
        // console.log(e);
    }

    public randomize(): void {
        // Only Change 3 values
        const data = [
            Math.round(Math.random() * 100),
            59,
            80,
            Math.random() * 100,
            56,
            Math.random() * 100,
            40
        ];
        const clone = JSON.parse(JSON.stringify(this.barChartData));
        clone[0].data = data;
        this.barChartData = clone;
        /**
         * (My guess), for Angular to recognize the change in the dataset
         * it has to change the dataset variable directly,
         * so one way around it, is to clone the data, change it and then
         * assign it;
         */
    }

}
