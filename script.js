// Get the display element
const display = document.getElementById('display');

// Flag to track if the last operation was a result
let isResultDisplayed = false;

// Function to append value to display
function appendToDisplay(value) {
    // Reset display if previous result was shown
    if (isResultDisplayed) {
        display.textContent = '';
        isResultDisplayed = false;
    }

    // Handle initial zero and prevent multiple leading zeros
    if (display.textContent === '0' && value !== '.') {
        display.textContent = value;
    } else {
        display.textContent += value;
    }
}

// Function to clear the display
function clearDisplay() {
    display.textContent = '0';
    isResultDisplayed = false;
}

// Function to calculate and display result
function calculateResult() {
    try {
        // Use eval to calculate (Note: In production, use a more secure parsing method)
        const result = eval(display.textContent);
        
        // Format result
        display.textContent = Number.isFinite(result) 
            ? result.toString().length > 10 
                ? result.toExponential(4)  // Use scientific notation for long numbers 
                : result 
            : 'Error';
        
        // Set flag that result is displayed
        isResultDisplayed = true;
    } catch (error) {
        // Handle calculation errors
        display.textContent = 'Error';
        isResultDisplayed = true;
    }
}