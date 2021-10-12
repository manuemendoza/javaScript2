var figura = prompt("¿que figura quieres calcular su area (la primera letra en mayusculas por favor)?");

function areas(figura) {
    switch (figura) {
        case "Circulo":
            var radio = Number(prompt("Introduzca radio"))
            console.log((radio ** 2) * Math.PI);
            break;
        case "Triangulo":
            var num1 = Number(prompt("Base"))
            var num2 = Number(prompt("Altura"))
            console.log((num1 * num2) / 2);
            break;
        case "Cuadrado":
            var num3 = Number(prompt("primer lado"));
            var num4 = Number(prompt("segundo lado"))
            console.log(num3 * num4);
            break;
        default:
            console.log("no es una figuara")
            break;
    }
}
areas(figura)