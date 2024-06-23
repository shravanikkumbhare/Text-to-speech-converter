let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector("select");
let playButton = document.getElementById("play");
let cancelButton = document.getElementById("cancel");
let pauseButton = document.getElementById("pause");
let resumeButton = document.getElementById("resume");
let clearButton = document.getElementById("clear");
let speedSelect = document.getElementById("speed");

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voiceSelect.innerHTML = "";

    voices.forEach((voice, i) => {
        const option = new Option(voice.name, i);
        voiceSelect.appendChild(option);
    });
};

voiceSelect.addEventListener("change", () => {
    speech.voice = voices[voiceSelect.value];
});

playButton.addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});

cancelButton.addEventListener("click", () => {
    window.speechSynthesis.cancel();
});

pauseButton.addEventListener("click", () => {
    window.speechSynthesis.pause();
});

resumeButton.addEventListener("click", () => {
    window.speechSynthesis.resume();
});

clearButton.addEventListener("click", () => {
    document.querySelector("textarea").value = "";
    window.speechSynthesis.cancel();
});

speedSelect.addEventListener("change", () => {
    speech.rate = parseFloat(speedSelect.value);
});

playButton.addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
    speech.rate = parseFloat(speedSelect.value);
    window.speechSynthesis.speak(speech);
});

