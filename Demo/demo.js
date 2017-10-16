var marcador = {};
function nuevoMarcador(obj, val) {
  Object.defineProperty(obj, 'puntos', {
    value: val,
    writable: true,
    enumerable: true,
    configurable: false
  });
  Object.defineProperty(obj, 'tiros', {
    value: 0,
    writable: true,
    enumerable: true,
    configurable: false
  });
};
nuevoMarcador(marcador, 0);
///////////////////////////////////////
var tiro = {};
Object.defineProperty(tiro, 'deTres', {value: 3});
Object.defineProperty(tiro, 'deDos', {value: 2});
Object.defineProperty(tiro, 'deUno', {value: 1});
Object.defineProperty(tiro, 'power', {
  value: 0,
  writable: true,
  enumerable: true,
  configurable: false
});
function dalePower() {
    tiro.power += 1;
  }
///////////////////////////////////////

function tiroCanasta(tanto) {
  alert('Tiro de '+ tanto + '¡¡power!!' + tiro.power);
  function sumaTanto(m,t) {
   	alert('¡ ¡ CANASTA ! !');
    m.puntos += tanto;
    m.tiros += 1;
    tiro.power = 0;
    muestraMarcador(m);
  }
  function fallaTiro(){
  	alert('¡ ¡ FALLASTE ! !');
		tiro.power = 0;
    marcador.tiros+=1;
    muestraMarcador(marcador);
  }
if(tanto === 1 && tiro.power>5 && tiro.power<10)
 	return sumaTanto(marcador,tanto)
if(tanto === 2 && tiro.power>12 && tiro.power<15)
	return sumaTanto(marcador,tanto)
if(tanto == 3 && tiro.power>15 && tiro.power<20)
 	return sumaTanto(marcador,tanto)
 	fallaTiro();
}
function muestraMarcador(obj) {
  document.getElementById('puntos').innerHTML = 'Puntos: ' + obj.puntos;
  document.getElementById('marcador').innerHTML = 'Tiros: ' + obj.tiros;
}
muestraMarcador(marcador);

function muestraCronometro(time){
  document.getElementById('cronometro').innerHTML = 'Tiempo: '+time;
}
muestraCronometro('00:00');
function muestraPower(power){
  document.getElementById('power').value = power;
  document.getElementById('power').innerHTML = 'Power: '+power;
}
muestraPower(0);