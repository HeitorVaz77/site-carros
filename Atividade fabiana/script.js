

document.addEventListener("DOMContentLoaded", function () {
  const botaoModo = document.querySelector("#modoBtn");

  botaoModo.onclick = function () {
    document.body.classList.toggle("modo-escuro");
  };

  const imagens = [
    "ChatGPT Image 5 de mar. de 2026, 15_33_50.png",
    "ChatGPT Image 5 de mar. de 2026, 15_24_51.png",
    "ChatGPT Image 5 de mar. de 2026, 15_28_42.png"
  ];

  const nomes = [
    "Ferrari F8 Tributo",
    "Lamborghini Huracán EVO",
    "Porsche 911 GT3"
  ];

  let i = 0;

  setInterval(function () {
    i++;

    if (i >= imagens.length) {
      i = 0;
    }

    document.querySelector("#imagemCarrossel").src = imagens[i];
    document.querySelector("#nomeCarro").innerText = nomes[i];
  }, 3000);
});