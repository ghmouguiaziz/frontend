import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LicensesPrice } from 'app/Models/LicensesPrice.model';
import { ServersAndDevicesPrice } from 'app/Models/ServersAndDevicesPrice.model';
import { ServicesPrice } from 'app/Models/Services.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServersAndDevicesPriceService {

  constructor(private http: HttpClient) { }

  public getPrices( t:any): Observable <ServersAndDevicesPrice> {
    return this.http.get<ServersAndDevicesPrice> ('http://localhost:8090/data/findByTypeServer/'+t)
 }
 addServer(c:any){
  return this.http.post('http://localhost:8090/data/addServersAndDevicesPrice/' , c) ;
}
addDevice(c:any){
  return this.http.post('http://localhost:8090/data/addServersAndDevicesPrice/' , c) ;
}
getLPrices(): Observable <LicensesPrice> {
  return this.http.get<LicensesPrice> ('http://localhost:8090/data/getAllLicensesPrice')
}
addLicense(c:any){
return this.http.post('http://localhost:8090/data/addLicensesPrice/' , c) ;
}
getServicesPrice(p:any): Observable <ServicesPrice> {
  return this.http.get<ServicesPrice> ('http://localhost:8090/data/getAllServicesPrice/'+p)
}
addService(c:any){
return this.http.post('http://localhost:8090/data/addServicesPrice/' , c) ;
}

getPricesByProvider( P:any): Observable <ServersAndDevicesPrice> {
  return this.http.get<ServersAndDevicesPrice> ('http://localhost:8090/data/getServicesPriceByProvider/'+P)
}

deleteP(id: any){
  return this.http.delete('http://localhost:8090/data/deleteServersAndDevicesPrice/'+id) ;
  }
  updateP( u:any,id:any){
    return this.http.put('http://localhost:8090/data/updateServersAndDevicesPrice/'+id,u) ;
  }
  deleteSP(id: any){
    return this.http.delete('http://localhost:8090/data/deleteServicesPrice/'+id) ;
    }
    updateSP( u:any,id:any){
      return this.http.put('http://localhost:8090/data/updateServicesPrice/'+id,u) ;
    }




}
