import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormGroupDirective, ReactiveFormsModule } from "@angular/forms";
import { ChangeWordModule } from "../shared/change-word/change-word.module";
import { TextShadowModule } from "../shared/text-shadow/text-shadow.module";


import { BodyComponent } from "./body.component";
import { ContentForm } from "./content/content-form/content-form.component";
import { ContentComponent } from "./content/content.component";
import { LinksComponent } from "./links/links.component";
import { PhotoComponent } from "./photo/photo.component";



@NgModule({
    declarations: ([
        BodyComponent,
        PhotoComponent,
        ContentComponent,
        LinksComponent,
        ContentForm
    ]),
    imports: [
        CommonModule,
        ChangeWordModule,
        TextShadowModule,
        ReactiveFormsModule
    ],
    exports: ([
        BodyComponent
    ])

})

export class BodyModule { }