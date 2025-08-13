let line1 = document.querySelector("#line1")
let line2 = document.querySelector("#line2")
const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];

let length = 15;
let N = characters.length

function generatePwd() {
let result = ""
    for (let a = 0; a < length; a++) {
        let randomIndex = Math.floor(Math.random() * N);
        result += characters[randomIndex];
    }
    line1.textContent = result;
    line2.textContent = result;

}

line1.addEventListener("click", function () {
    if (line1.textContent.trim() !== "") {
        navigator.clipboard.writeText(line1.textContent).then(() => {
            alert("Password copied: " + line1.textContent);
        });
    }
});

line2.addEventListener("click", function () {
    if (line2.textContent.trim() !== "") {
        navigator.clipboard.writeText(line2.textContent).then(() => {
            alert("Password copied: " + line2.textContent);
        });
    }
});





