const text = "Herzlichen Wilkomen \nzu mein Präsentation über \nNürnberger Prozese";
let typingIndex = 0;
const colors = ["red","red","red"]
function typing() {
    if (typingIndex < text.length) {
        document.getElementById("willkommen_text").innerHTML += text[typingIndex];
        typingIndex++;
        setTimeout(typing, 50);
    }
}

let numb = 1; // Initialize numb to 1 for the background image

function slide_main_page() {
    numb++;
    if (numb > 3) {
        numb = 1; // Reset numb when it reaches 4
    }
    const imageUrl = `url('../nurnburger_prozes/${numb}.jpg')`;
    document.body.style.backgroundImage = imageUrl;
    document.getElementById("willkommen_text").style.color = colors[numb-1];
    setTimeout(slide_main_page, 3000);
};

function openAnotherFile() {
    window.location.href = '../nurnburger_prozes/p1.html';
};