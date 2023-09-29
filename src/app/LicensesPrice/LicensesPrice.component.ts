import { Component, OnInit } from '@angular/core';
import { LicensesPrice } from 'app/Models/LicensesPrice.model';
import { ServersAndDevicesPriceService } from 'app/Services/servers-and-devices-price.service';

@Component({
  selector: 'app-LicensesPrice',
  templateUrl: './LicensesPrice.component.html',
  styleUrls: ['./LicensesPrice.component.css']
})
export class LicensesPriceComponent implements OnInit {
licenses:any;
  new=new LicensesPrice()
  constructor(private ServersAndDevicesPriceService:ServersAndDevicesPriceService) { }

  ngOnInit() {
    this.getLPrices()
  }
  getLPrices(){
    
    
    this.ServersAndDevicesPriceService.getLPrices().subscribe(res => {
        this.licenses=res
      });
      
      
  }
  addLicense(){
    
    this.ServersAndDevicesPriceService.addLicense(this.new).subscribe()
      window.location.reload()
    }
    

}
