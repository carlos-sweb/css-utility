var model = new ppModel();

var modelDrawerSearch = new model({
  search:''
});

modelDrawerSearch.on('change:search',function( old , value , c){
    console.log(value);
});

var ElemDrawerSearch = document.querySelector("[pp-model=drawersearch]");
ElemDrawerSearch.addEventListener('keyup',function( event ){
  modelDrawerSearch.set('search',event.target.value)
});

console.log( cssdescription );

var drawer = new ppDrawer("main")
var openMenu = function(){ drawer.open(); }


var router = new ppRouter({
    "/":{
        controller:function(){



        }
    },

    "/projects/:project(string)":{
      controller:function(){
          console.log("Runnnn");
      }
    },
    "/projects":{
      controller:function(){

        var view = document.getElementById("view");

        view.innerHTML = ''

        var req = new XMLHttpRequest();

        req.addEventListener("load", function( dataProjects ){

            var response =   JSON.parse( this.responseText );
            console.log(response);
            var textHtml = `<ul>`;
            Object.keys(response).forEach(function(indice){
                textHtml += `<li><a href='#/projects/${indice}' >${indice}</a></li>`;
            });
            textHtml += `</ul>`;
            view.innerHTML = textHtml

        } );
        req.open("GET", "config/projects.json");

        req.setRequestHeader('Cache-Control', 'no-cache');

        req.send();


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

            class_text += `
                <div style="grid-template-columns: 30px 1fr 1fr" class="grid p-3 ${colorlight ? 'deeppurple100':'deeppurple50' }">
                    <div><input  ${isUnselect ? '':'checked'} type='checkbox' class='h-5 w-5' /></div>
                    <div><span class="text-bluegray900 font-bold" >${_keys[i].replace("\\","")}</span></div>
                    <div>
                    <span class="text-indigo900" >${params.attribute}</span>:<span class="text-orange800">${ _propoerty[_keys[i]].replace("'","").replace("'","") }</span>

                    <div class="float-right w-12" >
                      <div tools-tips class="bc-black text-xs text-gray300 text-center p-2 rounded-lg absolute hidden" style="margin-top:-35px;margin-left:-25px;"   >Copiado !</div>
                      <img onclick='showToolsTips(event)' data-clipboard-text='${_keys[i].replace("\\","")}' alt="copy" class="copy-text-action float-right cursor-pointer" src="img/copy.svg"/>
                    </div>
                    </div>
                </div>`;

             colorlight = !colorlight;
         }



         console.log( params.attribute );

         if( cssdescription[ params.attribute ]  ){
           console.log( cssdescription[ params.attribute ]["es"] )
         }


         view .innerHTML = `
            <h1 class="uppercase" >${params.attribute.replace("-","&nbsp;")}</h1>
            <p>${ cssdescription[ params.attribute ] ? cssdescription[ params.attribute ]["es"] : "" }</p>

            <div class="flex flex-row" >
            <input type="text" class="w-full bg-white rounded-md rounded-md:focus  p-2.5 border-2 border-blue100 border-blue300:focus border-solid outline-none:focus outline-offset-2:focus text-bluegray800" placeholder="Search ..." />
            </div>

            <br><br>
            <div class="grid w-full elevation-4 overflow-hidden box-border" style="border-radius:0.25rem;">
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

    text += `<div class="flex wrap flex-col w-full box-border pl-3 pr-3" >`;

    propertys.forEach(function(group){
        //<!--<img class='cursor-pointer' src='img/down.svg' />-->
        text += `<div class='select-none rounded w-full box-border pt-1 pb-1 pl-1 mb-2 mt-2 deeppurple200 block mt-1' ><span class="text-sm uppercase">${group}</span></div>`;
        // ---------------------------------------------------------------
        // Agregamos link por link
        Object.keys(response.property[group].attr).forEach(function( attributes ){
            text +=  `<div class='p-0 m-0 box-border'><a class='deeppurple50:hover rounded:hover  no-underline text-sm text-bluegray800 text-black:hover w-full block pt-2 pb-2 pl-1' href="#/${group}/${attributes}">${attributes.replace("-"," ").replace("-"," ")}</a></div>`;
        });
        // ---------------------------------------------------------------
        //text += `</ul>`;

        setTimeout(function(){
          document.body.classList.remove('hidden');
        },400);

    });
    text += `</div>`;

  lista.forEach(function(eLista){
    eLista.innerHTML = text;
  });



  router.start();

}
// ------------------------------------------------------------------------------------------
var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "config/pp-style.json");
oReq.setRequestHeader('Cache-Control', 'no-cache');
oReq.send();
// ------------------------------------------------------------------------------------------


var showToolsTips = function( event ){

    var target = event.target.parentElement.querySelector('[tools-tips]');
    target.classList.remove('hidden');
    setTimeout(function(){ target.classList.add('hidden');},500);

}
