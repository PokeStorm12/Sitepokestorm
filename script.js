/* ANIMAÇÃO */

const fades = document.querySelectorAll('.fade');

window.addEventListener('scroll', ()=>{

fades.forEach(fade=>{

const top = fade.getBoundingClientRect().top;

if(top < window.innerHeight - 100){
fade.classList.add('show');
}

});

});

/* TICKET */

const button = document.querySelector('.support-box button');

button.addEventListener('click', ()=>{

const inputs = document.querySelectorAll('input');
const textarea = document.querySelector('textarea');

if(
inputs[0].value === "" ||
inputs[1].value === "" ||
textarea.value === ""
){
alert("Preencha todos os campos!");
return;
}

alert("Ticket enviado com sucesso!");

inputs[0].value = "";
inputs[1].value = "";
textarea.value = "";

});

/* PARTICULAS */

const body = document.body;

for(let i = 0; i < 40; i++){

const star = document.createElement('div');

star.style.position = 'fixed';
star.style.width = '2px';
star.style.height = '2px';
star.style.background = 'white';
star.style.borderRadius = '50%';
star.style.top = Math.random() * 100 + '%';
star.style.left = Math.random() * 100 + '%';
star.style.opacity = Math.random();

body.appendChild(star);

}
/* SOM NOS BOTÕES */

document.querySelectorAll("a, button").forEach(btn => {

btn.addEventListener("click", () => {

document.getElementById("clickSound").play();

});

});

/* CONTADOR ONLINE ANIMADO */

let contador = 120;

setInterval(() => {

contador += Math.floor(Math.random() * 5);

if(contador > 200){

contador = 120;

}

document.getElementById("onlinePlayers").innerHTML = contador;

},3000);

/* NOTIFICAÇÕES */

const notificacoes = [

"⚡ Novo jogador entrou no servidor!",

"🎉 Evento Pokémon iniciado!",

"🛒 Uma compra acabou de ser realizada!",

"🐉 Lendário apareceu no mapa!",

"✨ Um jogador encontrou um Shiny!"

];

setInterval(() => {

const popup = document.createElement("div");

popup.classList.add("popup");

popup.innerHTML =
notificacoes[Math.floor(Math.random() * notificacoes.length)];

document.body.appendChild(popup);

setTimeout(() => {

popup.remove();

},4000);

},8000);