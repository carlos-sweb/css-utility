# css-utility  

## Introducción  

css-utility fue creada con el proposito de presentar una ayuda
para las propiedades css no integradas por los grandes frameworks

## Manipulación de texto

>Alineación del texto  
>Propiedad css **text-align**  

|class name|align|
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

|class name|spacing|
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

|class name|height|
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

|class name|transform|
|:---|:----|
|t-uppercase|uppercase|
|t-lowercase|lowercase|
|t-capitalize|capitalize|

[text-transform.css](./text-transform.css)  
[text-transform.min.css](./css-dist/text-transform.min.css)  
[text-transform.scss](./text-transform.scss)  
 
>Estilo de la fuente 
>Propiedad css **font-style**  

|class name|style|
|:---|:----|
|fs-normal| normal|
|fs-italic| italic|
|fs-oblique|oblique|

[font-style.css](./font-style.css)  
[font-style.min.css](./css-dist/font-style.css)  
[font-style.scss](./font-style.scss)  
 

>Familia de la fuente  
>Propiedad css **font-family**  

|class name|family|
|:---|:----|
|sans|"'Helvetica Neue', Helvetica, Arial, sans-serif"|
|serif|"Merriweather, Georgia, serif"|
|code|"Consolas, Monaco, 'Andale Mono',monospace"|

[font-basic.css](./font-basic.css)  
[font-basic.min.css](./css-dist/font-basic.min.css)  
[font-basic.scss](./font-basic.scss)  
 

>Tamaño de la fuente    
>Propiedad css **font-size**  

|class name|size|
|:---|:----|
|fs1|1px|
|...|...|
|fs100|100px|

[font-size.css](./font-size.css)  
[font-size.min.css](./css-dist/font-size.min.css)  
[font-size.scss](./font-size.scss)  
 
>Grosor de la fuente    
>Propiedad css **font-weight**  

|class name|wight|
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

|class name|position|
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

|class name|visibility|
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

