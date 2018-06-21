var myName = "Herbert Vargas Alfonso";
var age = 38;
var married = true;
var weight = 60.5;
var myArray = [myName, age, married, weight];
myArray.push = 111;


console.log(myName);
console.log(age);
console.log(married);
console.log(weight);
console.log(myArray);

var diasSemana = ["lunes", "martes", "miercoles", "jueves", "viernes"]
for (i in diasSemana) {
    console.log(diasSemana[i]);
}

if (age > 40) {
    console.log("mas sabio!");
} else
    console.log("le falta aprender");

//"document" para acceder al documento
var losParrafos = document.getElementsByTagName("p");
console.log(losParrafos);

var losTitulos = document.getElementsByTagName("h1");
console.log(losTitulos);


//Funciones
function suma(x, y) {
    var suma = x + y;
    return suma;

}

suma(12, 88);
/*
//Tomar datos
var pdcto1 = prompt("introduce precio producto 1");
var pdcto1Int = parseInt(pdcto1);
var pdcto2 = prompt("introduce precio producto 2");
var pdcto2Int = parseInt(pdcto2);

function iva(x) {
    var ivaX = x * .19;
    return ivaX

}



console.log("El total de los productos es: " + suma(pdcto1Int, pdcto2Int));
console.log("Iva pdcto 1 es: " + iva(pdcto1Int));
console.log("Iva pdcto 2 es: " + iva(pdcto2Int));
console.log("el iva total de los productos es: " + suma(iva(pdcto1Int), iva(pdcto2Int)));*/

//modificando archivos de html

function modificarHtml() {
    document.getElementsByTagName
    document.getElementById("titulo").innerHTML = "HOLA BB";
    document.getElementById("imagen").src = "https://piximus.net/media/22973/beautiful-landscapes-8-17.jpg";
}