const form = document.getElementById('commissionForm');
form.addEventListener('submit', function(event) {
	event.preventDefault();

	const salary = parseFloat(document.getElementById('salary').value);
	const sale1 = parseFloat(document.getElementById('sale1').value);
	const sale2 = parseFloat(document.getElementById('sale2').value);
	const sale3 = parseFloat(document.getElementById('sale3').value);
	const commissionRate = 0.1;
	const commission = (sale1 + sale2 + sale3) * commissionRate;
	const totalSalary = salary + commission;

	const resultDiv = document.getElementById('result');
	resultDiv.innerHTML = `Comisión ganada: ${commission.toFixed(2)} <br> Salario total: ${totalSalary.toFixed(2)}`;
});