|class name|visibility|
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
|class name|color|
|:---|:----|
|c-indianred , bgc-indianred|indianred|
|c-lightcoral , bgc-lightcoral|lightcoral|
|c-salmon , bgc-salmon|salmon|
|c-darksalmon , bgc-darksalmon|darksalmon|
|c-lightsalmon , bgc-lightsalmon|lightsalmon|
|c-crimson , bgc-crimson|crimson|
|c-red , bgc-red|red|
|c-firebrick , bgc-firebrick|firebrick|
|c-darkred , bgc-darkred|darkred|
### Rosado  
|class name|color|
|:---|:----|
|c-pink,bgc-pink|pink|
|c-lightpink,bgc-lightpink|lightpink|
|c-hotpink,bgc-hotpink|hotpink|
|c-deeppink,bgc-deeppink|deeppink|
|c-mediumvioletred,bgc-mediumvioletred|mediumvioletred|
|c-palevioletred,bgc-palevioletred|palevioletred|
### Anaranjado
|class name|color|
|:---|:----|
|c-lightsalmon,bgc-lightsalmon|lightsalmon|
|c-coral,bgc-coral|coral|
|c-tomato,bgc-tomato|tomato|
|c-orangered,bgc-orangered|orangered|
|c-darkorange,bgc-darkorange|darkorange|
|c-orange,bgc-orange|orange|
### Amarillo 
|class name|color|
|:---|:----|
|c-gold,bgc-gold|gold|
|c-yellow,bgc-yellow|yellow|
|c-lightyellow,bgc-lightyellow|lightyellow|
|c-lemonchiffon,bgc-lemonchiffon|lemonchiffon|
|c-lightgoldenrodyellow,bgc-lightgoldenrodyellow|lightgoldenrodyellow|
|c-papayawhip,bgc-papayawhip|papayawhip|
|c-moccasin,bgc-moccasin|moccasin|
|c-peachpuff,bgc-peachpuff|peachpuff|
|c-palegoldenrod,bgc-palegoldenrod|palegoldenrod|
|c-khaki,bgc-khaki|khaki|
|c-darkkhaki,bgc-darkkhaki|darkkhaki|
### Púrpura 
|class name|color|
|:---|:----|
|c-lavender,bgc-lavender|lavender|
|c-thistle,bgc-thistle|thistle|
|c-plum,bgc-plum|plum|
|c-violet,bgc-violet|violet|
|c-orchid,bgc-orchid|orchid|
|c-fuchsia,bgc-fuchsia|fuchsia|
|c-magenta,bgc-magenta|magenta|
|c-mediumorchid,bgc-mediumorchid|mediumorchid|
|c-mediumpurple,bgc-mediumpurple|mediumpurple|
|c-rebeccapurple,bgc-rebeccapurple|rebeccapurple|
|c-blueviolet,bgc-blueviolet|blueviolet|
|c-darkviolet,bgc-darkviolet|darkviolet|
|c-darkorchid,bgc-darkorchid|darkorchid|
|c-darkmagenta,bgc-darkmagenta|darkmagenta|
|c-purple,bgc-purple|purple|
|c-indigo,bgc-indigo|indigo|
|c-slateblue,bgc-slateblue|slateblue|
|c-darkslateblue,bgc-darkslateblue|darkslateblue|
|c-mediumslateblue,bgc-mediumslateblue|mediumslateblue|
### Verde  
|class name|color|
|:---|:----|
|c-greenyellow,bgc-greenyellow|greenyellow|
|c-chartreuse,bgc-chartreuse|chartreuse|
|c-lawngreen,bgc-lawngreen|lawngreen|
|c-lime,bgc-lime|lime|
|c-limegreen,bgc-limegreen|limegreen|
|c-palegreen,bgc-palegreen|palegreen|
|c-lightgreen,bgc-lightgreen|lightgreen|
|c-mediumspringgreen,bgc-mediumspringgreen|mediumspringgreen|
|c-springgreen,bgc-springgreen|springgreen|
|c-mediumseagreen,bgc-mediumseagreen|mediumseagreen|
|c-seagreen,bgc-seagreen|seagreen|
|c-forestgreen,bgc-forestgreen|forestgreen|
|c-green,bgc-green|green|
|c-darkgreen,bgc-darkgreen|darkgreen|
|c-yellowgreen,bgc-yellowgreen|yellowgreen|
|c-olivedrab,bgc-olivedrab|olivedrab|
|c-olive,bgc-olive|olive|
|c-darkolivegreen,bgc-darkolivegreen|darkolivegreen|
|c-mediumaquamarine,bgc-mediumaquamarine|mediumaquamarine|
|c-darkseagreen,bgc-darkseagreen|darkseagreen|
|c-lightseagreen,bgc-lightseagreen|lightseagreen|
|c-darkcyan,bgc-darkcyan|darkcyan|
|c-teal,bgc-teal|teal|
### Azul 
|class name|color|
|:---|:----|
|c-aqua,bgc-aqua|aqua|
|c-cyan,bgc-cyan|cyan|
|c-lightcyan,bgc-lightcyan|lightcyan|
|c-paleturquoise,bgc-paleturquoise|paleturquoise|
|c-aquamarine,bgc-aquamarine|aquamarine|
|c-turquoise,bgc-turquoise|turquoise|
|c-mediumturquoise,bgc-mediumturquoise|mediumturquoise|
|c-darkturquoise,bgc-darkturquoise|darkturquoise|
|c-cadetblue,bgc-cadetblue|cadetblue|
|c-steelblue,bgc-steelblue|steelblue|
|c-lightsteelblue,bgc-lightsteelblue|lightsteelblue|
|c-powderblue,bgc-powderblue|powderblue|
|c-lightblue,bgc-lightblue|lightblue|
|c-skyblue,bgc-skyblue|skyblue|
|c-lightskyblue,bgc-lightskyblue|lightskyblue|
|c-deepskyblue,bgc-deepskyblue|deepskyblue|
|c-dodgerblue,bgc-dodgerblue|dodgerblue|
|c-cornflowerblue,bgc-cornflowerblue|cornflowerblue|
|c-mediumslateblue,bgc-mediumslateblue|mediumslateblue|
|c-royalblue,bgc-royalblue|royalblue|
|c-blue,bgc-blue|blue|
|c-mediumblue,bgc-mediumblue|mediumblue|
|c-darkblue,bgc-darkblue|darkblue|
|c-navy,bgc-navy|navy|
|c-midnightblue,bgc-midnightblue|midnightblue|
### Pardo / Café 
|class name|color|
|:---|:----|
|c-cornsilk,bgc-cornsilk|cornsilk|
|c-blanchedalmond,bgc-blanchedalmond|blanchedalmond|
|c-bisque,bgc-bisque|bisque|
|c-navajowhite,bgc-navajowhite|navajowhite|
|c-wheat,bgc-wheat|wheat|
|c-burlywood,bgc-burlywood|burlywood|
|c-tan,bgc-tan|tan|
|c-rosybrown,bgc-rosybrown|rosybrown|
|c-sandybrown,bgc-sandybrown|sandybrown|
|c-goldenrod,bgc-goldenrod|goldenrod|
|c-darkgoldenrod,bgc-darkgoldenrod|darkgoldenrod|
|c-peru,bgc-peru|peru|
|c-chocolate,bgc-chocolate|chocolate|
|c-saddlebrown,bgc-saddlebrown|saddlebrown|
|c-sienna,bgc-sienna|sienna|
|c-brown,bgc-brown|brown|
|c-maroon,bgc-maroon|maroon|
### Blanco  
|class name|color|
|:---|:----|
|c-white,bgc-white|white|
|c-snow,bgc-snow|snow|
|c-honeydew,bgc-honeydew|honeydew|
|c-mintcream,bgc-mintcream|mintcream|
|c-azure,bgc-azure|azure|
|c-aliceblue,bgc-aliceblue|aliceblue|
|c-ghostwhite,bgc-ghostwhite|ghostwhite|
|c-whitesmoke,bgc-whitesmoke|whitesmoke|
|c-seashell,bgc-seashell|seashell|
|c-beige,bgc-beige|beige|
|c-oldlace,bgc-oldlace|oldlace|
|c-floralwhite,bgc-floralwhite|floralwhite|
|c-ivory,bgc-ivory|ivory|
|c-antiquewhite,bgc-antiquewhite|antiquewhite|
|c-linen,bgc-linen|linen|
|c-lavenderblush,bgc-lavenderblush|lavenderblush|
|c-mistyrose,bgc-mistyrose|mistyrose|
### gris
|class name|color|
|:---|:----|
|c-gainsboro,bgc-gainsboro|gainsboro|
|c-lightgray,bgc-lightgray|lightgray|
|c-silver,bgc-silver|silver|
|c-darkgray,bgc-darkgray|darkgray|
|c-gray,bgc-gray|gray|
|c-dimgray,bgc-dimgray|dimgray|
|c-lightslategray,bgc-lightslategray|lightslategray|
|c-slategray,bgc-slategray|slategray|
|c-darkslategray,bgc-darkslategray|darkslategray|
|c-black,bgc-black|black|

[color-name.css](./color-name.css)  
[color-name.min.css](./css-dist/color-name.min.css)   
[color-name.scss](./color-name.scss)

[bgc-name.css](./bgc-name.css)  
[bgc-name.min.css](./css-dist/bgc-name.min.css)   
[bgc-name.scss](./bgc-name.scss)
