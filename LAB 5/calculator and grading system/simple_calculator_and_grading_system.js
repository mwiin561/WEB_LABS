// Part 1: Simple Calculator
function calculate(expression) {
    try {
        const result = eval(expression);

        if (isNaN(result) || !isFinite(result)) {
            throw new Error("Invalid expression");
        }

        return result;
    } catch (error) {
        return "Error: " + error.message;
    }
}

// Test the calculate function
const expressions = ["2 + 3", "4 * 5", "10 / 2", "8 - 6", "2 / 0"];
expressions.forEach(expression => {
    console.log(`Result for "${expression}": ${calculate(expression)}`);
});

// Part 2: Grading System
function calculateGrade(score) {
    try {
        if (isNaN(score) || !isFinite(score)) {
            throw new Error("Invalid input. Please enter a valid number.");
        }

        if (score >= 90 && score <= 100) {
            return "A";
        } else if (score >= 80 && score <= 89) {
            return "B";
        } else if (score >= 70 && score <= 79) {
            return "C";
        } else if (score >= 60 && score <= 69) {
            return "D";
        } else if (score >= 0 && score <= 59) {
            return "F";
        } else {
            throw new Error("Invalid score. Score must be between 0 and 100.");
        }
    } catch (error) {
        return "Error: " + error.message;
    }
}

// Test the calculateGrade function
const scores = [95, 85, 75, 65, "abc", 110];
scores.forEach(score => {
    console.log(`Grade for score ${score}: ${calculateGrade(score)}`);
});
