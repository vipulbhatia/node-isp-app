import { Component, Input, OnInit, OnChanges } from '@angular/core';

@Component({
    selector: 'right-panel',
    templateUrl: './isp-info.component.html',
    styleUrls: ['./isp-info.css']
})

export class IspInfoComponent implements OnInit, OnChanges {
    @Input('ispInfo') ispInfo;
    stars = [];
    constructor() { }

    ngOnInit() {
        console.log(this.ispInfo);
        this.stars = new Array(this.ispInfo.rating);
        console.log('stars', this.stars);
    }

    ngOnChanges() {
        console.log(this.ispInfo);
        this.stars = new Array(this.ispInfo.rating);
        console.log('stars', this.stars);
    }
}
