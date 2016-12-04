import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {Speaker} from './Speaker';

@Injectable()
export class SpeakerService {
    private _serviceUrl = 'api/speakers.json';

    constructor(private _http: Http) { }

    getSpeakers(): Observable<Speaker[]>{
        return this._http.get(this._serviceUrl)
                    .map((response: Response) => <Speaker[]> response.json())
                    .do(data => console.log('All: ' +  JSON.stringify(data)))
        .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}