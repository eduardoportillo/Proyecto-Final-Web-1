let nombre       = document.getElementById('name');
let apellido     = document.getElementById('apellido');
let email        = document.getElementById('email');
let password     = document.getElementById('password');
let passwordRep  = document.getElementById('repit-password');
let error        = document.getElementById('error');

error.style.color = 'red';

let form = document.getElementById('form');

form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    
    
    console.log('Enviando Formulario');

    let mensajeError = [];

    if(nombre.value === null || nombre.value === ''){
        mensajeError.push('Ingresa un nombre');
    }

    if(apellido.value === null || apellido.value === ''){
        mensajeError.push('Ingresa una contraseña');
    }

    if (email.value === null || email.value === '') {
        mensajeError.push('Ingresa un email');
    }

    if (password.value === null || password.value === '') {
        mensajeError.push('Ingresa una contraseña');
    }

    if (password.value !== passwordRep.value) {
        mensajeError.push('la contraseña no son iguales');
    }



    error.innerHTML = mensajeError.join(', ');
})