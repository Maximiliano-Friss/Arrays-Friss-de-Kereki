let aforo = parseInt(prompt("Ingresar capacidad máxima de la sala de teatro."));
let validacionAforo = true;

while (validacionAforo) {
    if (isNaN(aforo)) {
        aforo = parseInt(prompt("El valor ingresado no es correcto. Ingresa la capacidad máxima de la sala de teatro."));
    } else if (aforo === 0) {
        aforo = parseInt(prompt("El valor ingresado debe ser mayor a cero. Ingresa la capacidad máxima de la sala de teatro."));
    } else {
        validacionAforo = false;
    }
}

let maximo = parseInt(prompt("Ingrese el número máximo de personas por compra."));
let validacionMaximo = true;

while (validacionMaximo) {
    if (isNaN(maximo)) {
        maximo = parseInt(prompt("El valor ingresado no es correcto. Ingresa el número máximo de personas por compra."))
    } else if (maximo === 0) {
        maximo = parseInt(prompt("El valor ingresado debe ser mayor a cero. Ingresa el número máximo de personas por compra."))
    } else {
        validacionMaximo = false;
    }
}

//SE DECLARA EL ARRAY.
const grupoDePersonas = [];

for (let i = 1; i <= maximo; i++) {
    grupoDePersonas.push(i);
}

function aforoDisponible() {
    return aforo > 0;
}

const genteAIngresar = () => Math.floor(Math.random()*grupoDePersonas.length);
const ingresanEspectadores = (grupoDeGente) => aforo -= grupoDeGente;

while (aforoDisponible()) {
    let cuantosIngresan = grupoDePersonas[genteAIngresar()];

    if (aforo >= cuantosIngresan) {
        ingresanEspectadores(cuantosIngresan);
        console.log(`${cuantosIngresan !==1 ? `Se venden ${cuantosIngresan} entradas.` : `Se vende 1 entrada.`} ${aforoDisponible() ? `El total de entradas disponibles es: ${aforo}.` : `El teatro está lleno.`}`)
    } else (
        console.log(`No hay suficientes localidades para un grupo de ${cuantosIngresan} personas. Solamente quedan ${aforo} lugares.`)
    )
}

console.log ("Localidades agotadas. La función está por comenzar...");


