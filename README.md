
# css-utility  

## Introducción  

css-utility fue creada con el proposito de presentar una ayuda
para las propiedades css no integradas por los grandes frameworks

## Manipulación de texto

>Alineación del texto  
>Propiedad css **text-align**  

|name|align|
|:---|:----|
|tac |  center  |
|tar |  right   |
|tal |  left    |
|tai |  inherit |
|taj |  justify |

[text-align.css](./text-align.css)  
[text-align.min.css](./css-dist/text-align.min.css)   
[text-align.scss](./text-align.scss)
  

>Espacio entre letras  
>Propiedad css **letter-spacing**  

|name|spacing|
|:---|:----|
|ls1|0.1rem|
|ls2|0.2rem|
|ls3|0.3rem|
|ls4|0.4rem|
|ls5|0.5rem|
|ls6|0.6rem|
|ls7|0.7rem|
|ls8|0.8rem|
|ls9|0.9rem|

[letter-spacing.css](./letter-spacing.css)  
[letter-spacing.min.css](./css-dist/letter-spacing.min.css)  
[letter-spacing.scss](./letter-spacing.scss)  

>Espacio entre lineas  
>Propiedad css **line-height**  

|name|height|
|:---|:----|
|lh1|1|
|lh1-1|1.1|
|lh1-2|1.2|
|lh1-3|1.3|
|lh1-4|1.4|
|lh1-5|1.5|
|lh1-6|1.6|
|lh1-7|1.7|
|lh1-8|1.8|
|lh1-9|1.9|

[line-height.css](./line-height.css)  
[line-height.min.css](./css-dist/line-height.min.css)   
[line-height.scss](./line-height.scss)  
 

>Transformación del texto  
>Propiedad css **text-transform**  

|name|transform|
|:---|:----|
|t-uppercase|uppercase|
|t-lowercase|lowercase|
|t-capitalize|capitalize|

[text-transform.css](./text-transform.css)  
[text-transform.min.css](./css-dist/text-transform.min.css)  
[text-transform.scss](./text-transform.scss)  
 
>Estilo de la fuente 
>Propiedad css **font-style**  

|name|style|
|:---|:----|
|fs-normal| normal|
|fs-italic| italic|
|fs-oblique|oblique|

[font-style.css](./font-style.css)  
[font-style.min.css](./css-dist/font-style.css)  
[font-style.scss](./font-style.scss)  
 

>Familia de la fuente  
>Propiedad css **font-family**  

|name|family|
|:---|:----|
|sans|"'Helvetica Neue', Helvetica, Arial, sans-serif"|
|serif|"Merriweather, Georgia, serif"|
|code|"Consolas, Monaco, 'Andale Mono',monospace"|

[font-basic.css](./font-basic.css)  
[font-basic.min.css](./css-dist/font-basic.min.css)  
[font-basic.scss](./font-basic.scss)  
 

>Tamaño de la fuente    
>Propiedad css **font-size**  

|name|size|
|:---|:----|
|fs1|1px|
|...|...|
|fs100|100px|

[font-size.css](./font-size.css)  
[font-size.min.css](./css-dist/font-size.min.css)  
[font-size.scss](./font-size.scss)  
 
>Grosor de la fuente    
>Propiedad css **font-weight**  

|name|wight|
|:---|:----|
|fw-normal |  normal|
|fw-bold |  bold|
|fw-bolder |  bolder|
|fw-lighter |  lighter|
|fw1| 100|
|fw2| 200|
|fw3| 300|
|fw4| 400|
|fw5| 500|
|fw6| 600|
|fw7| 700|
|fw8| 800|
|fw9| 900|

[font-weight.css](./font-weight.css)  
[font-weight.min.css](./css-dist/font-weight.min.css)  
[font-weight.scss](./font-weight.scss)  
 

### Herramienta de texto

>El conjunto de archivos que manipulan el texto  
>include text-align,letter-spacing,line-height,text-transform  
>font-style,font-size,font-basic,font-weight

[tools-text.css](./tools-text.css)  
[tools-text.min.css](./css-dist/tools-text.min.css)  
[tools-text.scss](./tools-text.scss)  
 

## Manipulación de la posición

>Posición de un objecto  
>Propiedad css **position,top,left,right,bottom**  

