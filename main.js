// let titulo = document.getElementById('titulo')
// let buton = document.getElementById('buton')
// let input = document.getElementById('input')
// let mostrar = document.getElementById('mostar')

// const cambiar = () =>{
//     titulo.innerHTML = "Ahora soy un perrito"
// };

// buton.addEventListener('click',cambiar);
// //----------------------------------------

// const cambiarinput = () =>{
//     let textoinput = input.value
//     mostrar.innerHTML = textoinput
// };
// buton.addEventListener('click', cambiarinput)

// //--------------------------------------------------
// //Un formulario que pregunte:
// //Nombre:
// //Edad:
// //si le gusa la pizza con piña o no
// //con un boton lo pinte en el Html

let nombre = document.getElementById('nombre')
let edad = document.getElementById('edad')
let gusto = document.getElementById('gusto')
//--------
let mostrarNombre = document.getElementById('mostrarNombre')
let mostrarEdad = document.getElementById('mostrarEdad')
let mostrarGusto = document.getElementById('mostrarGusto')
//-------------------
let siguiente = document.getElementById('siguiente')

const guardar = ()=>{

    let textoNombre = nombre.value
    let textoEdad = edad.value
    let textoGusto = gusto.value

    mostrarNombre.innerHTML = textoNombre
    mostrarEdad.innerHTML = textoEdad
    mostrarGusto.innerHTML= textoGusto
}

siguiente.addEventListener('click', guardar)

//gusto si = !!-!! y si dice que no  = <3

// usen boostrao para los inputs y la tarjeta que va a mostar la informacion

//Ricardo Kelebra

