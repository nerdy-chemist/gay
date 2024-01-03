const text = "nerdy.chemist";
let typingIndex = 0;
function typing() {
    if (typingIndex < text.length) {
        document.getElementById("class_1").innerHTML += text[typingIndex];
        typingIndex++;
        setTimeout(typing, 50);
    }
}
