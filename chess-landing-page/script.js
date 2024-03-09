function calculateAge() {
    var dob = new Date(document.getElementById('dob').value);
    var today = new Date();
    var age = today.getFullYear() - dob.getFullYear();
    var monthDiff = today.getMonth() - dob.getMonth();
    var dayDiff = today.getDate() - dob.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
        monthDiff += 12;
    }

    var yearDiff = age;
    var monthDiffDisplay = monthDiff;
    var dayDiffDisplay = dayDiff;

    if (dayDiff < 0) {
        monthDiffDisplay--;
        var daysInLastMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        dayDiffDisplay += daysInLastMonth;
    }

    document.getElementById('result').innerHTML = "<p>Your age is: " + yearDiff + " years, " + monthDiffDisplay + " months, and " + dayDiffDisplay + " days.</p>";
}