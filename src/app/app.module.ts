import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent, SqrtPipe, Precision } from './app.component';



@NgModule({
  declarations: [
    AppComponent,
    SqrtPipe,
    Precision
  ],
  imports: [
    BrowserModule,
    // other imports ...
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/