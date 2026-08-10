import { Component, numberAttribute } from '@angular/core';

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

  constructor(
    private router: Router,
    private veiculosServicoService: VeiculosServicoService
  ){}

  listar(){
    return this.veiculosServicoService.listar();
  }

  excluir(vObjVeiculo: Veiculo){
    if(confirm("Deseja excluir as informações deste veículo?")){
      this.veiculosServicoService.excluir(Number(vObjVeiculo.id));
    }

    this.listar();
  }

  buscaId(vObjVeiculo: Veiculo){
    this.router.navigate(['/formulario', vObjVeiculo.id]);
  }
}
