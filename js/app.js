let screen = "";
const divScreen = document.getElementById("screen");
const buttons = document.getElementById("buttons").children;
const numButtons = buttons.length;

let updateScreen = () => {
    divScreen.innerHTML = screen;
    console.log(divScreen.innerHTML);
}

let number = (event) => {
    let currButton = event.target;
    screen += currButton.innerHTML;
    updateScreen();
}

let symbol = (event) => {
    let currButton = event.target;
    screen += ` ${currButton.innerHTML} `;
    updateScreen();
}

//Add event listener buttons
for (var i = 0; i < numButtons; i++) {
    if (buttons[i].classList.contains("number"))
        buttons[i].addEventListener("click", number);
    else if (buttons[i].classList.contains("symbol"))
        buttons[i].addEventListener("click", symbol);
    // else if (buttons[i].classList.contains("brackets"))
    //     buttons[i].addEventListener("click", brackets);
    // else if (buttons[i].classList.contains("dot"))
    //     buttons[i].addEventListener("click", dot);
    // else if (buttons[i].classList.contains("del"))
    //     buttons[i].addEventListener("click", del);
}




