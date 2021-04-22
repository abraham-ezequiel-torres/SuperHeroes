import { CommonModule } from '@angular/common';
import { HeroeComponent } from './heroe/heroe.component'
import { NgModule } from '@angular/core';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
   declarations: [
    HeroeComponent,
    ListadoComponent,
   ],
   exports: [
       ListadoComponent
   ],
   imports: [
       CommonModule
   ] 
   
})
export class HeroesModule{

}