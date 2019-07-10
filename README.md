# css-utility  

## Introducción  / Introduction  

css-utility fue creada con el proposito de presentar una ayuda
para las propiedades css no integradas por los grandes frameworks

## Manipulación de texto / Text manipulation  

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
 

### Herramienta de texto / Text tool

>El conjunto de archivos que manipulan el texto  
>include text-align,letter-spacing,line-height,text-transform  
>font-style,font-size,font-basic,font-weight

[tools-text.css](./tools-text.css)  
[tools-text.min.css](./css-dist/tools-text.min.css)  
[tools-text.scss](./tools-text.scss)  
 

## Manipulación de la posición / Position manipulation

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
 

## Manipulación de la visibilidad / Manipulation of visibility

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
 

## Manipulación del desbordamineto / Overflow Manipulation

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

## Manipulación de colores / Colour manipulation 

>Colores para elemento provenientes de un nombre de color  
>Propiedad css **color** y **background-color**

### Rojo / Red
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
### Rosado  / Pink
|class name|color|
|:---|:----|
|c-pink,bgc-pink|pink|
|c-lightpink,bgc-lightpink|lightpink|
|c-hotpink,bgc-hotpink|hotpink|
|c-deeppink,bgc-deeppink|deeppink|
|c-mediumvioletred,bgc-mediumvioletred|mediumvioletred|
|c-palevioletred,bgc-palevioletred|palevioletred|
### Anaranjado / Orange
|class name|color|
|:---|:----|
|c-lightsalmon,bgc-lightsalmon|lightsalmon|
|c-coral,bgc-coral|coral|
|c-tomato,bgc-tomato|tomato|
|c-orangered,bgc-orangered|orangered|
|c-darkorange,bgc-darkorange|darkorange|
|c-orange,bgc-orange|orange|
### Amarillo / Yellow
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
### Púrpura / Purple
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
### Verde / Green
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
### Azul / Blue
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
### Pardo / Brown
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
### Blanco / White 
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
### Gris / Silver
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

