export default function Toogle() {
  return (
    <div id="switch" onClick={toggleMode}>
          <button></button>
          <span></span>
        </div>
  )
}

function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle("light");
  void html.offsetWidth;
  // pegar a tag img
  const img = document.querySelector("#profile img");

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar2.jpg");
  } else {
    // set tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar2-invert.jpg");
  }
}