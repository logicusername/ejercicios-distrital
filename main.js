let txtnumero = document.getElementById
("txtnumero")
let resultado = document.getElementById("txtresultado")
function binario(){
    let numero = parseInt(txtnumero.value)
    let binarioArray = []
    while (numero > 1){
        binarioArray.push(numero % 2)
        console.log(binarioArray)
        numero = Math.floor(numero/2)
        console.log(numero)
    }
    binarioArray.push(numero)
    let resultadoBinario = parseInt(binarioArray.reverse().join(""))

    return resultado.innerText = resultadoBinario
}
function octal(){
    let numero = parseInt(txtnumero.value)
    let octalArray = []
    while (numero > 1){
        octalArray.push(numero % 8)
        console.log(octalArray)
        numero = Math.floor(numero/8)
        console.log(numero)
    }
    octalArray.push(numero)
    let resultadoOctal = parseInt(octalArray.reverse().join(""))

    return resultado.innerText = resultadoOctal
}
function hexadecimal(){
    let numero = parseInt(txtnumero.value)
    let hexadecimalArray = []
    while (numero > 1){
        let hexadecimali = numero % 16
        if (hexadecimali < 10){
            hexadecimalArray.push(hexadecimali)
        }else if(hexadecimali === 15 ){
            hexadecimalArray.push("F")
        }else if(hexadecimali === 14 ){
            hexadecimalArray.push("E")
        }else if(hexadecimali === 13 ){
            hexadecimalArray.push("D")
        }else if(hexadecimali === 12 ){
            hexadecimalArray.push("C")
        }else if(hexadecimali === 11 ){
            hexadecimalArray.push("B")
        }else if(hexadecimali === 10 ){
            hexadecimalArray.push("A")
        }
        // hexadecimalArray.push(numero % 16)
        console.log(hexadecimalArray)
        numero = Math.floor(numero/16)
        console.log(numero)
    }
    hexadecimalArray.push(numero)
    let resultadoHexadecimal =  hexadecimalArray.reverse().join("")

    if(resultadoHexadecimal[0] === "0"){
        resultado.innerText = resultadoHexadecimal.slice(1)
    }else{
        resultado.innerText = resultadoHexadecimal
    }
}
let binarioUno = document.getElementById("txtbinario1") 
let binarioDos = document.getElementById("txtbinario2")

function sumaBinario(){
    let arrayBinarioUno = BigInt("0b" + binarioUno.value)
    let arrayBinarioDos = BigInt("0b" + binarioDos.value)

    let sumaBinaria = arrayBinarioUno + arrayBinarioDos;
    let resultadoBinaria = sumaBinaria.toString(2)
    return resultadoBinario.innerText = resultadoBinaria

    let arrayUno = binarioUno.value.split("").map((digit) => {
    return Number(digit);
    });

    let arrayDos = binarioDos.value.split("").map((digit) => {
    return Number(digit);
    });

    console.log(arrayUno);
    console.log(arrayDos);

    let arrayResultado = []
    
    if(arrayUno.length > arrayDos.length){
        for(let i = 0; i <= arrayUno.length; i++){
            if(arrayUno[i] + arrayDos[i] === 0){
                arrayResultado.push(0)
                console.log(arrayResultado)
            }
            if(arrayUno[i] + arrayDos[i] === 1){
                arrayResultado.push(1)
                console.log(arrayResultado)
            }
            if(arrayUno[i] + arrayDos[i] === 2){
                arrayResultado.push(0)
                console.log(arrayResultado)
            }
        }
    }
}
let octalUno = document.getElementById("txtoctal1") 
let octalDos = document.getElementById("txtoctal2")

function restaOctal(){
    let numeroOctalUno = parseInt(octalUno.value)
    let numeroOctalDos = parseInt(octalDos.value)

    let arrayOctalUno = String(numeroOctalUno).split("").map((numeroOctalUno)=>{
    return String(numeroOctalUno)
    })

    let arrayOctalDos = String(numeroOctalDos).split("").map((numeroOctalDos)=>{
    return String(numeroOctalDos)
    })
    let multiplicador = [];

    for(let i = 0 ; i <= arrayOctalUno.length ; i++){
        if (arrayOctalUno[i] < arrayOctalDos[i] ){
            multiplicador.push(1)
            
        }
        
    }

    console.log(arrayOctalUno)
    console.log(arrayOctalDos)
    let resto = parseInt(multiplicador.join("")) * 2 
    let resultadoRestaOctali = (numeroOctalUno - numeroOctalDos) - resto

    return resultadoRestaOctal.innerText = resultadoRestaOctali           
}

