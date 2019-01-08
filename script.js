//alert("hej med dig");


window.addEventListener("load", sidenVises);



function sidenVises() {
    console.log("sidenVises");
    document.querySelector("#om").classList.add("pulse");
    document.querySelector("#myfooter").addEventListener("click", footerForsvind);
    document.querySelector("#dot1").addEventListener("click", cirkelForsvind1);
    document.querySelector("#dot2").addEventListener("click", cirkelForsvind2);
    document.querySelector("#dot3").addEventListener("click", cirkelForsvind3);
    document.querySelector("#dot4").addEventListener("click", cirkelForsvind4);

}


function cirkelForsvind1() {

    document.querySelector("#dot1").classList.add("dissappear");
    document.querySelector("#dot1").addEventListener("animationend", skiftSide1);


}

function skiftSide1() {
    document.location = "tema1.html";


}

function cirkelForsvind2() {
    document.querySelector("#dot2").classList.add("dissappear");
    document.querySelector("#dot2").addEventListener("animationend", skiftSide2);
}



function skiftSide2() {
    document.location = "tema2.html";
}


function cirkelForsvind3() {

    document.querySelector("#dot3").classList.add("dissappear");
    document.querySelector("#dot3").addEventListener("animationend", skiftSide3);


}

function skiftSide3() {
    document.location = "tema3.html";
}


function cirkelForsvind4() {

    document.querySelector("#dot4").classList.add("dissappear");
    document.querySelector("#dot4").addEventListener("animationend", skiftSide4);


}

function skiftSide4() {
    document.location = "tema4.html";
}




function footerForsvind() {
    document.querySelector("#myfooter").classList.add("dissappear");
}
