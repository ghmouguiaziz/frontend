export class User { 
    id!:any;
    username!:any;
    email!:any;
    password!:any;
    typeuser!:userType;
    
  }
    enum userType{
      admin,user
    }