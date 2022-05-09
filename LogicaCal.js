const clean = function(){
    document.getElementById("resultado").value = ""
    document.getElementById("a").value = ""
    document.getElementById("b").value = ""
}

const somar = function(){
    let a = document.getElementById("b").value
    let b = document.getElementById("b").value
    resultado = parseFloat(a) + parseFloat(b)
    document.getElementById("resultado").value = resultado
    console.log(resultadoz)
}
const diminuir = function(){
    let a = document.getElementById("a").value
    let b = document.getElementById("b").value
    resultado = parseFloat(a) - parseFloat(b)
    document.getElementById("resultado").value = resultado
    console.log(resultado)
}
const dividir = function(){
    let a = document.getElementById("a").value
    let b = document.getElementById("b").value
    resultado = parseFloat(a) / parseFloat(b)
    document.getElementById("resultado").value = resultado
    console.log(resultado)
}
const multiplicar = function(){
    let a = document.getElementById("a").value
    let b = document.getElementById("b").value
    resultado = parseFloat(a) * parseFloat(b)
    document.getElementById("resultado").value = resultado
    console.log(resultado)
}

const potencia = function(){
    let a = document.getElementById("a").value
    let b = document.getElementById("b").value
    resultado = Math.pow(a, b)
    document.getElementById("resultado").value = resultado
    console.log(resultado)
}

const raiz = function(){
    let a = document.getElementById("a").value
    let b = document.getElementById("b").value
    resultado = Math.sqrt(a)
    document.getElementById("resultado").value = resultado
    console.log(resultadoz)
}

const resto = function(){
    let a = document.getElementById("a").value
    let b = document.getElementById("b").value
    resultado = parseFloat(a) % parseFloat(b)
    document.getElementById("resultado").value = resultado
    console.log(resultado)
}