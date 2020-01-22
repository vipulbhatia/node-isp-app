import { Component, Input } from '@angular/core';

@Component({
    selector: 'isp-header',
    templateUrl: './isp-header.component.html',
    styleUrls: ['./isp-header.css']
})

export class IspHeaderComponent {
    @Input('totalProviders') totalProviders;
    @Input('totalApiHits') totalApiHits;
    constructor() { }
}
