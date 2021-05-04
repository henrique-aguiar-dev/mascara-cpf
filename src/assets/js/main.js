import Cpf from '../../modules/validacpf.js';
import MascaraCpf from '../../modules/mascaracpf.js';

//-----------Funções principais----------------
const carregarFormCpf = () => {
	const inputCpf = document.querySelector('#input-cpf');
	const btnValidar = document.querySelector('#btn-validar');
	const formP = document.querySelector('form p');

	const exibirResultado = resultado => {
		const valido = () => formP.innerHTML = 'CPF válido.';
		const invalido = () => formP.innerHTML = 'CPF inválido!';
		resultado ? valido() : invalido();
	}

	const iniciarValidacaoCpf = () => {
		const cpf1 = new Cpf(inputCpf.value);
		let resultado = cpf1.validarCpf();
		exibirResultado(resultado);
	}

	const loadMask = () => {
		//Novo objeto Mask - parâmetro: o campo p/ CPF do formulário;
		const cpfMask = new MascaraCpf(inputCpf);
		cpfMask.mask();
	}

	//Evitar copiar e colar do número completo
	inputCpf.addEventListener('paste', event => event.preventDefault());

	//Validar
	btnValidar.addEventListener('click', e => {
		if(inputCpf.value.length === 14) {
			iniciarValidacaoCpf();
			e.preventDefault();
		} else return;
	})

	loadMask();

}//carregarFormCpf

carregarFormCpf();