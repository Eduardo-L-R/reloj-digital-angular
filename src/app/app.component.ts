import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'pagina-reloj';
  sonido :string = '../assets/Grabación.mp3';
  imagen :string = '../assets/star-wars.303295a3.gif';
  indexImage: number = 0;
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
  ]
  hora:string = "00 : 00 : 00";
  audio = new Audio("../assets/Grabación.mp3");
  
  ngOnInit(): void {
    this.inicioReloj();
    this.iniciarCambioImagen();
    // this.reproducir();
  }

  reproducir(){
    this.audio.load();
    this.audio.loop = true;
    this.playAudio();
  }

  detener(){
    this.audio.pause();
  }

  playAudio(){
    this.audio.play();
  }

  cambiarImagen(){
    if(this.indexImage > (this.imagenes.length-2)){
      this.indexImage = 0
    }else{
      this.indexImage += 1;
    }
    this.imagen =  this.imagenes[this.indexImage];
  }

  inicioReloj(){
    setInterval(() => { this.reloj() }, 1000);
  }

  iniciarCambioImagen(){
    setInterval(() => {
      let imagen = this.imagen;
      if (Math.random() * 2 < 1.5) {
        // this.imagen = this.imagenes[0]
      } else {
        this.imagen = this.imagen[0]
        setTimeout(() => { this.imagen = imagen }, 1950);
      }
    }, 30000);
  }

  reloj (){
    let momento = new Date();
    let hora = "00" + String(momento.getHours());
    let minutos = "00" + String(momento.getMinutes());
    let segundos = "00" + String(momento.getSeconds());
    this.hora = (`${hora.slice(hora.length - 2, hora.length)} : ${minutos.slice(minutos.length - 2, minutos.length)} : ${segundos.slice(segundos.length - 2, segundos.length)}`);
  }
}
