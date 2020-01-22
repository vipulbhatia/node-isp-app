import { Component, Input } from '@angular/core';

@Component({
    selector: 'isp-header',
    templateUrl: '../../views/isp-header.component.html',
    styleUrls: ['../../css/isp-header.css']
})

export class IspHeaderComponent {
    @Input('totalProviders') totalProviders;
    @Input('totalApiHits') totalApiHits;
    constructor() { }
}
