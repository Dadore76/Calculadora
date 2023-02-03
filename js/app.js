let screen = "";
const divScreen = document.getElementById("screen");
const buttons = document.getElementById("buttons").children;
const numButtons = buttons.length;
const symbols = ['+', '-', '*', , '/'];


let updateScreen = () => {
    divScreen.innerHTML = screen;
}

let button = (event) => {
    let currButton = event.target;
    let lastChar = screen ? screen.slice(-1) : "";
    let isSymbol = symbols.includes(currButton.innerHTML)

    if (isNaN(Number(screen)) && symbols.includes(lastChar) && isSymbol) {
        return;
    }
    else if (isNaN(Number(screen)) && isSymbol) {
        screen = eval(screen);
    }
    
    if (isSymbol)
        screen += ` ${currButton.innerHTML} `;
    else
        screen += `${currButton.innerHTML}`;
        
    updateScreen();
}

let result = () => {
    screen = eval(screen);
    updateScreen();
}

let del = () => {
    screen = screen.slice(0, screen.length -1);
    updateScreen();
}

let clear = () => {
    screen = "";
    updateScreen();
}

//Add event listener buttons
for (var i = 0; i < numButtons; i++) {
    if (buttons[i].classList.contains("button"))
        buttons[i].addEventListener("click", button);
    // else if (buttons[i].classList.contains("brackets"))
    //     buttons[i].addEventListener("click", brackets);
    else if (buttons[i].classList.contains("result"))
        buttons[i].addEventListener("click", result);
    else if (buttons[i].classList.contains("del"))
        buttons[i].addEventListener("click", del);
    else if (buttons[i].classList.contains("clear"))
        buttons[i].addEventListener("click", clear);
}




