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
    $("gombok").innerHTML='<div id="arajanlat">    <h1>Árajánlat kérés</h1>    <p id="kisszoveg">Kérjük a lenti mezők kitöltésével írja le, miben segíthetünk Önnek!<br> A tárgy mezőben kérjük jelölje meg, hogy milyen bérmunkára van szüksége vagy milyen szolgáltatásunk felől érdeklődik!</p>    <form>      <label>Adja meg a nevét:</label><br>      <div class="row">   <div class="col">             <input type="text" class="form-control" placeholder="Vezetéknév" id="vezeteknev">        </div>        <div class="col">          <input type="text" class="form-control" placeholder="Keresztnév" id="keresztnev">        </div>      </div>      <div class="form-group">        <label>Adja meg az emailcímét:</label><br>        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="email@gmail.com">      </div>      <label>Adja meg a probléma helyszinét:</label>      <div class="row">        <div class="col-md-6 mb-3">          <input type="text" class="form-control" placeholder="Győr" id="varos" value="">        </div>        <div class="col-md-3 mb-3">          <input type="text" class="form-control" placeholder="Ballasi Bálint utca" id="utca" value="">        </div>        <div class="col-md-3 mb-3">          <input type="text" class="form-control" placeholder="9." id="cim" value="">        </div>      </div>      <div class="row">        <label for="example-tel-input" id="phone" class="col-4 col-form-label">Adja meg a telefonszámát:</label>      <div class="col-5">          <input class="form-control" type="tel" placeholder="06301234567" id="example-tel-input">        </div>      </div>      <div class="form-group">        <label for="exampleTextarea">Írja le a problémát:</label> <textarea class="form-control" id="exampleTextarea" rows="3"></textarea>   </div>      <div class="form-group">        <input type="file" class="form-control-file" id="exampleInputFile" aria-describedby="fileHelp">        <small id="fileHelp" class="form-text text-muted">Ha a hibáról tud fényképet csatolni, azt kérem itt tegye meg.</small> </div> <div class="row">  <div class="col" class="gombos"><input type="button" value="Vissza" id="vissza"></div> <div class="col" class="gombos"><input type="button" value="Beküldés" id="bekuldes"></div> </div> </form> </div>'
    formok();
}
function hibabejelentes(){
    $("gombok").innerHTML='<div id="hibabejelentes">    <h1>Hiba bejelentése</h1>    <p id="kisszoveg">Kérjük töltse ki az alábbi mezőket, <br> és írja le a problémát, amilyen pontosan tudja! </p>    <form>      <label>Adja meg a nevét:</label><br>      <div class="row">   <div class="col">             <input type="text" class="form-control" placeholder="Vezetéknév" id="vezeteknev">        </div>        <div class="col">          <input type="text" class="form-control" placeholder="Keresztnév" id="keresztnev">        </div>      </div>      <div class="form-group">        <label>Adja meg az emailcímét:</label><br>        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="email@gmail.com">      </div>      <label>Adja meg a probléma helyszinét:</label>      <div class="row">        <div class="col-md-6 mb-3">          <input type="text" class="form-control" placeholder="Győr" id="varos" value="">        </div>        <div class="col-md-3 mb-3">          <input type="text" class="form-control" placeholder="Ballasi Bálint utca" id="utca" value="">        </div>        <div class="col-md-3 mb-3">          <input type="text" class="form-control" placeholder="9." id="cim" value="">        </div>      </div>      <div class="row">        <label for="example-tel-input" id="phone" class="col-4 col-form-label">Adja meg a telefonszámát:</label>      <div class="col-5">          <input class="form-control" type="tel" placeholder="06301234567" id="example-tel-input">        </div>      </div>      <div class="form-group">        <label for="exampleTextarea">Írja le a problémát:</label> <textarea class="form-control" id="exampleTextarea" rows="3"></textarea>   </div>      <div class="form-group">        <input type="file" class="form-control-file" id="exampleInputFile" aria-describedby="fileHelp">        <small id="fileHelp" class="form-text text-muted">Ha a hibáról tud fényképet csatolni, azt kérem itt tegye meg.</small> </div> <div class="row">  <div class="col" class="gombos"><input type="button" value="Vissza" id="vissza"></div> <div class="col" class="gombos"><input type="button" value="Beküldés" id="bekuldes"></div> </div> </form> </div>'
    formok();
}

function formok(){
    $("gombok").style.width="800px"
    $("gombok").style.margin="auto";
    $("vissza").addEventListener("click",vissza,false);
    $("bekuldes").addEventListener("click",bekuld,false);
}

function vissza(){
    $("gombok").style.margin="150px auto";
    $("gombok").style.width="1200px";
    $("gombok").innerHTML='<div id="bal" class="col" >    <img src="images/arajanlat.jpg" alt="arajanlat" id="balkep"> </div>  <div id="jobb" class="col">    <img src="images/hibabejelentes.jpg" alt="hibabejelentes" id="jobbkep">  </div>';
    myInit();
}

function bekuld(){
    visszaallit()
    if(ellenor()=="true"){
        $("kisszoveg").innerHTML="Kérem minden mezőt töltsön ki!"
        $("kisszoveg").style.color="red";
        $("kisszoveg").style.fontSize="15px";
    }else{
    $("gombok").style.margin="5% auto";
    $("gombok").style.padding="15px 30px";
    $("gombok").style.fontSize="70pt";
    $("gombok").innerHTML='<p id="visszajelzes">Üzenetét sikeresen rögzítettük és továbbítottuk!</p><br> <div id="bekuldDiv"><a href="index.html" id="visszaafooldalra"><p id="bekuldesSzoveg">Vissza a főoldalra</p></a></div>';
    }
}

function visszaallit(){
    $("vezeteknev").style.border="1px solid gray";
    $("keresztnev").style.border="1px solid gray";
    $("exampleFormControlInput1").style.border="1px solid gray";
    $("varos").style.border="1px solid gray";
    $("utca").style.border="1px solid gray";
    $("cim").style.border="1px solid gray";
    $("example-tel-input").style.border="1px solid gray";
    $("exampleTextarea").style.border="1px solid gray";
}

function ellenor(){
    let van = "false";
    if(nincs("vezeteknev")=="true"){
        piros("vezeteknev");
        van="true";
    }
    if(nincs("keresztnev")=="true"){
        piros("keresztnev")
        van="true";
    }
    if(nincs("exampleFormControlInput1")=="true"){
        piros("exampleFormControlInput1");
        van="true";
    }
    if(nincs("varos")=="true"){
        piros("varos")
        van="true";
    }
    if(nincs("utca")=="true"){
        piros("utca")
        van="true";
    }
    if(nincs("cim")=="true"){
        piros("cim")
        van="true";
    }
    if(nincs("example-tel-input")=="true"){
        piros("example-tel-input")
        van="true";
    }
    if(nincs("exampleTextarea")=="true"){
        piros("exampleTextarea")
        van="true";
    }
    return van;
}
function nincs(id){
    if($(id).value ==""){
        return "true";
    }
    return "false";
}
function piros(id){
    $(id).style.border="1px solid red";
}