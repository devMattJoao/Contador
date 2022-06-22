let count = 0;

document.getElementById("subtrair").addEventListener("click", decrement);
document.getElementById("adicionar").addEventListener("click", increment);

function increment() {
	if (count >= 0 && count <= 9) {
		count++;
		document.getElementById("currentNumber").innerHTML = count;
	}
}

function decrement() {
	if (count >= 1 && count <= 10) {
		count--;
		document.getElementById("currentNumber").innerHTML = count;
	}
}
