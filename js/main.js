//Sucesión de fibonacci

let numero = parseInt(prompt("Introduce cuantos valores de la serie deseas generar"));

function serieFibonacci(numero) {
    let fibonacci = [];
    fibonacci[0] = 0;
    fibonacci[1] = 1;
    for (let i = 2; i < numero; i++) {
      fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
    }
    return fibonacci;
    }
    let f = serieFibonacci(numero);
    alert(f);
    console.log(f);