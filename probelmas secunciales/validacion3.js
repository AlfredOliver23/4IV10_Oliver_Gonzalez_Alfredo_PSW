const form = document.getElementById('discountForm');
form.addEventListener('submit', function(event) {
	event.preventDefault();

	const price = parseFloat(document.getElementById('price').value);
	const discountRate = 0.15;
	const discount = price * discountRate;
	const finalPrice = price - discount;

	const resultDiv = document.getElementById('result');
	resultDiv.innerHTML = `Precio final con descuento: ${finalPrice.toFixed(2)}`;
});