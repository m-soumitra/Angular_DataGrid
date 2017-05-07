import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class DataService {

    private _gridLoadUrl = "assets/resources/acc-search.json";

    constructor(private _http: Http) {

    }

    public fetchGridData(): Observable<any> {
        return this._http.get(this._gridLoadUrl)
            .map((response: Response) => response.json());
    }

    private catchError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}