// -------------saludo nombre----------------
let inputNombre = document.getElementById("nombreUsuario")

function mostrarNombre(){

    let nombre1 = inputNombre.value
    return saludo.innerText = `hola ${nombre1}`
}
// ----------perimetro rectangulo------
let baseRectangulo = document.getElementById("baseRectangulo")
let alturaRectangulo = document.getElementById("alturaRectangulo")

function calculoPerimetroRectangulo() {
    let baseRecta = parseInt(baseRectangulo.value)

    let alturaRecta = parseInt(alturaRectangulo.value)
    
    resultadoPerimetro = baseRecta + baseRecta + alturaRecta + alturaRecta

    resultadoArea = baseRecta * alturaRecta

    return resultadoPerimetroRectangulo.innerText = `el perimetro del rectangulo es ${resultadoPerimetro} y el area es ${resultadoArea}`
}
// --------calculo hipotenusa------------
let catetoA = document.getElementById("catetoA")
let catetoB= document.getElementById("catetoB")

function calculoHipotenusaRectangulo() {
    let primerCateto = parseInt(catetoA.value)

    let segundoCateto = parseInt(catetoB.value)
    
    resultadoHipotenusa = (primerCateto * primerCateto) + (segundoCateto * segundoCateto)

    return resultadoHipotenusaRectangulo.innerText = `la hipotenusa es ${resultadoHipotenusa}`
}
// ----------calculo par/impar--------
let numeroPar = document.getElementById("numeroPar")
function calculoPar(){
    let numeroImpar = parseInt(numeroPar.value)
    
    if( numeroImpar % 2 === 0){
        resultadoPar.innerText = `el numero ingresado es par`
    }else{
        resultadoPar.innerText = `el numero ingresado es impar`
    }
}
// ----------calculo mayor/menor--------
let edad = document.getElementById("edad")

function calculoEdad(){
    let edadMayor = parseInt(edad.value)
    
    if( edadMayor >= 18 ){
        resultadoEdad.innerText = `usted es mayor de edad`
    }else{
        resultadoEdad.innerText = `usted es menor de edad`
    }
}
// ----------calculo pasajes--------
let estudiantes = document.getElementById("estudiantes")

function calculoEstudiantes(){

    let pasajesEstudiantes = parseInt(estudiantes.value)
    
    if( pasajesEstudiantes >= 100 ){

        let totalPasaje = 65 * pasajesEstudiantes

        resultadoPasaje.innerText = `cada alumno tiene que pagar un pasaje de 65 euros el costo total es de ${totalPasaje} euros`

    }else if (pasajesEstudiantes >= 50 && pasajesEstudiantes < 100) {
        
        let totalPasaje = 70 * pasajesEstudiantes

        resultadoPasaje.innerText = `cada alumno tiene que pagar un pasaje de 70 euros el costo total es de ${totalPasaje} euros`
        
    }else if (pasajesEstudiantes >= 30 && pasajesEstudiantes < 50) {
        
        let totalPasaje = 95 * pasajesEstudiantes

        resultadoPasaje.innerText = `cada alumno tiene que pagar un pasaje de 95 euros el costo total es de ${totalPasaje} euros`
        
    } else {
        let totalPasaje = Math.round(4000 / pasajesEstudiantes)

        resultadoPasaje.innerText = `cada alumno tiene que pagar un pasaje de ${totalPasaje} euros el costo total es de 4000 euros`
    }
}
let factorial = document.getElementById("factorial")

function calculoFactorial() {
    
    let factor = parseInt(factorial.value)

    let variable = 1;

    for(let i = 1; i <= factor; i++ ){
        variable = variable * i
    }
    return resultadoFactorial.innerText = `el factorial del numero ingresado es ${variable}`
}