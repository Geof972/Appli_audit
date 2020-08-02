import { HttpClientModule } from '@angular/common/http';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ChoixProjetComponent } from './choix-projet/choix-projet.component';
import { LuminaireComponent } from './luminaire/luminaire.component';
import { DeperditionsComponent } from './deperditions/deperditions.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, ChoixProjetComponent, LuminaireComponent,  DeperditionsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
