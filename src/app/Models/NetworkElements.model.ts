
export class NetworkElements{
    idElements!:any;
    name!:any;
    qty!:any;
    spareQty!:any;
    ports!:any;
    used!:any;
    free!:any;
    annee!:any;
    availablity!:Availablity;
    champ!:Champ;
    actDate!:any;
}

export enum Champ {
    Extension='extension',
    Initial='initial'
}
export enum Availablity {
    Available='available',
    Required='required'
}