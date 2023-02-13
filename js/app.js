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
    screen = typeof (screen) === "number" ? screen.toString() : screen;
    let lastChar = screen ? screen.charAt(screen.length - 1) : "";
    let isSymbol = symbols.includes(currButton.innerHTML)

    if (isNaN(Number(screen)) && symbols.includes(lastChar) && isSymbol) {
        return;
    }
    else if (lastChar === " " && isSymbol) {
        screen = screen.replace(screen.substring(screen.length - 3),"");
        updateScreen();
    }
    
    if (isSymbol)
        screen += ` ${currButton.innerHTML} `;
    else
        screen += `${currButton.innerHTML}`;
        
    updateScreen();
}

let brackets = () => {
    screen = typeof (screen) === "number" ? screen.toString() : screen;

    let lastChar = screen.charAt(screen.length - 1);
    let bracket = "(";
    
    let countOpenBrack = screen.includes("(") ? screen.match(/\(/g).length : 0;
    let countCloseBrack = screen.includes(")") ? screen.match(/\)/g).length : 0;
    let pairBrackets = countOpenBrack - countCloseBrack;

    if (pairBrackets >= 1 && lastChar !== "(" && (!isNaN(lastChar) || lastChar === ")")) {
        bracket = ")";
    }

    screen += bracket;
    updateScreen();
}

let result = () => {
    screen = eval(screen);
    updateScreen();
}

let del = () => {
    if (screen.slice(-1) == " ")
        screen = screen.slice(0, screen.length - 3);
    else
        screen = screen.slice(0, screen.length - 1);
    
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
    else if (buttons[i].classList.contains("brackets"))
        buttons[i].addEventListener("click", brackets);
    else if (buttons[i].classList.contains("result"))
        buttons[i].addEventListener("click", result);
    else if (buttons[i].classList.contains("del"))
        buttons[i].addEventListener("click", del);
    else if (buttons[i].classList.contains("clear"))
        buttons[i].addEventListener("click", clear);
}




