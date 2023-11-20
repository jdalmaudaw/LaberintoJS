/**
 * En aquest script implementarem un joc on l'usuari podrà escollir un laberint d'un llistat i intentar resoldre'l
 *
 * Autor: Jordi Dalmau Linde
 */

const prompt = require("prompt-sync")({ sigint: true });

let eleccioLab;
let eleccioMenu;
let contadorCasillas = 0;
let a = [false, false, false];
let flag = false;

let laberintos = [
  [
    ["#", "#", "#", "#", "#", "#"],
    ["#", "u", " ", "#", " ", "o"],
    ["#", "#", " ", " ", " ", "#"],
    ["#", "#", "#", "#", "#", "#"],
  ],
  [
    ["#", "#", "#", "#", "#", "#", "#", "#"],
    ["#", "u", " ", "#", " ", " ", " ", "#"],
    ["#", "#", " ", "#", " ", "#", " ", "#"],
    ["#", "#", " ", "#", " ", "#", " ", "#"],
    ["#", "#", " ", " ", " ", "#", "o", "#"],
    ["#", "#", "#", "#", "#", "#", "#", "#"],
  ],
  [
    ["#", "#", "#", "#", "#", "#", "#", "#", "#", "#"],
    ["#", "u", " ", "#", " ", " ", " ", "#", "o", "#"],
    ["#", " ", " ", " ", " ", "#", " ", "#", " ", "#"],
    ["#", " ", "#", " ", " ", "#", " ", " ", " ", "#"],
    ["#", "#", "#", "#", " ", "#", " ", "#", " ", "#"],
    ["#", " ", "#", " ", " ", "#", " ", "#", " ", "#"],
    ["#", " ", " ", " ", " ", " ", " ", "#", " ", "#"],
    ["#", "#", "#", "#", "#", "#", "#", "#", "#", "#"],
  ],
];

