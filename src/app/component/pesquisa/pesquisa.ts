import { Component } from '@angular/core';
import { Veiculo } from '../../models/veiculo';
import { VeiculosServicoService } from '../../services/veiculos-servico-service';
import { Lista } from '../lista/lista';

@Component({
  selector: 'app-pesquisa',
  imports: [],
  templateUrl: './pesquisa.html',
  styleUrl: './pesquisa.css',
})
export class Pesquisa {
  constructor(
    private veiculosServicosService: VeiculosServicoService
  ) {}

  pesquisaInput(input: string){
    
  }
}
