const decrementbtn = document.getElementById("decrementbtn");
const incrementbtn = document.getElementById("incrementbtn");
const resetbtn = document.getElementById("resetbtn");
const displayValue = document.getElementById("displayValue");

decrementbtn.addEventListener("click", () => {
    const value = Number(displayValue.innerText);
    if (value > 0) {
        displayValue.innerText = value - 1;
    }
    else {
        alert("Negative value not allowed");
    }
});

// for increment button

incrementbtn.addEventListener("click", () => {
    const value = Number(displayValue.innerText);
    if(value >=15) {
        alert("15+ values are not allowed");
    }
    else {
        displayValue.innerText = value + 1;
    }
});

// for reset button

resetbtn.addEventListener("click", () => {
    displayValue.innerText = 0;
});
