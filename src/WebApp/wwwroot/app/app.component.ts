import { Component, OnInit, ViewEncapsulation } from 'angular2/core';
import { Router, RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

@Component({
    moduleId: __moduleName,
    selector: 'app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    directives: [ROUTER_DIRECTIVES],
    encapsulation: ViewEncapsulation.None
})
@RouteConfig([
    { path: '/', name: 'Home', component: HomeComponent, useAsDefault: true },
    { path: '/about', name: 'About', component: AboutComponent }
])
export class AppComponent implements OnInit {

    constructor(private router: Router) { }

    ngOnInit() {
        // Make Material Design Lite play well with our single page app
        this.router.subscribe(() => componentHandler.upgradeAllRegistered());
    }
}