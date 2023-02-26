const form = document.getElementById('interestForm');
form.addEventListener('submit', function(event) {
	event.preventDefault();

	const principal = parseFloat(document.getElementById('principal').value);
	const interestRate = 0.02;
	const interest = principal * interestRate;
	const total = principal + interest;

	const resultDiv = document.getElementById('result');
	resultDiv.innerHTML = `Interés ganado: ${interest.toFixed(2)} <br> Monto total después de un mes: ${total.toFixed(2)}`;
});