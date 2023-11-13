import { AbstractControl, ValidationErrors } from "@angular/forms";

export class PasswordValidator{
    static cantContainSpace(controle:AbstractControl):ValidationErrors | null{
             if((controle.value as string).indexOf(' ')>=0)
             return{
            cantContainSpace:true
        }
        return null;
    }
}