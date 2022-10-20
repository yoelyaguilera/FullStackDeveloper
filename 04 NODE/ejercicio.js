document.write("Ejercicio 1");
document.write("<br>");
var a = 1;
var b = 2;
var c = 3;
document.write("Primer valor = " + (a + b + c));
c = 20;
document.write("<br>");
document.write("Segundo valor = " + (a + b + c));

document.write("<br>"); document.write("<br>");

document.write("Ejercicio 2");
document.write("<br>");
document.write("2*3");
document.write("<br>");
document.write(2*3);

document.write("<br>"); document.write("<br>");

document.write("Ejercicio 3");
document.write("<br>");
var string = "10";
var number = 11;
var boolean = true;

string=Number(string);
document.write("Este es el string que ahora es numero = " + string + " ");
document.write(typeof(string));
document.write("<br>");

number=number.toString();
document.write("Este es el numero que ahora es string = " + number + " ");
document.write(typeof(number));
document.write("<br>");

boolean=boolean.toString();
document.write("Este es el boleano que ahora es string= " + boolean + " ");
document.write(typeof(boolean));

document.write("<br>");document.write("<br>");

document.write("Ejercicio 1 Parte2");
document.write("<br>");

document.write("4.3 >= 4 " + (4.3 >= 4));
document.write("<br>");
document.write("1 == 2 " + (1 == 2));
document.write("<br>");
document.write("4 < 4 " + (4 < 4));
document.write("<br>");
document.write("2 !== 5 " + (2 !== 5));
document.write("<br>");
document.write("5 == '5' " + (5 == '5'));
document.write("<br>");
document.write("5 === '5' " + (5 === '5'));
document.write("<br>");
document.write("5 == 5 " + (5 == 5));
document.write("<br>");
document.write("5 === 5 " + (5 === 5));

document.write("<br>");document.write("<br>");

document.write("Ejercicio 2 Parte 2");
document.write("<br>");

var primera = 1;
var segunda = 2;
var tercera = 3;
var cuartaa = 4;

if((primera + segunda) > (tercera + cuartaa)){
    document.write("La suma de primera y segunda son mayor que tercera y cuarta");
}else{
     document.write("La suma de primera y segunda son menor que tercera y cuarta");
    }

document.write("<br>");document.write("<br>");

document.write("Ejercicio 3 Parte 2");
document.write("<br>");
var angulo1 =70;
var angulo2 =50;
var angulo3 =60;
if((angulo1 + angulo2 + angulo3) == 180){
    document.write("La suma de todos los angulos son 180º");
}else{
    document.write("No puede ser un triangulo porque no son 180º");
}

document.write("<br>");document.write("<br>");

document.write("Ejercicio 4 Parte 2");
document.write("<br>");
var num1 = 99;
if (num1%2==0) {
    document.write("El numero es par");
 } else {
    document.write("El numero es impar");
 }

document.write("<br>");document.write("<br>");

document.write("Ejercicio 5 Parte 2");
document.write("<br>");
// Variables reutilizadas
if(angulo1 > angulo2 && angulo1 > angulo3){
    document.write("Angulo1 es mayor que todo");
}else if(angulo2 > angulo1 && angulo2 > angulo3){
    document.write("Angulo2 es mayor que todo");
}else{
    document.write("Angulo3 es mayor que todo");
}

document.write("<br>");document.write("<br>");

document.write("Ejercicio de prueba");
document.write("<br>");
const aa = 4;
const bb = 2;

if (aa > bb) {
    document.write("aa vale " + aa + " y es mayor que bb " + bb );
}else   if (aa < bb) {
            document.write("bb vale " + bb + " y es mayor que aa " + aa );
        }else   if (aa === bb) {
                    document.write("aa vale " + aa + " y es igual a bb " + bb );
                }
    
document.write("<br>");document.write("<br>");

document.write("Ejercicio de prueba 2");
document.write("<br>");
const array = ['En', 'un', 'lugar', 'de', 'la', 'mancha'];
const len = array.length;

for (let i = 0; i < len; i++) {

document.write(array[i]);
}