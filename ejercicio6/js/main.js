var numberUser = parseInt(prompt("Introduce tu numero"));

function mostrandoCifras(numberUser) {
    if (numberUser < 0) {
        alert(`${numberUser} tienes que introducir numero entero positivo`)
    } else if (numberUser == 0) {
        alert(`${numberUser} tienes que introducir numero entero positivo`)
    } else {
        var contandoNumero = numberUser.toString();
        alert(`El ${numberUser} tiene ${contandoNumero.length} cifras`)
    }

}

mostrandoCifras(numberUser)
    // function validar(numberUser) {
    //     if (isNaN(numberUser) = false) {
    //         alert(`${numberUser} tienes que introducir numero entero positivo`)
    //     } else if (numberUser == 0) {
    //         alert(`${numberUser} tienes que introducir numero entero positivo`)
    //         return false
    //     } else {
    //         return true
    //     }
    //     return true
    // }

// function mostrandoCifras(numberUser) {
//     var contandoNumero = numberUser.length;
//     alert(`El ${numberUser} tiene ${contandoNumero} cifras`)
// }


// mostrandoCifras(numberUser)