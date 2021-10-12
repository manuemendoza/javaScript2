var numeroUser = Number(prompt("Introduce un numero"));
// numeroUser / 2 = ?
// 25 / 2 = 12
// var resultadoDivision  = numeroUser / 2
// 25 % 2 
// var binario = resultadoDivision % 2
var resultado;
//me da mal el resultado y no se porque 
function ResultadoBinario(numeroUser) {
    var primerNumero = numeroUser % 2;
    var segundo = numeroUser / 2
    resultado = [primerNumero];
    var i = 0;
    do {
        i++
        segundo = Math.floor(segundo / 2)
        var segundoBinario = segundo % 2
            //console.log(segundo);
        resultado.push(segundoBinario);
    } while (i <= segundo);
    console.log(resultado);


    // for (let i = (numeroUser / 2); i > 0; i--) {
    //     var segundos = i % 2
    //     resultado.push(i)
    //     console.log(i);
    //}
}
ResultadoBinario(numeroUser)