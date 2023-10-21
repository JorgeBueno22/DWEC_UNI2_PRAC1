function generaAleatorio(min, max) {
  return Math.round(Math.random() * (max - min + 1) + min);
}

function generaNAleatorios(cantidad, min, max) {
  const numerosGenerados = [];
  for (let i = 0; i < cantidad; i++) {
    numerosGenerados.push(generaAleatorio(min, max));
  }
  return numerosGenerados;
}

function simularLoteria() {
  const cantidadDecimos = parseInt(
    prompt("Ingrese la cantidad de décimos a generar:")
  );

  if (isNaN(cantidadDecimos) || cantidadDecimos <= 0) {
    alert("Por favor, ingrese un número entero positivo");
    return;
  }

  const decimos = generaNAleatorios(cantidadDecimos, 0, 99999);

  let intentos = 0;
  const maxIntentos = 999999;

  while (intentos < maxIntentos) {
    const numeroAleatorio = generaAleatorio(0, 99999);
    intentos++;

    if (decimos.includes(numeroAleatorio)) {
      alert(
        "El número " +
          numeroAleatorio +
          " coincide con uno de los décimos generados inicialmente."
      );
      alert(
        "Se necesitaron " +
          intentos +
          "intentos para encontrar una coincidencia."
      );
      break;
    }
  }

  if (intentos == maxIntentos) {
    alert("Se han agotado los intentos sin encontrar una coincidencia.");
  }
}

simularLoteria();
