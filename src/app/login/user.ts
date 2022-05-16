export class User{
   constructor( public username:string,
                private password:string){};

    getpassword(){
        return this.password;
    }

}