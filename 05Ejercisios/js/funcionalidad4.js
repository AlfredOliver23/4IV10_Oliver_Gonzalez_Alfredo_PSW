const form = document.getElementById('profitForm');
form.addEventListener('submit', function(event) {
	event.preventDefault();

	const salary = parseFloat(document.getElementById('salary').value);
	const yearsWorked = parseInt(document.getElementById('yearsWorked').value);

	let profit;
	if (yearsWorked < 1) {
		profit = 0;
	} else if (yearsWorked >= 1 && yearsWorked < 2) {
		profit = salary * 0.05;
	} else if (yearsWorked >= 2 && yearsWorked < 5) {
		profit = salary * 0.07;
	} else if (yearsWorked >= 5 && yearsWorked < 10) {
		profit = salary * 0.1;
	} else if (yearsWorked >= 10 && yearsWorked < 15) {
		profit = salary * 0.15;
	} else {
		profit = salary * 0.2;
	}

	const resultDiv = document.getElementById('result');
	resultDiv.innerHTML = `El trabajador recibirá $${profit.toFixed(2)} por su reparto anual de utilidades.`;
});