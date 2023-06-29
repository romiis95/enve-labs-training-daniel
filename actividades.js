//ejercio 1
//A
let frutas = ["pera", "banana", "uvas", "naranja"]
//B
console.log(frutas); 
//C
frutas.pop();
console.log(frutas);
//d
frutas.pop();
console.log(frutas);

let nombres = ["juan", "maria", "pedro"]
let cadena = nombres.join("-");
console.log(cadena);
 
let nombresCompletos = nombres.join("");
 console.log(nombresCompletos);
 
 let nombresApellidos ="juan Pérez, María Gómez, Pedro González";
 let nombresArray = nombresApellidos.split(", ");
 console.log(nombresApellidos);
 console.log(nombresArray);
 
 let numeros = ["1","2","3","4","5"]
 console.log(numeros);

 let arrayOriginal = [1, 2, 3, 4, 5];
 let subArray = arrayOriginal.slice(2);

console.log(subArray);

let array = [1, 2, 3, 4, 5];
array.splice(1, 1);

console.log(array);

let numeros1 = [1, 2, 3, 4, 5];
let subArray1 = numeros.slice(2);
let dobles = subArray1.map(num => num * 2);

console.log(subArray1);
console.log(numeros1);
console.log(dobles);

let edades = [18, 25, 12, 30, 15]
console.log(edades);
let mayoresDe18 = edades.filter(edad => edad > 18);
console.log(mayoresDe18);

let colores = ["rojo", "verde", "azul"]
console.log(colores);
let longitud = colores.length;
console.log(longitud);

let numeros2 = ["1","3", "5", "3", "7"]
console.log(numeros2);
let primeraAparicion = numeros2.indexOf("3");
    console.log(primeraAparicion);
    
let ultimaAparicion = numeros2.lastIndexOf("3");
console.log("primera aparicion:" + primeraAparicion);
console.log("ultima aparicion:" + ultimaAparicion);

let frutas2 = ["manzana", "banana","naranja"]
let contienePera = frutas2.includes("pera");
console.log(contienePera);

let letras = ["a", "b","c","d"]
let ordenNumeros = [letras].sort();
console.log(ordenNumeros);
console.log(letras);

let numeros3 = ["5","2","9","1","7"]
numeros3.sort();
print(numeros3);

let nombres4 =["juan","maria"]
let nombres5 =["pedro","laura"]
let nombresConcatenados = nombres4.concat(nombres5);
console.log(nombresConcatenados);

let edades1 = ["22","35","28","42"]
let edadesMayores18 = edades1.every(function (edad) {
    return edad > 18;
});
console.log(edadesMayores18);

let notas = [7, 5, 9, 3];

let algunaMayorIgualA8 = notas.some(function(nota) {
  return nota >= 8;
});

console.log(algunaMayorIgualA8);

let numeros6 = [1, 2, 3, 4, 5];

let suma = numeros6.reduce(function(acumulador, numero) {
  return acumulador + numero;
}, 0);

console.log(suma);

function sumarElementos(array) {
    let suma = array.reduce(function(acumulador, numero) {
      return acumulador + numero;
    }, 0);
  
    return suma;
  }

  let array1 = [1, 2, 3, 4, 5];
  let resultado1 = sumarElementos(array1);
  console.log(resultado1); 
  
  let array2 = [10, 20, 30, 40, 50];
  let resultado2 = sumarElementos(array2);
  console.log(resultado2); 
  
  let array3 = [-1, -2, -3, -4, -5];
  let resultado3 = sumarElementos(array3);
  console.log(resultado3); 
  
  function calcularPromedio(calificaciones) {
    let suma = calificaciones.reduce(function(acumulador, calificacion) {
      return acumulador + calificacion;
    }, 0);
  
    let promedio = suma / calificaciones.length;
    return promedio;
  }

  let calificaciones1 = [8, 9, 7, 6, 9];
let promedio1 = calcularPromedio(calificaciones1);
console.log(promedio1); 

let calificaciones2 = [10, 10, 10, 10, 10];
let promedio2 = calcularPromedio(calificaciones2);
console.log(promedio2); 

let calificaciones3 = [6, 7, 8, 9, 4];
let promedio3 = calcularPromedio(calificaciones3);
console.log(promedio3); 


function buscarPalabra(array, palabra) {
    return array.includes(palabra);
  }

  let palabras1 = ["manzana", "banana", "pera", "naranja"];
  let palabra1 = "banana";
  console.log(buscarPalabra(palabras1, palabra1)); 
  
  let palabras2 = ["casa", "árbol", "coche", "pelota"];
  let palabra2 = "gato";
  console.log(buscarPalabra(palabras2, palabra2)); 
  
  let palabras3 = ["rojo", "azul", "verde", "amarillo"];
  let palabra3 = "verde";
  console.log(buscarPalabra(palabras3, palabra3)); 


  function eliminarDuplicados(array) {
    return [...new Set(array)];
  }

  let arrayA = [1, 2, 3, 4, 2, 1, 3];
  console.log(eliminarDuplicados(arrayA));  
  
  let arrayB = ["manzana", "banana", "manzana", "pera", "banana"];
  console.log(eliminarDuplicados(arrayB)); 
  
  let arrayC = [true, true, false, true, false];
  console.log(eliminarDuplicados(arrayC));  
  