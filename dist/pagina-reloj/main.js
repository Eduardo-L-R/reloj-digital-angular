(self["webpackChunkpagina_reloj"] = self["webpackChunkpagina_reloj"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 6797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);


const DIRECTORY_MP3 = './assets/mp3/';
const DIRECTORY_GIFS = './assets/gifs/';
class AppComponent {
    constructor() {
        this.title = 'pagina-reloj';
        this.sonido = DIRECTORY_GIFS + 'gato-piano.mp3';
        this.imagen = '';
        this.indexImage = 3;
        this.imagenes = [
            DIRECTORY_GIFS + 'terrorCat.gif',
            DIRECTORY_GIFS + 'gatoTenor.gif',
            DIRECTORY_GIFS + 'nian-cat.gif',
            DIRECTORY_GIFS + 'hojas-ciruelo-cayendo.gif',
            DIRECTORY_GIFS + 'lluvia-pez.gif',
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
        this.hora = '00 : 00 : 00';
        this.cronometro = {
            text: '00 : 00 : 00',
            seconds: 0,
            status: false,
        };
        this.cronometro2 = {
            text: '00 : 00 : 00',
            seconds: 0,
            status: false,
        };
        this.reseteoTiempoEspera = 1800;
        this.tiempo_espera = 1;
        this.horaActual = new Date();
        this.fontSize = 10;
        this.periodos = 0;
        this.fullscreen = false;
    }
    ngOnInit() {
        this.inicioReloj();
        this.observableTimer();
    }
    ajustarPantalla() {
        if (window.innerWidth > 1100) {
            this.fontSize = 10;
        }
        else if (window.innerWidth > 900) {
            this.fontSize = 9;
        }
        else if (window.innerWidth > 700) {
            this.fontSize = 7;
        }
        else if (window.innerWidth > 500) {
            this.fontSize = 5;
        }
        else {
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
        const source = (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.timer)(1000, 1000);
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
                this.cronometro.text = `${("0" + String(horas)).slice(-2)} : ${("0" + String(minutos)).slice(-2)} : ${("0" + String(segundos)).slice(-2)}`;
            }
            if (this.cronometro2.status === true) {
                this.cronometro2.seconds += 1;
                let horas2 = Math.floor(this.cronometro2.seconds / 3600);
                let minutos2 = Math.floor(this.cronometro2.seconds / 60) - horas2 * 60;
                let segundos2 = this.cronometro2.seconds - horas2 * 3600 - minutos2 * 60;
                // console.log(this.cronometro.seconds);
                // console.log(this.cronometro.seconds / 3600);
                // console.log(Math.floor(this.cronometro.seconds / 3600));
                this.cronometro2.text = `${("0" + String(horas2)).slice(-2)} : ${("0" + String(minutos2)).slice(-2)} : ${("0" + String(segundos2)).slice(-2)}`;
            }
            let momento = new Date();
            // periodos de 30 minutos;
            if ((momento.getMinutes() === 0 && momento.getSeconds() === 0) || (momento.getMinutes() === 30 && momento.getSeconds() === 0)) {
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
        }
        else {
            this.indexImage += 1;
        }
        this.verificacionMusica();
        this.imagen = this.imagenes[this.indexImage];
    }
    retrocederCambiarImagen() {
        if (this.indexImage <= 0) {
            this.indexImage = this.imagenes.length - 1;
        }
        else {
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
        }
        else if (this.imagenes[this.indexImage] === DIRECTORY_GIFS + 'gatoTenor.gif') {
            this.audio = new Audio(DIRECTORY_MP3 + 'gato-piano.mp3');
            this.reproducir();
        }
        else {
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
        let elem = document.getElementById("myvideo");
        if (elem.requestFullscreen && this.fullscreen === false) {
            elem.requestFullscreen();
            this.fullscreen = true;
        }
        else if (elem.webkitRequestFullscreen && this.fullscreen === false) { /* Safari */
            elem.webkitRequestFullscreen();
            this.fullscreen = true;
        }
        else if (elem.msRequestFullscreen && this.fullscreen === false) { /* IE11 */
            elem.msRequestFullscreen();
            this.fullscreen = true;
        }
        else {
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
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 30, vars: 92, consts: [["id", "myvideo"], [2, "width", "100%", "height", "100%", "object-fit", "fit", "display", "block", "position", "absolute", "top", "0", "right", "0", 3, "src"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "text-light", "btn", 2, "display", "block", "position", "absolute", 3, "click"], ["fill-rule", "evenodd", "d", "M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707z"], [1, "btn", 2, "display", "block", "position", "absolute", 3, "click"], ["viewBox", "0 0 16 16", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 1, "text-light"], ["fill-rule", "evenodd", "d", "M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"], ["fill-rule", "evenodd", "d", "M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"], ["viewBox", "0 0 16 16", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 1, "text-light", "btn", 2, "display", "block", "position", "absolute", 3, "click"], ["d", "m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"], ["fill-rule", "evenodd", "d", "M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z"], ["d", "M5 3.5h6A1.5 1.5 0 0 1 12.5 5v6a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 11V5A1.5 1.5 0 0 1 5 3.5z"], [1, "text-light", 2, "display", "block", "position", "absolute", "top", "0em", "left", "0", "font-weight", "bold", "text-shadow", "2px 2px #5c6e91"], [1, "text-light", 2, "display", "block", "position", "absolute", "top", "1em", "left", "0", "font-weight", "bold", "text-shadow", "2px 2px #5c6e91"], [1, "text-light", 2, "display", "block", "position", "absolute", "bottom", "0em", "left", "0", "font-weight", "bold", "text-shadow", "2px 2px #5c6e91"], [1, "text-light", 2, "display", "block", "position", "absolute", "bottom", "0.4em", "font-weight", "bold", "text-shadow", "2px 2px #5c6e91"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template__svg_svg_click_2_listener() { return ctx.fullScreen(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "path", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_div_click_4_listener() { return ctx.avanzarCambiarImagen(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "svg", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "path", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_div_click_7_listener() { return ctx.retrocederCambiarImagen(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "svg", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "path", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "svg", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template__svg_svg_click_10_listener() { return ctx.inicioCronometro(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "path", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "svg", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template__svg_svg_click_12_listener() { return ctx.detenerCronometro(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "path", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "svg", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template__svg_svg_click_14_listener() { return ctx.reiniciarCronometro(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "path", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "svg", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template__svg_svg_click_16_listener() { return ctx.inicioCronometro2(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "path", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "svg", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template__svg_svg_click_18_listener() { return ctx.detenerCronometro2(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "path", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "svg", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template__svg_svg_click_20_listener() { return ctx.reiniciarCronometro2(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "path", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx.imagen, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("top", 2 + "em")("right", "2.5" + "em")("width", ctx.fontSize - 2 + "em")("height", ctx.fontSize - 2 + "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("top", 2 + "em")("right", "8.95" + "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("font-size", 0.55 + "em")("width", ctx.fontSize + "em")("height", ctx.fontSize + "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("top", 2 + "em")("right", "16.95" + "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("font-size", 0.55 + "em")("width", ctx.fontSize + "em")("height", ctx.fontSize + "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("top", ctx.fontSize + 2 + "em")("right", "14.5" + "em")("width", ctx.fontSize + "em")("height", ctx.fontSize + "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("top", ctx.fontSize + 2 + "em")("right", "8.5" + "em")("width", ctx.fontSize + "em")("height", ctx.fontSize + "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("top", ctx.fontSize + 2 + "em")("right", "1.5" + "em")("width", ctx.fontSize + "em")("height", ctx.fontSize + "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("top", ctx.fontSize + 9.7 + "em")("right", "14.5" + "em")("width", ctx.fontSize + "em")("height", ctx.fontSize + "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("top", ctx.fontSize + 9.7 + "em")("right", "8.5" + "em")("width", ctx.fontSize + "em")("height", ctx.fontSize + "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("top", ctx.fontSize + 9.7 + "em")("right", "1.5" + "em")("width", ctx.fontSize + "em")("height", ctx.fontSize + "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("font-size", ctx.fontSize + "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.cronometro.text, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("font-size", ctx.fontSize + "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.cronometro2.text, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("font-size", ctx.fontSize + "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.hora, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("font-size", ctx.fontSize / 2 + "em")("right", "0.75" + "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", ctx.indexImage + 1, "/", ctx.imagenes.length, " ");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);




class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule] }); })();


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map