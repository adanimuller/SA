const janeiro = document.getElementById("janeiro");
const fevereiro = document.getElementById("fevereiro");
const marco = document.getElementById("marco");
const abril = document.getElementById("abril");

const leftJan = document.getElementById("leftJan");
const rightJan = document.getElementById("rightJan");
const leftFeb = document.getElementById("leftFeb");
const rightFeb = document.getElementById("rightFeb");
const leftMar = document.getElementById("leftMar");
const rightMar = document.getElementById("rightMar");
const leftApr = document.getElementById("leftApr");
const rightApr = document.getElementById("rightApr");
const selectedDateElement = document.querySelector('.selected-date');

fevereiro.style.display = "none"; 
marco.style.display = "none"; 
abril.style.display = "none"; 

rightJan.onclick = function () {
    janeiro.style.display = "none"; 
    fevereiro.style.display = "block"; 
};

leftFeb.onclick = function () {
    fevereiro.style.display = "none"; 
    janeiro.style.display = "block"; 
};

rightFeb.onclick = function () {
    fevereiro.style.display = "none"; 
    marco.style.display = "block"; 
};

leftMar.onclick = function () {
    marco.style.display = "none"; 
    fevereiro.style.display = "block"; 
};
rightMar.onclick = function () {
    marco.style.display = "none"; 
    abril.style.display = "block"; 
};

leftApr.onclick = function () {
    abril.style.display = "none"; 
    marco.style.display = "block"; 
};
function voltar(){
    window.location.href = '../inicio/index.html'
}

