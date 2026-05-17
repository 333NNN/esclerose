import Image from "next/image";
import { useState, useEffect } from "react";

export default function Profile() {
  const [theme, setTheme] = useState("dark"); // Estado para o tema, padrão escuro

  // Efeito para detectar mudanças na classe "light" do elemento html
  useEffect(() => {
    // Função para atualizar o tema localmente
    const updateTheme = () => {
      const isLight = document.documentElement.classList.contains("light");
      setTheme(isLight ? "light" : "dark");
    };

    // Atualiza o tema na montagem do componente
    updateTheme();

    // Cria um observer para monitorar mudanças de classe no elemento html
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    // Função de limpeza para desconectar o observer
    return () => observer.disconnect();
  }, []);

  // Define qual imagem carregar com base no tema
  const profileImageSrc = theme === "light" 
    ? "/assets/avatar2.jpg" // Imagem Vermelha sobre Preto
    : "/assets/avatar2-invert.jpg";  // Imagem Preta sobre Vermelho

  return (
    <div id="profile">
      <Image 
        src={profileImageSrc} // Usa a variável de origem da imagem
        alt="Logo de Esclerose" 
        width={112}          
        height={112}         
        priority             
        className="avatar-profile"
      />
      <p>@esclerosepunk</p>
    </div>
  );
}