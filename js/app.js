/* log */

// comentario de línea breve 

/* 
bloque
safsdgsad
sagdsdgsadg
sadgdggasd
*/

console.log('====================================');
console.log('Repaso de JavaScript');
console.log('====================================');

console.log('====================================');
console.log('tipos de datos');
console.log('====================================');

console.log('primitivos');

/* sintaxis forma correcta de escribir código */
/* var = a una palabra reservada (palabras propias del lenguaje) */
/* nombre de la variable (edad) */
/* = asignando un valor (=) signo de asignación */
/* valor (30) */
/* ; siempre que finalizamos una linea o instrucción */

/* numerico, el valor  va sin comillas */
var edad = 30;

/* string, alfabetico, el valor va entre comillas (pueden dobles o simples , las buenas practicas nos recomiendan simples) */

var nombre = 'Carlos';

/* booleano, (0,1), (no, si), (falso, verdadero), (false, true) */
/* dato lógico */

var quieresSerMiNovia = false;

/* complejos */

/* objetos */
/* objeto es un tipo de dato complejo -> un dato complejo se compone de un conjunto (grupo de cosas que comparten algunas caracteristicas) de datos primitivos ( números, cadenas, string, letras, booleanos, true, false ) */

/* sintaxis */
/* 1 definir la var o crear la caja */
/* nombrar el objeto (persona)  nombre a la caja*/
/* = asinar el valor */
/* { } bloque de llaves que agrupa los valores del objeto*/
/* detro en forma de lista separados por coma (,) se asignan valores de propiedades en pareja */
/* propiedad [nombreDeLaPropiedad ] [:] (igualdad) [valorDeLaPropiedad]*/

/* nota por buenas praticas el ultimo valor no se pone , */
var persona = {
  /* atributo del objeto (persona) */
  /*  */
  edad: 30,
  rango: 120,
  nombre: 'Carlos',
  apPaterno: 'Cispin'
}

/* ejemplo */

var hospital = {
  id: 12458,
  zona: 'norte', 
  nombre: 'Villa',
  nivel: 2,
  capacidad: 1000,
  camas: 1000,
  medicamento: {
    inyectable: 200,
    intravenoso: 300,
    ingerido: 2000
  },
  tipo: 'público',
  personal:{
    planta:{
      medicos:{
        paantes:5,
        especilistas: 4
      },
      enfermeras: 200,
      camilleros: 200,
      intendencia: 20,
      limpieza: 20,
      administrativos: 30
    }
  },
  dir:{
    calle:'ggg',
    numero: 67,
    alcaldia: 'GAM'
  }
}




