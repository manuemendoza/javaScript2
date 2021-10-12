var numero = Number(prompt("¿Cuanto quieres cambiar?"));
var divisa = prompt("¿Qué divisa Necesítas ( libra , dolar , yen )?")
const lib = 0.86;
const dolares = 1.28611;
const yenes = 129.852;

function conversor(numero, divisa) {
    console.log(numero, divisa);

    switch (divisa) {
        case "libra":
            alert(numero + "€ son " + (lib * numero) + "£")
            break;
        case "dolar":
            alert(numero + "€ son " + (dolares * numero) + "$")
            break;
        case "yen":
            alert(numero + "€ son " + (yenes * numero) + "£")
            break;
        default:
            alert('No Tenemos esa divisa')
            break;
    }
}

conversor(numero, divisa)