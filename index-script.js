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

		totalPecas = Number(document.querySelector(".total-pecas").value);

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

		for (let i = 0; i < 10; i++) {
			if (Number(quantidades[i].value) === 0) {
				errorTest++;
			}
		}

		if (errorTest === 10) {
			alert("Informe a quantidade de canos e/ou cartelas!");
			valueError = true;
		}

		//Error 3 check

		if (pesoBase === 0 || metragemBase === 0) {
			alert("Informe os dois valores base!");
			valueError = true;
		}

		//Error 4 check

		if (totalPecas === 0) {
			alert("Informe o total de peças!");
			valueError = true;
		}

		//Error 5 check

		let auxiliarSum = 0;

		for (let i = 0; i < 10; i++) {
			auxiliarSum += Number(quantidades[i].value);
		}

		if (totalPecas !== auxiliarSum && !valueError) {
			alert("Quantidade informada não é igual a quantidade total!");
			valueError = true;
		}

		//Execution

		if (!valueError) {
			for (let i = 0; i < 10; i++) {
				supportSum += Number(tabelaPesos[i].textContent) * Number(quantidades[i].value);
			}

			pesoTotal -= supportSum / 1000;

			result = (pesoTotal * metragemBase) / pesoBase + metragemBase;

			resultText.textContent = result + "m";
			overlay.classList.toggle("hidden");
		}
	}

	//VARIÁVEIS PARA A FUNÇÃO CALCULAR

	let pesoBase;
	let pesoTotal;
	let totalPecas;
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
