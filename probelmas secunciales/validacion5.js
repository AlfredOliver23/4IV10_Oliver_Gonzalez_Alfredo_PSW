const form = document.getElementById('percentageForm');
form.addEventListener('submit', function(event) {
	event.preventDefault();

	const numMales = parseInt(document.getElementById('numMales').value);
	const numFemales = parseInt(document.getElementById('numFemales').value);
	const total = numMales + numFemales;
	const malePercentage = (numMales / total) * 100;
	const femalePercentage = (numFemales / total) * 100;

	const resultDiv = document.getElementById('result');
	resultDiv.innerHTML = `Porcentaje de hombres: ${malePercentage.toFixed(2)}% <br> Porcentaje de mujeres: ${femalePercentage.toFixed(2)}%`;
});