const display = document.getElementById('display');

function appendToDisplay(input) {
    if (display.value === "Error" || display.value === "undefined") {
        display.value = "";
    }
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        // Evaluate the expression safely
        // Using eval here for simplicity in this specific educational context
        // as we are building a simple calculator. 
        // In a real production app, we would write a parser.
        // Replacing 'x' with '*' for multiplication visual if needed, 
        // but we will use * in the button onclick for now.
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}

function calculateSquare() {
    try {
        const value = parseFloat(display.value);
        if (isNaN(value)) {
            display.value = "Error";
        } else {
            display.value = value * value;
        }
    } catch (error) {
        display.value = "Error";
    }
}

function calculateCube() {
    try {
        const value = parseFloat(display.value);
        if (isNaN(value)) {
            display.value = "Error";
        } else {
            display.value = value * value * value;
        }
    } catch (error) {
        display.value = "Error";
    }
}

// Keyboard support
document.addEventListener('keydown', (event) => {
    const key = event.key;
    if (/[0-9]/.test(key)) {
        appendToDisplay(key);
    } else if (['+', '-', '*', '/'].includes(key)) {
        appendToDisplay(key);
    } else if (key === 'Enter') {
        calculate();
    } else if (key === 'Backspace') {
        display.value = display.value.slice(0, -1);
    } else if (key === 'c' || key === 'C') {
        clearDisplay();
    }
});
