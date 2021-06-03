window.addEventListener("load",init, false)
let szamlalo = 0;
function $(id){
    return document.getElementById(id);
}

function init(){
    $("mobile-menu").addEventListener("click",menu,false);
}

function menu(){
    szamlalo++;
    if(szamlalo % 2 ==0){
        megjelen();
    }else{
        eltun();
    }
}

function megjelen(){
    for(let i = 0; i<5;i++){
        $(i+".menu").style.display ="block";
    }
}

function eltun(){
    for(let i = 0; i<5;i++){
        $(i+".menu").style.display ="none";
    }
}