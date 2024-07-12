]document.getElementById('MyForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting

    // Retrieve the radius value from the input field
    let radius = document.getElementById('radius').value;

    // Convert the radius value to a number
    radius = parseFloat(radius);

    // Validate the input (ensure the radius is a non-negative number)
    if (isNaN(radius) || radius < 0) {
        document.getElementById('volume').value = 'NaN';
        return;
    }

    // Calculate the volume of the sphere using the formula V = (4/3) * π * r^3
    const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

    // Display the calculated volume in the designated output field, rounded to four decimal places
    document.getElementById('volume').value = volume.toFixed(4);
});
