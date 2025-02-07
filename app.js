document.addEventListener("DOMContentLoaded", function () {
    const display = document.querySelector(".display"); // Selects the display where the result will be shown
    const buttons = document.querySelectorAll(".button");       // Selects all the buttons in the calculator
    let currentInput = "";
    let operator = "";      // Stores the current operator (+, -, *, /)
    let firstOperand = null;            // Stores the first operand (number) when an operator is selected


     // Adds click event listeners to all the calculator buttons
    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const value = this.textContent;


         // If the value is a number round it to the current input
            if (!isNaN(value) || value === ".") {
                currentInput += value;
                display.textContent = currentInput;

         // If the 'C' button  is clicked, clear everything
            } else if (value === "C") {
                currentInput = "";
                firstOperand = null;
                operator = "";
                display.textContent = "";
        
        // If the '=' button is clicked, do the calculation
            } else if (value === "=") {
                if (firstOperand !== null && operator) {
                    currentInput = eval(firstOperand + operator + currentInput);
                    display.textContent = currentInput;
                    firstOperand = null;
                    operator = "";
                }

        // If an operator button is clicked (+, -, *, /) what should happen
            } else {
                if (currentInput) {
                    firstOperand = currentInput;
                    operator = value;
                    currentInput = "";
                }
            }
        });
    });
});
