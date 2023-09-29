export class EnvControlNetwork{
    idControlNetwork!:any;
    classOfControlNetwork!:any;
    qty!:any;
    spareQty!:any;
    sfpspare!:any;
    sfps!:any;
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