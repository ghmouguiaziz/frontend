import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Resources } from 'app/Models/CurrentApps.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrentAppsService {

  constructor(private http : HttpClient) { }

  public getCurrentApps( t:any,id:any,a:any): Observable <Resources> {
    return this.http.get<Resources> ('http://localhost:8090/data/findByType/'+t+'/'+ id+'/'+a)
 }
 addApp(c:any , id:any){
  return this.http.post('http://localhost:8090/data/addResources/'+id , c) ;
}

deleteApp(id: any){
  return this.http.delete('http://localhost:8090/data/deleteResources/'+id) ;
  }
  updateApp( u:any,id:any){
    return this.http.put('http://localhost:8090/data/updateResources/'+id,u) ;
  }
}
