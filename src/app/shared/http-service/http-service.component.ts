import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IForm } from "./IForm";


@Injectable({

    providedIn: 'root'

})
export class HttpServiceComponent{

    constructor(private Http: HttpClient){ }

    

    public Post(url: string, data:IForm): Observable<any>{

        const headers = { 'Content-Type': 'application/json' };

        return this.Http.post(url, data, { headers} )

    }

}