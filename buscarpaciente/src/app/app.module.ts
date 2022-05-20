import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { VisualizarComponent } from './visualizar/visualizar.component';
import { Post7editComponent } from './post7edit/post7edit.component';

@NgModule({
  declarations: [
    AppComponent,
    VisualizarComponent,
    Post7editComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