while (eleccioLab != 4) {
  eleccioLab = Number.parseInt(
    prompt(
      console.log(
        "------------------------------------\n" +
          "|          Laberint APP            |\n" +
          "|                                  |\n" +
          "|      1. Laberint de Terra        |\n" +
          "|      2. Laberint de Aigua        |\n" +
          "|      3. Laberint Infernal        |\n" +
          "|                                  |\n" +
          "|      4. Sortir                   |\n" +
          "|                                  |\n" +
          "------------------------------------\n"
      )
    )
  );

  if (eleccioLab - 1 == 4) {
    console.log("Adios!");
    break;
  }

  do {
    eleccioMenu = Number.parseInt(
      prompt(
        console.log(
          "------------------------------------\n" +
            "|          Laberint APP            |\n" +
            "|                                  |\n" +
            "|      1. Veure Laberint           |\n" +
            "|      2. Jugar el laberint        |\n" +
            "|      3. Tornar enrere            |\n" +
            "|                                  |\n" +
            "------------------------------------\n"
        )
      )
    );
    console.clear();

    // 1. Ver Laberinto
    while (eleccioMenu === 1) {
      console.log("AQUEST ES EL LABERINT QUE HAS ESCOLLIT: \n");
      console.log();

      for (let i = 0; i < laberintos[eleccioLab - 1].length; i++) {
        let element = laberintos[eleccioLab - 1][i].join(" ");
        console.log(element);
      }

      prompt("\n  PULSA ENTER PER CONTINUAR: ");
      break;
    }

    // 2. Jugar Laberinto
    let pasos = 0;
    while (eleccioMenu === 2) {
      if (!flag) {
        if (
          eleccioLab - 1 === 0 ||
          eleccioLab - 1 === 1 ||
          eleccioLab - 1 === 2
        ) {
          //Contador casillas diferentes a #
          for (let i = 0; i < laberintos[eleccioLab - 1].length; i++) {
            for (let j = 0; j < laberintos[eleccioLab - 1][i].length; j++) {
              if (laberintos[eleccioLab - 1][i][j] !== "#") {
                contadorCasillas++;
                console.log(contadorCasillas);
                a[eleccioLab - 1] = contadorCasillas;
              }
            }
          }
        }
      }
      contadorCasillas = 0;
      flag = true;

      for (let i = 0; i < laberintos[eleccioLab - 1].length; i++) {
        let laberinto = laberintos[eleccioLab - 1][i].join(" ");
        console.log(laberinto);
      }
      console.log();
      console.log("1. Nord");
      console.log("2. Est");
      console.log("3. Sud");
      console.log("4. Oest");

      let moviment;
      moviment = prompt("\n Moviment: ");

      // Movimientos

      // ARRIBA
      if (moviment == 1) {
        for (let i = 0; i < laberintos[eleccioLab - 1].length; i++) {
          for (let j = 0; j < laberintos[eleccioLab - 1][i].length; j++) {
            if (laberintos[eleccioLab - 1][i][j] === "u") {
              if (laberintos[eleccioLab - 1][i - 1][j] === "#") {
                console.log("ERROR, es una pared!");
                eleccioMenu = 2;
              } else if (laberintos[eleccioLab - 1][i - 1][j] === " ") {
                laberintos[eleccioLab - 1][i][j] = " ";
                laberintos[eleccioLab - 1][i - 1][j] = "u";
              } else {
                console.log(
                  "Enhorabuena! Lo has conseguido en " + pasos + " pasos."
                );
                prompt("\n  PULSA ENTER PER CONTINUAR: ");
                laberintos[eleccioLab - 1][i][j] = " ";
                laberintos[eleccioLab - 1][1][1] = "u";
                console.clear();
                eleccioMenu = 3;
              }
            }
          }
        }
      }

      // DERECHA
      else if (moviment == 2) {
        for (let i = 0; i < laberintos[eleccioLab - 1].length; i++) {
          for (let j = 0; j < laberintos[eleccioLab - 1][i].length; j++) {
            if (laberintos[eleccioLab - 1][i][j] === "u") {
              if (laberintos[eleccioLab - 1][i][j + 1] === "#") {
                console.log("ERROR, es una pared!");
                eleccioMenu = 2;
              } else if (laberintos[eleccioLab - 1][i][j + 1] === " ") {
                laberintos[eleccioLab - 1][i][j] = " ";
                laberintos[eleccioLab - 1][i][(j += 1)] = "u";
              } else {
                console.log(
                  "Enhorabuena! Lo has conseguido en " + pasos + " pasos."
                );
                prompt("\n  PULSA ENTER PER CONTINUAR: ");
                laberintos[eleccioLab - 1][i][j] = " ";
                laberintos[eleccioLab - 1][1][1] = "u";
                console.clear();
                eleccioMenu = 3;
              }
            }
          }
        }
      }

      // SUD
      else if (moviment == 3) {
        for (let i = 0; i < laberintos[eleccioLab - 1].length; i++) {
          for (let j = 0; j < laberintos[eleccioLab - 1][i].length; j++) {
            if (laberintos[eleccioLab - 1][i][j] === "u") {
              if (laberintos[eleccioLab - 1][i + 1][j] === "#") {
                console.log("ERROR, es una pared!");
                eleccioMenu = 2;
              } else if (laberintos[eleccioLab - 1][i + 1][j] === " ") {
                laberintos[eleccioLab - 1][i][j] = " ";
                laberintos[eleccioLab - 1][(i += 1)][j] = "u";
              } else {
                console.log(
                  "Enhorabuena! Lo has conseguido en " + pasos + " pasos."
                );
                prompt("\n  PULSA ENTER PER CONTINUAR: ");
                laberintos[eleccioLab - 1][i][j] = " ";
                laberintos[eleccioLab - 1][1][1] = "u";
                console.clear();
                eleccioMenu = 3;
              }
            }
          }
        }
      }

      // IZQUIERDA
      else if (moviment == 4) {
        for (let i = 0; i < laberintos[eleccioLab - 1].length; i++) {
          for (let j = 0; j < laberintos[eleccioLab - 1][i].length; j++) {
            if (laberintos[eleccioLab - 1][i][j] === "u") {
              if (laberintos[eleccioLab - 1][i][j - 1] === "#") {
                console.log("ERROR, es una pared!");
                eleccioMenu = 2;
              } else if (laberintos[eleccioLab - 1][i][j - 1] === " ") {
                laberintos[eleccioLab - 1][i][j] = " ";
                laberintos[eleccioLab - 1][i][j - 1] = "u";
              } else {
                console.log(
                  "Enhorabuena! Lo has conseguido en " + pasos + " pasos."
                );
                prompt("\n  PULSA ENTER PER CONTINUAR: ");
                laberintos[eleccioLab - 1][i][j] = " ";
                laberintos[eleccioLab - 1][1][1] = "u";
                console.clear();
                eleccioMenu = 3;
              }
            }
          }
        }
      }

      if (a[eleccioLab - 1] <= pasos) {
        console.log("Has fet " + pasos + " pasos, has perdut.");
        prompt("\n  PULSA ENTER PER CONTINUAR: ");
        laberintos[eleccioLab - 1][i][j] = " ";
        laberintos[eleccioLab - 1][1][1] = "u";
        console.clear();
        eleccioMenu = 3;
      }
      pasos++;
      console.log(a[eleccioLab - 1], pasos);
    }
  } while (eleccioMenu != 3);
}
