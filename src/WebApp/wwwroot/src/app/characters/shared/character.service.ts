import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class CharacterService {

    constructor(private http: Http) { }

    getCharacters() {
        return this.http.get('api/characters')
            .map(response => <string[]>response.json());
    }
}
