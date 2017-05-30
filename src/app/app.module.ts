import { PaggingService } from './pagging.service';
import { ProdService } from './prod.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertModule } from 'ngx-bootstrap';
import { ProdComponent } from './prod/prod.component';
import { PaggingComponent } from './pagging/pagging.component';

@NgModule({
  declarations: [
    AppComponent,
    ProdComponent,
    PaggingComponent
  ],
  imports: [
    AlertModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ProdService, PaggingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
