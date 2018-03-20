import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { SharedModule } from "../shared/shared.module";
import { EditProfilRoutingModule } from "./editProfil-routing.module";
import { EditProfilComponent } from "./editProfil.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        EditProfilRoutingModule,
        SharedModule
    ],
    declarations: [
        EditProfilComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class  EditProfileModule { }
