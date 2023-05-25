function calculateInterest() {
    var principal = parseFloat(document.getElementById('principal').value);
    var rate = parseFloat(document.getElementById('rate').value);
    var startDate = new Date(document.getElementById('startDate').value);
    var endDate = new Date(document.getElementById('endDate').value);
    
    if (principal  < 0) {
        alert("Principal amount cannot be negative");
        return;
    }
    if (rate < 0) {
        alert("Rate of interest(%) cannot be negative");
        return;
    }

    var months = (endDate.getFullYear() - startDate.getFullYear()) * 12;
    months -= startDate.getMonth();
    months += endDate.getMonth();

    var oneDay = 24 * 60 * 60 * 1000; // Number of milliseconds in a day
    var totalDays = Math.round(Math.abs((startDate - endDate) / oneDay));
     
    var years = Math.floor(totalDays / 365); // Number of complete years
    var remainingDays = totalDays % 365; // Remaining days
    var months = Math.floor(remainingDays / 30); // Number of complete months
    var days = remainingDays % 30; // Remaining days

    var interest = 0;
    var monthlyRate = rate / 100; // Convert annual rate to monthly rate
    for (var i = 0; i < months; i++) {
        interest += (principal * monthlyRate);
    }
    
    var yearsText = years === 1 ? 'year' : 'years';
    var monthsText = months === 1 ? 'month' : 'months';
    var daysText = days === 1 ? 'day' : 'days';
    
    var InterestPerDay = interest.toFixed(2)/totalDays
    var MonthlyInterest = interest.toFixed(2)/12
    var totalAmount = principal + interest;

    document.getElementById('result').innerHTML = 'Simple Interest: ' + interest.toFixed(2) + '<br>Total Amount: ' + totalAmount.toFixed(2);
    document.getElementById('years').innerHTML = 'Total Years: ' + years + ' ' + yearsText;
    document.getElementById('months').innerHTML = 'Total Months: ' + months + ' ' + monthsText;
    document.getElementById('days').innerHTML = 'Total Days: ' + days + ' ' + daysText;
}
