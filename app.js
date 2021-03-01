const btnStartRecord = document.getElementById('btnStartRecord');
const btnStopRecord = document.getElementById('btnStopRecord');
const textPlace = document.getElementById('textPlace');
const clear = document.getElementById('clearBtn');
const russian = document.getElementById("russian");
const english = document.getElementById("english");
const uzbek = document.getElementById("uzbek");

let recognition = new webkitSpeechRecognition();
recognition.lang = 'uz';
recognition.continuous = true;
recognition.interimResults = false;

russian.addEventListener('click', () => {
    recognition.lang = 'ru';
})

english.addEventListener("click", () => {
    recognition.lang = 'en';
})

uzbek.addEventListener('click', () => {
    recognition.lang = 'uz';
})

clear.addEventListener('click', () => {
    textPlace.value = "";
})

recognition.onresult = (event) => {
    const results = event.results;
    const frase = results[results.length - 1][0].transcript;
    textPlace.value += frase
}


btnStartRecord.addEventListener('click', () => {
    recognition.start();
})


btnStopRecord.addEventListener('click', () => {
    recognition.abort();
})


playText.addEventListener('click', () => {
    leerTexto(texto.value);
}
);

function leerTexto(texto) {
    const speech = new SpeechSynthesisUtterance();
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
}

//  CRYPTON. DEVELOPERS : ZAFAR, rapCoder