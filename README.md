# mascara-cpf
Máscara de CPF com vanilla javascript;
Por Henrique, L.

Simples máscara feita apenas em vanilla Javascript para campo de CPF em formulários;

Permite digitar apenas números e adiciona automaticamente os pontos e hífen necessários. Formato: 999.999.999-99;

Feito para funcionar em desktop e mobile;

Para demonstração, utiliza um validador de CPF: https://henrique-aguiar-dev.github.io/mascara-cpf/

----------Instruções-------------

Exemplos de como utilizar:

Formulário HTML com input type 'text' ou 'tel' para o CPF (recomenda-se 'tel' para mostrar teclado numérico na versão móvel):

--------------------------------------------------------------------------------------------------------------------------------------------
   	<form action="" method="POST">
			<input type="tel" id="input-cpf" maxlength="14" minlength="14" required title="Deve conter apenas números.">
			<label for="input-cpf">*Somente números</label>
			<input type="submit" id="btn-validar" value="Validar">
			<p><!--conteúdo dinâmico - Resultado--></p>
	</form>
---------------------------------------------------------------------------------------------------------------------------------------------

No script principal - main.js - importar o módulo MascaraCpf e criar novo objeto mandando como parâmatro o DOM Object do campo de formulário desejado, que será processado pelo módulo (mascaracpf.js); Também bloqueia-se a opção de colar para forçar a digitação.

--------------------------------------------------------------------------------------------------------------------------------------------
	    import MascaraCpf from '../../modules/mascaracpf.js';
	    
	    [...]
	    const inputCpf = document.querySelector('#input-cpf');
	    
	    const cpfMask = new MascaraCpf(inputCpf);
	    cpfMask.mask();

	    //Evitar copiar e colar do número completo
	    inputCpf.addEventListener('paste', event => event.preventDefault());
--------------------------------------------------------------------------------------------------------------------------------------------

------------OBSERVAÇÕES---------------

OBS 1: Usar o campo de formulário HTML type 'number' bloqueará os caracteres '.' e '-'; Usar type 'tel' se ajusta melhor no mobile para apresentar
o teclado numérico na tela sem impedir os caracteres desejados;
