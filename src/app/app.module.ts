import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { DevModule } from "./dev/dev.module";


@NgModule({
  imports: [BrowserModule, DevModule],
  declarations: [AppComponent, ],
  bootstrap: [AppComponent]
})
export class AppModule {}
