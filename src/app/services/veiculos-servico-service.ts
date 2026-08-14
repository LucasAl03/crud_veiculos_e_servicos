import { Injectable } from '@angular/core';
import { Veiculo } from '../models/veiculo';
import { of } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class VeiculosServicoService {
    private veiculos : Veiculo [] = [];

    adicionar(pessoa: Veiculo){
        this.veiculos.push(pessoa)
    }

    listar(): Veiculo[] {

        return this.veiculos
    }

    tamanhoArray(): number{
        return this.veiculos.length;
    }

    buscaId(id: number){
        const veiculo = this.veiculos.find(elem => elem.id == id);

        return of(veiculo);
    }

    editar(veiculo: Veiculo){
        const posArray = this.veiculos.findIndex(elem => elem.id == veiculo.id);

        if (posArray !== -1){
            this.veiculos[posArray] = veiculo;
        }
    }

    excluir(id: number){
        this.veiculos = this.veiculos.filter(elem => elem.id !== id);
    }
}
