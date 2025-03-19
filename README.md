<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CGPA to Percentage Calculator</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>CGPA to Percentage Calculator</h1>
        <div class="calculator">
            <label for="cgpa">Enter CGPA:</label>
            <input type="number" id="cgpa" placeholder="Enter your CGPA" step="0.01">
            <button onclick="calculatePercentage()">Calculate Percentage</button>
            <h2 id="result"></h2>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>