|name|position|
|:---|:----|
|relative |  relative|
|absolute |  absolute|
|fixed |  fixed|
|pin-left |left: 0|
|pin-top |top: 0|
|pin-right |right: 0|
|pin-bottom |bottom: 0|
|pin-edges | left: 0,top: 0,right: 0,bottom: 0|


[position.css](./position.css)  
[position.min.css](./css-dist/position.min.css)  
[position.scss](./position.scss)  
 

## Manipulación de la visibilidad

>Visibilidad del elemento    
>Propiedad css **visibility**  

|name|visibility|
|:---|:----|
|relative |  visible|
|absolute |  hidden|
|fixed |  collapse|

[visibility.css](./visibility.css)  
[visibility.min.css](./css-dist/visibility.min.css)  
[visibility.scss](./visibility.scss)  
 

## Manipulación del desbordamineto

>Visibilidad del elemento    
>Propiedad css **overlow**  

|name|visibility|
|:---|:----|
|ofh| overflow: hidden !important|
|ofx|overflow-x: scroll !important;|
|ofy| overflow-y: scroll !important|

[overflow.css](./overflow.css)  
[overflow.min.css](./css-dist/overflow.min.css)  
[overflow.scss](./overflow.scss)  

## Manipulación de colores

>Colores para elemento provenientes de un nombre de color  
>Propiedad css **color** y **background-color**

