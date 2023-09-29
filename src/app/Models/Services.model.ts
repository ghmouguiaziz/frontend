export class ServicesPrice{
    id!:any;
    name!:any;
    provider!:any;
    price!:any;
    
    serviceType!:Services;


}
export enum Services {
    Upgrade='upgrade',
    Build='build',
    Run='run'
}