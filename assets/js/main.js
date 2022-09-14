

const currentPrice = document.querySelector(".price input");
const dollarsAmount = document.querySelector(".amount input");
const getButton = document.querySelector("form button");
const result = document.querySelector(".result");

const inputs = document.querySelectorAll('.input');


inputs.forEach(input => 
	input.addEventListener('input', e => {
		input.value = input.value.replace(/^0/, /[^\d.]/g, '');
}))

getButton.addEventListener('click', () =>{
	if (currentPrice.value === "" || dollarsAmount.value === "") {
		result.classList.add("color-red")
		result.textContent = "Fill in the fields below"
		setTimeout(() => {
			result.textContent =  ""
		}, 2000);
	} else {
		result.classList.remove("color-red")
		result.textContent = `You can buy ${(dollarsAmount.value / currentPrice.value).toFixed(7)} BTC`;
		setTimeout(() => {
			currentPrice.value = "",
			dollarsAmount.value = "",
			result.textContent = ""
		}, 4000);
	}
})