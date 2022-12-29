const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const errorMessage = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");

const availableNotes = [2000, 500, 100, 20, 10, 5, 1]

function calculateChange(returningAmount) {
    for (let i = 0; i <= availableNotes.length; i++) {
        const numberOfNotes = Math.trunc(returningAmount / availableNotes[i]);
        returningAmount %= availableNotes[i];
        noOfNotes[i].innerText = numberOfNotes;
    }
}

function hideMessage() {
    errorMessage.style.display = "none";
}

function showMessage(msg) {
    errorMessage.style.display = "block";
    errorMessage.innerHTML = msg;
}

checkButton.addEventListener('click', () => {
    hideMessage();
    if (billAmount.value > 0) {
        if (cashGiven.value >= billAmount.value) {
            const returningAmount = cashGiven.value - billAmount.value;
            calculateChange(returningAmount);
        } else {
            showMessage("Do you wanna wash plates?")
        }
    } else {
        showMessage("Invalid bill amount");
    }
})