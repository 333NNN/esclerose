import { useState, useEffect } from "react";

export default function ToggleMode() {
  // Começa no modo escuro (false)
  const [isLight, setIsLight] = useState(false);

  // Esse efeito aplica a classe "light" na tag HTML principal do site de forma limpa
  useEffect(() => {
    const html = document.documentElement;
    if (isLight) {
      html.classList.add("light");
    } else {
      html.classList.remove("light");
    }
  }, [isLight]);

  return (
    <div id="switch">
      <button onClick={() => setIsLight(!isLight)} aria-label="Alternar tema"></button>
      <span></span>
    </div>
  );
}