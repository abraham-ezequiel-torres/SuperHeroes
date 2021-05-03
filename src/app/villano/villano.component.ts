import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Villano } from './villano';
@Component({
  selector: 'app-villano',
  templateUrl: './villano.component.html',
  styleUrls: ['./villano.component.css']
})
export class VillanoComponent implements OnInit {
 selectedVillano?: Villano;
 villanos: Villano[]=[
  {id:1, name: "Obito Uchiha",  nivel: 15000, namepower: "Kamui-mangekyou sharingan"},
  {id:2, name: "Madara Uchiha", nivel: 180000000, namepower: "Rinnegan"},
  {id:3, name: "Orochimaru", nivel:6500, namepower: "Regenaracion-inteligencia"},
  {id:4, name: "Kaguya", nivel:1000000000000, namepower: "Todo xd"},
  {id:5, name: "Pain", nivel:100000, namepower: "Shinrai tensei"},
];
  numero = 0;
  base = 5;
  constructor() { }
  ngOnInit() {
  }
  onSelect(villano: Villano): void {
    this.selectedVillano = villano;
  }
  acumulador(valor:number){
    this.numero += valor;
  }
  sumar(){
    this.numero +=1;
  }
  restar(){
    this.numero -=1;
  }

}