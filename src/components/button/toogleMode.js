import { useState, useEffect } from "react";

export default function Toogle() { // Mantive o nome 'Toogle' para não quebrar o import da sua Home
  const [isLight, setIsLight] = useState(false);

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