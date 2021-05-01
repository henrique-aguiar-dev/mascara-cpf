//Máscara para formulários de CPF (Cadastro de Pessoas Físicas - BR)
const regex = new RegExp(/[a-zA-Z !@#$%&|ªº°*()[\]+,=\.\-;><?/{}`'^~]+$/g);

export const mascaraCpf = event => {
	//No desktop - desativar teclas não numéricas, exceto Backspc e Enter
	if (navigator.maxTouchPoints === 0 && isNaN(event.key) &&
		event.key !== 'Backspace' && event.key !== 'Enter') event.preventDefault();

	//Mobile - testar pela RegEx p/ evitar outros caracteres
	if (navigator.maxTouchPoints !== 0 && regex.test(event.target.value)) event.target.value = event.target.value.slice(0, -1);

	//Adicionar pontos e hífen (999.999.999-99) no desktop e mobile
	if (event.code.match(/Digit|Numpad/g) || navigator.maxTouchPoints !== 0 && event.keyCode !== 8) {
		let numDigitos = event.target.value.length;

		if (numDigitos === 3 || numDigitos === 7) event.target.value += '.';
		if (numDigitos === 11) event.target.value += '-';

	} else if (!event.code.match(/Backspace|Enter/g) || event.keyCode === 8) return;
}