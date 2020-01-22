import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IspComponent } from './isp.component';
import { IspInfoComponent } from './isp-info.component';
import { IspHeaderComponent } from './isp-header.component';

@NgModule({
    imports: [CommonModule],
    declarations: [IspComponent, IspInfoComponent, IspHeaderComponent],
    exports: [IspComponent]
})

export class IspModule { }
