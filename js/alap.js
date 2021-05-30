window.addEventListener("load",myInit, false)

function $(id){
    return document.getElementById(id);
}

function myInit(){
    $("bal").addEventListener("mouseover",felbal,false);
    $("bal").addEventListener("mouseout",lebal,false);
    $("jobb").addEventListener("mouseover",feljobb,false);
    $("jobb").addEventListener("mouseout",lejobb,false);
    $("bal").addEventListener("click",arajanlat,false);
    $("jobb").addEventListener("click",hibabejelentes,false);
}

function felbal(){
    fel("balkep");
}
function feljobb(){
    fel("jobbkep");
}
function lebal(){
    le("balkep");
}
function lejobb(){
    le("jobbkep");
}
function fel(id){
    $(id).style.width ="400px";
    $(id).style.margin ="25px";
}

function le(id){
    $(id).style.width="500px";
    $(id).style.margin ="0px";
}
function arajanlat(){
    $("gombok").style.width="800px"
    $("gombok").style.margin="auto";
    $("gombok").innerHTML='<div id="arajanlat">    <h1>Árajánlat kérés</h1>    <p id="kisszoveg">Kérjük a lenti mezők kitöltésével írja meg, miben segíthetünk Önnek!<br> A tárgy mezőben kérjük jelölje meg, hogy milyen bérmunkára van szüksége vagy milyen szolgáltatásunk felől érdeklődik!</p>    <form>      <label>Adja meg a nevét:</label><br>      <div class="row">   <div class="col">             <input type="text" class="form-control" placeholder="vezetéknév">        </div>        <div class="col">          <input type="text" class="form-control" placeholder="keresztnév">        </div>      </div>      <div class="form-group">        <label>Adja meg az emailcímét:</label><br>        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="email@gmail.com">      </div>      <label>Adja meg a probléma helyszinét:</label>      <div class="row">        <div class="col-md-6 mb-3">          <input type="text" class="form-control" id="validationCustom03" placeholder="Győr">        </div>        <div class="col-md-3 mb-3">          <input type="text" class="form-control" id="validationCustom03" placeholder="Ballasi Bálint Utca">        </div>        <div class="col-md-3 mb-3">          <input type="text" class="form-control" id="validationCustom03" placeholder="9.">        </div>      </div>      <div class="row">        <label for="example-tel-input" id="phone" class="col-4 col-form-label">Adja meg a telefonszámát:</label>      <div class="col-5">          <input class="form-control" type="tel" placeholder="06301234567" id="example-tel-input">        </div>      </div>      <div class="form-group">        <label for="exampleTextarea">Tárgy:</label> <textarea class="form-control" id="exampleTextarea" rows="3"></textarea>   </div>      <div class="form-group">        <input type="file" class="form-control-file" id="exampleInputFile" aria-describedby="fileHelp">        <small id="fileHelp" class="form-text text-muted">Ha esetleg képe is van a problémáról akkor a pontosabb árajánlat érdekében kérem csatolja ide.</small> </div> </form> </div>'
}
function hibabejelentes(){
    $("gombok").style.width="800px"
    $("gombok").style.margin="auto";
    $("gombok").innerHTML='<div id="hibabejelentes">    <h1>Hiba bejelentése</h1>    <p id="kisszoveg">Kérjük a lenti mezők kitöltésével írja meg, miben segíthetünk Önnek!<br> A tárgy mezőben kérjük fejtse ki, hogy milyen hibát szeretne bejelenteni!</p>    <form>      <label>Adja meg a nevét:</label><br>      <div class="row">   <div class="col">             <input type="text" class="form-control" placeholder="vezetéknév">        </div>        <div class="col">          <input type="text" class="form-control" placeholder="keresztnév">        </div>      </div>      <div class="form-group">        <label>Adja meg az emailcímét:</label><br>        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="email@gmail.com">      </div>      <label>Adja meg a probléma helyszinét:</label>      <div class="row">        <div class="col-md-6 mb-3">          <input type="text" class="form-control" id="validationCustom03" placeholder="Győr">        </div>        <div class="col-md-3 mb-3">          <input type="text" class="form-control" id="validationCustom03" placeholder="Ballasi Bálint Utca">        </div>        <div class="col-md-3 mb-3">          <input type="text" class="form-control" id="validationCustom03" placeholder="9.">        </div>      </div>      <div class="row">        <label for="example-tel-input" id="phone" class="col-4 col-form-label">Adja meg a telefonszámát:</label>      <div class="col-5">          <input class="form-control" type="tel" placeholder="06301234567" id="example-tel-input">        </div>      </div>      <div class="form-group">        <label for="exampleTextarea">Tárgy:</label> <textarea class="form-control" id="exampleTextarea" rows="3"></textarea>   </div>      <div class="form-group">        <input type="file" class="form-control-file" id="exampleInputFile" aria-describedby="fileHelp">        <small id="fileHelp" class="form-text text-muted">Ha esetleg a hibáról tud fényképet csatolni kérem tegye meg.</small> </div> </form> </div>'
}