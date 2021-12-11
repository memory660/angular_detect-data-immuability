import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { DevsListComponent } from "./devs-list/devs-list.component";
import { DevActionsComponent } from "./devs-list/dev-actions/dev-actions.component";
import { DevCardV1Component } from "./devs-list/dev-card-v1/dev-card-v1.component";
import { DevCardV2Component } from "./devs-list/dev-card-v2/dev-card-v2.component";
import { DevCardV3Component } from "./devs-list/dev-card-v3/dev-card-v3.component";
import { DevCardV4Component } from "./devs-list/dev-card-v4/dev-card-v4.component";
import { DevCardV5Component } from "./devs-list/dev-card-v5/dev-card-v5.component";
import { DevCardV6Component } from "./devs-list/dev-card-v6/dev-card-v6.component";
import { DevCardV7Component } from "./devs-list/dev-card-v7/dev-card-v7.component";
import { SeniorityLevelPipe } from "./devs-list/seniority-level.pipe";

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [
    DevsListComponent,
    DevActionsComponent,
    DevCardV1Component,
    DevCardV2Component,
    DevCardV3Component,
    DevCardV4Component,
    DevCardV5Component,
    DevCardV6Component,
    DevCardV7Component,
    SeniorityLevelPipe
  ],
  exports: [DevsListComponent]
})
export class DevModule {}
