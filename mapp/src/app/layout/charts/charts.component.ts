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
    public chartLabels: Array < any >;
    public chartData: Array < any >;


    constructor(private locationService: LocationService, private userService: UserService,
        private chartService: ChartService) {}

    ngOnInit() {
        this.chartData = new Array();
        this.chartLabels = new Array();

        this.chartService.getChartData();

        this.chartService.labels.subscribe(labels => {
            this.chartLabels = labels;
        });
        this.chartService.lineChartData.subscribe(chartData => {
            this.chartData = chartData;
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

    public barChartType: string = 'bar';
    public barChartLegend: boolean = true;


    // events
    public chartClicked(e: any): void {
        // console.log(e);
    }

    public chartHovered(e: any): void {
        // console.log(e);
    }
}
