var variable = 1;


let variable2 = 2;

const CONSTANTE = 3;

//TIPOS DE DATOS
/*let cadena = "Cadena de texto";
let cadena2 ='';
console.log(typeof cadena);
console.log(cadena);

let numero = 10;
console.log(typeof numero);
console.log(numero);

let booleano = false; //true //false
console.log(typeof booleano);
console.log(booleano);

let nulo= null; 
console.log(typeof nulo);
console.log(nulo);

let indefinido = undefined; 
console.log(typeof indefinido);
console.log(indefinido);

let noEsUnNumero = NaN;
console.log(typeof noEsUnNumero);
console.log(noEsUnNumero);
*/

//CONSTANTE

const lista = ["Jose", 24 ,true, ["nan", 3, 4]];
const  lista2 = new Array(1,5,18);
//console.log(lista[3][1]);

const objeto = {nombre: "Jose", edad: 24, autenticado: true, elemento: ["nan", 33, 14] };
//console.log(objeto.elemento[2]);

//coontroles de flujo

/*variable = 5;
console.log(variable);
let resultado = variable + 2; //suma
console.log(resultado);

let resultado2 = variable - 2; //resta

let contador =  0;
contador++;
contador--;

console.log(variable == 5);
console.log(variable != 5);

console.log(variable === 5);
console.log(variable !== 5); 

console.log(3 > 5); //mayor que
console.log(3 < 5); //menor que*/



/*console.log(variable == 5 && 3 >5); //mayor que
console.log(variable == 5 || 3 < 5);

if(!variable == 5){
    console.log("Entra al if");
} else if(variable == 9){
    console.log("Entra al segundo if");
}else{
    console.log("no cumple if");
}*/

var variable = 1;
variable = "5";
variable = Math.PI;

switch (variable){
    case "5":
        console.log("El valor de la variable es 5");
        break;

        case Math.PI:
            console.log("El valor de la variable es 3.1416");
            break;
        default :
        console.log("No paso ninguna validaciòn");
        break;
}