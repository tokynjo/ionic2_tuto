import { Injectable }   from '@angular/core';
import { Http }         from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { FecApiGlobal } from '../models/fecapi-global.model';

@Injectable()
export class FecApiService {

    private baseUrl: string = 'https://newsapi.org/v1/';
    private source: string = 'ign';
    private apiKey: string = '8cb9a81f987c41969941a92c1c84391e';
    
    constructor(private http: Http) {

	}

    public getTests(): Promise<FecApiGlobal> {
		const url = `${this.baseUrl}articles?source=${this.source}&sortBy=latest&apiKey=${this.apiKey}`;
        
        return this.http.get(url)
        .toPromise()
        .then(response => response.json() as FecApiGlobal)
        .catch(error => console.log('Une erreur est survenue ' + error))
    }

}