//ejercicio 1 Programa una funcion que cuente el numero de caracteres

const Contador = (cadena = "")=>

    (!cadena)
    ?console.warn("No ingresaste ningun valor")
    :console.log(`La cadena :${cadena} tiene ${cadena.length} caracteres`);


// Contador("ga")


//Ejercicio 2 Programa una funcion que te devuelve el texto recortado

const Recortar = (cadena = "",longitud = undefined)=>
(!cadena)
?console.warn("No escribiste ninguna cadena de texto")
:(!longitud)
  ?console.warn("No ingresaste un valor para recortar")
  :console.info(`${cadena.slice(0,longitud)}`)


// Recortar("Hola Mundo",3);

//Ejercicio 3 Programa una funcion que dada un string te devuelva un array de textos separados
//{}
const SeparadordeTexto = (cadena="",separador=undefined)=>
(!cadena)
?console.warn("No escribiste ninguna cadena de texto")
:(separador===undefined)
  ?console.warn("No ingresaste el caracter separador")
  :console.info(cadena.split(separador));

//   SeparadordeTexto("Enero,Febrero, Marzo, Abril ","-");

//Ejercicio 4 - Programar una funcion que repita x veces una cadena de texto
const Repetir =(cadena="",repeticiones=undefined)=>
(!cadena)
?console.warn("No escribiste ninguna cadena de texto")
:(repeticiones===undefined)
  ?console.warn("No ingresaste valor para repetir")
  :console.info(cadena.repeat(repeticiones));
  

//   Repetir("pepe ",0);


