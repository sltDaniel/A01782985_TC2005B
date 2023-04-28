/*
Actividad en clase: Javascript
*/

// 1. Escribe una función que encuentre el primer carácter de un cadena de texto que no se repite. Prueba tu función con: 'abacddbec'
function caracterNoRepetido(str)
{
    const cont = {}; 
    for (let c of str)
    {
        cont[c] = (cont[c] || 0) + 1;
    }
    for (let c of str)
    {
        if (cont[c] === 1)
        {
        return c;
        }
    }
    return null;
}

console.log("1. Primer carácter que no se repite: " + caracterNoRepetido("abacddbec")); 

//2. Escribe una función que implemente el algoritmo 'bubble-sort' para ordenar una lista de números.
function bubble_sort(lista)
{
  const longitud = lista.length;
  for (let i = 0; i < longitud - 1; i++)
  {
    for (let x = 0; x < longitud - i - 1; x++)
    {
      if (lista[x] > lista[x + 1])
      {
        const temp = lista[x];
        lista[x] = lista[x + 1];
        lista[x + 1] = temp;
      }
    }
  }
    return lista;
}
  let lista = [3, 5, 1, 3, 4, 9];
  console.log("Nuesta lista es "+lista);
  console.log("2. Respuesta Bubble-Sort: "+bubble_sort(lista));

// 3. Escribe dos funciones: la primera que invierta un arreglo de números y regrese un nuevo arreglo con el resultado;
const arrEjercicio3 = [5, 10, 15, 20];
function reversa(arrEjercicio3)
{
  let invertido=[];
  for (let i = arrEjercicio3.length-1; i >= 0; i--)
  {
    invertido.push(arrEjercicio3[i]);    
  }
  return invertido;
}
console.log("3. Arreglo principal: 5,10,15,20. Arreglo invertido: " +reversa(arrEjercicio3));
//Segunda función - Multiplica cada elemento del arreglo *2
function multiplicarArr(arrEjercicio3)
{
  for(let i = 0; i<arrEjercicio3.length; i++)
  {
    arrEjercicio3[i] = arrEjercicio3[i]*2;
  }
  return arrEjercicio3;
}
console.log("3.1 Arreglo multiplicado por 2: "+multiplicarArr(arrEjercicio3));

// 4. Escribe una función que reciba una cadena de texto y regrese una nueva con la primer letra de cada palabra en mayúscula.
function mayuscula(cadena)
{
    let nuevo =[];
    nuevo.push(cadena[0].toUpperCase());
    let siguiente=false;
    for (let i=0; i<cadena.length; i++)
    {
        if(cadena[i] == " ")
        {
            nuevo.push(cadena[i+1].toUpperCase());
            siguiente = true;
        }
        if(siguiente == false)
        {
            nuevo.push(cadena[i+1]);
        }
        siguiente=false;
        
    }
    return nuevo.join('');
}
console.log("4. Cadena de texto con cada primea letra de la palabra en mayúsculas.");
console.log(mayuscula("esto es un ejercicio de clase"));

// 5. Escribe una función que calcule el máximo común divisor de dos números.
function maximoComunDivisor(n1, n2)
{
  let numero = 0;
  while (n2 !== 0)
  {
    operacion = n1 % n2;
    n1 = n2;
    n2 = operacion;
  }
  return n1;
}
console.log("5. El máximo común divisor de dos números.");
console.log("Los numeros son 18 y 24, su máximo común diviros es: " + maximoComunDivisor(18,24));

// 6. Crea una función que cambie una cadena de texto a 'Hacker Speak'. Por ejemplo, para la cadena 'Javascript es divertido', su hacker speak es: 'J4v45c1pt 35 d1v3rt1d0'.
function hackerSpeak(str)
{
    let nuevo=[];
    let alfabeto = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWYZ ";
    alfabeto = alfabeto.split("");
    let hacker = "48cd3f6h1jk1mn0pqr57uvwxy248CD3F6H1JK1MN0PQR57UVWXY2";
    hacker = hacker.split("");
    str = str.split("");
    for (let i = 0; i < str.length; i++) {
        if(str[i]==" ")
        {
            nuevo.push(str[i]);
        }
        else
        {
        let a = alfabeto.indexOf(str[i]);
        nuevo.push(hacker[a]);
        }
  }
  return nuevo.join("");
}
console.log("6. Crea una función que cambie una cadena de texto a 'Hacker Speak'. Por ejemplo, para la cadena 'Javascript es divertido', su hacker speak es: 'J4v45c1pt 35 d1v3rt1d0'.");
console.log(hackerSpeak("JavaScript es divertido"));

//7. Escribe una función que reciba un número, y regrese una lista con todos sus factores. Por ejemplo: factoriza(12) -> [1, 2, 3, 4, 6, 12].
function factores(num)
{
  let op=1; 
  let factor=[];
  for (let i=0; i<num; i++)
  {
    op = num%i;
    if(op == 0)
    {
      factor.push(i);
    }
  }
  factor.push(num);
  return factor;
}
console.log("7. El número que se va a factorizar es le 12");
console.log("Los facores del número 12 son: " +factores(12));

