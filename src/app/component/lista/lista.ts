import { Component, input } from '@angular/core';

import { VeiculosServicoService } from '../../services/veiculos-servico-service';

import { Veiculo } from '../../models/veiculo';

import { Router } from '@angular/router';

@Component({
  selector: 'app-lista',
  imports: [],
  templateUrl: './lista.html',
  styleUrl: './lista.css',
})
export class Lista {

  veiculos: Veiculo[] = [];

  txtInput?: string = ''

  constructor(
    private router: Router,
    private veiculosServicoService: VeiculosServicoService
  ){}

  listar(){
    return this.veiculosServicoService.listar();
  }

  /*pesquisaVeiculos(e: Event){
    console.log('funcionou?')

    return this.veiculos = this.veiculos.filter(elem => elem.marcaVeiculo?.toLowerCase().includes())
    
  }*/

  excluir(vObjVeiculo: Veiculo){
    if(confirm("Deseja excluir as informações deste veículo?")){
      this.veiculosServicoService.excluir(Number(vObjVeiculo.id));
    }

    this.listar();
  }

  buscaId(vObjVeiculo: Veiculo){
    confirm('Deseja editar este item?')
    this.router.navigate(['/formulario', vObjVeiculo.id]);
  }
}
