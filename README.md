# mascara-cpf
Máscara de CPF com vanilla javascript;
Por Henrique, L.

Simples máscara feita apenas em vanilla Javascript para campo de CPF em formulários;

Permite digitar apenas números e adiciona automaticamente os pontos e hífen necessários. Formato: 999.999.999-99;

Feito para funcionar em desktop e mobile;

Para demonstração, utiliza um validador de CPF;

----------Instruções-------------

Exemplos de como utilizar:

Formulário HTML com input type 'text' ou 'tel' para o CPF (recomenda-se 'tel' para melhor funcionamento em mobile):

--------------------------------------------------------------------------------------------------------------------------------------------
   	<form action="" method="POST">
			<input type="tel" class="input-cpf" maxlength="14" minlength="14" pattern="[0-9.-]{14}" required title="Deve conter apenas números.">
			<label for="input-cpf">*Somente números</label>
			<input type="submit" class="btn-validar" value="Validar">
			<p><!--conteúdo dinâmico - Resultado--></p>
	</form>
---------------------------------------------------------------------------------------------------------------------------------------------

No script principal - main.js - importar o módulo e monitorar os eventos de keydown e keyup para acionar a máscara mandando o próprio evento como parâmatro, que 
será processado pelo módulo (mascaracpf.js);
Também bloqueia-se a opção de colar para forçar a digitação.

--------------------------------------------------------------------------------------------------------------------------------------------
	    import { mascaraCpf } from '../../modules/mascaracpf.js';
	    
	    [...]
	    
	    inputCpf.addEventListener('keydown', event => mascaraCpf(event));
	    inputCpf.addEventListener('keyup', event => mascaraCpf(event));

	    //Evitar copiar e colar do número completo
	    inputCpf.addEventListener('paste', event => event.preventDefault());
--------------------------------------------------------------------------------------------------------------------------------------------

------------OBSERVAÇÕES---------------

OBS 1: Tentar usar os eventos de input, change,  paste etc, ou apenas keyup ou apenas keydown, provocou comportamentos indesejados. Usar keyup + 
keydown foi o que apresentou os melhores resultados para desktop e mobile.

OBS 2: Usar o campo de formulário HTML type 'number' impedirá os caracteres '.' e '-'. Usar type 'tel' se ajusta melhor no mobile para apresentar
o teclado numérico na tela sem impedir os caracteres desejados;

OBS 3: O atributo HTML pattern só servirá para impedir o envio do formulário, mas não evita a digitação sem o script da máscara;
