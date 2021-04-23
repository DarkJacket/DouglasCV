import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { TextShadowComponent } from "./text-shadow.component";



@NgModule({
    declarations: [TextShadowComponent],
    imports: [CommonModule],
    exports: [TextShadowComponent]
})
export class TextShadowModule { }