function saludo(){  
    let nombre=prompt(`Hola, cuál es tu nombre?`)
    let respuesta=prompt(`Hola ${nombre}, cómo estás?: bien o mal`);
    if (respuesta=="bien"){
        alert("que bueno!");
    } else {
        alert("que mal");
    }
    return "La función se ha ejecutado correctamente";
}

function suma(num1,num2){
    let res=num1+num2;
    return res
}

saludo()
saludo()
let salida=saludo();

document.write(salida+"<br>")

let resultado=suma(2,5);
document.write(`El resultado de la suma es ${resultado}`+"<br>");

const saludar=function(nombre){
    let frase=`Hola ${nombre}, ¿cómo estás?`;
    document.write(frase)
}

saludar('Paco')

const multiplicar = (num1,num2) => {
    let prod=num1*num2;
    return prod;
}

let n1=prompt ("introduce el número 1");
let n2=prompt("introduce el número 2");
let product=multiplicar(n1,n2);

document.write("<br>"+`El producto de ${n1} y ${n2} es ${product}`)