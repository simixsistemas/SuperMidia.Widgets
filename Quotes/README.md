# Frase do dia

Frase do dia pela [Wikiquote](https://pt.wikiquote.org/wiki/Wikiquote:Frase_do_dia).

### Funcionamento

- Conecata na API [Wikiquote](https://en.wikiquote.org/w/api.php) com AJAX.
- O retorno será a página com a citação e outros dados.
- Com a ajuda do jquery procuta pela tag `<b>` (negrito) dentro de uma tabela, essa será a frase. Na sequência procura a tag `<a>` que conterá o autor.
- Utiliza o componente [textFit](https://github.com/STRML/textFit) para ajustar o texto ao tamanho da tela (tanto na horizontal como na vertical, com tamanho de fonte mínimo e máximo).
- Utiliza um backgroud degradê CSS com efeito de movimento utilizando marcadores `<li>` girando.

### Links

- [Documentação da API Wikiquote](https://en.wikiquote.org/w/api.php)
- [Assistente para gerar backgrounds CSS](https://cssgradient.io/gradient-backgrounds/)
- [Fontes no estilo escrita a mão](https://fonts.google.com/?query=hand)
