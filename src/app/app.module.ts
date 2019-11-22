import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { Brother1Component } from './brother1/brother1.component';
import { Brother2Component } from './brother2/brother2.component';
import { ParentTestService } from './services/parent-test.service';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, Brother1Component, Brother2Component],
  bootstrap: [AppComponent],
  providers: [ParentTestService]
})
export class AppModule {}
