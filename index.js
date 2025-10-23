// Ülesanne: Vanuse analüüs

let õpilaseVanus;

mySubmit.onclick = function() {
    õpilaseVanus = myText.value;
    õpilaseVanus = Number(õpilaseVanus);

if (õpilaseVanus >= 7 && õpilaseVanus <=15) {
    resultElement.textContent = `Sa oled Põhikooli õpilane- söömine toimub kell 10!`;
}
else if (õpilaseVanus >=17 && õpilaseVanus <=20) {
    resultElement.textContent = `Sa oled gümnaasiumi õpilane- tule sööma kell 11!`;
}
else if (õpilaseVanus >20) {
    resultElement.textContent = `Täiskasvanud söövad kell 12!`;
}
else if (õpilaseVanus <7) {
    resultElement.textContent = `Sa oled liiga noor, et koolis käia. Mine lasteaeda tagasi!`;
}
else {
    resultElement.textContent = `Söömis aja kontrollimiseks sisesta palun oma vanus! See peab olema number.`;
}
}