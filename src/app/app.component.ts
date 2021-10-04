import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component } from '@angular/core';
import { ROUTER_CONFIGURATION } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  ngOnInit() {       
    console.log("Tempo decorrido da aula: " + this.porcentagemAula(50,"2021-10-04 12:00:00") + "%");
    //  console.log(this.ordenarArray(["2021-10-04 22:01:00","2021-10-04 22:01:10","2021-10-04 19:00:00","2021-10-04 08:00:00","2021-10-04 15:00:00"]));
    console.log("\n\n\nCrescente: ");
    console.log(this.ordenarArrayCrescente(["2021-10-04 22:01:00","2021-10-04 22:01:10","2021-10-04 19:00:00","2021-10-04 08:00:00","2021-10-04 15:00:00"]));
    console.log("\n\n\nDecrescente: ");
    console.log(this.ordenarArrayDerescente(["2021-10-04 22:01:00","2021-10-04 22:01:10","2021-10-04 19:00:00","2021-10-04 08:00:00","2021-10-04 15:00:00"]));
  }

  porcentagemAula(duracao:number, abertura:any){

    let porcentagem: number;
    let hora_atual: any;
    let fim_aula: any;
    
    let aux_abertura = new Date(abertura);
    console.log("Horario de Abertura -> " + aux_abertura);

    fim_aula = moment(abertura).add(duracao,'minutes');
    let aux_fim_aula = new Date(fim_aula);
    this.converterHoraMinutoSegundos(aux_fim_aula);
    console.log("Horário de término - >" + aux_fim_aula); 

    hora_atual = moment();
    let aux_hora_atual = new Date(hora_atual);
    console.log("Horario atual -> " + aux_hora_atual);   
    
    porcentagem = Math.ceil((((this.converterHoraMinutoSegundos(aux_hora_atual)) - (this.converterHoraMinutoSegundos(aux_abertura))) * 100)/((this.converterHoraMinutoSegundos(aux_fim_aula)) - (this.converterHoraMinutoSegundos(aux_abertura))));
    return porcentagem;
  }

  ordenarArrayCrescente(dados:any[]){
     dados.sort();     
     return dados;
  }

  ordenarArrayDerescente(dados:any[]){
    dados.sort((a,b) => {
      if(a > b){
        return -1;
      }
      if(a < b){
        return 1;
      }
      return 0;
    })
    return dados;    
  }

converterHoraMinutoSegundos(data:Date){ 
  return (data.getHours() * 3600) + (data.getMinutes() * 60) + data.getSeconds(); 
} 

}