function multiplyBy() {
    const num1 = parseFloat(document.getElementById("firstnumber").value);
    const num2 = parseFloat(document.getElementById("secondnumber").value);
    const result = num1 * num2;
    document.getElementById("result").innerText = `Result: ${result}`;
}

function divideBy() {
    const num1 = parseFloat(document.getElementById("firstnumber").value);
    const num2 = parseFloat(document.getElementById("secondnumber").value);

    if (num2 === 0) {
        document.getElementById("result").innerText = "Cannot divide by zero.";
    } else {
        const result = num1 / num2;
        document.getElementById("result").innerText = `Result: ${result}`;
    }
}


document.getElementById("multiplyBy").addEventListener("click", multiplyBy);
document.getElementById("divideBy").addEventListener("click", divideBy);
