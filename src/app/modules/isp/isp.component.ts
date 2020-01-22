import { Component, OnInit, EventEmitter } from '@angular/core';
import { AppService } from '../../services/app.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: '',
    templateUrl: '../../views/isp.component.html',
    styleUrls: ['../../css/isp.css']
})

export class IspComponent implements OnInit {
    ispData = [];
    ispDataFromServer = [];
    selectedIspInfo: any;
    search = new EventEmitter();
    activeTab;
    hitCount = 0;
    constructor(private appService: AppService, private activatedRoute: ActivatedRoute) { }

    selectIsp(val) {
        this.selectedIspInfo = this.ispData[val];
        this.activeTab = this.selectedIspInfo.name;
    }

    checkActive(val) {
        console.log(val, this.activeTab);
        return val === this.activeTab;
    }

    sortBy(type) {
        this.ispData.sort((a: object, b: object) => a[type] >= b[type] ? 1 : -1);
    }

    ngOnInit() {
        let selectedIsp = this.activatedRoute.snapshot.params['id'];
        console.log(selectedIsp);
        this.appService.getIspData().subscribe((data: any) => {
            this.ispDataFromServer = this.ispData = data.result.providers;
            this.hitCount = data.result.hitCount;
            if(selectedIsp !== 'isp') this.selectedIspInfo = this.ispDataFromServer[selectedIsp];
        });
        this.search
        .asObservable()
        .subscribe((val: string) => {
            console.log(val);
            let s = new RegExp(val, 'i');
            this.ispData = this.ispDataFromServer.filter((isp) => s.test(isp.name));
        });
    }
}