// 8. Escribe una función que quite los elementos duplicados de un arreglo y regrese una lista con los elementos que quedan. Por ejemplo: quitaDuplicados([1, 0, 1, 1, 0, 0]) -> [1, 0]
function quitaDuplicados(arreglo)
{
  let nuevo=[];
  for(let i=0; i<arreglo.length; i++)
  {
    if(nuevo.indexOf(arreglo[i])==-1)
    {
      nuevo.push(arreglo[i]);
    }
  }
  return nuevo;
}
const arreglo = [1,0,1,1,0,0];
console.log("8. Eliminar elementos repetidos en un arreglo. Por ejemplo: quitaDuplicados([1, 0, 1, 1, 0, 0]) -> [1, 0]");
console.log("Nuevo arreglo: " +quitaDuplicados (arreglo));

// 9. Escribe una función que reciba como parámetro una lista de cadenas de texto, y regrese la longitud de la cadena más corta.
function cadena_peque(lista)
{
    let arrLen=[];
    for(let i=0; i<lista.length;i++)
    { 
      arrLen.push(lista[i].length);
    }
    return(Math.min.apply(Math,arrLen));
}
console.log("9. Longitud de la cadena más corta.")
console.log(cadena_peque(["hola","escuela","Tec"]));

// 10. Escribe una función que revise si una cadena de texto es un palíndromo o no.
function palindromo(str)
{
  let str_volteado;
  str_volteado = str.toLowerCase().split("").reverse().join("");
  //return str_volteado === str.toLowerCase();
  str_volteado === str.toLowerCase();
  if((str_volteado === str.toLowerCase()) == true)
  {
    return "Si es un palíndromo";
  }
  else{
    return "No es un palíndromo";
  }
}
console.log("10. Palíndromo o no.")
console.log("Respuesta: " +palindromo("Oso"));

// 11. Escribe una función que tome una lista de cadena de textos y devuelva una nueva lista con todas las cadenas en orden alfabético.
function cadenaOrdenAlfabetico(lista)
{
  for (let i = 0; i < lista.length - 1; i++)
  {
    for (let x = i + 1; x < lista.length; x++)
    {
      if (lista[x] < lista[i])
      {
        let cont = lista[i];
        lista[i] = lista[x];
        lista[x] = cont;
      }
    }
  }
  return lista;
}
console.log("11. Cadenas en orden alfabético.");
console.log(cadenaOrdenAlfabetico(["Mar","Hora","Ahora","Marte"]))


//12. Escribe una función que tome una lista de números y devuelva la mediana y la moda.
function medianaYmoda(lista)
{
  let moda=cadenaFrecuente(lista);
  let lista_ord = bubble_sort(lista);
  if(lista_ord.length%2 != 0)
  {
    return("moda: "+moda+"\n"+"mediana: "+lista_ord[(lista_ord.length-1)/2]);
  }
  else
  {
    let mediana; 
    let n1;
    let n2;
    n1=lista_ord[(lista_ord.length/2)-1];
    n2=lista_ord[lista_ord.length/2];
    mediana=(n1+n2)/2;
    return ("MEDIANA: "+mediana+"\n"+"MODA: "+moda);
  }
}
console.log("12. Mediana y la moda de la lista.")
console.log(medianaYmoda([12,10,9,12,11,12,8,12,5,7,2,3]));

// 13. Escribe una función que tome una lista de cadenas de texto y devuelva la cadena más frecuente.
function cadenaFrecuente(lista)
{
  const cont = {}; 
  let rep =[];
  let index;
  for (let c of lista)
  {
    cont[c] = (cont[c] || 0) + 1;
    rep.push(cont [c]);
  }
  rep.shift();
  max=(Math.max.apply(Math,rep));
  for (let c of lista) 
  {
    if (cont[c] === max)
    {
      return c;
    }
  }
}
console.log("13. Cadena más frecuente.")
console.log(cadenaFrecuente(["mar", "mar", "playa"]));

//14. Escribe una función que tome un número y devuelva verdadero si es una potencia de dos, falso de lo contrario.
function potencia(num)
{
  let numero = (Number.isInteger(Math.log2(num)));
  if(numero == true)
  {
    return " SI es potencia de dos";
  } else{
    return " NO es potencia de dos";
  }
}
console.log("14. Ver si número es potencia de dos, o no.");
console.log("El número 17" +potencia(17));

//15 Escribe una función que tome una lista de números y devuelva una nueva lista con todos los números en orden descendente.
function bubble_sort_inversa(lista)
{
  const tamaño = lista.length;
  for (let i = 0; i < tamaño - 1; i++)
  {
    for (let x = 0; x < tamaño - i - 1; x++)
    {
      if (lista[x] < lista[x + 1])
      {
        const temp = lista[x];
        lista[x] = lista[x + 1];
        lista[x + 1] = temp;
      }
    }
  }
  return lista;
}
console.log("15. Nueva lista con todos los números en orden descendente.")
console.log(bubble_sort_inversa([1,2,3,4,5]));
