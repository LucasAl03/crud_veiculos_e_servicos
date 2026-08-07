import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  imports: [FormsModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css',
})
export class Formulario {
  marca_veiculo : string = ''
  modelo_veiculo : string = ''
  placa_veiculo : string = ''
  cambio_veiculo : string = ''
  movido_veiculo : string = ''
  servico_veiculo : string = ''
  valor_servico : number = 0.0
}