>Colores para elemento provenientes de la paleta de colores de material.io  
>Propiedad css **color** y **background-color**
>Enlace de referencia [material.io paleta de colores](https://material.io/design/color/the-color-system.html#tools-for-picking-colors)  
### Rojo / Red
|class name|background|color|
|:---|:----|:----|
|red50|#FFEBEE|rgba(0, 0, 0, .87)|
|red100|#FFCDD2|rgba(0, 0, 0, .87)|
|red200|#EF9A9A|rgba(0, 0, 0, .87)|
|red300|#E57373|rgba(0, 0, 0, .87)|
|red400|#EF5350|rgba(255, 255, 255, .87)|
|red500|#F44336|rgba(255, 255, 255, .87)|
|red600|#E53935|rgba(255, 255, 255, .87)|
|red700|#D32F2F|rgba(255, 255, 255, .87)|
|red800|#C62828|rgba(255, 255, 255, .87)|
|red900|#B71C1C|rgba(255, 255, 255, .87)|
|redA100|#FF8A80|rgba(0, 0, 0, .87)|
|redA200|#FF5252|rgba(255, 255, 255, .87)|
|redA300|#FF1744|rgba(255, 255, 255, .87)|
|redA400|#D50000|rgba(255, 255, 255, .87)|
### Rosado / Pink
|class name|background|color|
|:---|:----|:----|
|pink50|#FCE4EC|rgba(0, 0, 0, .87)|
|pink100|#F8BBD0|rgba(0, 0, 0, .87)|
|pink200|#F48FB1|rgba(0, 0, 0, .87)|
|pink300|#F06292|rgba(0, 0, 0, .87)|
|pink400|#EC407A|rgba(255, 255, 255, .87)|
|pink500|#E91E63|rgba(255, 255, 255, .87)|
|pink600|#D81B60|rgba(255, 255, 255, .87)|
|pink700|#C2185B|rgba(255, 255, 255, .87)|
|pink800|#AD1457|rgba(255, 255, 255, .87)|
|pink900|#880E4F|rgba(255, 255, 255, .87)|
|pinkA100|#FF80AB|rgba(0, 0, 0, .87)|
|pinkA200|#FF4081|rgba(255, 255, 255, .87)|
|pinkA300|#F50057|rgba(255, 255, 255, .87)|
|pinkA400|#C51162|rgba(255, 255, 255, .87)|
### Púrpura / Purple
|class name|background|color|
|:---|:----|:----|
|purple50|#F3E5F5|rgba(0, 0, 0, .87)|
|purple100|#E1BEE7|rgba(0, 0, 0, .87)|
|purple200|#CE93D8|rgba(0, 0, 0, .87)|
|purple300|#BA68C8|rgba(255, 255, 255, .87)|
|purple400|#AB47BC|rgba(255, 255, 255, .87)|
|purple500|#9C27B0|rgba(255, 255, 255, .87)|
|purple600|#8E24AA|rgba(255, 255, 255, .87)|
|purple700|#7B1FA2|rgba(255, 255, 255, .87)|
|purple800|#6A1B9A|rgba(255, 255, 255, .87)|
|purple900|#4A148C|rgba(255, 255, 255, .87)|
|purpleA100|#EA80FC|rgba(0, 0, 0, .87)|
|purpleA200|#E040FB|rgba(255, 255, 255, .87)|
|purpleA300|#D500F9|rgba(255, 255, 255, .87)|
|purpleA400|#AA00FF|rgba(255, 255, 255, .87)|
### Púrpura Intenso  / Deep Purple  
|class name|background|color|
|:---|:----|:----|
|deeppurple50|#EDE7F6|rgba(0, 0, 0, .87)|
|deeppurple100|#D1C4E9|rgba(0, 0, 0, .87)|
|deeppurple200|#B39DDB|rgba(0, 0, 0, .87)|
|deeppurple300|#9575CD|rgba(255, 255, 255, .87)|
|deeppurple400|#7E57C2|rgba(255, 255, 255, .87)|
|deeppurple500|#673AB7|rgba(255, 255, 255, .87)|
|deeppurple600|#5E35B1|rgba(255, 255, 255, .87)|
|deeppurple700|#512DA8|rgba(255, 255, 255, .87)|
|deeppurple800|#4527A0|rgba(255, 255, 255, .87)|
|deeppurple900|#311B92|rgba(255, 255, 255, .87)|
|deeppurpleA100|#B388FF|rgba(0, 0, 0, .87)|
|deeppurpleA200|#7C4DFF|rgba(255, 255, 255, .87)|
|deeppurpleA300|#651FFF|rgba(255, 255, 255, .87)|
|deeppurpleA400|#6200EA|rgba(255, 255, 255, .87)|
### Añil  / Indigo
|class name|background|color|
|:---|:----|:----|
|indigo50|#E8EAF6|rgba(0, 0, 0, .87)|
|indigo100|#C5CAE9|rgba(0, 0, 0, .87)|
|indigo200|#9FA8DA|rgba(0, 0, 0, .87)|
|indigo300|#7986CB|rgba(255, 255, 255, .87)|
|indigo400|#5C6BC0|rgba(255, 255, 255, .87)|
|indigo500|#3F51B5|rgba(255, 255, 255, .87)|
|indigo600|#3949AB|rgba(255, 255, 255, .87)|
|indigo700|#303F9F|rgba(255, 255, 255, .87)|
|indigo800|#283593|rgba(255, 255, 255, .87)|
|indigo900|#1A237E|rgba(255, 255, 255, .87)|
|indigoA100|#8C9EFF|rgba(0, 0, 0, .87)|
|indigoA200|#536DFE|rgba(255, 255, 255, .87)|
|indigoA300|#3D5AFE|rgba(255, 255, 255, .87)|
|indigoA400|#304FFE|rgba(255, 255, 255, .87)|
### Azul  / Blue
|class name|background|color|
|:---|:----|:----|
|blue50|#E3F2FD|rgba(0, 0, 0, .87)|
|blue100|#BBDEFB|rgba(0, 0, 0, .87)|
|blue200|#90CAF9|rgba(0, 0, 0, .87)|
|blue300|#64B5F6|rgba(0, 0, 0, .87)|
|blue400|#42A5F5|rgba(0, 0, 0, .87)|
|blue500|#2196F3|rgba(0, 0, 0, .87)|
|blue600|#1E88E5|rgba(255, 255, 255, .87)|
|blue700|#1976D2|rgba(255, 255, 255, .87)|
|blue800|#1565C0|rgba(255, 255, 255, .87)|
|blue900|#0D47A1|rgba(255, 255, 255, .87)|
|blueA100|#82B1FF|rgba(0, 0, 0, .87)|
|blueA200|#448AFF|rgba(255, 255, 255, .87)|
|blueA300|#2979FF|rgba(255, 255, 255, .87)|
|blueA400|#2962FF|rgba(255, 255, 255, .87)|
### Celeste  / lightblue
|class name|background|color|
|:---|:----|:----|
|lightblue50|#E1F5FE|rgba(0, 0, 0, .87)|
|lightblue100|#B3E5FC|rgba(0, 0, 0, .87)|
|lightblue200|#81D4FA|rgba(0, 0, 0, .87)|
|lightblue300|#4FC3F7|rgba(0, 0, 0, .87)|
|lightblue400|#29B6F6|rgba(0, 0, 0, .87)|
|lightblue500|#03A9F4|rgba(0, 0, 0, .87)|
|lightblue600|#039BE5|rgba(0, 0, 0, .87)|
|lightblue700|#0288D1|rgba(255, 255, 255, .87)|
|lightblue800|#0277BD|rgba(255, 255, 255, .87)|
|lightblue900|#01579B|rgba(255, 255, 255, .87)|
|lightblueA100|#80D8FF|rgba(0, 0, 0, .87)|
|lightblueA200|#40C4FF|rgba(0, 0, 0, .87)|
|lightblueA300|#00B0FF|rgba(0, 0, 0, .87)|
|lightblueA400|#0091EA|rgba(255, 255, 255, .87)|
### Cian  / Cyan
|class name|background|color|
|:---|:----|:----|
|cyan50|#E0F7FA|rgba(0, 0, 0, .87)|
|cyan100|#B2EBF2|rgba(0, 0, 0, .87)|
|cyan200|#80DEEA|rgba(0, 0, 0, .87)|
|cyan300|#4DD0E1|rgba(0, 0, 0, .87)|
|cyan400|#26C6DA|rgba(0, 0, 0, .87)|
|cyan500|#00BCD4|rgba(0, 0, 0, .87)|
|cyan600|#00ACC1|rgba(0, 0, 0, .87)|
|cyan700|#0097A7|rgba(255, 255, 255, .87)|
|cyan800|#00838F|rgba(255, 255, 255, .87)|
|cyan900|#006064|rgba(255, 255, 255, .87)|
|cyanA100|#84FFFF|rgba(0, 0, 0, .87)|
|cyanA200|#18FFFF|rgba(0, 0, 0, .87)|
|cyanA300|#00E5FF|rgba(0, 0, 0, .87)|
|cyanA400|#00B8D4|rgba(0, 0, 0, .87)|
### Cerceta  / teal  
|class name|background|color|
|:---|:----|:----|
|teal50|#E0F2F1|rgba(0, 0, 0, .87)|
|teal100|#B2DFDB|rgba(0, 0, 0, .87)|
|teal200|#80CBC4|rgba(0, 0, 0, .87)|
|teal300|#4DB6AC|rgba(0, 0, 0, .87)|
|teal400|#26A69A|rgba(0, 0, 0, .87)|
|teal500|#009688|rgba(255, 255, 255, .87)|
|teal600|#00897B|rgba(255, 255, 255, .87)|
|teal700|#00796B|rgba(255, 255, 255, .87)|
|teal800|#00695C|rgba(255, 255, 255, .87)|
|teal900|#004D40|rgba(255, 255, 255, .87)|
|tealA100|#A7FFEB|rgba(0, 0, 0, .87)|
|tealA200|#64FFDA|rgba(0, 0, 0, .87)|
|tealA300|#1DE9B6|rgba(0, 0, 0, .87)|
|tealA400|#00BFA5|rgba(0, 0, 0, .87)|
### Verde  / Green
|class name|background|color|
|:---|:----|:----|
|green50|#E8F5E9|rgba(0, 0, 0, .87)|
|green100|#C8E6C9|rgba(0, 0, 0, .87)|
|green200|#A5D6A7|rgba(0, 0, 0, .87)|
|green300|#81C784|rgba(0, 0, 0, .87)|
|green400|#66BB6A|rgba(0, 0, 0, .87)|
|green500|#4CAF50|rgba(0, 0, 0, .87)|
|green600|#43A047|rgba(255, 255, 255, .87)|
|green700|#388E3C|rgba(255, 255, 255, .87)|
|green800|#2E7D32|rgba(255, 255, 255, .87)|
|green900|#1B5E20|rgba(255, 255, 255, .87)|
|greenA100|#B9F6CA|rgba(0, 0, 0, .87)|
|greenA200|#69F0AE|rgba(0, 0, 0, .87)|
|greenA300|#00E676|rgba(0, 0, 0, .87)|
|greenA400|#00C853|rgba(0, 0, 0, .87)|
### Verde Claro / Light Green
|class name|background|color|
|:---|:----|:----|
|lightgreen50|#F1F8E9|rgba(0, 0, 0, .87)|
|lightgreen100|#DCEDC8|rgba(0, 0, 0, .87)|
|lightgreen200|#C5E1A5|rgba(0, 0, 0, .87)|
|lightgreen300|#AED581|rgba(0, 0, 0, .87)|
|lightgreen400|#9CCC65|rgba(0, 0, 0, .87)|
|lightgreen500|#8BC34A|rgba(0, 0, 0, .87)|
|lightgreen600|#7CB342|rgba(0, 0, 0, .87)|
|lightgreen700|#689F38|rgba(0, 0, 0, .87)|
|lightgreen800|#558B2F|rgba(255, 255, 255, .87)|
|lightgreen900|#33691E|rgba(255, 255, 255, .87)|
|lightgreenA100|#CCFF90|rgba(0, 0, 0, .87)|
|lightgreenA200|#B2FF59|rgba(0, 0, 0, .87)|
|lightgreenA300|#76FF03|rgba(0, 0, 0, .87)|
|lightgreenA400|#64DD17|rgba(0, 0, 0, .87)|
### Lima / Lime
|class name|background|color|
|:---|:----|:----|
|lime50|#F9FBE7|rgba(0, 0, 0, .87)|
|lime100|#F0F4C3|rgba(0, 0, 0, .87)|
|lime200|#E6EE9C|rgba(0, 0, 0, .87)|
|lime300|#DCE775|rgba(0, 0, 0, .87)|
|lime400|#D4E157|rgba(0, 0, 0, .87)|
|lime500|#CDDC39|rgba(0, 0, 0, .87)|
|lime600|#C0CA33|rgba(0, 0, 0, .87)|
|lime700|#AFB42B|rgba(0, 0, 0, .87)|
|lime800|#9E9D24|rgba(0, 0, 0, .87)|
|lime900|#827717|rgba(255, 255, 255, .87)|
|limeA100|#F4FF81|rgba(0, 0, 0, .87)|
|limeA200|#EEFF41|rgba(0, 0, 0, .87)|
|limeA300|#C6FF00|rgba(0, 0, 0, .87)|
|limeA400|#AEEA00|rgba(0, 0, 0, .87)|
### Amarillo / Yellow
|class name|background|color|
|:---|:----|:----|
|yellow50|#FFFDE7|rgba(0, 0, 0, .87)|
|yellow100|#FFF9C4|rgba(0, 0, 0, .87)|
|yellow200|#FFF59D|rgba(0, 0, 0, .87)|
|yellow300|#FFF176|rgba(0, 0, 0, .87)|
|yellow400|#FFEE58|rgba(0, 0, 0, .87)|
|yellow500|#FFEB3B|rgba(0, 0, 0, .87)|
|yellow600|#FDD835|rgba(0, 0, 0, .87)|
|yellow700|#FBC02D|rgba(0, 0, 0, .87)|
|yellow800|#F9A825|rgba(0, 0, 0, .87)|
|yellow900|#F57F17|rgba(0, 0, 0, .87)|
|yellowA100|#FFFF8D|rgba(0, 0, 0, .87)|
|yellowA200|#FFFF00|rgba(0, 0, 0, .87)|
|yellowA300|#FFEA00|rgba(0, 0, 0, .87)|
|yellowA400|#FFD600|rgba(0, 0, 0, .87)|
### Ámbar / Amber
|class name|background|color|
|:---|:----|:----|
|amber50|#FFF8E1|rgba(0, 0, 0, .87)|
|amber100|#FFECB3|rgba(0, 0, 0, .87)|
|amber200|#FFE082|rgba(0, 0, 0, .87)|
|amber300|#FFD54F|rgba(0, 0, 0, .87)|
|amber400|#FFCA28|rgba(0, 0, 0, .87)|
|amber500|#FFC107|rgba(0, 0, 0, .87)|
|amber600|#FFB300|rgba(0, 0, 0, .87)|
|amber700|#FFA000|rgba(0, 0, 0, .87)|
|amber800|#FF8F00|rgba(0, 0, 0, .87)|
|amber900|#FF6F00|rgba(0, 0, 0, .87)|
|amberA100|#FFE57F|rgba(0, 0, 0, .87)|
|amberA200|#FFD740|rgba(0, 0, 0, .87)|
|amberA300|#FFC400|rgba(0, 0, 0, .87)|
|amberA400|#FFAB00|rgba(0, 0, 0, .87)|
### Naranjo / Orange
|class name|background|color|
|:---|:----|:----|
|orange50|#FFF3E0|rgba(0, 0, 0, .87)|
|orange100|#FFE0B2|rgba(0, 0, 0, .87)|
|orange200|#FFCC80|rgba(0, 0, 0, .87)|
|orange300|#FFB74D|rgba(0, 0, 0, .87)|
|orange400|#FFA726|rgba(0, 0, 0, .87)|
|orange500|#FF9800|rgba(0, 0, 0, .87)|
|orange600|#FB8C00|rgba(0, 0, 0, .87)|
|orange700|#F57C00|rgba(0, 0, 0, .87)|
|orange800|#EF6C00|rgba(0, 0, 0, .87)|
|orange900|#E65100|rgba(255, 255, 255, .87)|
|orangeA100|#FFD180|rgba(0, 0, 0, .87)|
|orangeA200|#FFAB40|rgba(0, 0, 0, .87)|
|orangeA300|#FF9100|rgba(0, 0, 0, .87)|
|orangeA400|#FF6D00|rgba(0, 0, 0, .87)|
### Naranjo Intenso / Deep Orange
|class name|background|color|
|:---|:----|:----|
|deeporange50|#FBE9E7|rgba(0, 0, 0, .87)|
|deeporange100|#FFCCBC|rgba(0, 0, 0, .87)|
|deeporange200|#FFAB91|rgba(0, 0, 0, .87)|
|deeporange300|#FF8A65|rgba(0, 0, 0, .87)|
|deeporange400|#FF7043|rgba(0, 0, 0, .87)|
|deeporange500|#FF5722|rgba(0, 0, 0, .87)|
|deeporange600|#F4511E|rgba(255, 255, 255, .87)|
|deeporange700|#E64A19|rgba(255, 255, 255, .87)|
|deeporange800|#D84315|rgba(255, 255, 255, .87)|
|deeporange900|#BF360C|rgba(255, 255, 255, .87)|
|deeporangeA100|#FF9E80|rgba(0, 0, 0, .87)|
|deeporangeA200|#FF6E40|rgba(0, 0, 0, .87)|
|deeporangeA300|#FF3D00|rgba(255, 255, 255, .87)|
|deeporangeA400|#DD2C00|rgba(255, 255, 255, .87)|
### Pardo / Brown
|class name|background|color|
|:---|:----|:----|
|brown50|#EFEBE9|rgba(0, 0, 0, .87)|
|brown100|#D7CCC8|rgba(0, 0, 0, .87)|
|brown200|#BCAAA4|rgba(0, 0, 0, .87)|
|brown300|#A1887F|rgba(255, 255, 255, .87)|
|brown400|#8D6E63|rgba(255, 255, 255, .87)|
|brown500|#795548|rgba(255, 255, 255, .87)|
|brown600|#6D4C41|rgba(255, 255, 255, .87)|
|brown700|#5D4037|rgba(255, 255, 255, .87)|
|brown800|#4E342E|rgba(255, 255, 255, .87)|
|brown900|#3E2723|rgba(255, 255, 255, .87)|
### Gris / Gray
|class name|background|color|
|:---|:----|:----|
|gray50|#FAFAFA|rgba(0, 0, 0, .87)|
|gray100|#F5F5F5|rgba(0, 0, 0, .87)|
|gray200|#EEEEEE|rgba(0, 0, 0, .87)|
|gray300|#E0E0E0|rgba(0, 0, 0, .87)|
|gray400|#BDBDBD|rgba(0, 0, 0, .87)|
|gray500|#9E9E9E|rgba(0, 0, 0, .87)|
|gray600|#757575|rgba(255, 255, 255, .87)|
|gray700|#616161|rgba(255, 255, 255, .87)|
|gray800|#424242|rgba(255, 255, 255, .87)|
|gray900|#212121|rgba(255, 255, 255, .87)|
### Azul Gris / Blue Gray
|class name|background|color|
|:---|:----|:----|
|bluegray50|#ECEFF1|rgba(0, 0, 0, .87)|
|bluegray100|#CFD8DC|rgba(0, 0, 0, .87)|
|bluegray200|#B0BEC5|rgba(0, 0, 0, .87)|
|bluegray300|#90A4AE|rgba(0, 0, 0, .87)|
|bluegray400|#78909C|rgba(255, 255, 255, .87)|
|bluegray500|#607D8B|rgba(255, 255, 255, .87)|
|bluegray600|#546E7A|rgba(255, 255, 255, .87)|
|bluegray700|#455A64|rgba(255, 255, 255, .87)|
|bluegray800|#37474F|rgba(255, 255, 255, .87)|
|bluegray900|#263238|rgba(255, 255, 255, .87)|
### Blanco y Negro / White and Black
|class name|background|color|
|:---|:----|:----|
|white|#FFFFFF|rgba(0, 0, 0, .87)|
|black|#000000|rgba(255, 255, 255, .87)|
