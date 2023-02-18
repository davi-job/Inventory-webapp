"use strict";

//lembrar de somar peça medida as peças calculadas

window.onload = () => {
	function restart() {
		location.reload();
	}

	function calcular() {
		pesoTotal = Number(document.querySelector(".total-weight").value);

		pesoBase = Number(document.querySelector(".info-peso").value);
		metragemBase = Number(document.querySelector(".info-metragem").value);

		quantidades = document.getElementsByClassName("input-quantidade");

		let valueError = false;

		let errorTest = 0;

		let supportSum = 0;
		let result;

		//Error 1 check

		if (pesoTotal === 0) {
			alert("Informe o peso total!");
			valueError = true;
		}

		//Error 2 check

		for (let i = 0; i < inputsQuantity; i++) {
			if (Number(quantidades[i].value) === 0) {
				errorTest++;
			}
		}

		if (errorTest === inputsQuantity) {
			alert("Informe a quantidade de canos e/ou cartelas!");
			valueError = true;
		}

		//Error 3 check

		if (pesoBase === 0 || metragemBase === 0) {
			alert("Informe os dois valores base!");
			valueError = true;
		}

		//Execution

		if (!valueError) {
			for (let i = 0; i < inputsQuantity; i++) {
				supportSum += Number(tabelaPesos[i].textContent) * Number(quantidades[i].value);
			}

			pesoTotal -= supportSum / 1000;

			result = (pesoTotal * metragemBase) / pesoBase + metragemBase;

			resultText.textContent = result + "m";
			overlay.classList.toggle("hidden");
		}
	}

	const inputsQuantity = 11;

	//VARIÁVEIS PARA A FUNÇÃO CALCULAR

	let pesoBase;
	let pesoTotal;
	let metragemBase;

	let quantidades;
	let tabelaPesos = document.getElementsByClassName("tabela-pesos");

	const overlay = document.querySelector(".overlay");
	const resultText = document.querySelector(".results");

	//EVENTOS

	document.querySelector(".end-button").addEventListener("click", calcular);

	document.querySelector(".reset-btn").addEventListener("click", restart);
	document.querySelector(".reset-button").addEventListener("click", restart);
};
