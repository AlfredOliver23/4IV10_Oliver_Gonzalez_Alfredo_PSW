const form = document.getElementById('gradeForm');
form.addEventListener('submit', function(event) {
	event.preventDefault();

	const grade1 = parseFloat(document.getElementById('grade1').value);
	const grade2 = parseFloat(document.getElementById('grade2').value);
	const grade3 = parseFloat(document.getElementById('grade3').value);
	const finalExam = parseFloat(document.getElementById('finalExam').value);
	const finalProject = parseFloat(document.getElementById('finalProject').value);
	const partialGrade = (grade1 + grade2 + grade3) / 3;
	const partialWeight = 0.55;
	const examWeight = 0.3;
	const projectWeight = 0.15;
	const finalGrade = (partialGrade * partialWeight) + (finalExam * examWeight) + (finalProject * projectWeight);

	const resultDiv = document.getElementById('result');
	resultDiv.innerHTML = `Calificación final: ${finalGrade.toFixed(2)}`;
});