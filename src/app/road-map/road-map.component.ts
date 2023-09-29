import { Component, OnInit } from '@angular/core';
import { Availablity, Resources, TypeResource } from 'app/Models/CurrentApps.model';
import { CurrentAppsService } from 'app/Services/current-apps.service';
import { DataCenterService } from 'app/Services/data-center.service';

@Component({
  selector: 'road-map',
  templateUrl: './road-map.component.html',
  styleUrls: ['./road-map.component.scss']
})
export class RoadMapComponent implements OnInit {

  data:any;
  oiaas:any;
  paas:any;
  resspaas:any;
  idD:any;
  id:any;
  newapp=new Resources()
  updateapp=new Resources()
  bcc:any;
  bcr:any;
  icc:any;
  icr:any;
  lpc:any;
  lpr:any;
  inc:any;
  inr:any;
  
  tbcc:any;
  tbcr:any;
  ticc:any;
  ticr:any;
  tlpc:any;
  tlpr:any;
  tinc:any;
  tinr:any;
  tperf:any;
  tcapa:any;


  capa:any;
  perf:any;
  
  perfoiaas:any;
  capaoiaas:any;
  perfapps:any;
  capaapps:any;


  capaa:any;
perfa:any;
infraperf:any;
infracapa:any;
  
  
  bcram:any;
  bccpu:any;
  icram:any;
  iccpu:any;
  lpcpu:any;
  lpram:any;
  incpu:any;
  inram:any;
  
  ram:any;
  cpu:any;
  workersNb:any;
  workersNbExact:any;
  workersRam:any;
  workersCpu:any;
  workersPerfStorage:any;
  workersCapaStorage:any;
  totlpcpu:any;
  totlpram:any;
  infracpu:any;
  infraram:any;
  
    constructor(private DataCenterService: DataCenterService, private CurrentAppsService:CurrentAppsService) { }
    
    ngOnInit() {
      this.idD =localStorage.getItem('idD')
      this.data =localStorage.getItem('data')
      this.bcc=localStorage.getItem('bcca')
          this.bcr=localStorage.getItem('bcra')
          this.icc=localStorage.getItem('icca')
          this.icr=localStorage.getItem('icra')
          this.inc=localStorage.getItem('inca')
          this.inr=localStorage.getItem('inra')
          this.lpr=localStorage.getItem('lpra')
          this.lpc=localStorage.getItem('lpca')
  
          this.capa=localStorage.getItem('capaa')
          this.perf=localStorage.getItem('perfa')
      console.log(this.idD)
      this.getCurrentApps(this.idD);
      
      
      
      
    }
    getCurrentApps(id:any){
      
      
      this.CurrentAppsService.getCurrentApps('CurrAppOIaaS',id,'required').subscribe(res => {
          this.oiaas=res
          this.incpu=this.calculateTotallpc(this.oiaas)
          this.inram=this.calculateTotallpr(this.oiaas)
          this.icram=this.calculateTotal("icRam",this.oiaas)
          this.iccpu=this.calculateTotal("icVcpu",this.oiaas)
          this.bccpu=this.calculateTotal("bcVcpu",this.oiaas)
          this.bcram=this.calculateTotal("bcRam",this.oiaas)
          this.perfoiaas=this.calculateTotal("perfStorage",this.oiaas)
          this.capaoiaas=this.calculateTotal("capaStorage",this.oiaas)
          
        });
        this.CurrentAppsService.getCurrentApps('CurrAppLocalPaaS',id,'required').subscribe(res => {
          this.paas=res
          
        });
        this.CurrentAppsService.getCurrentApps('CurrRessLocalPaaS',id,'required').subscribe(res => {
          this.resspaas=res
          this.lpcpu=this.calculateTotallpc(this.resspaas)
          this.lpram=this.calculateTotallpr(this.resspaas)
          this.perfapps=this.calculateTotal("perfStorage",this.resspaas)
          this.capaapps=this.calculateTotal("capaStorage",this.resspaas)
          this.getram()
          
        }
      );
      
      
      
    }
    addAppOIaaS(id:any){
      this.newapp.type=TypeResource.CurrAppOIaaS;
      this.newapp.availablity=Availablity.Required;
      this.CurrentAppsService.addApp(this.newapp, id).subscribe()
        window.location.reload()
      }
      onSelectN(event: Event) {
    
        this.newapp.name = (event.target as HTMLSelectElement).value;
       
        
      }
    
    addAppPaaS(id:any){
      this.newapp.type=TypeResource.CurrAppLocalPaaS;
      this.newapp.availablity=Availablity.Required;
      this.CurrentAppsService.addApp(this.newapp, id).subscribe()
        window.location.reload()
      }
    
  
    addAppRessPaaS(id:any){
      this.newapp.type=TypeResource.CurrRessLocalPaaS;
      this.newapp.availablity=Availablity.Required;
      this.CurrentAppsService.addApp(this.newapp, id).subscribe()
        window.location.reload()
      }
  
      calculateTotallpc(items: any[]): number {
        return items.reduce((total, item) => total + item.bcNgVcpu, 0);
      }
      calculateTotallpr(items: any[]): number {
        return items.reduce((total, item) => total + item.bcNgRam, 0);
      }
      
      calculateTotal(p: string, items: any[]): number {
        return items.reduce((total, item) => {
          return total + parseFloat(item[p] || 0);
        }, 0);
      }
  
      getram(){
        this.paas.forEach(z => {
          switch (z.name) {
            case "Local PaaS Flavors capacity":
              this.ram=this.lpram/z.bcNgRam
              this.cpu=this.lpcpu/z.bcNgVcpu
              this.workersNb = Math.max(this.ram, this.cpu);
              this.workersNbExact = Math.ceil(this.workersNb);
              this.workersCpu=this.workersNbExact*z.bcNgVcpu
              this.workersRam=this.workersNbExact*z.bcNgRam
              this.workersPerfStorage=this.workersNbExact*z.perfStorage
              this.workersCapaStorage=this.workersNbExact*z.capaStorage


              
              console.log(this.perfa)
  console.log(this.workersPerfStorage)
  console.log(this.perfapps)
  console.log(this.perfoiaas)
  console.log(this.infraperf)
              
              break;
              case "Local PaaS Infra & CS":
                this.infracpu=z.bcNgVcpu
                this.infraram=z.bcNgRam
                this.infraperf=z.perfStorage
                this.infracapa=z.capaStorage
              
  
              
              break;
            default:
              
              break;
          }
        });
        this.capaa=this.workersCapaStorage+this.capaapps+this.capaoiaas+this.infracapa
              this.perfa=this.workersPerfStorage+this.perfapps+this.perfoiaas+this.infraperf

        this.totlpcpu=this.infracpu+this.workersCpu
        this.totlpram=this.infraram+this.workersRam
  
        
      
      
      
      }
  
      getid(c:any){
        this.id=c;
      }
      deleteApp(id:any){
        this.CurrentAppsService.deleteApp(id).subscribe()
        
        window.location.reload()
      }
      getupdateApp(u:any){
        this.updateapp=u;
      }
      updateApp(id:any){
        this.CurrentAppsService.updateApp(this.updateapp,id).subscribe()
        window.location.reload();
      }
    
  
    }
