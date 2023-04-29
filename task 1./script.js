function convertWeight() {
  const kg = document.getElementById("search").value;
  const lb = (kg * 2.2046).toFixed(2);
  const g = (kg / 0.001).toFixed(2);
  const oz = (kg * 35.274).toFixed(2);
  const output = document.getElementById("output");
  output.innerHTML = `
      <p><strong>Svarai:</strong> ${lb} lb</p>
      <p><strong>Gramai:</strong> ${g} g</p>
      <p><strong>Uncijos:</strong> ${oz} oz</p>
    `;
}
