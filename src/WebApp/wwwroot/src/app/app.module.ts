import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Ng2BootstrapModule } from 'ng2-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { CharacterListComponent, CharacterService } from './characters';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        CharacterListComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        Ng2BootstrapModule,
        AppRoutingModule
    ],
    providers: [
        CharacterService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
