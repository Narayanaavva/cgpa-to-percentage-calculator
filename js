function calculatePercentage() {
    // Get the CGPA input value
    const cgpa = parseFloat(document.getElementById("cgpa").value);

    // Check if the CGPA value is valid
    if (isNaN(cgpa) || cgpa < 0 || cgpa > 10) {
        alert("Please enter a valid CGPA between 0 and 10.");
        return;
    }

    // CGPA to percentage formula (common conversion)
    const percentage = (cgpa - 0.5) * 10;

    // Display the result
    document.getElementById("result").textContent = `Your percentage is: ${percentage.toFixed(2)}%`;
}
