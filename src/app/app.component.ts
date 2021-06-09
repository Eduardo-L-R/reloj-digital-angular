import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'pagina-reloj';
  sonido: string = '../assets/Grabación.mp3';
  imagen: string = '../assets/perrito-sala.gif';
  indexImage: number = 1;
  imagenes: string[] = [
    '../assets/terrorCat.gif',
    '../assets/perrito-sala.gif',
    '../assets/hojas-ciruelo-cayendo.gif',
    '../assets/lluvia-pez.gif',
    '../assets/market-nocturno.gif',
    '../assets/snake.gif',
    '../assets/gatoTenor.gif',
    '../assets/mario.28e65fd9.gif',
    '../assets/matrix.8400ed0c.gif',
    '../assets/star-wars.303295a3.gif',
    '../assets/street-fighter.cd23183b.gif',
    '../assets/witcher.ba4e5f6c.gif',
  ];
  hora: string = '00 : 00 : 00';
  audio = new Audio('../assets/Grabación.mp3');

  reseteoTiempoEspera: number = 1800;
  tiempo_espera: number = 1;
  horaActual: Date = new Date();
  fontSize:number = 10;

  periodos:number = 0;
  ngOnInit(): void {
    this.inicioReloj();
    // this.reproducir();
    this.observableTimer();
  }
  
  ajustarPantalla(){
    if(window.innerWidth > 1100){this.fontSize = 10}
    else if(window.innerWidth > 900){this.fontSize = 9}
    else if(window.innerWidth > 700){this.fontSize = 7}
    else if(window.innerWidth > 500){this.fontSize = 5}
    else {this.fontSize = 4}
  }

  inicioReloj() {
    setInterval(() => {
      this.reloj();
    }, 1000);
  }

  reloj() {
    let momento = new Date();
    let hora = '00' + String(momento.getHours());
    let minutos = '00' + String(momento.getMinutes());
    let segundos = '00' + String(momento.getSeconds());
    this.hora =
      `${hora.slice(hora.length - 2, hora.length)} :` +
      ` ${minutos.slice(minutos.length - 2, minutos.length)} :` +
      ` ${segundos.slice(segundos.length - 2, segundos.length)}`;
  }

  observableTimer() {
    const source = timer(1000, 1000);
    const abc = source.subscribe((val) => {
      this.tiempo_espera = this.tiempo_espera - 1;
      this.ajustarPantalla();
      let momento = new Date();
      // periodos de 30 minutos;
      if((momento.getMinutes() === 0 && momento.getSeconds() === 0)|| (momento.getMinutes() === 30 && momento.getSeconds() === 0)){
        this.periodos += 1; 
      }
      if (this.tiempo_espera <= 0) {
        this.iniciarCambioImagen();
        this.horaActual = momento;
        this.tiempo_espera = this.reseteoTiempoEspera;
      }
    });
  }

  iniciarCambioImagen() {
    let imagen = this.imagen;
    if (Math.random() * 2 > 1.5) {
      this.imagen = this.imagenes[0];
      setTimeout(() => {
        this.imagen = imagen;
      }, 1950);
    } 
  }

  reproducir() {
    this.audio.load();
    this.audio.loop = true;
    this.playAudio();
  }

  playAudio() {
    this.audio.play();
  }

  detener() {
    this.audio.pause();
  }

  cambiarImagen() {
    if (this.indexImage > this.imagenes.length - 2) {
      this.indexImage = 0;
    } else {
      this.indexImage += 1;
    }
    this.imagen = this.imagenes[this.indexImage];
  }

  retrocederCambiarImagen(){
    if (this.indexImage <= 0) {
      this.indexImage = this.imagenes.length -1;
    } else {
      this.indexImage -= 1;
    }
    this.imagen = this.imagenes[this.indexImage];
  }
}
