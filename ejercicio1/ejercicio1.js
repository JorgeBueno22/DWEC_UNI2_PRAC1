var entrada = prompt("Escriba su frase");
var separador = "";

function separarPalabras() {
  var palabra = new Array();

  for (var i = entrada.length; i > 0; i--) {
    palabra.push(entrada.charAt(i - 1));
  }

  console.log(palabra.toString());
}

separarPalabras();
