/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

/* Modules */
import { AppCommonModule } from '@common/app-common.module';
import { NavigationModule } from '@modules/navigation/navigation.module';
import { TablesModule } from '@modules/tables/tables.module';

/* Components */
// import * as dashboardComponents from './components';

/* Containers */
import { DashboardComponent } from './dashboard.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        AppCommonModule,
        NavigationModule,
        TablesModule,
    ],
    providers: [],
    declarations: [DashboardComponent],
    exports: [DashboardComponent],
})
export class DashboardModule { }
