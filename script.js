function toggleMode() {
  const html = document.documentElement;
  const img = document.querySelector("#profile img");

  // Alternar a classe no elemento HTML
  html.classList.toggle("light");

  // Determinar qual imagem deve ser exibida com base na presença da classe "light"
  const imageSrc = html.classList.contains("light")
    ? "./assets/avatar2.jpg"
    : "./assets/avatar2-invert.jpg";

  // Substituir a imagem do perfil
  img.setAttribute("src", imageSrc);
}
