
//-----------------Classes---------------------
export default class Cpf {
	constructor(cpfDigitado) {
		this.cpfLimpo = cpfDigitado.replace(/\D+/g, '').toString();
		this.cpfParcial = Array.from(this.cpfLimpo).slice(0, -2);
	}

	validarCpf() {
		const conferir = () => {
			let iguais = 0;

			for (let i in this.cpfLimpo) {
				if (this.cpfLimpo[i] === this.cpfLimpo[i - 1]) iguais += 1;
			}
			return this.cpfLimpo.length === 11 && iguais <= 9 ? true : false;//true: válido; false: inválido.
		}

		if (conferir()) {
			const multiplicarESomar = () => {
				let multiplicador = this.cpfParcial.length + 1;
				let cpfMultiplicado = [];

				for (let i = 0; i < this.cpfParcial.length; i++) {
					cpfMultiplicado.push(this.cpfParcial[i] * multiplicador);
					multiplicador--;
				}
				return cpfMultiplicado.reduce((acum, valor) => acum + Number(valor));
			}

			const calcularDigitos = () => {
				for (let i = 0; i < 2; i++) {
					let soma = multiplicarESomar();
					let digito = 11 - (soma % 11);
					if (digito > 9) digito = 0;
					this.cpfParcial.push(digito);
				}
				return this.cpfParcial.toString().replace(/\D+/g, '');
			}
			return this.cpfLimpo === calcularDigitos() ? true : false;
		}
		else return false;
	}
}//Class Cpf------------------------------------------------------------------
