import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ComputeCapacities } from 'app/Models/ComputeCapacities.model';
import { StorageCapacities } from 'app/Models/StorageCapacities.model';
import { NetworkElementsCapacities } from 'app/Models/NetworkElementsCapacities.model';
@Injectable({
  providedIn: 'root'
})
export class CapacitiesService {

  constructor(private http: HttpClient) { }
  public getComputesCapa(): Observable <ComputeCapacities> {
    return this.http.get<ComputeCapacities> (`http://localhost:8090/data/getAllComputeCapacities`);
}
getComputeCapa(name:any) {
  return this.http.get('http://localhost:8090/data/findByClassOfCompute/'+name);
}
getStorageCapa(name:any) {
  return this.http.get('http://localhost:8090/data/findByClassOfStorage/'+name);
}
addCompute(c:any){
  return this.http.post('http://localhost:8090/data/addComputeCapacities', c) ;
}

DeleteCompute(id: any){
  return this.http.delete('http://localhost:8090/data/deleteComputeCapacities/'+id) ;
}
public getStorages(): Observable <StorageCapacities> {
  return this.http.get<StorageCapacities> (`http://localhost:8090/data/getAllStorageCapacities`);
}
addStorage(s:any){
return this.http.post('http://localhost:8090/data/addStorageCapacities', s) ;
}

deleteStorage(id: any){
return this.http.delete('http://localhost:8090/data/deleteStorageCapacities/'+id) ;
}

public getControlNetworks(): Observable <StorageCapacities> {
  return this.http.get<StorageCapacities> (`http://localhost:8090/data/getAllControlNetworkCapacities`);
}
getcontrolCapa(name:any) {
  return this.http.get('http://localhost:8090/data/findByClassOfControlNetwork/'+name);
}
addControlNetwork(s:any){
return this.http.post('http://localhost:8090/data/addControlNetworkCapacities', s) ;
}

deleteControlNetwork(id: any){
return this.http.delete('http://localhost:8090/data/deleteControlNetworkCapacities/'+id) ;
}
updateCompute( u:any,id:any){
  return this.http.put('http://localhost:8090/data/updateComputeCapacities/'+id,u) ;
}
updateStorage( u:any,id:any){
  return this.http.put('http://localhost:8090/data/updateStorageCapacities/'+id,u) ;
}
updateControlNetwork( u:any,id:any){
  return this.http.put('http://localhost:8090/data/updateControlNetworkCapacities/'+id,u) ;
}
getDevicesCapa(): Observable <NetworkElementsCapacities> {
  return this.http.get<NetworkElementsCapacities> (`http://localhost:8090/data/getAllNetworkElementsCapacities`);
}
getDeviceCapa(name:any) {
  return this.http.get('http://localhost:8090/data/findByDeviceName/'+name);
}
deleteDevice(id: any){
  return this.http.delete('http://localhost:8090/data/deleteNetworkElementsCapacities/'+id) ;
  }
  updateDevice( u:any,id:any){
    return this.http.put('http://localhost:8090/data/updateNetworkElementsCapacities/'+id,u) ;
  }
  addDevice(s:any){
    return this.http.post('http://localhost:8090/data/addNetworkElementsCapacities', s) ;
    }

}
