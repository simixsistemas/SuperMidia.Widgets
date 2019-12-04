# Inicio
- Baixe o arquivo `simix-helpers.js` clicando [aqui](simix-helpers.js)

- Adicione a referencia para a biblioteca `simix-helpers`

> No exemplo abaixo o arquivo `simix-helpers.css` está na mesma pasta que a página `html`

``` Html
<!DOCTYPE html>
<html>
	<head>
		<script src="simix-helpers.js"></script>
	</head>
	<body>
	</body>
</html>
```

> Caso deseje organizar os arquivos em subpastas, basta informar o subdiretório. No exemplo abaixo foi criada uma subpasta chamada `scripts`

``` Html
<!DOCTYPE html>
<html>
	<head>
		<script src="scripts/simix-helpers.js" ></script>
	</head>
	<body>
	</body>
</html>
```

- Agora basta chamar o método que desejar. Abaixo exemplos:

## isNullOrEmpty

- Retorna `true` se for `null`, `undefined`, espaço em branco ou vazia.

Utilização :

```javascript

if(!isNullOrEmpty(minhaVariavel)) {
	fazAlgumaCoisa();
}

```


## string.format()

- Formata um objeto em string, baseado no `String.Format` do .Net;

Utilização :

```javascript

//====definir numero de casas decimais===

		"{0:n2}".format(5);
		//resultado: 5,00

		"{0:n3}".format(600.9);
		//resultado:600,900

//====definir numero de digitos===
		"{0:00}".format(8);
		//resultado: 08

		"{0:000}".format(10.7);
		//resultado: 010,7

//====definir formato date/horas===
		"{0:dd/MM/yy}".format(new Date());
		//resultado: 02/07/19

		"{0:hh:mm tt}".format(new Date());
		//resultado: 02:10 pm

		"{0:HH:mm tt}".format(new Date());
		//resultado: 14:10

//====definir variaveis no texto===
		"Olá, {0}! Meu nome é {1}. Eu sou programador de {2}".format("boa tarde", "Felipe", "software");
		//resultado: Olá, boa tarde! Meu nome é Felipe. Eu sou programador de software

		"Junção de nomes: {name} {lastName}".format(name: "Felipe", lastName: "Baltazar");
		//resultado: Junção de nomes: Felipe Baltazar
```


## Imagem de itens (model-image=true)

- Define que um elemento html "img" vai utilizar a imagem de um modelo (widgets)

Utilização :

``` html

<img model-image="true" />

```

ou

``` html

<img model-image="true" onerror='fazAlgumaCoisa()' />

```