### Rojo
|name|color|
|:---|:----|
|c-color,bgc-color|indianred|
|c-color,bgc-color|lightcoral|
|c-color,bgc-color|salmon|
|c-color,bgc-color|darksalmon|
|c-color,bgc-color|lightsalmon|
|c-color,bgc-color|crimson|
|c-color,bgc-color|red|
|c-color,bgc-color|firebrick|
|c-color,bgc-color|darkred|
### Rosado  
|name|color|
|:---|:----|
|c-color,bgc-color|pink|
|c-color,bgc-color|lightpink|
|c-color,bgc-color|hotpink|
|c-color,bgc-color|deeppink|
|c-color,bgc-color|mediumvioletred|
|c-color,bgc-color|palevioletred|
### Anaranjado
|name|color|
|:---|:----|
|c-color,bgc-color|lightsalmon|
|c-color,bgc-color|coral|
|c-color,bgc-color|tomato|
|c-color,bgc-color|orangered|
|c-color,bgc-color|darkorange|
|c-color,bgc-color|orange|
### Amarillo 
|name|color|
|:---|:----|
|c-color,bgc-color|gold|
|c-color,bgc-color|yellow|
|c-color,bgc-color|lightyellow|
|c-color,bgc-color|lemonchiffon|
|c-color,bgc-color|lightgoldenrodyellow|
|c-color,bgc-color|papayawhip|
|c-color,bgc-color|moccasin|
|c-color,bgc-color|peachpuff|
|c-color,bgc-color|palegoldenrod|
|c-color,bgc-color|khaki|
|c-color,bgc-color|darkkhaki|
### Púrpura 
|name|color|
|:---|:----|
|c-color,bgc-color|lavender|
|c-color,bgc-color|thistle|
|c-color,bgc-color|plum|
|c-color,bgc-color|violet|
|c-color,bgc-color|orchid|
|c-color,bgc-color|fuchsia|
|c-color,bgc-color|magenta|
|c-color,bgc-color|mediumorchid|
|c-color,bgc-color|mediumpurple|
|c-color,bgc-color|rebeccapurple|
|c-color,bgc-color|blueviolet|
|c-color,bgc-color|darkviolet|
|c-color,bgc-color|darkorchid|
|c-color,bgc-color|darkmagenta|
|c-color,bgc-color|purple|
|c-color,bgc-color|indigo|
|c-color,bgc-color|slateblue|
|c-color,bgc-color|darkslateblue|
|c-color,bgc-color|mediumslateblue|
### Verde  
|name|color|
|:---|:----|
|c-color,bgc-color|greenyellow|
|c-color,bgc-color|chartreuse|
|c-color,bgc-color|lawngreen|
|c-color,bgc-color|lime|
|c-color,bgc-color|limegreen|
|c-color,bgc-color|palegreen|
|c-color,bgc-color|lightgreen|
|c-color,bgc-color|mediumspringgreen|
|c-color,bgc-color|springgreen|
|c-color,bgc-color|mediumseagreen|
|c-color,bgc-color|seagreen|
|c-color,bgc-color|forestgreen|
|c-color,bgc-color|green|
|c-color,bgc-color|darkgreen|
|c-color,bgc-color|yellowgreen|
|c-color,bgc-color|olivedrab|
|c-color,bgc-color|olive|
|c-color,bgc-color|darkolivegreen|
|c-color,bgc-color|mediumaquamarine|
|c-color,bgc-color|darkseagreen|
|c-color,bgc-color|lightseagreen|
|c-color,bgc-color|darkcyan|
|c-color,bgc-color|teal|
### Azul 
|name|color|
|:---|:----|
|c-color,bgc-color|aqua|
|c-color,bgc-color|cyan|
|c-color,bgc-color|lightcyan|
|c-color,bgc-color|paleturquoise|
|c-color,bgc-color|aquamarine|
|c-color,bgc-color|turquoise|
|c-color,bgc-color|mediumturquoise|
|c-color,bgc-color|darkturquoise|
|c-color,bgc-color|cadetblue|
|c-color,bgc-color|steelblue|
|c-color,bgc-color|lightsteelblue|
|c-color,bgc-color|powderblue|
|c-color,bgc-color|lightblue|
|c-color,bgc-color|skyblue|
|c-color,bgc-color|lightskyblue|
|c-color,bgc-color|deepskyblue|
|c-color,bgc-color|dodgerblue|
|c-color,bgc-color|cornflowerblue|
|c-color,bgc-color|mediumslateblue|
|c-color,bgc-color|royalblue|
|c-color,bgc-color|blue|
|c-color,bgc-color|mediumblue|
|c-color,bgc-color|darkblue|
|c-color,bgc-color|navy|
|c-color,bgc-color|midnightblue|
### Pardo / Café 
|name|color|
|:---|:----|
|c-color,bgc-color|cornsilk|
|c-color,bgc-color|blanchedalmond|
|c-color,bgc-color|bisque|
|c-color,bgc-color|navajowhite|
|c-color,bgc-color|wheat|
|c-color,bgc-color|burlywood|
|c-color,bgc-color|tan|
|c-color,bgc-color|rosybrown|
|c-color,bgc-color|sandybrown|
|c-color,bgc-color|goldenrod|
|c-color,bgc-color|darkgoldenrod|
|c-color,bgc-color|peru|
|c-color,bgc-color|chocolate|
|c-color,bgc-color|saddlebrown|
|c-color,bgc-color|sienna|
|c-color,bgc-color|brown|
|c-color,bgc-color|maroon|
### Blanco  
|name|color|
|:---|:----|
|c-color,bgc-color|white|
|c-color,bgc-color|snow|
|c-color,bgc-color|honeydew|
|c-color,bgc-color|mintcream|
|c-color,bgc-color|azure|
|c-color,bgc-color|aliceblue|
|c-color,bgc-color|ghostwhite|
|c-color,bgc-color|whitesmoke|
|c-color,bgc-color|seashell|
|c-color,bgc-color|beige|
|c-color,bgc-color|oldlace|
|c-color,bgc-color|floralwhite|
|c-color,bgc-color|ivory|
|c-color,bgc-color|antiquewhite|
|c-color,bgc-color|linen|
|c-color,bgc-color|lavenderblush|
|c-color,bgc-color|mistyrose|
### gris
|name|color|
|:---|:----|
|c-color,bgc-color|gainsboro|
|c-color,bgc-color|lightgray|
|c-color,bgc-color|silver|
|c-color,bgc-color|darkgray|
|c-color,bgc-color|gray|
|c-color,bgc-color|dimgray|
|c-color,bgc-color|lightslategray|
|c-color,bgc-color|slategray|
|c-color,bgc-color|darkslategray|
|c-color,bgc-color|black|

[color-name.css](./color-name.css)  
[color-name.min.css](./css-dist/color-name.min.css)   
[color-name.scss](./color-name.scss)

[bgc-name.css](./bgc-name.css)  
[bgc-name.min.css](./css-dist/bgc-name.min.css)   
[bgc-name.scss](./bgc-name.scss)
