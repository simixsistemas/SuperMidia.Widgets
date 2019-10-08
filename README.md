# SuperMídia Widgets

Os widgets são arquivos containers (HTML, CSS, JS) que proporcionam diversos novos layouts e funcionalidades para a [SuperMídia](https://www.simix.com.br/solucoes/super-midia).

Nomeclatura: `{Nome}_V1.0.smxwid`  
Diretório de armazenamento: [Arquivos](http://az01.simix.com.br:81/Arquivos/) (Pasta SuperMidia\Widgets)

## Widgets disponíveis

Crie um novo partir do nosso [Template](Template) com o [VS Code](https://code.visualstudio.com/).

| Nome                                    | Download                                                                                                       |Preview                                        |
|:---------------------------------------:|:--------------------------------------------------------------------------------------------------------------:|:---------------------------------------------:|
|[Mega-Sena](MegaSena)                    | [v1.0](http://az01.simix.com.br:81/Arquivos/Arquivos/SuperMidia/Widgets/MegaSena_V1.0.smxwid)                  |![Screenshot](MegaSena/preview.png)            |
|[Lotofácil](LotoFacil)                   | [v1.0](http://az01.simix.com.br:81/Arquivos/Arquivos/SuperMidia/Widgets/Lotofacil_V1.0.smxwid)                 |![Screenshot](LotoFacil/preview.png)           |
|[Timemania](Loteria/Timemania)           | [v1.0](http://az01.simix.com.br:81/Arquivos/Arquivos/SuperMidia/Widgets/Timemania_V1.0.smxwid)                 |![Screenshot](Loteria/Timemania/preview.png)   |
|[Quina](Loteria/Quina)                   | [v1.0](http://az01.simix.com.br:81/Arquivos/Arquivos/SuperMidia/Widgets/Quina_V1.0.smxwid)                     |![Screenshot](Loteria/Quina/preview.png)       |
|[Lotomania](Loteria/Lotomania)           | [v1.0](http://az01.simix.com.br:81/Arquivos/Arquivos/SuperMidia/Widgets/Lotomania_V1.0.smxwid)                 |![Screenshot](Loteria/Lotomania/preview.png)   |
|[Dupla Sena](Loteria/Dupla Sena)         | [v1.0](http://az01.simix.com.br:81/Arquivos/Arquivos/SuperMidia/Widgets/Dupla_sena_V1.0.smxwid)                |![Screenshot](Loteria/Dupla Sena/preview.png)  |  
|[Dia de Sorte](Loteria/Dia de sorte)     | [v1.0](http://az01.simix.com.br:81/Arquivos/Arquivos/SuperMidia/Widgets/Dia_de_sorte_V1.0.smxwid)              |![Screenshot](Loteria/Dia de sorte/preview.png)|
|[Redes sociais](Posts)                   | [v1.0](http://az01.simix.com.br:81/Arquivos/Arquivos/SuperMidia/Widgets/Posts_V1.0.smxwid)                     |![Screenshot](Posts/preview.png)               |
|[Frase do dia](Quotes)                   | [v1.0](http://az01.simix.com.br:81/Arquivos/Arquivos/SuperMidia/Widgets/Quotes_V1.0.smxwid)                    |![Screenshot](Quotes/preview.png)              |
|[Timer Pão](TimerPao)                    | [v2.4](http://az01.simix.com.br:81/Arquivos/Arquivos/SuperMidia/Widgets/TimerPaoV2.4.smxwid)                   |![Screenshot](TimerPao/preview.png)            |

## Bibliotecas

[Animações CSS](_Libraries/ANIMATIONS.md)  
[Helpers Js](_Libraries/HELPERS.md)  
[Autofit JS](_Libraries/AUTOFIT.md)

## Limitações
- Atualmente só rodam no layout do centro (não das laterais, nem do rodapé)
- Evite utilizar muitas animações, pois em conjunto com outros conteúdos pode haver lag
- Evite utilizar muitos scripts, pois pode haver lag em alguns dispositivos

## Referências
- [Outros conteúdos SuperMídia](http://inst.supermidiadigital.com.br/site/conteudos/)
- [CodePen](https://codepen.io/)

## Entidades disponíveis

### Post (Rede social)
- Title
- Text
- Message
- Image
- Attachments (Coleção de anexos, podendo ser Imagem, Vídeo, Localização...)

### Message (TBR)
- Title
- Text
- Image

### Item (TBR)
- Title
- Text
- Image
- Price

## Objetos disponíveis
- Model
- View
- Utils (TBR)

## Utilização das propriedades no HTML
- Pela sintaxe {{Propriedade}}
- Através do objeto Model por JS

## Formatação do conteúdo (TBR)
- {{Propriedade:Formato}}
  
# Primeiros passos

- Utilize um editor apropriado para alterar o widget, recomendamos os seguintes editores:

| Nome                     | Download                                                                      |
|:------------------------:|:-----------------------------------------------------------------------------:|
|Visual Studio Code        | [Link](https://code.visualstudio.com/)										   |
|Notepad ++                | [Link](https://notepad-plus-plus.org/download/)					   		   |
|Sublime				   | [Link](https://www.sublimetext.com)									       |

> **Dica!** O template possui uma configuração padrão para ajudar a rodar a página web e ficar recarregando, automaticamente, a cada alteração.
Por isso, se faz necessário instalar o [Node.js](https://nodejs.org/en/), basta acessar o site e baixar a ultima versão disponível.

- Baixe o projeto [SuperMidia.Widgets](https://github.com/simixsistemas/SuperMidia.Widgets)
<p align="center">
	<kbd>
		<img src="https://user-images.githubusercontent.com/42358163/59373746-a9dfd800-8d20-11e9-94c4-fa587ec23317.png" alt="image" style="max-width:100%;"/>
	</kbd>
</p>

- Extraia o conteúdo
<p align="center">
	<kbd>
		<img src="https://user-images.githubusercontent.com/42358163/59373660-83ba3800-8d20-11e9-9095-64b0bc1865ac.png" alt="image" style="max-width:100%;"/>
	</kbd>
</p>

- Copie o template e renomeie para o layout no qual deseja criar
<p align="center">
	<kbd>
		<img src="https://user-images.githubusercontent.com/42358163/59373918-0cd16f00-8d21-11e9-9921-9b1be3352dca.png" alt="image" style="max-width:100%;"/>
	</kbd>
</p>


### Para atualização em tempo real da página

**Existem dois métodos prontos para serem utilizados para atualizar, a página html, em tempo real.**
**Escolha abaixo a opção que lhe atrai:**

<details>
    <summary>
        <b>Instalação extensão Visual Studio Code (uma vez só)</b>
    </summary>

- Abra o diretório do seu layout pelo Visual Studio Code e instale a extensão **Live Server**.

<p align="center">
	<kbd>
		<img src="https://user-images.githubusercontent.com/42358163/60831747-a826fa00-a190-11e9-85e3-947f68da1825.gif" alt="image" style="max-width:100%;"/>
	</kbd>
</p>

- Basta executar o **Live Server** (botão "Go Live") para a página html ficar atualizando automaticamente a cada salvamento.

<p align="center">
	<kbd>
		<img src="https://user-images.githubusercontent.com/42358163/60831748-a8bf9080-a190-11e9-8791-f7e127849ed3.gif" alt="image" style="max-width:100%;"/>
	</kbd>
</p>

</details>


<details>
    <summary>
        <b>Instalação por projeto (método de instalação para cada projeto)</b>
    </summary>

- Entre na pasta do seu novo layout e selecione a barra de navegação
<p align="center">
	<kbd>
		<img src="https://user-images.githubusercontent.com/42358163/59374013-430eee80-8d21-11e9-8850-fbc11c35e623.png" alt="image" style="max-width:100%;"/>
	</kbd>
</p>

- Digite `cmd` e tecle enter
<p align="center">
	<kbd>
		<img src="https://user-images.githubusercontent.com/42358163/59374173-a7ca4900-8d21-11e9-91f1-97e383805698.png" alt="image" style="max-width:100%;"/>
	</kbd>
</p>

> **Dica!** Também pode ser executado o prompt de comando e navegar até a pasta do layout através do comando `CD c:\\Diretorio...`

- Digite o comando `npm install` e tecle `Enter`, esse comando só se faz necessário  primeira vez para instalar os utilitarios que vão auxiliar na criação dos widgets
<p align="center">
	<kbd>
		<img src="https://user-images.githubusercontent.com/42358163/59374396-26bf8180-8d22-11e9-9d05-2960467269ac.gif" alt="image" style="max-width:100%;"/>
	</kbd>
</p>

> **Importante!** É necessário ter instalado o [Node.js](https://nodejs.org/en/), conforme informado no inicio deste tutorial

- Após a instalação dos pacotes, digite o comando `npm start` (esse comando inicia a página web e fica recarregando à cada alteração)
<p align="center">
	<kbd>
		<img src="https://user-images.githubusercontent.com/42358163/59374616-a1889c80-8d22-11e9-92e5-abf38091f22c.gif" alt="image" style="max-width:100%;"/>
	</kbd>
</p>

- Agora as alterações já são percebidas em tempo real, toda vez que o documento for salvo
<p align="center">
	<kbd>
		<img src="https://user-images.githubusercontent.com/42358163/59374859-35f2ff00-8d23-11e9-8aa7-31939fa81cd3.gif" alt="image" style="max-width:100%;"/>
	</kbd>
</p>

</details>


> **Dica!** Utilize o comando `Ctrl + S` após fazer as alterações, assim você as percebera imediatamente na tela.

## Boas práticas

- Opte por separar formatações e scripts em arquivos `.css` e `.js`;
- Caso use ferramentas externas como `Jquery` baixe o arquivo `.js` e referencie localmente no layout, assim ele continuará a funcionar mesmo offline;
- Utilize ao máximo o poder das variáveis, ao invés de funções js para informações do modelo, elas são carregadas antes de o layout ser exibido na tela, assim nenhum delay será percebido na transição dos layouts;
- Use estilizações por classes, estilos escritos diretamente nos elementos `HTML` são mais dificeis de dar manutenção no futuro;
