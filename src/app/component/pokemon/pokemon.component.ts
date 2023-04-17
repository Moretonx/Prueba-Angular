import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {PokemonService} from '../../service/pokemon.service'

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})

export class PokemonComponent implements OnInit {

  detalles = false;
  dialog = false;

  data:any[] = [];
  displayedColumns: string[] = ['id', 'nombre'];
  dataSource = new MatTableDataSource<any>(this.data);

  pokemon: any='';
  pokemonTipo = [];
  pokemonImagen = '';

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(
    public pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
    this.verPokemones();
  }

  verPokemones() {
      this.pokemonService.verPokemones().subscribe(
        (res: any) => {
          for (let i = 0; i < res.results.length ; i++) {
            let interfacePokemon = {
              id: i+1,
              nombre: res.results[i].name
            }
            this.data.push(interfacePokemon)
            this.dataSource = new MatTableDataSource<any>(this.data)
            this.dataSource.paginator = this.paginator;
          }
        },
        err => console.log(err)
    )
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  detallePokemon(nombre: string){
    this.pokemonService.verDetalles(nombre).subscribe(
      res => {
        this.pokemon = res;
        this.pokemonTipo = res.types[0].type.name;
        this.pokemonImagen = this.pokemon.sprites.front_default;
        this.detalles = true;
      },
      err => console.log(err)
    )
  }

  favorito(){
    this.dialog = true;
  }

  openDialog() {
    this.pokemonService.openDialog({
      nombre: this.pokemon.name,
      imagen: this.pokemonImagen,
      tipo: this.pokemonTipo,
      altura: this.pokemon.height,
      peso: this.pokemon.weight
    })
  }
}