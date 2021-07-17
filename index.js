var drawer = new ppDrawer("main")
var openMenu = function(){ drawer.open(); }


function copy( event ){
    console.log(event);
};

var router = new ppRouter({
    "/":{
        controller:function(){



        }
    },
    "/:group(string)/:attribute(string)":{

        controller:function(params){

        // si el drawer esta abierto lo cerramos para ver el contenido
        if( drawer.isOpen() ){ drawer.close() }

         var view = document.getElementById("view");

         var unselect = window.cssUtility[params.group].unselect;

         var _propoerty = window.cssUtility[params.group].attr[params.attribute];

         var _keys = Object.keys( _propoerty );

         var class_text = '';

         var colorlight = false;

         for( var i = 0; i < _keys.length ; i ++  ){
            var isUnselect = unselect.includes(  _keys[i]  );
            console.log( unselect );
            console.log( _keys[i] );
            console.log( isUnselect );

            class_text += `
                <div style="grid-template-columns: 30px 1fr 1fr" class="grid p-3 ${colorlight ? 'deeppurple100':'deeppurple50' }">
                    <div><input ${isUnselect ? '':'checked'} type='checkbox' class='h-5 w-5' /></div>
                    <div><span class="text-bluegray900 font-bold" >${_keys[i].replace("\\","")}</span></div>
                    <div><span class="text-indigo900" >${params.attribute}</span>:<span class="text-orange800">${ _propoerty[_keys[i]].replace("'","").replace("'","") }</span><img onclick="copy(event)" alt="copy" class="float-right cursor-pointer" src="copy.svg"/></div>
                </div>`;

             colorlight = !colorlight;
         }

         view .innerHTML = `
            <h1 class="uppercase" >${params.attribute.replace("-","&nbsp;")}</h1>
            <div class="grid w-full elevation-4 overflow-hidden" style="border-radius:0.25rem;">
                <div style="grid-template-columns: 30px 1fr 1fr" class="grid deeppurple400 font-bold p-3 text-white">
                    <div>&nbsp;</div>
                    <div>Class Name</div>
                    <div>Property</div>
                </div>
                ${class_text}
            </div>
         `;
        }
    }
});


var lista = document.querySelectorAll("ul[list=lista]");

function reqListener () {

  var cssIndice = 1;

  var text = "";

  var response =   JSON.parse( this.responseText );

  var propertys =  Object.keys(response.property);

  window.cssUtility =   response.property;

    propertys.forEach(function(group){

        text += `<h4 class='select-none' >${group} <img class='cursor-pointer' src='down.svg' /> </h4>`;
        text += `<ul class="list-none list-outside p-0 " >`;
        // ---------------------------------------------------------------
        // Agregamos link por link
        Object.keys(response.property[group].attr).forEach(function( attributes ){
            text +=  `<li class="p-1"><a class='no-underline' href="#/${group}/${attributes}">${attributes.replace("-"," ").replace("-"," ")}</a></li>`;
            var link = document.createElement('link');
            link.setAttribute("href","dist/"+group+"/"+attributes+".css");
            link.setAttribute("rel","stylesheet");
            <!--  -->
            link.onload = function(){
              cssIndice++
              if( cssIndice == propertys.length ){

                setTimeout(function(){
                  document.body.style.display = '';
                },300);
                

              }
            }

            link.onerror = function(){
              console.log("Encontramos con un error");
            }


            document.head.append(link);
        });
        // ---------------------------------------------------------------
        text += `</ul>`;
    });

  lista.forEach(function(eLista){
    eLista.innerHTML = text;
  });



  router.start();

}
// ------------------------------------------------------------------------------------------
var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "pp-style.json");
oReq.setRequestHeader('Cache-Control', 'no-cache');
oReq.send();
// ------------------------------------------------------------------------------------------
