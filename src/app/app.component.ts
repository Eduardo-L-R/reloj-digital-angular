import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

const DIRECTORY_MP3 = './assets/mp3/';
const DIRECTORY_GIFS = './assets/gifs/';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'pagina-reloj';
  sonido: string = DIRECTORY_GIFS + 'gato-piano.mp3';
  imagen: string = '';
  indexImage: number = 3;
  imagenes: string[] = [
    DIRECTORY_GIFS + 'terrorCat.gif',
    DIRECTORY_GIFS + 'gatoTenor.gif',
    DIRECTORY_GIFS + 'nian-cat.gif',
    DIRECTORY_GIFS + 'lluvia-pez.gif',
    DIRECTORY_GIFS + 'hojas-ciruelo-cayendo.gif',
    DIRECTORY_GIFS + 'perrito-sala.gif',
    DIRECTORY_GIFS + 'puerto-mañana.gif',
    DIRECTORY_GIFS + 'michael-dwait.gif',
    // DIRECTORY_GIFS + 'lluvia-pez.gif',
    // DIRECTORY_GIFS + 'lluvia-pez.gif',
    // DIRECTORY_GIFS + 'waifu-atsui.gif',
    // DIRECTORY_GIFS + 'waifus-comiendo-carne.gif',
    DIRECTORY_GIFS + 'lluvioso-con-sapo.gif',
    DIRECTORY_GIFS + 'roboto-fotografo.gif',
    DIRECTORY_GIFS + 'atardecer-rojizo.gif',
    DIRECTORY_GIFS + 'nieve-noche.gif',
    DIRECTORY_GIFS + 'gato-tele.gif',
    DIRECTORY_GIFS + 'market-nocturno.gif',
    DIRECTORY_GIFS + 'bar-noche.gif',
    DIRECTORY_GIFS + 'noche-apagon-luz.gif',
    // DIRECTORY_GIFS + 'gato-tele.gif',
    // DIRECTORY_GIFS + 'duende-noche.gif',
    DIRECTORY_GIFS + 'witcher.ba4e5f6c.gif',
    DIRECTORY_GIFS + 'mario.28e65fd9.gif',
    DIRECTORY_GIFS + 'star-wars.303295a3.gif',
    DIRECTORY_GIFS + 'street-fighter.cd23183b.gif',
    DIRECTORY_GIFS + 'matrix-hacker.gif',
    DIRECTORY_GIFS + 'snake.gif',
  ];
  hora: string = '00 : 00 : 00';
  cronometro: any = {
    text: '00 : 00 : 00',
    seconds: 0,
    status: false,
  };
  cronometro2: any = {
    text: '00 : 00 : 00',
    seconds: 0,
    status: false,
  };
  audio: any;

  reseteoTiempoEspera: number = 1800;
  tiempo_espera: number = 1;
  horaActual: Date = new Date();
  fontSize: number = 10;

  periodos: number = 0;
  fullscreen: boolean = false;

  ngOnInit(): void {
    this.inicioReloj();
    this.observableTimer();
  }

  ajustarPantalla() {
    if (window.innerWidth > 1100) {
      this.fontSize = 80;
    } else if (window.innerWidth > 900) {
      this.fontSize = 50;
    } else if (window.innerWidth > 700) {
      this.fontSize = 7;
    } else if (window.innerWidth > 500) {
      this.fontSize = 5;
    } else {
      this.fontSize = 4;
    }
  }

  inicioReloj() {
    this.audio = new Audio(DIRECTORY_MP3 + 'gato-piano.mp3');
    // this.imagen = this.imagenes[this.indexImage];
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
      // eventos que ocurren cada segundo
      this.reloj();
      this.ajustarPantalla();
      if (this.cronometro.status === true) {
        this.cronometro.seconds += 1;
        let horas = Math.floor(this.cronometro.seconds / 3600);
        let minutos = Math.floor(this.cronometro.seconds / 60) - horas * 60;
        let segundos = this.cronometro.seconds - horas * 3600 - minutos * 60;
        // console.log(this.cronometro.seconds);
        // console.log(this.cronometro.seconds / 3600);
        // console.log(Math.floor(this.cronometro.seconds / 3600));
        this.cronometro.text = `${('0' + String(horas)).slice(-2)} : ${(
          '0' + String(minutos)
        ).slice(-2)} : ${('0' + String(segundos)).slice(-2)}`;
      }
      if (this.cronometro2.status === true) {
        this.cronometro2.seconds += 1;
        let horas2 = Math.floor(this.cronometro2.seconds / 3600);
        let minutos2 = Math.floor(this.cronometro2.seconds / 60) - horas2 * 60;
        let segundos2 =
          this.cronometro2.seconds - horas2 * 3600 - minutos2 * 60;
        // console.log(this.cronometro.seconds);
        // console.log(this.cronometro.seconds / 3600);
        // console.log(Math.floor(this.cronometro.seconds / 3600));
        this.cronometro2.text = `${('0' + String(horas2)).slice(-2)} : ${(
          '0' + String(minutos2)
        ).slice(-2)} : ${('0' + String(segundos2)).slice(-2)}`;
      }
      let momento = new Date();

      // periodos de 30 minutos;
      if (
        (momento.getMinutes() === 0 && momento.getSeconds() === 0) ||
        (momento.getMinutes() === 30 && momento.getSeconds() === 0)
      ) {
        this.periodos += 1;
      }

      // posible cambio de imagen cada 30 min
      this.tiempo_espera = this.tiempo_espera - 1;
      this.verificacionHora();
      if (this.tiempo_espera <= 0) {
        this.horaActual = momento;
        this.tiempo_espera = this.reseteoTiempoEspera;
        // this.iniciarPosibleSustoGato();
      }
    });
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

  inicioCronometro() {
    this.cronometro.status = true;
  }

  detenerCronometro() {
    this.cronometro.status = false;
  }

  reiniciarCronometro() {
    this.cronometro.status = false;
    this.cronometro.seconds = 0;
    this.cronometro.text = '00 : 00 : 00';
  }

  inicioCronometro2() {
    this.cronometro2.status = true;
  }

  detenerCronometro2() {
    this.cronometro2.status = false;
  }

  reiniciarCronometro2() {
    this.cronometro2.status = false;
    this.cronometro2.seconds = 0;
    this.cronometro2.text = '00 : 00 : 00';
  }

  avanzarCambiarImagen() {
    if (this.indexImage > this.imagenes.length - 2) {
      this.indexImage = 0;
    } else {
      this.indexImage += 1;
    }
    this.verificacionMusica();
    this.imagen = this.imagenes[this.indexImage];
  }

  retrocederCambiarImagen() {
    if (this.indexImage <= 0) {
      this.indexImage = this.imagenes.length - 1;
    } else {
      this.indexImage -= 1;
    }
    this.verificacionMusica();
    this.imagen = this.imagenes[this.indexImage];
  }

  actualizarImagen() {
    this.imagen = this.imagenes[this.indexImage];
  }

  iniciarPosibleSustoGato() {
    // let imagen = this.imagen;
    // if (Math.random() * 2 > 1.5) {
    //   this.imagen = DIRECTORY_GIFS + 'terrorCat.gif';
    //   setTimeout(() => {
    //     this.imagen = imagen;
    //   }, 1950);
    // }
  }

  verificacionMusica() {
    this.detener();
    if (this.imagenes[this.indexImage] === DIRECTORY_GIFS + 'nian-cat.gif') {
      this.audio = new Audio(DIRECTORY_MP3 + 'nyan-cat.m4a');
      this.reproducir();
    } else if (
      this.imagenes[this.indexImage] ===
      DIRECTORY_GIFS + 'gatoTenor.gif'
    ) {
      this.audio = new Audio(DIRECTORY_MP3 + 'gato-piano.mp3');
      this.reproducir();
    } else {
      this.audio = new Audio(DIRECTORY_MP3 + 'gato-piano.mp3');
      this.detener();
    }
  }

  verificacionHora() {
    // console.log(this.hora);
    // if(this.hora === '08 : 00 : 00'){
    //   this.imagen = DIRECTORY_GIFS + 'perrito-sala.gif';
    // }else if(this.hora === '10 : 00 : 00'){
    //   this.imagen = DIRECTORY_GIFS + 'hojas-ciruelo-cayendo.gif';
    // }else if(this.hora === '12 : 00 : 00'){
    //   this.imagen = DIRECTORY_GIFS + 'michael-dwait.gif';
    // // }else if(this.hora === '13 : 00 : 00'){
    // //   this.imagen = DIRECTORY_GIFS + 'waifus-comiendo-carne.gif';
    // }else if(this.hora === '14 : 00 : 00'){
    //   this.imagen = DIRECTORY_GIFS + 'roboto-fotografo.gif';
    // }else if(this.hora === '18 : 00 : 00'){
    //   this.imagen = DIRECTORY_GIFS + 'atardecer-rojizo.gif';
    // }else if(this.hora === '20 : 00 : 00'){
    //   this.imagen = DIRECTORY_GIFS + 'nieve-noche.gif';
    // // }else if(this.hora === '00 : 00 : 01'){
    // //   this.imagen = DIRECTORY_GIFS + 'duende-noche.gif';
    // }else{
    if (this.imagen === '') {
      this.imagen = this.imagenes[this.indexImage];
    }
    // }
  }

  fullScreen() {
    let elem: any = document.getElementById('myvideo');
    if (elem.requestFullscreen && this.fullscreen === false) {
      elem.requestFullscreen();
      this.fullscreen = true;
    } else if (elem.webkitRequestFullscreen && this.fullscreen === false) {
      /* Safari */
      elem.webkitRequestFullscreen();
      this.fullscreen = true;
    } else if (elem.msRequestFullscreen && this.fullscreen === false) {
      /* IE11 */
      elem.msRequestFullscreen();
      this.fullscreen = true;
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        this.fullscreen = false;
        // } else if (document.webkitExitFullscreen) { /* Safari */
        //   document.webkitExitFullscreen();
        //   this.fullscreen= false;
        // } else if (document.msExitFullscreen) { /* IE11 */
        //   document.msExitFullscreen();
        //   this.fullscreen= false;
      }
    }
  }
}
