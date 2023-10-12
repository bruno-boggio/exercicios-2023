import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
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


}
