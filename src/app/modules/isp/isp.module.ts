import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IspComponent } from './isp.component';
import { IspInfoComponent } from './isp-info.component';
import { IspHeaderComponent } from './isp-header.component';

@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [IspComponent, IspInfoComponent, IspHeaderComponent],
    exports: [IspComponent]
})

export class IspModule { }
