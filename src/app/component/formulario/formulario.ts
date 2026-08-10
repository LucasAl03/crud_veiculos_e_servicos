import { Component } from '@angular/core';

import { Veiculo } from '../../models/veiculo';
import { VeiculosServicoService } from '../../services/veiculos-servico-service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-formulario',
  imports: [FormsModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css',
})
export class Formulario {
  id = 0; 
  marca_veiculo = '';
  modelo_veiculo = '';
  placa_veiculo = '';
  cambio_veiculo = ''
  movido_veiculo = '';
  servico_veiculo = '';
  valor_servico = 0.0;

  idVeiculoEdit = 0;

  edit = false;

  constructor(
    private route: ActivatedRoute,
    private  veiculosServicoService: VeiculosServicoService
  ) {}

  salvar(){
    const veiculo = new Veiculo

    veiculo.id = this.veiculosServicoService.tamanhoArray() + 1;

    veiculo.marcaVeiculo = this.marca_veiculo;
    veiculo.modeloVeiculo = this.modelo_veiculo;
    veiculo.placaVeiculo = this.cambio_veiculo;
    veiculo.cambioVeiculo = this.cambio_veiculo;
    veiculo.movidoVeiculo = this.movido_veiculo;
    veiculo.servicoVeiculo = this.servico_veiculo
    veiculo.valorVeiculo = this.valor_servico;

    this.veiculosServicoService.adicionar(veiculo);

    this.limparAtributos();
    
  }

  limparAtributos(){
    this.marca_veiculo = '';
    this.modelo_veiculo = '';
    this.placa_veiculo = '';
    this.cambio_veiculo = ''
    this.movido_veiculo = '';
    this.servico_veiculo = '';
    this.valor_servico = 0.0;
  }

  ngOnInit(){
    const idVeiculo = this.route.snapshot.paramMap.get('id');

    this.idVeiculoEdit = Number(idVeiculo);

    if(idVeiculo){
      this.edit = true;

      this.veiculosServicoService.buscaId(Number(idVeiculo)).subscribe(objVeiculo => {
        if(objVeiculo){
          this.carregaAtributos({ ...objVeiculo });
        }
      });
    }
  }

  carregaAtributos(veiculo: Veiculo){
    this.marca_veiculo = String(veiculo.marcaVeiculo);
    this.modelo_veiculo = String(veiculo.modeloVeiculo);
    this.placa_veiculo = String(veiculo.placaVeiculo);
    this.cambio_veiculo = String(veiculo.cambioVeiculo);
    this.movido_veiculo = String(veiculo.movidoVeiculo);
    this.servico_veiculo = String(veiculo.servicoVeiculo);
    this.valor_servico = Number(veiculo.valorVeiculo);
  }

  save(){
    const veiculo = new Veiculo();

    veiculo.marcaVeiculo = this.marca_veiculo;
    veiculo.modeloVeiculo = this.modelo_veiculo;
    veiculo.placaVeiculo = this.placa_veiculo;
    veiculo.cambioVeiculo = this.cambio_veiculo;
    veiculo.movidoVeiculo = this.movido_veiculo;
    veiculo.servicoVeiculo = this.servico_veiculo;
    veiculo.valorVeiculo = this.valor_servico;

    if(this.edit) {
      veiculo.id = this.idVeiculoEdit;

      this.veiculosServicoService.editar(veiculo);

      this.edit = false;
    } else {
      veiculo.id = this.veiculosServicoService.tamanhoArray() + 1;

      this.veiculosServicoService.adicionar(veiculo);
    }

    this.limparAtributos();
  }

  alterar(veiculo: Veiculo){
    if(confirm("Deseja alterar as informações deste veículo?")){
      this.veiculosServicoService.editar(veiculo);
    }
  }
}
