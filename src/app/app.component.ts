import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  textoExpandido = false;

  toggleTexto() {
    this.textoExpandido = !this.textoExpandido;
  }

  reverterTexto() {
    this.textoExpandido = false;
  }

  topicos: string[] = [];

  criarTopico() {
    const novoTopico = `Tópico ${this.topicos.length + 1}`;
    this.topicos.push(novoTopico);
  }

  mostrarDiv = false;
  mostrarForm = false;

  showDiv = true;

  showTopic = false;

  divComments = false;

  toggleForm() {
    this.mostrarDiv = true;
    this.showDiv = false;
  }


  enviarFormulario(){
    this.mostrarDiv = false;
    return false;
  }

  newTopic(){
    this.showTopic = true;
  }

  showDivComments(){
    this.mostrarDiv = false;
    this.divComments = true;
    this.showTopic = true;
  }


}
