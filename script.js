let quotes = [
  {
    auteur: "Albert Einstein",
    quote:
      "La vie, c'est comme une bicyclette, il faut avancer pour ne pas perdre l'équilibre.",
  },
  {
    auteur: "Mahatma Gandhi",
    quote: "Soyez le changement que vous voulez voir dans le monde.",
  },
  {
    auteur: "Mark Twain",
    quote: "Ils ne savaient pas que c'était impossible, alors ils l'ont fait.",
  },
  {
    auteur: "Nelson Mandela",
    quote: "Cela semble toujours impossible jusqu'à ce qu'on le fasse.",
  },
  {
    auteur: "Confucius",
    quote:
      "La vie est vraiment simple, mais nous insistons à la rendre compliquée.",
  },
  {
    auteur: "Aristote",
    quote:
      "L'excellence n'est jamais un accident. C'est toujours le résultat d'une intention élevée, d'un effort sincère et d'une exécution intelligente.",
  },
  {
    auteur: "Winston Churchill",
    quote:
      "Le succès n'est pas final, l'échec n'est pas fatal : c'est le courage de continuer qui compte.",
  },
  {
    auteur: "Socrate",
    quote: "La seule vraie sagesse est de savoir que vous ne savez rien.",
  },
  {
    auteur: "Lao Tseu",
    quote: "Un voyage de mille lieues commence toujours par un premier pas.",
  },
  {
    auteur: "Martin Luther King Jr.",
    quote:
      "La question la plus persistante et urgente de la vie est : que faites-vous pour les autres ?",
  },
];

let currentDate = new Date();

let days = [
  "Dimanche",
  "Lundi",
  "Mardi",
  "Mercredi",
  "Jeudi",
  "Vendredi",
  "Samedi",
];
let months = [
  "Janvier",
  "Février",
  "Mars",
  "Avril",
  "Mai",
  "Juin",
  "Juillet",
  "Août",
  "Septembre",
  "Octobre",
  "Novembre",
  "Décembre",
];

let quote = document.querySelector("#citation");
let author = document.querySelector("#auteur");
let btn = document.querySelector("#nouveau");
let date = document.querySelector(".date");

function change() {
  let index = Math.floor(Math.random() * quotes.length);

  quote.innerText = quotes[index].quote;
  author.innerText = quotes[index].auteur;
}

btn.addEventListener("click", change);

let day = days[currentDate.getDay()];
let month = months[currentDate.getMonth()];
let hour = currentDate.getHours();
let minute = currentDate.getMinutes();
let year = currentDate.getFullYear();

date.innerText = `${day} ${month} ${year} - ${hour}h:${minute}min`;
