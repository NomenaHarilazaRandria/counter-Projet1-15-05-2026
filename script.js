const minusBtn = document.getElementById('minusBtn');
const addBtn = document.getElementById('addBtn');
const output = document.querySelector('#output');
const resetBtn = document.querySelector('#resetBtn');
const messageErreur = document.getElementById('errorMsg');

const max = 10;
const min = -10;
let initialCount = 0;

// fonction qui vérifie shiffre et modifie couleur
function verifNumber(){
	if(initialCount < 0){
		output.style.color = "red";
	} else if (initialCount > 0) {
		output.style.color = "green";
	} else {
		output.style.color = "gray";
	}
	if(initialCount === 10) {
		addBtn.disabled = true;
	} else {
		addBtn.disabled = false;
	}
	if(initialCount === -10){
		minusBtn.disabled = true;
	} else {
		minusBtn.disabled = false;
	}
}

//message d'erreur
function afficheMsgError(){
	if(initialCount === 10){
		messageErreur.textContent = "Max atteint";
	} else if (initialCount === -10){
		messageErreur.textContent = "Min atteint";
	} else {
		messageErreur.textContent = "";
	}
}

//fonction affichage :
function updateUI(){
	output.textContent = initialCount;
	verifNumber();
	afficheMsgError();
	output.classList.remove("animate");
	void output.offsetWidth;
	output.classList.add("animate");
}

//fonction pour ajouter un
function addOne(){
	if(initialCount < max){
		initialCount++;
		updateUI();
	}
}

//fonction pour déduire un

function minusOne(){
	if(initialCount > min){
		initialCount--;
		updateUI();
   }
}
//fonction pour le bouton Reset
function remiseAZero(){
	initialCount = 0;
	updateUI();
}
//ajout des fonctions aux boutons
addBtn.addEventListener('click',addOne);
minusBtn.addEventListener('click',minusOne);
resetBtn.addEventListener('click',remiseAZero);