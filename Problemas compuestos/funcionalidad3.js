const form = document.getElementById('overtimeForm');
form.addEventListener('submit', function(event) {
	event.preventDefault();

	const hoursWorked = parseFloat(document.getElementById('hoursWorked').value);
	const hourlyWage = parseFloat(document.getElementById('hourlyWage').value);

	let overtimePay = 0;
	if (hoursWorked > 40) {
		const normalHours = 40;
		const extraHours = hoursWorked - normalHours;

		if (extraHours <= 8) {
			overtimePay = extraHours * hourlyWage * 2;
		} else if (extraHours > 8 && extraHours <= 11) {
			overtimePay = (8 * hourlyWage * 2) + ((extraHours - 8) * hourlyWage * 3);
		} else {
			overtimePay = (8 * hourlyWage * 2) + (3 * hourlyWage * 3) + ((extraHours - 11) * hourlyWage * 3.5);
		}
	}

	const totalPay = (40 * hourlyWage) + overtimePay;

	const resultDiv = document.getElementById('result');
	resultDiv.innerHTML = `El trabajador recibirá $${totalPay.toFixed(2)} por sus horas trabajadas, incluyendo las horas extras.`;
});