"use strict"

//Objectif: Reproduire un générateur de punchlines "Chuck Norris"

//Consignes:
//- Dans un tableau, stocker au moins 10 punchlines de Chuck Norris
//- A chaque click du bouton
////o générer une couleur aléatoire
//o récupérer aléatoirement une des punchlines
//o Afficher la nouvelle phrase
//o Remplacer l'ancienne couleur du texte/bouton/arrière-plan par la nouvelle

//A rendre: lien git du projet

// Ici on définit le tableau contenant les citations
let quotes = [
	"T'ar ta gueule à la récré..!",
	"Je suis une guerre des étoiles !",
	"Je crois en Dieu... un plus un égale un. Y'a Chuck, y'a Dieu, dans le même corps.",
	"Il faut que tu crois encore plus ce que tu crois, et quand tu commences à croire ce que tu crois, y a personne au monde qui peut te bouger !",
	"Hey, j'suis pas venu ici pour souffrir ! Ok ?!",
	"J’ai une amie qui est décédée, et pas de son plein gré.",
	"A ton avis, si on secoue très fort un œuf cru, tu crois que le jaune et le blanc se mélangent ? Ce serait pratique pour faire des omelettes.",
    "Quand on achète un poulet en grande surface, on ne le connaît pas.",
    "Moi, Adam et Eve j’y crois plus tu vois, parce que je suis pas un idiot : la pomme ça peut pas être mauvais, c’est plein de pectine.",
    "Je suis assez ému, même si je ne le montre pas vis-à-vis de mes yeux."
]

function newQuote() {
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}

function colorRandom() {
    let r = Math.floor(256*Math.random());
    let g = Math.floor(256*Math.random());
    let b = Math.floor(256*Math.random());
    document.getElementById("rdmcolor").style.background = "rgba(" + r + "," + g + "," + b + ",1)";
    document.getElementById("buttonColor").style.background = "rgba(" + r + "," + g + "," + b + ",1)";
    document.getElementById("quoteColor").style.color = "rgba(" + r + "," + g + "," + b + ",1)";
  } alea();