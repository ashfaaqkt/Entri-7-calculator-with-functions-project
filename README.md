# Calculator Assignment

This project is built for the **Entri Elevate** assignment purpose.

**Assignment Details:**
*   **Student Name:** ashfaaq feroz muhammad
*   **Program:** Entri Elevate
*   **Assignment Number:** 7

## Project Overview
This is a web-based calculator application capable of performing basic arithmetic operations as well as square and cube functions.

## Components Used

The project is structured into three main parts: HTML for structure, CSS for styling, and JavaScript for functionality.

### 1. HTML (Structure)
The `index.html` file provides the skeleton of the application:
*   **Header Section:** Displays the student's name and assignment details.
*   **Display Screen:** An input field (`<input id="display">`) that shows the user's input and calculation results.
*   **Calculator Grid:** A container for all the interactive buttons.
*   **Buttons:**
    *   **Numeric Buttons:** 0-9 for inputting numbers.
    *   **Arithmetic Operators:** +, -, *, / for basic math.
    *   **Function Buttons:**
        *   `C` (Clear): Resets the display.
        *   `x²` (Square): Calculates the square of the displayed number.
        *   `x³` (Cube): Calculates the cube of the displayed number.
        *   `=` (Equals): Computes the result.

### 2. CSS (Styling)
The `style.css` file handles the visual presentation:
*   Layouts using CSS Grid/Flexbox to arrange buttons neatly.
*   Styling for the calculator container, buttons (colors, hover effects), and the display screen to ensure a user-friendly interface.

### 3. JavaScript (Logic)
The `script.js` file contains the logic to make the calculator functional:
*   **Functions:**
    *   `appendToDisplay(input)`: Appends clicked numbers or operators to the display.
    *   `clearDisplay()`: Clears the input field.
    *   `calculate()`: Evaluates the mathematical expression entered.
    *   `calculateSquare()`: Computes the square of the current input.
    *   `calculateCube()`: Computes the cube of the current input.
*   **Keyboard Support:** Listeners are added to support keyboard input for numbers, operators, Enter (to calculate), Backspace (to delete), and 'c' (to clear).

## How to Run
1.  Navigate to the `html` folder.
2.  Open `index.html` in any modern web browser.
