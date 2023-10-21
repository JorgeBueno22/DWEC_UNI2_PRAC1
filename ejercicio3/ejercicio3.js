const equipos = ["Alavés", "At. Madrid", "Barcelona", "Real Madrid", "Sevilla", "Valencia", "Villarreal", "Real Sociedad", "Real Betis", "Levante", "Celta Vigo", "Eibar", "Getafe", "Real Valladolid", "Mallorca", "Osasuna", "Espanyol", "Huesca", "Granada"];

const simbolo = ["1", "X", "2"];

function generaSimbolo() {
  const indice = Math.floor(Math.random() * simbolo.length);
  return simbolo[indice];
}

function muestraEquipos(equipos) {
  const quinielas = new Array(equipos.length);
  for (let i = 0; i < equipos.length; i++) {
    quinielas[i] = new Array(equipos.length);
    for (let j = 0; j < equipos.length; j++) {
      if (i === j) {
        quinielas[i][j] = '-';
      } else {
        quinielas[i][j] = generaSimbolo();
      }
    }
  }
  return quinielas;
}

function imprimirMatriz(matriz) {
  for (let i = 0; i < matriz.length; i++) {
    console.log(matriz[i].join(" "));
  }
}

function consultarResultado(equipos, quinielas) {
  let continuar = true;
  while (continuar) {
    const equipo_local = prompt("Introduce el nombre del equipo local: ");
    const equipo_visitante = prompt("Introduce el nombre del equipo visitante: ");

    const localExist = equipos.includes(equipo_local);
    const visitanteExist = equipos.includes(equipo_visitante);

    if (localExist && visitanteExist) {
      const indiceLocal = equipos.indexOf(equipo_local);
      const indiceVisitante = equipos.indexOf(equipo_visitante);
      const resultado = quinielas[indiceLocal][indiceVisitante];

      console.log("Resultado: "+equipo_local +" vs "+ equipo_visitante+'-'+resultado);
    } else {
      console.log("Al menos uno de los equipos no existe en la lista.");
    }

    const respuesta = prompt("¿Desea realizar una nueva consulta? (S/N)").toUpperCase();
    if (respuesta !== "S") {
      continuar = false;
    }
  }
}

const quiniela = muestraEquipos(equipos);
imprimirMatriz(quiniela);

consultarResultado(equipos, quiniela);