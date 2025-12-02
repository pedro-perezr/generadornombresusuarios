let nombre = prompt("Ingresa tu nombre:");
let apellido = prompt("Ingresa tu apellido:");

// Ingreso de nombres
let inicial = nombre.slice(0, 1).toLowerCase();
let tresLetrasApellido = apellido.slice(0, 3).toLowerCase();

// Numero random
let numeroAleatorio = Math.floor(Math.random() * 90) + 10;

// Resultado
let nombreUsuario = inicial + tresLetrasApellido + numeroAleatorio;

console.log(`Tu nuevo nombre de usuario es: ${nombreUsuario}`);