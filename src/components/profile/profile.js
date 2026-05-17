import Image from "next/image";

export default function Profile() {
  return (
    <div id="profile">
      {/* Imagem normal do avatar */}
      <Image 
        src="/assets/avatar2.webp" 
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