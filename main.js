//Creando las referencias
var butPiedra = document.getElementById("but-piedra");
var butPapel = document.getElementById("but-papel");
var butTijera = document.getElementById("but-tijera");

//**Creamos las referencias */
var lbluser = document.getElementById("lbl-user");
var lblcpu = document.getElementById("lbl-cpu");
var lblfinal = document.getElementById("lbl-final");
 


butPiedra.addEventListener("click", function () {
    startGame(butPiedra.value)
});

butPapel.addEventListener("click", function () {
    startGame(butPapel.value)
});

butTijera.addEventListener("click", function () {
    startGame(butTijera.value)
});


function startGame(value) {
    let userSelection = value
    let cpuSelection = getCpuResponse();
    let respuesta = checkwinner(userSelection, cpuSelection);


    lbluser.innerHTML = userSelection;
    lblcpu.innerHTML = cpuSelection;
    lblfinal.innerHTML = respuesta;


    console.log(userSelection);
    console.log(cpuSelection);
    console.log(respuesta);
}

//**
/**
* Metodo que va a comparar la seleccion del usauraio y de la maquina   
* @param {*} userSel -> Seleccion del usuario 
* @param {*} cpuSel -> Seleccion de la maquina
*/
function checkwinner(userSel, cpuSel){
   /** 
       usuario     maquina
      Piedra (0) > Tijera (2) 
       Tijera (2)> Papel (1) 
       Papel (1)> Piedra (0)
    */
       let respuestas;

    if((userSel == 0 && cpuSel == 2 )     ||  (userSel == 2 && cpuSel == 1)   ||  (userSel == 2 && cpuSel == 1) ){
       respuesta = "GANASTE";
    }

    
    else if(userSel == cpuSel){
       respuesta = "EMPATE";
    }
    else{
        respuesta = "PERDISTE";
    }
     
    return respuesta;

}



//**Este metodo me retorna la seleccion de la maquina */
function getCpuResponse() {
   let x = Math.floor(Math.random() * 3);

   if (x == 3) {
       return 2;
   }

   return x;
}