import { Component, OnInit } from '@angular/core';
import { ServicesPrice } from 'app/Models/Services.model';
import { Services } from 'app/Models/Services.model';

import { DataCenterService } from 'app/Services/data-center.service';
import { ServersAndDevicesPriceService } from 'app/Services/servers-and-devices-price.service';
@Component({
  selector: 'services-price',
  templateUrl: './services-price.component.html',
  styleUrls: ['./services-price.component.scss']
})

export class ServicesPriceComponent implements OnInit {
runs:any;
upgrades:any;
builds:any;
id:any;
newrun= new ServicesPrice();
newupgrade= new ServicesPrice();
newbuild= new ServicesPrice();
updateP= new ServicesPrice();
  constructor(private ServersAndDevicesPriceService:ServersAndDevicesPriceService) { }

  ngOnInit() {
    this.getPrices()
  }
  getPrices(){
    
    
    this.ServersAndDevicesPriceService.getServicesPrice('build').subscribe(res => {
        this.builds=res
      });
      this.ServersAndDevicesPriceService.getServicesPrice('run').subscribe(res => {
        this.runs=res
      });
      this.ServersAndDevicesPriceService.getServicesPrice('upgrade').subscribe(res => {
        this.upgrades=res
      });
      
  }
  addRun(){
    this.newrun.serviceType=Services.Run;
    this.ServersAndDevicesPriceService.addService(this.newrun).subscribe()
      window.location.reload()
    }
    addBuild(){
      this.newbuild.serviceType=Services.Build;
      this.ServersAndDevicesPriceService.addService(this.newbuild).subscribe()
        window.location.reload()
      }
      addUpgrade(){
        this.newupgrade.serviceType=Services.Upgrade;
        this.ServersAndDevicesPriceService.addService(this.newupgrade).subscribe()
          window.location.reload()
        }



        getid(c:any){
          this.id=c;
        }
        deleteP(id:any){
          this.ServersAndDevicesPriceService.deleteSP(id).subscribe()
          
          window.location.reload()
        }
        getupdateP(u:any){
          this.updateP=u;
        }
        updatep(id:any){
          this.ServersAndDevicesPriceService.updateSP(this.updateP,id).subscribe()
          //window.location.reload();
        }

}
