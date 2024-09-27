// Initialiser EmailJS
(function(){
	emailjs.init({
	  publicKey: "b8AcFwlY4X-XM0ieQ",
	});
})();

// Carrousel
var urls = [
    "http://google.com/",
    "http://github.com",
    "http://moi.com",
    "http://x.com",
    "http://exemple.com/"
];

nbr = 5; //nb de projets donc d'images aussi
position = 0; // effet du carrousel, droite ou gauche
container = document.getElementById("container-carrousel");
leftbutton1 = document.querySelector(".fa-circle-arrow-left");
rightbutton1 = document.querySelector(".fa-circle-arrow-right");
leftbutton2 = document.querySelector(".fa-arrow-left");
rightbutton2 = document.querySelector(".fa-arrow-right");
leftbutton3 = document.querySelector(".fa-left-long");
rightbutton3 = document.querySelector(".fa-right-long");
leftbutton4 = document.querySelector(".fa-caret-left");
rightbutton4 = document.querySelector(".fa-caret-right");

/* 800 étant la largeur que j'ai choisi (version bureau) */
container.style.width=(800*nbr)+"px";

for (i=1; i <= nbr; i++) {
    var link = document.createElement("a");
    link.href = urls[i - 1]; // Associe un lien unique à chaque image (tableau commence à 0)

    div = document.createElement("div");
    div.className="photo";
    div.style.backgroundImage="url('../img/im"+i+".jpg')";

    // Ajouter le <div> dans le <a>
    link.appendChild(div);
    // Ajouter le <a> dans le container
    container.appendChild(link);
}

rightbutton1.onclick = function() {
    if (position>-nbr+1) {
        position--;
        container.style.transform="translate("+position*800+"px)";
    }
}

leftbutton1.onclick = function() {
    if (position < 0) {
        position++;
        container.style.transform="translate("+position*800+"px)";
    }
}

// version bureau 2, largeur passe à 500px
rightbutton2.onclick = function() {
    if (position>-nbr+1) {
        position--;
        container.style.transform="translate("+position*500+"px)";
    }
}

leftbutton2.onclick = function() {
    if (position < 0) {
        position++;
        container.style.transform="translate("+position*500+"px)";
    }
}

// version tablette, largeur passe à 300px
rightbutton3.onclick = function() {
    if (position>-nbr+1) {
        position--;
        container.style.transform="translate("+position*300+"px)";
    }
}

leftbutton3.onclick = function() {
    if (position < 0) {
        position++;
        container.style.transform="translate("+position*300+"px)";
    }
}

// version mobile, largeur passe à 250px
rightbutton4.onclick = function() {
    if (position>-nbr+1) {
        position--;
        container.style.transform="translate("+position*250+"px)";
    }
}

leftbutton4.onclick = function() {
    if (position < 0) {
        position++;
        container.style.transform="translate("+position*250+"px)";
    }
}

// Formulaire

document.getElementById("contactForm").addEventListener("submit", function (e) {
	e.preventDefault(); // Empêche le formulaire de recharger la page

	// Récupère les données du formulaire
	const name = document.getElementById("name").value;
	const email = document.getElementById("email").value;
	const message = document.getElementById("message").value;

	// Préparer les paramètres pour EmailJS
	// On récupère les valeurs des input dans un objet
	// Adaptez à vos propres champs de texte
	const templateParams = {
		name: name,
		email: email,
		message: message,
	};

	// Envoyer l'email via EmailJS
	emailjs.send("service_zc82wtv", "template_gwew0eg", templateParams).then(
		function (response) {
            document.getElementById("send").innerHTML = "Message envoyé avec succès !";
		},
		function (error) {
            document.getElementById("send").innerHTML = "Erreur lors de l'envoi du message : " + error.text;
		},
	);

	// Réinitialise le formulaire après l'envoi
	document.getElementById("contactForm").reset();
});


// bouton pour remonter
var backToTopButton = document.getElementById("backToTop");
var envelope = document.querySelector(".fa-envelope");
var phone = document.querySelector(".fa-phone");
var linkedin = document.querySelector(".fa-linkedin");

// Afficher/Masquer le bouton en fonction du défilement
// même principe pour les logos linkedin, tel, mail 
window.onscroll = function() {
    if (document.documentElement.scrollTop > 50) {
        backToTopButton.style.display = "block";
        envelope.style.display = "none";
        phone.style.display = "none";
        linkedin.style.display = "none";
    } else {
        backToTopButton.style.display = "none";
        envelope.style.display = "block";
        phone.style.display = "block";
        linkedin.style.display = "block";
    }
};

// Date
var maintenant=new Date();
var jour=maintenant.getDate();
var mois=maintenant.getMonth()+1;
var annee=maintenant.getFullYear();

document.getElementById("jour").innerHTML=jour;
document.getElementById("mois").innerHTML=mois;
document.getElementById("annee").innerHTML=annee;



