---
title: 'Como centrar un div en CSS'
description: 'Aqui la guia definitiva de como centrar un div con CSS.'
pubDate: 'Jul 30 2023'
heroImage: '/blog-placeholder-3.jpg'
tags: 
  - 'CSS'
  - 'HTML'
---

## Cómo centrar un div con css
Usando margin: 0 auto
Una forma sencilla de centrar un div horizontalmente es **usar la propiedad margin con el valor 0 auto**. Esto significa que el div tendrá un margen superior e inferior de 0, y un margen izquierdo y derecho automático, que se ajustará para que el div quede centrado dentro de su elemento padre. Para que este método funcione, el div debe tener una anchura definida, y el elemento padre debe tener una anchura mayor que el div.

Ejemplo:
```html
<div class="padre">
  <div class="hijo"></div>
</div>
```
```css
.padre {
  width: 500px;
  height: 300px;
  background-color: lightblue;
}

.hijo {
  width: 200px;
  height: 100px;
  background-color: lightcoral;
  margin: 0 auto;
}
```
## Usando position: absolute y transform: translate
Otra forma de centrar un div tanto horizontal como verticalmente es usar la propiedad position con el valor absolute y la propiedad transform con la función translate. Esto significa que el div se posicionará de forma absoluta con respecto a su elemento padre más cercano que tenga una posición distinta a static (por defecto, el body), y se desplazará una cierta cantidad de píxeles o porcentajes desde su posición original. Para centrar el div, debemos desplazarlo el 50% de su anchura y altura hacia la izquierda y hacia arriba, respectivamente, usando transform: translate(-50%, -50%). Además, debemos colocar el div en el centro del elemento padre usando top: 50% y left: 50%.

Ejemplo:
```html
<div class="padre">
  <div class="hijo"></div>
</div>
```

```css
.padre {
  width: 500px;
  height: 300px;
  background-color: lightblue;
  position: relative; /* necesario para que el hijo se posicione respecto al padre */
}

.hijo {
  width: 200px;
  height: 100px;
  background-color: lightcoral;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

## Usando display: flex y align-items / justify-content
Una forma moderna y flexible de centrar un div es usar la propiedad display con el valor flex y las propiedades align-items y justify-content con el valor center. Esto significa que el elemento padre se convertirá en un contenedor flexible, que podrá distribuir y alinear sus elementos hijos de forma dinámica según el espacio disponible. Para centrar el div, debemos alinearlo tanto en el eje vertical como en el horizontal usando align-items: center y justify-content: center, respectivamente.

Ejemplo:
```html
<div class="padre">
  <div class="hijo"></div>
</div>
```

```css
.padre {
  width: 500px;
  height: 300px;
  background-color: lightblue;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hijo {
  width: 200px;
  height: 100px;
  background-color: lightcoral;
}
```

## Usando display: grid y align-items / justify-items
Otra forma moderna y potente de centrar un div es usar la propiedad display con el valor grid y las propiedades align-items y justify-items con el valor center. Esto significa que el elemento padre se convertirá en un contenedor de cuadrícula, que podrá dividir su espacio en filas y columnas y colocar sus elementos hijos en las celdas que se creen. Para centrar el div, debemos alinearlo tanto en el eje vertical como en el horizontal usando align-items: center y justify-items: center, respectivamente.

Ejemplo:
```html
<div class="padre">
  <div class="hijo"></div>
</div>
```

```css
.padre {
  width: 500px;
  height: 300px;
  background-color: lightblue;
  display: grid;
  align-items: center;
  justify-items: center;
}

.hijo {
  width: 200px;
  height: 100px;
  background-color: lightcoral;
}
```

## Usando display: table y vertical-align / text-align
Una forma antigua pero efectiva de centrar un div es usar la propiedad display con el valor table y las propiedades vertical-align y text-align con el valor center. Esto significa que el elemento padre se comportará como una tabla, y el elemento hijo se comportará como una celda de la tabla. Para centrar el div, debemos alinearlo tanto en el eje vertical como en el horizontal usando vertical-align: center y text-align: center, respectivamente.

Ejemplo:
```html
<div class="padre">
  <div class="hijo"></div>
</div>
```
```css
.padre {
  width: 500px;
  height: 300px;
  background-color: lightblue;
  display: table;
}

.hijo {
  width: 200px;
  height: 100px;
  background-color: lightcoral;
  display: table-cell;
  vertical-align: center;
  text-align: center;
}
```

## Conclusión

En este artículo, hemos visto cinco formas diferentes de centrar un div con css, usando diferentes propiedades y técnicas. Algunas de estas formas son más antiguas y requieren conocer las dimensiones del div, mientras que otras son más modernas y flexibles y se adaptan al espacio disponible. No hay una forma única o correcta de centrar un div, sino que depende del contexto y del resultado que se quiera conseguir. Lo importante es entender cómo funciona cada método y cuáles son sus ventajas e inconvenientes.

Espero que este artículo te haya sido útil y hayas aprendido algo nuevo sobre cómo centrar un div con css. Si tienes alguna duda o sugerencia, puedes dejarme un comentario abajo. Gracias por leerme. 😊