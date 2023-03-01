import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent {
  valor : number = 0;
  error : boolean =  false


  validarValor(){
    return !isNaN(this.valor)
  }

  sumarValor(){
    if(this.validarValor()){
      this.valor = Number(this.valor) + 1;
      this.error = false;
    }
    else {
      this.error = true;
    }
  }

  restarValor(){
    this.valor--;
  }
}
