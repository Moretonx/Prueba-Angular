import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import { MatInputModule } from '@angular/material/input';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { PokemonComponent } from './component/pokemon/pokemon.component';
import { DialogComponent } from './component/dialog/dialog.component';
import { AlturaPesoPipe } from './pipes/altura-peso.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    DialogComponent,
    AlturaPesoPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
