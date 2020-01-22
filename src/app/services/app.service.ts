import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class AppService {
    constructor(private http: HttpClient) { }

    getIspData() {
        return this.http.get('http://localhost:8081/providers')
    }
}
