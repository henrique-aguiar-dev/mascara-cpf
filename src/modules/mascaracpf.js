//Máscara para formulários de CPF (Cadastro de Pessoas Físicas - BR)
export const mascaraCpf = event => {
	//Bloquear dígitos não numéricos
	isNaN(event.data) || event.data === null ? event.target.value = event.target.value.slice(0, -1) : false;

	//Adicionar pontos e hífen (999.999.999-99)
	let allDig = event.target.value.length;
	if (allDig === 3 || allDig === 7) event.target.value += '.';
	if (allDig === 11) event.target.value += '-';
}