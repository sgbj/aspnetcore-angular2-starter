import { Component } from 'angular2/core';

@Component({
    moduleId: __moduleName,
    template: `
        <div class="card-wide mdl-card mdl-shadow--2dp">
            <div class="mdl-card__title">
                <h2 class="mdl-card__title-text">About</h2>
            </div>
            <div class="mdl-card__supporting-text">
                You're ready to start working on your own application!
            </div>
        </div>
    `
})
export class AboutComponent { }