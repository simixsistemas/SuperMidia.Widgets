# Inicio
- Baixe o arquivo `simix-autofit.js` clicando [aqui](simix-autofit.js)

- Adicione a referência para a biblioteca `simix-autofit`

> No exemplo abaixo o arquivo `simix-autofit.js` está na mesma pasta que a página `html`

``` Html
<!DOCTYPE html>
<html>
	<head>
		<script src="simix-autofit.js"></script>
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
		<script src="scripts/simix-autofit.js" ></script>
	</head>
	<body>
	</body>
</html>
```

## Configurando texto para ajustar

- Configurando autofit em um elemento

``` Html
	<div fit-text="true" style="width:50%;height:100%">
		Texto para ajustar
	</div>
```

> É importante ter definido o tamanho do elemento para funcionar o cálculo da fonte (tambem funciona com `auto` quando definidas as propriedades `top`, `bottom`, `left` e `rigth`)

## Outras propriedades

- Multiline | Permite quebra de linha ao processar a fonte

``` Html
	<div fit-multi-line="true" fit-text="true" style="width:50%;height:100%">
		Texto para ajustar
	</div>
```

- Alinhamento Vertical | Alinha ao centro na vertical (valor padrão é `false`)

``` Html
	<div fit-align-vert="true" fit-text="true" style="width:50%;height:100%">
		Texto para ajustar
	</div>
```

- Alinhamento Horizontal | Alinha ao centro na horizontal (valor padrão é `false`)

``` Html
	<div fit-align-horiz="true" fit-text="true" style="width:50%;height:100%">
		Texto para ajustar
	</div>
```

- Fonte mínimo (px) | Define o minimo de tamanho para a fonte (valor padrão é 6)

``` Html
	<div fit-min-font="6" fit-text="true" style="width:50%;height:100%">
		Texto para ajustar
	</div>
```

- Fonte máximo (px) | Define o máximo de tamanho para a fonte (valor padrão é 80)

``` Html
	<div fit-max-font="80" fit-text="true" style="width:50%;height:100%">
		Texto para ajustar
	</div>
```


- Apenas largura | Define se o cálculo da fonte será executado se baseando apenas na largura (valor padrão é `false`)

``` Html
	<div fit-widthOnly="true" fit-text="true" style="width:50%;height:100%">
		Texto para ajustar
	</div>
```

- Detectar multiplas linhas | Define se o cálculo da fonte deverá detectar multiplas linhas automaticamente (valor padrão `true`)

``` Html
	<div fit-detect-multi-line="false" fit-text="true" style="width:50%;height:100%">
		Texto para ajustar
	</div>
```

- Reprocessar | Define se o cálculo da fonte deverá reprocessar quando ouver modificações (valor padrão é `true`)

``` Html
	<div fit-reProcess="false" fit-text="true" style="width:50%;height:100%">
		Texto para ajustar
	</div>
```

- Alinhamento vertical com FlexBox | Define se o alinhamento vertical deverá usar Flexbox como estilo (valor padrão é `false`)

``` Html
	<div fit-align-vert-flexbox="true" fit-text="true" style="width:50%;height:100%">
		Texto para ajustar
	</div>
```

## Processamento de fonte sem Jquery

``` Javascript
	var opcoes =  {
		alignVert: false, // if true, textFit will align vertically using css tables
		alignHoriz: false, // if true, textFit will set text-align: center
		multiLine: false, // if true, textFit will not set white-space: no-wrap
		detectMultiLine: true, // disable to turn off automatic multi-line sensing
		minFontSize: 6,
		maxFontSize: 80,
		reProcess: true, // if true, textFit will re-process already-fit nodes. Set to 'false' for better performance
		widthOnly: false, // if true, textFit will fit text to element width, regardless of text height
		alignVertWithFlexbox: false, // if true, textFit will use flexbox for vertical alignment
	};

    var elemento = document.getElementById("meuElementoDeTexto");
	processItem(elemento, opcoes);
```