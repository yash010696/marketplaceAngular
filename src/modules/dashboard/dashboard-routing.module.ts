/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { SBRouteData } from '@modules/navigation/models';

/* Module */
import { DashboardModule } from './dashboard.module';

/* Containers */
import { DashboardComponent } from './dashboard.component';

/* Routes */
export const ROUTES: Routes = [
    {
        path: '',
        data: {
            title: 'Dashboard',
            breadcrumbs: [
                {
                    text: 'Dashboard',
                    active: true,
                },
            ],
        },
        component: DashboardComponent,
    },
];

@NgModule({
    imports: [DashboardModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})

export class DashboardRoutingModule { }
