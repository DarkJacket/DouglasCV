import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

import { HttpServiceComponent } from "src/app/shared/http-service/http-service.component";
import { IForm } from "src/app/shared/http-service/IForm";


@Component({ 
    selector: 'dcv-content-form',
    templateUrl: './content-form.component.html',
    styleUrls: [ './content-form.component.css' ] 
})
export class ContentForm {

    public messageForm = new FormGroup({
        name: new FormControl('', [Validators.required, Validators.minLength(3) , Validators.maxLength(35)]),
        email: new FormControl('', [Validators.required, Validators.email]),
        message: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(140)])
    });

    enableValidator: boolean = false;

    get name() { return this.messageForm.get('name'); }
    get email() { return this.messageForm.get('email'); }
    get message() { return this.messageForm.get('message'); }

    constructor( private HttpService: HttpServiceComponent ){ }
  
    public PostForm($event: Event){

        event?.preventDefault();

        if (!this.messageForm.valid) {
            this.enableValidator = true;
            return;
        }
            

        let form: IForm = { 

            Name: this.name?.value,
            Email: this.email?.value,
            Message: this.message?.value
            
        }

        this.HttpService.Post("/api/DamianiAPI", form)
            .subscribe( 
                () => {}
                , erro => { 
                console.log(erro)
            });

        this.messageForm.reset();

        
        alert("Mensagem Enviada!");

        

    }
    

}