function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerHTML = rateval + "%";
}

function compute() {
    var principal = parseInt(document.getElementById("principal").value);
    var rate = parseFloat(document.getElementById("rate").value);
    var years = parseInt(document.getElementById("years").value);
    var result = document.getElementById("result");

    if (principal <= 0) {
        // Test case: Amount = 0
        // Expected output: Alert saying "Enter a positive number"
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    } else {
        var interest = principal * years * rate / 100;
        var amount = principal + interest;
        var currentYear = new Date().getFullYear();
        var futureYear = currentYear + years;

        // Test case: Amount = 1000, Rate = 10%, No. of Years = 10
        // Expected output: Display calculated values with the correct future year
        result.innerHTML = "If you deposit <mark>" + principal + "</mark>,<br>";
        result.innerHTML += "at an interest rate of <mark>" + rate + "%</mark>.<br>";
        result.innerHTML += "You will receive an amount of <mark>" + amount + "</mark>,<br>";
        result.innerHTML += "in the year <mark>" + futureYear + "</mark>.<br>";
    }
}