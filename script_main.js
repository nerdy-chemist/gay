const text = "nerdy.chemist";
let typingIndex = 0;
function typing() {
    if (typingIndex < text.length) {
        document.getElementById("div_1").innerHTML += text[typingIndex];
        typingIndex++;
        setTimeout(typing, 50);
    }
}
