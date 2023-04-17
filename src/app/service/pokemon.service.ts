import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Pokemon} from '../model/pokemon'
import {MatDialog} from '@angular/material/dialog';
import {DialogComponent} from '../component/dialog/dialog.component'

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient, private matDialog: MatDialog) { }

  url_api = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0'
  url_api2 = 'https://pokeapi.co/api/v2/pokemon'

  verPokemones() {
    return this.http.get<any>(this.url_api)
  }

  verDetalles(nombre: string) {
    return this.http.get<any>(`${this.url_api2}/${nombre}`)
  }

  openDialog(data: Pokemon){
    this.matDialog.open(DialogComponent, {data})
  }
}
