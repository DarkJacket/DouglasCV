import { Component, OnInit } from "@angular/core";

@Component({
    selector: "dcv-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.css"]

})
    
    

export class HeaderComponent implements OnInit{

    Sections: Element[] = [];

    SectionsBody : Element[] = [];

    ngOnInit(): void {
        
        this.Sections = Array.from(document.getElementsByClassName('header-section'));
        this.SectionsBody = Array.from(document.getElementsByClassName('content-item'));

        document.addEventListener('scroll', () => { this.CheckScrollLocation(); })

        
    }

    public CheckScrollLocation():void{

        
        

        if (this.SectionsBody[5].getBoundingClientRect().bottom <= window.innerHeight) 
            this.UpdateHeader(3);
            
        
        else if (this.SectionsBody[4].getBoundingClientRect().bottom <= window.innerHeight) 
            this.UpdateHeader(2);
            
        
        else if (this.SectionsBody[1].getBoundingClientRect().bottom <= window.innerHeight) 
            this.UpdateHeader(1);
            
        
        else if (this.SectionsBody[0].getBoundingClientRect().bottom <= window.innerHeight) 
            this.UpdateHeader(0);
            
        
        
    }

    public UpdateHeader(value:number): void{

        if (this.Sections[value].classList.contains('active')) {
            return;   
        }

        this.Sections[value].classList.add('active');

        this.Sections.forEach(element => {
            if (this.Sections[value] == element) {
                return;
            }
            

            if (element.classList.contains('active')) 
                element.classList.remove('active')
            
            

        });

        return;
        
    }

}