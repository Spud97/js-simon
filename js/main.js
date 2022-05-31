let numeriDaRicordare = [];
let numeriUtente = [];
let numeriIndovinati = [];
const listaNumeri = document.getElementById("box");
let secondi = 3;

function generateRandomNumbers(min, max) {
  if (min === undefined || min === null || min < 0) {
    return;
  }

  if (max === undefined || max < min + 1) {
    return;
  }

  const result = Math.floor(Math.random() * (max - min + 1)) + min;

  return result;
}

while (numeriDaRicordare.length < 5) {
  result = generateRandomNumbers(1, 99);
  numeriDaRicordare.push(result);
}

console.log(numeriDaRicordare);

listaNumeri.innerHTML = `${numeriDaRicordare}`;

const timerSecondi = setInterval(function () {
  secondi--;

  if (secondi === 0) {
    clearInterval(timerSecondi);
    listaNumeri.innerHTML = ``;
  }
}, 1000);

setTimeout(askNumbers, 3000);

function askNumbers() {
  for (i = 0; i < 5; i++) {
    let answer = prompt("Inserisci i numeri uno alla volta.");

    // NON FUNZIONA!!!!!
    if (answer === isNaN || answer === null || answer < 0) {
      alert("Quello non è un numero!");
      return;
    }

    answerN = parseInt(answer);
    numeriUtente.push(answerN);
  }

  console.log(numeriUtente);
}
