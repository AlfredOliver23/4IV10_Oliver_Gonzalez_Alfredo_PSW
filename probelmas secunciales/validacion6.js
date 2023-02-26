const form = document.getElementById('ageForm');
form.addEventListener('submit', function(event) {
	event.preventDefault();

	const birthdate = new Date(document.getElementById('birthdate').value);
	const today = new Date();
	const age = today.getFullYear() - birthdate.getFullYear();
	
	// Si el mes de nacimiento es posterior al mes actual o si el mes de nacimiento es igual al mes actual
	// pero el día de nacimiento es posterior al día actual, restamos un año.
    
	if (birthdate.getMonth() > today.getMonth() || (birthdate.getMonth() === today.getMonth() && birthdate.getDate() > today.getDate())) {
		age--;
	}

	const resultDiv = document.getElementById('result');
	resultDiv.innerHTML = `Edad actual: ${age} años`;
});