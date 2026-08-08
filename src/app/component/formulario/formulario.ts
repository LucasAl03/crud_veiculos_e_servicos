import { Component } from '@angular/core';
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
    private 
  )
}
