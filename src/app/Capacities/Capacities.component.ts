
import { Component, OnInit } from '@angular/core';
import { ComputeCapacities } from 'app/Models/ComputeCapacities.model';
import { ControlNetworkCapacities } from 'app/Models/ControlNetworkCapacities.model';
import { NetworkElementsCapacities } from 'app/Models/NetworkElementsCapacities.model';
import { StorageCapacities } from 'app/Models/StorageCapacities.model';
import { CapacitiesService } from 'app/Services/capacities.service';

@Component({
  selector: 'app-Capacities',
  templateUrl: './Capacities.component.html',
  styleUrls: ['./Capacities.component.css']
})
export class CapacitiesComponent implements OnInit {
computes:any;
idC:any;
newcompute=new ComputeCapacities();
updatecompute=new ComputeCapacities();
storages:any;
idS:any;
newstorage=new StorageCapacities();
updatestorage=new StorageCapacities();
controlnetworks:any;
idCN:any;
newcontrolnetwork=new ControlNetworkCapacities();
updatecontrolnetwork=new ControlNetworkCapacities();
devices:any;
idD:any;
newdevice=new NetworkElementsCapacities();
updatedevice=new NetworkElementsCapacities();
  constructor(private CapacitiesService : CapacitiesService ) { }

  ngOnInit(): void {
    this.getComputesCapa();
    this.getStorages();
    this.getControlNetworks();
    this.getDevicesCapa();
    
    
  }
  
  getComputesCapa(){
    this.CapacitiesService.getComputesCapa().subscribe(res => {
        this.computes=res;
      }
    ); 
  }
  
  onSelectClass(event: Event) {
    
    this.newcompute.classOfCompute = (event.target as HTMLSelectElement).value;
   
    
  }
  addCompute(){
    
    this.CapacitiesService.addCompute(this.newcompute).subscribe()
    
    window.location.reload()
  }
  DeleteCompute(id:any){
    this.CapacitiesService.DeleteCompute(id).subscribe()
    window.location.reload()
  }
  getidC(c:any){
this.idC=c;
  }
  onSelectSClass(event: Event) {
    
    this.newstorage.classOfStorage = (event.target as HTMLSelectElement).value;
   
    
  }
  getStorages(){
    this.CapacitiesService.getStorages().subscribe(res => {
        this.storages=res;
      }
    ); 
  }
  addStorage(){
    this.newstorage.volumeBrut=this.newstorage.diskNumber*this.newstorage.diskVolume;
    this.newstorage.volumeNet=this.newstorage.volumeBrut/3*75/100;
    this.CapacitiesService.addStorage(this.newstorage).subscribe()
    
    window.location.reload()
    
  }
  deleteStorage(id:any){
    this.CapacitiesService.deleteStorage(id).subscribe()
    window.location.reload()
    
  }
  getidS(c:any){
    this.idS=c;
      }

      
      onSelectSNClass(event: Event) {
    
        this.newcontrolnetwork.classOfcontrolNetwork = (event.target as HTMLSelectElement).value;
       
        
      }
 getControlNetworks(){
    this.CapacitiesService.getControlNetworks().subscribe(res => {
        this.controlnetworks=res;
      }
    ); 
  }
  addControlNetwork(){
    
    this.CapacitiesService.addControlNetwork(this.newcontrolnetwork).subscribe()
    
    window.location.reload()
    
  }
  deleteControlNetwork(id:any){
    this.CapacitiesService.deleteControlNetwork(id).subscribe()
    window.location.reload()
    
  }
  getidCN(c:any){
    this.idCN=c;
      }
      getupdatecompute(u:any){
        this.updatecompute=u;
      }
      updateCompute(id:any){
        this.CapacitiesService.updateCompute(this.updatecompute,id).subscribe(resp => {this.getComputesCapa();
        })
        window.location.reload();
      }
      getupdatestorage(u:any){
        this.updatestorage=u;
      }
      updateStorage(id:any){
        this.CapacitiesService.updateStorage(this.updatestorage,id).subscribe(resp => {this.getStorages();
        })
        window.location.reload();
      }
      getupdatecontrolnetwork(u:any){
        this.updatecontrolnetwork=u;
      }
      updateControlNetwork(id:any){
        this.CapacitiesService.updateControlNetwork(this.updatecontrolnetwork,id).subscribe(resp => {this.getStorages();
        })
        window.location.reload();
      }
      onSelectDevice(event: Event) {
    
        this.newdevice.name = (event.target as HTMLSelectElement).value;
       
        
      }
      addDevice(){
    
        this.CapacitiesService.addDevice(this.newdevice).subscribe()
        
        window.location.reload()
        
      }
      getDevicesCapa(){
        this.CapacitiesService.getDevicesCapa().subscribe(res => {
            this.devices=res;
          }
        ); 
      }
      getidD(c:any){
        this.idD=c;
      }
      DeleteDevice(id:any){
        this.CapacitiesService.deleteDevice(id).subscribe()
        
        window.location.reload()
      }
      getupdateDevice(u:any){
        this.updatedevice=u;
      }
      updateDevice(id:any){
        this.CapacitiesService.updateDevice(this.updatedevice,id).subscribe(resp => {this.getDevicesCapa();
        })
        window.location.reload();
      }
}
