function procesarDatos() {
    var a = parseInt(document.getElementById("input1").value);
    var b = parseInt(document.getElementById("input2").value);
    var c = parseInt(document.getElementById("input3").value);
    var resultado = document.getElementById("resultado");

    if (a === 0) {
        document.writeln("no es una funcion ");
        return;
    }

    discriminante = b * b - 4 * a * c;

    if (discriminante > 0) {
        const x1 = (-b + Math.sqrt(discriminante)) / (2 * a);
        const x2 = (-b - Math.sqrt(discriminante)) / (2 * a);
        document.writeln("Dos raíces reales: x1 = " + x1 + ", " + "x2 = " + x2);
    } else if (discriminante === 0) {
        /* si es igual a 0, tiene una unica solución */
        const x = -b / (2 * a);
        document.writeln("Una sola raíz real: x = " + x)
    } else { /*en caso de no tiene raices reales*/
        document.writeln("No se puede resolver");
    }
}

