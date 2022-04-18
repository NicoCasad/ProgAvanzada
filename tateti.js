let botones = Array.from(document.getElementsByClassName("botones"));
let contador = 0;
let ficha = ["O", "X"];
let fichasPuestas = 0, estadoPartida = 0;
let textoGanador;
let botonLimpiar = document.getElementById("limpiar")
botones.forEach(x => x.addEventListener("click", ponerFicha));
botonLimpiar.addEventListener("click", limpiar);

function turno(){
    if(contador == 0){
        contador = 1;
    }else{
        contador = 0;
    }
}
function ponerFicha(event){
    if(estadoPartida == 0){
        botonPresionado = event.target;
        if(botonPresionado.innerHTML == ""){
            botonPresionado.innerHTML = ficha[contador];
            fichasPuestas +=1;
            victoria();
            turno();
        }
    }
}
function limpiar(){
    botones[0].innerHTML = "";
    botones[1].innerHTML = "";
    botones[2].innerHTML = "";
    botones[3].innerHTML = "";
    botones[4].innerHTML = "";
    botones[5].innerHTML = "";
    botones[6].innerHTML = "";
    botones[7].innerHTML = "";
    botones[8].innerHTML = "";
    botones[0].style.backgroundColor = "white";
    botones[1].style.backgroundColor = "white";
    botones[2].style.backgroundColor = "white";
    botones[3].style.backgroundColor = "white";
    botones[4].style.backgroundColor = "white";
    botones[5].style.backgroundColor = "white";
    botones[6].style.backgroundColor = "white";
    botones[7].style.backgroundColor = "white";
    botones[8].style.backgroundColor = "white";
    fichasPuestas = 0;
    estadoPartida = 0;
    document.getElementById("j1").style.visibility = "hidden";
    document.getElementById("j2").style.visibility = "hidden";
    document.getElementById("empate").style.visibility = "hidden";
}

function victoria(){
    if(botones[0].innerHTML != "" && botones[1].innerHTML != "" && botones[2].innerHTML != "" && botones[0].innerHTML == botones[1].innerHTML && botones[1].innerHTML == botones[2].innerHTML){
        if(contador == 0){
            textoGanador = document.getElementById("j1");
        }else{
            textoGanador = document.getElementById("j2");  
        }
        botones[0].style.backgroundColor = "gold";
        botones[1].style.backgroundColor = "gold";
        botones[2].style.backgroundColor = "gold";
        estadoPartida = 1;
        textoGanador.style.visibility = "visible"; 
    }else if(botones[3].innerHTML != "" && botones[4].innerHTML != "" && botones[5].innerHTML != "" && botones[3].innerHTML == botones[4].innerHTML && botones[3].innerHTML == botones[5].innerHTML){
        if(contador == 0){
            textoGanador = document.getElementById("j1");
        }else{
            textoGanador = document.getElementById("j2");  
        }
        botones[3].style.backgroundColor = "gold";
        botones[4].style.backgroundColor = "gold";
        botones[5].style.backgroundColor = "gold";
        estadoPartida = 1;
        textoGanador.style.visibility = "visible";
    }else if(botones[6].innerHTML != "" && botones[7].innerHTML != "" && botones[8].innerHTML != "" && botones[6].innerHTML == botones[7].innerHTML && botones[6].innerHTML == botones[8].innerHTML){
        if(contador == 0){
            textoGanador = document.getElementById("j1");
        }else{
            textoGanador = document.getElementById("j2");  
        }
        estadoPartida = 1;
        botones[6].style.backgroundColor = "gold";
        botones[7].style.backgroundColor = "gold";
        botones[8].style.backgroundColor = "gold";
        textoGanador.style.visibility = "visible";
    }else if(botones[0].innerHTML != "" && botones[3].innerHTML != "" && botones[6].innerHTML != "" && botones[0].innerHTML == botones[3].innerHTML && botones[0].innerHTML == botones[6].innerHTML){
        if(contador == 0){
            textoGanador = document.getElementById("j1");
        }else{
            textoGanador = document.getElementById("j2");  
        }
        botones[0].style.backgroundColor = "gold";
        botones[3].style.backgroundColor = "gold";
        botones[6].style.backgroundColor = "gold";
        estadoPartida = 1;
        textoGanador.style.visibility = "visible";
    }else if(botones[1].innerHTML != "" && botones[4].innerHTML != "" && botones[7].innerHTML != "" && botones[1].innerHTML == botones[4].innerHTML && botones[1].innerHTML == botones[7].innerHTML){
        if(contador == 0){
            textoGanador = document.getElementById("j1");
        }else{
            textoGanador = document.getElementById("j2");  
        }
        botones[1].style.backgroundColor = "gold";
        botones[4].style.backgroundColor = "gold";
        botones[7].style.backgroundColor = "gold";
        estadoPartida = 1;
        textoGanador.style.visibility = "visible";
    }else if(botones[2].innerHTML != "" && botones[5].innerHTML != "" && botones[8].innerHTML != "" && botones[2].innerHTML == botones[5].innerHTML && botones[2].innerHTML == botones[8].innerHTML){
        if(contador == 0){
            textoGanador = document.getElementById("j1");
        }else{
            textoGanador = document.getElementById("j2");  
        }
        botones[2].style.backgroundColor = "gold";
        botones[5].style.backgroundColor = "gold";
        botones[8].style.backgroundColor = "gold";
        estadoPartida = 1;
        textoGanador.style.visibility = "visible";
    }else if(botones[0].innerHTML != "" && botones[4].innerHTML != "" && botones[8].innerHTML != "" && botones[0].innerHTML == botones[4].innerHTML && botones[0].innerHTML == botones[8].innerHTML){
        if(contador == 0){
            textoGanador = document.getElementById("j1");
        }else{
            textoGanador = document.getElementById("j2");  
        }
        botones[0].style.backgroundColor = "gold";
        botones[4].style.backgroundColor = "gold";
        botones[8].style.backgroundColor = "gold";
        estadoPartida = 1;
        textoGanador.style.visibility = "visible";
    }else if(botones[2].innerHTML != "" && botones[4].innerHTML != "" && botones[6].innerHTML != "" && botones[2].innerHTML == botones[4].innerHTML && botones[2].innerHTML == botones[6].innerHTML){
        if(contador == 0){
            textoGanador = document.getElementById("j1");
        }else{
            textoGanador = document.getElementById("j2");  
        }
        botones[2].style.backgroundColor = "gold";
        botones[4].style.backgroundColor = "gold";
        botones[6].style.backgroundColor = "gold";
        estadoPartida = 1;
        textoGanador.style.visibility = "visible";
    }else if(fichasPuestas == 9){
        document.getElementById("empate").style.visibility = "visible";
        estadoPartida = 1;
    }
}

