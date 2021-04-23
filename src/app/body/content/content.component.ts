import { Component } from "@angular/core";

@Component({
    selector: "dcv-content",
    templateUrl: "./content.component.html",
    styleUrls: [ "./content.component.css" ]
    

})
export class ContentComponent { 


    public Words: string[] = [ 'Developer', 'Full Stack', 'C#', '.Net Core', 'Angular', 'SQL Server', 'Unity' ];



}