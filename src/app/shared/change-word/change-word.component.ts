import { Component, Input, OnInit } from "@angular/core";


@Component({
    selector: "dcv-change-word",
    templateUrl: "./change-word.component.html",
    styles: [ "div { color: #68e0cf; font-weight: bold }" ]

    

    
})
export class ChangeWordComponent implements OnInit{
    
    @Input() Words: string[] = []; 

    CurrentWord: string = "";
    CurrentWordNumber: number = 0;

    InputRemoveSpeed = 100;

    ToggleBarString = "|";
    ToggleBarBool = false;

    ngOnInit(): void {

        this.InputWord();
        //this.ToggleBar();
        
    }

    private ToggleBar(){

        setInterval(() => {

            this.ToggleBarBool = !this.ToggleBarBool;
            
            this.ToggleBarString = this.ToggleBarBool ? "|" : ".";
            
        }, 500);

    }

    private NextWord(): void{

        this.CurrentWordNumber ++;

        if (this.CurrentWordNumber >= this.Words.length) {
            this.CurrentWordNumber = 0;
        }

        this.InputWord();

    }

    private InputWord(): void{


        let word = this.Words[this.CurrentWordNumber];

        let currentLetter = 0;

        let interval = setInterval(() => {

            this.CurrentWord += word[currentLetter]

            

            currentLetter++

            if (currentLetter >= word.length) {

                
                
                clearInterval(interval);
                this.WaitWord();
                
            }

        }, this.InputRemoveSpeed);

    }

    private WaitWord(): void{

        setTimeout(() => {

            this.RemoveWord();
            
        }, 2000);

    }

    private RemoveWord(): void{

        

        let interval = setInterval(() => {

            this.CurrentWord = this.CurrentWord.slice(0, -1);

            
            

            if (this.CurrentWord == "") {

                
                
                clearInterval(interval);
                this.NextWord();
                
            }


            
        }, this.InputRemoveSpeed);


    }


   
}