var num = Number(prompt('Introduce el numero'))

function factorial(num) {
    var total = 1;
    for (let i = 1; i <= num; i++) {
        total *= i
        console.log(i)
    }
    console.log(total);
}
// function factorial(num) {
//     for (num; num > 0; num--) {
//         let i = num
//         i *= num
//         console.log(i)
//     }
// }
// function factorial(num) {
//     let i = num
//     for (i; i > 0; num--) {
//         num *= i
//         console.log(num)
//     }
// }
factorial(num)