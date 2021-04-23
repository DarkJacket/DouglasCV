import { NgModule } from '@angular/core';
import { TextShadowModule } from '../text-shadow/text-shadow.module';
import { HeaderComponent } from './header.component';

@NgModule({
    declarations: ([
        HeaderComponent
    ]),
    imports: [ TextShadowModule ],

    exports: ([
        HeaderComponent
    ]),
    bootstrap: [HeaderComponent]

    
})
export class HeaderModule{}