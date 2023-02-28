const form = document.getElementById('numberForm');
form.addEventListener('submit', function(event) {
	event.preventDefault();

	const num1 = parseFloat(document.getElementById('num1').value);
	const num2 = parseFloat(document.getElementById('num2').value);
	const num3 = parseFloat(document.getElementById('num3').value);
	
	let max = num1;
	if (num2 > max) {
		max = num2;
	}
	if (num3 > max) {
		max = num3;
	}

	const resultDiv = document.getElementById('result');
	resultDiv.innerHTML = `El número mayor es: ${max.toFixed(2)}`;
});