const api = "https://animechan.vercel.app/api/random";
const quote = document.getElementById("quote");
const anime = document.getElementById("anime");
const character = document.getElementById("character");
const btn = document.getElementById("btn");
btn.addEventListener("click", getQuote);

function getQuote() {
  fetch(api)
    .then((res) => res.json())
    .then((data) => {
      quote.innerHTML = `"${data.quote}"`;
      character.innerHTML = `- ${data.character}`;
      anime.innerHTML = `- ${data.anime}`;
    });
}