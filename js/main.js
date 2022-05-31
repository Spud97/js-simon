let numeriDaRicordare = [];
let numeriUtente = [];
let numeriIndovinati = [];
const listaNumeri = document.getElementById("box");
let secondi = 30;

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
  if (!numeriDaRicordare.includes(result)) {
    numeriDaRicordare.push(result);
  }
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

function askNumbers() {
  while (numeriUtente.length < 5) {
    let answer = prompt("Inserisci i numeri uno alla volta.");
    let answerN = parseInt(answer);

    // NON FUNZIONA!!!!!
    if ((answer === NaN || answer > 99 || answer < 0)) {
      alert("Quello non è un numero valido!");
    } else {
      numeriUtente.push(answerN);
    }
  }
  console.log(numeriUtente);
}

setTimeout(askNumbers, 30100);

function controllo() {
  for (i = 0; i < numeriUtente.length; i++) {
    if (numeriDaRicordare.includes(numeriUtente[i])) {
      numeriIndovinati.push(numeriUtente[i]);
    }
  }

  console.log(numeriIndovinati);
  alert(
    "Hai ricordato " +
      numeriIndovinati.length +
      " numeri e sono i seguenti: " +
      numeriIndovinati
  );
}

setTimeout(controllo, 31000);
