const form = document.getElementById('operationForm');
form.addEventListener('submit', function(event) {
	event.preventDefault();

	const num1 = parseFloat(document.getElementById('num1').value);
	const num2 = parseFloat(document.getElementById('num2').value);
	
	let result;
	if (num1 === num2) {
		result = num1 * num2;
	} else if (num1 > num2) {
		result = num1 - num2;
	} else {
		result = num1 + num2;
	}

	const resultDiv = document.getElementById('result');
	resultDiv.innerHTML = `El resultado es: ${result.toFixed(2)}`;
});