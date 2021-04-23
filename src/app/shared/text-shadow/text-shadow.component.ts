
import { AfterViewInit, Component, ElementRef, Input, Output, ViewChild } from "@angular/core";





@Component({

    selector: 'dcv-text-shadow',
    templateUrl: './text-shadow.component.html',
    styleUrls: ['./text-shadow.component.css']
    
})
export class TextShadowComponent implements AfterViewInit{
    
    

    @Input() text = "";

    @Input() @Output() buttom : Boolean = false; 

    @ViewChild('changeword') doc: ElementRef | undefined;

    ngAfterViewInit(): void {

        this.TranslateOnHover();
    }


    private TranslateOnHover(): void{

        

        this.doc?.nativeElement.addEventListener('mouseenter', () => { 

            this.doc?.nativeElement.classList.add("hoverem")
            
        
        })

        this.doc?.nativeElement.addEventListener('mouseleave', () => {
            
            this.doc?.nativeElement.classList.remove("hoverem")
        })

    }

}