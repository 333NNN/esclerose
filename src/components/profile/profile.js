import Image from "next/image";

export default function Profile() {
  return (
    <div id="profile">
      <Image 
        src="/assets/avatar2.webp" 
        alt="Logo de Esclerose" 
        width={112}          // Defina a largura que você usa no CSS (ex: 112px = w-28)
        height={112}         // Defina a altura correspondente para manter um quadrado
        priority             // Diz ao Next.js para carregar essa imagem imediatamente
        className="avatar"   // Se você usar alguma classe de estilo no CSS
      />

      <p>@esclerosepunk</p>
    </div>
  );
}