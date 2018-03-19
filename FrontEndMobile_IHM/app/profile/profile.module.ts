import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { SharedModule } from "../shared/shared.module";
import { ProfileRoutingModule } from "./profile-routing.module";
import { ProfileComponent } from "./profile.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        ProfileRoutingModule,
        SharedModule
    ],
    declarations: [
        ProfileComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class  ProfileModule { }
