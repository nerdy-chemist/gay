const text = "nerdy.chemist";
let typingIndex = 0;
function typing() {
    if (typingIndex < text.length) {
        document.getElementById("willkommen_text").innerHTML += text[typingIndex];
        typingIndex++;
        setTimeout(typing, 50);
    }
}
