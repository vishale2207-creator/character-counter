
const message = document.getElementById("message");
const count = document.getElementById("count");
const remaining = document.getElementById("remaining");
const progressBar = document.getElementById("progressBar");
const warning = document.getElementById("warning");

const maxCharacters = 200;

message.addEventListener("input", function () {

    const typed = message.value.length;
    const left = maxCharacters - typed;
    const percentage = (typed / maxCharacters) * 100;

    count.textContent = typed;
    remaining.textContent = left + " remaining";

    progressBar.style.width = percentage + "%";

    if (left === 0) {
        warning.textContent = "Character limit reached!";
        progressBar.style.backgroundColor = "#dc2626";
    } else if (left <= 20) {
        warning.textContent = "Only " + left + " characters left!";
        progressBar.style.backgroundColor = "#f59e0b";
    } else {
        warning.textContent = "";
        progressBar.style.backgroundColor = "#6366f1";
    }

})
