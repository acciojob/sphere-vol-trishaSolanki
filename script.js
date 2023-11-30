function volume_sphere() {
  // Get the radius value entered in the form
  const radius = parseFloat(document.getElementById("radius").value);

  // Calculate the volume of the sphere using the formula
  const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

  // Display the calculated volume in the volume field
  document.getElementById("volume").value = volume.toFixed(2); // Round to 2 decimal places
}

window.onload = document.getElementById('MyForm').onsubmit
