//Máscara para formulários de CPF (Cadastro de Pessoas Físicas - BR)
export default class MascaraCpf {
	constructor(input) {
		this.input = input;
	}
	//Adicionar máscara
	mask() {
		this.input.pattern = '[0-9]{3}[.]{1}[0-9]{3}[.]{1}[0-9]{3}[-]{1}[0-9]{2}';
		
		this.input.addEventListener('input', event => {
			//Bloquear dígitos não numéricos
			isNaN(event.data) || event.data === null ? this.input.value = this.input.value.slice(0, -1) : false;

			//Adicionar pontos e hífen (999.999.999-99)
			let allDig = this.input.value.length;
			if (allDig === 3 || allDig === 7) this.input.value += '.';
			if (allDig === 11) this.input.value += '-';
		});
	}
}